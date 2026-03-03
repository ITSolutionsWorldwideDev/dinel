// apps/web/app/api/vacancy-apply/route.ts

import { NextRequest, NextResponse } from "next/server";
// import { getCarerixToken } from "@/lib/carerix/carerix-auth";
import { pool } from "@acme/db";
import crypto from "crypto";
import { Buffer } from "buffer";
import { carerixGraphQL } from "@/lib/carerix/carerix-client";

export async function POST(request: NextRequest) {
  const client = await pool.connect();

  const PUBLIC_TENANT_ID = "00000000-0000-0000-0000-000000000000";

  try {
    const idempotencyKey =
      request.headers.get("Idempotency-Key") || crypto.randomUUID();

    // ---------------------------
    // 1️⃣ IDEMPOTENCY CHECK
    // ---------------------------
    const existingRequest = await client.query(
      "SELECT response FROM submission_requests WHERE idempotency_key=$1",
      [idempotencyKey],
    );

    if (existingRequest.rows.length > 0) {
      return NextResponse.json(existingRequest.rows[0].response);
    }

    await client.query(
      "INSERT INTO submission_requests (idempotency_key, status) VALUES ($1, 'PROCESSING')",
      [idempotencyKey],
    );

    // ---------------------------
    // 2️⃣ PARSE FORM DATA
    // ---------------------------
    const formData = await request.formData();

    // console.log('formData === ',formData);

    const firstName = formData.get("firstName") as string;
    const surname = formData.get("surname") as string;
    const city = formData.get("city") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const motivation = formData.get("motivation") as string;
    const vacancyId = formData.get("vacancyId") as string;
    const email = (formData.get("email") as string)?.toLowerCase();

    const resumeFile = formData.get("resume") as File;

    if (!resumeFile || !(resumeFile instanceof File)) {
      return NextResponse.json(
        { error: "Resume file is required." },
        { status: 400 },
      );
    }

    const arrayBuffer = await resumeFile.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    const resumeHash = crypto
      .createHash("sha256")
      .update(fileBuffer)
      .digest("hex");

    const base64Content = fileBuffer.toString("base64");

    await client.query("BEGIN");

    // ---------------------------
    // 3️⃣ UPSERT CANDIDATE
    // ---------------------------
    const candidateResult = await client.query(
      `
      INSERT INTO candidates (tenant_id, email, first_name, surname, city, phone_number, full_name)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      ON CONFLICT (email)
      DO UPDATE SET
        first_name = EXCLUDED.first_name,
        surname = EXCLUDED.surname,
        city = EXCLUDED.city,
        phone_number = EXCLUDED.phone_number,
        updated_at = NOW()
      RETURNING *;
      `,
      [
        PUBLIC_TENANT_ID,
        email,
        firstName,
        surname,
        city,
        phoneNumber,
        firstName,
      ],
    );

    const candidate = candidateResult.rows[0];

    let carerixEmployeeId = candidate.carerix_id;

    // ---------------------------
    // 4️⃣ ENSURE CARERIX EMPLOYEE
    // ---------------------------
    if (!carerixEmployeeId) {
      const employeeResponse = await carerixGraphQL<{
        crEmployeeCreate: { _id: string };
      }>(
        `
        mutation CreateEmployee($dedupe: Boolean, $request: CREmployeeRequest!) {
          crEmployeeCreate(dedupe: $dedupe, request: $request) {
            _id
          }
        }
        `,
        {
          dedupe: true,
          request: {
            _kind: "CREmployee",
            firstName,
            lastName: surname,
            emailAddress: email,
            phoneNumber,
            city,
          },
        },
      );

      carerixEmployeeId = employeeResponse.crEmployeeCreate._id;

      await client.query(`UPDATE candidates SET carerix_id=$1 WHERE id=$2`, [
        carerixEmployeeId,
        candidate.id,
      ]);
    }

    // ---------------------------
    // 5️⃣ RESUME DEDUPE + UPLOAD
    // ---------------------------
    if (candidate.resume_hash !== resumeHash) {
      console.log("carerixEmployeeId ", carerixEmployeeId);
      console.log("File size (bytes):", resumeFile.size);

      const documentResponse = await carerixGraphQL<{
        crEmployeeDocumentCreate: {
          _id: string;
          toAttachment?: {
            downloadURL?: string;
            url?: string;
            // urlFromContent?: string;
          };
        };
      }>(
        `
        mutation UploadEmployeeDocument($request: CREmployeeDocumentRequest!) {
          crEmployeeDocumentCreate(request: $request) {
            _id
            toAttachment {
              downloadURL
              url              
            }
          }
        }
        `,
        {
          request: {
            _kind: "CREmployeeDocument",
            toEmployee: {
              _kind: "CREmployee",
              _id: carerixEmployeeId,
            },
            // toDocumentNode: {
            //   _kind: "CRDataNode",
            //   _id: "1",
            // },
            toDocumentNode: null,
            toAttachment: {
              _kind: "CRAttachment",
              filePath: resumeFile.name,
              // contentTS: resumeFile.type,
              // downloadName: resumeFile.name,
              content: base64Content,
              // downloadName: resumeFile.name, // The name it will have when downloaded
              // displayName: resumeFile.name,
            },
            // toDocumentNode: { _id: "1" },
            // fileName: resumeFile.name,
            // contentType: resumeFile.type,
            // content: base64Content,
          },
        },
      );

      const attachment = documentResponse.crEmployeeDocumentCreate.toAttachment;

      const resumeUrl =
        attachment?.url ||
        attachment?.downloadURL ||
        // attachment?.urlFromContent ||
        null;

      console.log("resumeUrl === ", resumeUrl);

      // const resumeUrl =
      //   documentResponse.crEmployeeDocumentCreate.downloadUrl || null;

      await client.query(
        `
        UPDATE candidates
        SET resume_hash=$1, resume_url=$2, updated_at=NOW()
        WHERE id=$3
        `,
        [resumeHash, resumeUrl, candidate.id],
      );
    }

    // ---------------------------
    // 6️⃣ PREVENT DUPLICATE APPLICATION
    // ---------------------------
    const applicationInsert = await client.query(
      `
      INSERT INTO applications (candidate_id, vacancy_id)
      VALUES ($1,$2)
      ON CONFLICT (candidate_id, vacancy_id)
      DO NOTHING
      RETURNING *;
      `,
      [candidate.id, vacancyId],
    );

    let carerixApplicationId: string | null = null;

    if (applicationInsert.rows.length > 0) {
      const applicationResponse = await carerixGraphQL<{
        crMatchCreate: { _id: string };
      }>(
        `
        mutation CreateMatch($request: CRMatchRequest!) {
          crMatchCreate(request: $request) {
            _id
          }
        }
        `,
        {
          request: {
            _kind: "CRMatch",
            toEmployee: {
              _kind: "CREmployee",
              _id: carerixEmployeeId,
            },
            toVacancy: {
              _kind: "CRVacancy",
              _id: vacancyId,
            },
            motivation: motivation,
          },
        },
      );

      carerixApplicationId = applicationResponse.crMatchCreate._id;

      await client.query(
        `UPDATE applications SET carerix_application_id=$1 WHERE candidate_id=$2 AND vacancy_id=$3`,
        [carerixApplicationId, candidate.id, vacancyId],
      );
    }

    /* if (applicationInsert.rows.length > 0) {
      const applicationResponse = await carerixGraphQL<{
        crApplicationCreate: { _id: string };
      }>(
        `
        mutation CreateApplication($request: CRApplicationRequest!) {
          crApplicationCreate(request: $request) {
            _id
          }
        }
        `,
        {
          request: {
            _kind: "CRApplication",
            employee: { _id: carerixEmployeeId },
            vacancy: { _id: vacancyId },
            motivation,
          },
        },
      );

      carerixApplicationId = applicationResponse.crApplicationCreate._id;

      await client.query(
        `UPDATE applications SET carerix_application_id=$1 WHERE candidate_id=$2 AND vacancy_id=$3`,
        [carerixApplicationId, candidate.id, vacancyId],
      );
    } */

    await client.query("COMMIT");

    const responsePayload = {
      success: true,
      carerixEmployeeId,
      carerixApplicationId,
    };

    // ---------------------------
    // 7️⃣ STORE IDEMPOTENT RESPONSE
    // ---------------------------
    await client.query(
      `
      UPDATE submission_requests
      SET status='COMPLETED', response=$1
      WHERE idempotency_key=$2
      `,
      [JSON.stringify(responsePayload), idempotencyKey],
    );

    return NextResponse.json(responsePayload);
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Vacancy apply error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  } finally {
    client.release();
  }
}
/* export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName") as string;
    const surname = formData.get("surname") as string;
    const city = formData.get("city") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const motivation = formData.get("motivation") as string;
    const vacancyId = formData.get("vacancyId") as string;
    const email = formData.get("email") as string;

    const resumeFile = formData.get("resume") as File;

    if (!resumeFile || !(resumeFile instanceof File)) {
      return NextResponse.json(
        { error: "Resume file is required." },
        { status: 400 },
      );
    }

    const arrayBuffer = await resumeFile.arrayBuffer();
    const base64Content = Buffer.from(arrayBuffer).toString("base64");

    const employeeResponse = await carerixGraphQL<{
      crEmployeeCreate: {
        _id: string;
        firstName: string;
        lastName: string;
      };
    }>(
      `
      mutation CreateEmployee(
        $dedupe: Boolean,
        $request: CREmployeeRequest!
      ) {
        crEmployeeCreate(
          dedupe: $dedupe,
          request: $request
        ) {
          _id
          firstName
          lastName
          emailAddress
        }
      }
      `,
      {
        dedupe: true,
        request: {
          _kind: "CREmployee",
          firstName,
          lastName: surname,
          emailAddress: email,
          phoneNumber,
          city,
        },
      },
    );

    const employeeId = employeeResponse.crEmployeeCreate._id;

    await carerixGraphQL(
      `
      mutation UploadEmployeeDocument($request: CREmployeeDocumentRequest!) {
        crEmployeeDocumentCreate(request: $request) {
          _id
        }
      }
      `,
      {
        request: {
          _kind: "CREmployeeDocument",
          employee: { _id: employeeId },
          fileName: resumeFile.name,
          contentType: resumeFile.type,
          content: base64Content,
        },
      },
    );

    await carerixGraphQL(
      `
      mutation CreateApplication($request: CRApplicationRequest!) {
        crApplicationCreate(request: $request) {
          _id
        }
      }
      `,
      {
        request: {
          _kind: "CRApplication",
          employee: { _id: employeeId },
          vacancy: { _id: vacancyId },
          motivation: motivation,
        },
      },
    );

    const existing = await pool.query(
      "SELECT * FROM candidates WHERE email = $1",
      [email],
    );

    if (existing.rows.length > 0) {
      await pool.query(
        `
        UPDATE candidates
        SET first_name=$1, surname=$2, city=$3, phone_number=$4, motivation=$5, resume_name=$6, carerix_id=$7
        WHERE email=$8
        `,
        [
          firstName,
          surname,
          city,
          phoneNumber,
          motivation,
          resumeFile.name,
          employeeId,
          email,
        ],
      );
    } else {
      await pool.query(
        `
        INSERT INTO candidates
        (first_name, surname, city, phone_number, motivation, resume_name, carerix_id, email)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
        `,
        [
          firstName,
          surname,
          city,
          phoneNumber,
          motivation,
          resumeFile.name,
          employeeId,
          email,
        ],
      );
    }

    return NextResponse.json({
      success: true,
      carerixEmployeeId: employeeId,
    });
  } catch (error) {
    console.error("Vacancy apply error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
} */

/* 
import { NextRequest, NextResponse } from "next/server";
import { getCarerixToken } from "@/lib/carerix/carerix-auth";
import { pool } from "@acme/db";
import { Buffer } from "buffer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName") as string;
    const surname = formData.get("surname") as string;
    const city = formData.get("city") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const motivation = formData.get("motivation") as string;
    const vacancyId = formData.get("vacancyId") as string;
    const email = formData.get("email") as string;
    // const resume = formData.get("resume") as File;

    const resumeEntry = formData.get("resume");

    if (!resumeEntry || !(resumeEntry instanceof File)) {
      return NextResponse.json(
        { error: "Resume file is required." },
        { status: 400 },
      );
    }

    const resume = resumeEntry;

    if (!resume) {
      return NextResponse.json(
        { error: "Resume file is required." },
        { status: 400 },
      );
    }

    const token = await getCarerixToken();

    // const documentResponse = await uploadResumeToCarerix(resume, token);
    const documentResponse = await uploadResumeGraphQL(resume, token);

    const candidate = await createOrUpdateCandidate({
      firstName,
      surname,
      city,
      phoneNumber,
      motivation,
      email,
      resumeDocumentId: documentResponse.id,
    });

    await createApplication({
      candidateId: candidate.id,
      vacancyId,
      token,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 },
    );
  }
}

async function uploadResumeToCarerix(file: File, token: string) {

  console.log("Uploading file:", file.name, file.type, file.size);


  const formData = new FormData();
  formData.append("file", file, file.name); // 'file' is the field Carerix expects

  const response = await fetch("https://api.carerix.com/v2/documents", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      // DO NOT set Content-Type manually! fetch sets correct multipart/form-data boundary
    },
    body: formData,
  });

  const resText = await response.text();
  if (!response.ok) {
    console.error("Carerix upload error:", resText);
    throw new Error("Failed to upload resume to Carerix");
  }

  return JSON.parse(resText);
}

async function uploadResumeGraphQL(file: File, token: string) {

  console.log("Uploading file:", file.name, file.type, file.size);

  const arrayBuffer = await file.arrayBuffer();
  const base64Content = Buffer.from(arrayBuffer).toString("base64");

  const mutation = `
    mutation UploadDocument($input: DocumentInput!) {
      createDocument(input: $input) {
        document { id name url }
      }
    }
  `;

  const variables = {
    input: {
      name: file.name,
      type: file.type,
      content: base64Content,
    },
  };

  const response = await fetch("https://api.carerix.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: mutation, variables }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Carerix GraphQL upload error:", text);
    throw new Error("Failed to upload resume to Carerix via GraphQL");
  }

  const data = await response.json();
  return data.data.createDocument.document;
}

interface CandidateData {
  firstName: string;
  surname: string;
  city: string;
  phoneNumber: string;
  motivation: string;
  email: string;
  resumeDocumentId: string;
}
// Function to create or update candidate in Carerix
async function createOrUpdateCandidate(candidateData: CandidateData) {
  const existingCandidateResult = await pool.query(
    "SELECT * FROM candidates WHERE email = $1",
    [candidateData.email],
  );

  const existingCandidate = existingCandidateResult.rows[0];

  if (existingCandidate) {
    const candidate = existingCandidate;
    await pool.query("UPDATE candidates SET ... WHERE id = $1", [candidate.id]);
    await pool.query(
      `UPDATE candidates
        SET first_name = $1, surname = $2, city = $3, phone_number = $4, motivation = $5, resume_document_id = $6
        WHERE id = $7`,
      [
        candidateData.firstName,
        candidateData.surname,
        candidateData.city,
        candidateData.phoneNumber,
        candidateData.motivation,
        candidateData.resumeDocumentId,
        candidate.id,
      ],
    );

    return candidate;
  } else {
    const result = await pool.query(
      "INSERT INTO candidates (first_name, surname, city, phone_number, motivation, resume_document_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
      [
        candidateData.firstName,
        candidateData.surname,
        candidateData.city,
        candidateData.phoneNumber,
        candidateData.motivation,
        candidateData.resumeDocumentId,
      ],
    );

    return result.rows[0];
  }
}

async function createApplication({
  candidateId,
  vacancyId,
  token,
}: {
  candidateId: string;
  vacancyId: string;
  token: string;
}) {
  const response = await fetch("https://api.carerix.com/v2/applications", {
    method: "POST",
    headers: {
      //   Authorization: `Bearer ${process.env.CARERIX_TOKEN}`,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      candidateId,
      vacancyId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create application");
  }
}
  
// 🔥 Only this call — nothing else
    const data = await carerixGraphQL<{
      crEmployeeCreate: {
        id: string;
        firstName: string;
        surname: string;
        email: string;
      };
    }>(
      `
      mutation CreateEmployee($input: CrEmployeeCreateInput!) {
        crEmployeeCreate(input: $input) {
          id
          firstName
          surname
          email
        }
      }
      `,
      {
        input: {
          firstName,
          surname,
          email,
          city,
          phoneNumber,
          motivation,
          documents: [
            {
              name: resumeFile.name,
              type: resumeFile.type,
              content: base64Content,
            },
          ],
        },
      }
    ); 
 */
