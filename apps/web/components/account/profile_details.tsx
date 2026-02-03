// apps/web/components/account/profile_details.tsx

import { pool } from "@acme/db";
import { notFound } from "next/navigation";
import CandidateProfile from "./candidates/CandidateProfile";

// UUID v4 regex
const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export default async function CandidateProfilePage({
  candidateID,
}: {
  candidateID: string;
}) {
  if (!UUID_REGEX.test(candidateID)) {
    notFound();
  }

  const candidateRes = await pool.query(
    `SELECT * FROM candidates WHERE id = $1`,
    [candidateID]
  );

  if (!candidateRes.rows.length) {
    notFound();
  }

  return (
    <CandidateProfile
      candidate={candidateRes.rows[0]}
    />
  );
}

