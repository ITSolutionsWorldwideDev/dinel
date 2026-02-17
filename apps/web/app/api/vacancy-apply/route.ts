// apps/web/app/api/vacancy-apply/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getCarerixToken } from "@/lib/carerix/carerix-auth";
import { pool } from "@acme/db";
import { Buffer } from "buffer";
import { carerixGraphQL } from "@/lib/carerix/carerix-client";

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
}

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
