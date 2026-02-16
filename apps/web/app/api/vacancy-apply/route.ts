// apps/web/app/api/vacancy-apply\route.ts

import { NextApiRequest, NextApiResponse } from "next";
import formidable, { Fields, Files } from "formidable";
import fs from "fs";
import { pool } from "@acme/db";
import { getCarerixToken } from "@/lib/carerix/carerix-auth";

export const config = {
  api: {
    bodyParser: false,
  },
};

interface CandidateData {
  firstName: string;
  surname: string;
  city: string;
  phoneNumber: string;
  motivation: string;
  email: string;
  resumeDocumentId: string;
}

interface File {
  filepath: string;
  originalFilename: string;
  mimetype: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const form = formidable({
    multiples: false,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields: Fields, files: Files) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ error: "File upload failed." });
    }

    const {
      firstName,
      surname,
      city,
      phoneNumber,
      motivation,
      vacancyId,
      email,
    } = fields;

    const resume = files.resume ? (files.resume[0] as formidable.File) : null;

    if (!resume) {
      return res.status(400).json({ error: "Resume file is required." });
    }

    try {
      const token = await getCarerixToken();

      const documentResponse = await uploadResumeToCarerix(resume, token);

      const candidate = await createOrUpdateCandidate({
        firstName: firstName && typeof firstName === "string" ? firstName : "",
        surname: surname && typeof surname === "string" ? surname : "",
        city: city && typeof city === "string" ? city : "",
        phoneNumber:
          phoneNumber && typeof phoneNumber === "string" ? phoneNumber : "",
        motivation:
          motivation && typeof motivation === "string" ? motivation : "",
        email: email && typeof email === "string" ? email : "",
        resumeDocumentId: documentResponse.id,
      });

      await createApplication({
        candidateId: candidate.id,
        vacancyId: vacancyId && typeof vacancyId === "string" ? vacancyId : "",
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error creating application:", error);
      res.status(500).json({ error: "Failed to submit application" });
    }
  });
}

// Function to upload resume to Carerix

async function uploadResumeToCarerix(file: formidable.File, token: string) {
  const fileBuffer = fs.readFileSync(file.filepath);
  const mimeType = file.mimetype || "application/octet-stream";

  const response = await fetch("https://api.carerix.com/v2/documents", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CARERIX_TOKEN}`,
      "Content-Type": mimeType,
    },
    body: fileBuffer,
  });

  if (!response.ok) throw new Error("Failed to upload resume to Carerix");

  return await response.json();
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
        ]
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
}: {
  candidateId: string;
  vacancyId: string;
}) {
  const response = await fetch("https://api.carerix.com/v2/applications", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CARERIX_TOKEN}`,
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
