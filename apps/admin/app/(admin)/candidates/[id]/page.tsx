// apps/admin/app/(admin)/candidates/[id]/page.tsx
import { pool } from "@acme/db";
import CandidateProfile from "@/components/candidates/CandidateProfile";
import { notFound } from "next/navigation";

// interface PageProps {
//   params: Promise<{ id: string }>;
// }
interface PageProps {
  params: { id: string };
}

// simple UUID v4 regex (Postgres-compatible)
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export default async function CandidateProfilePage({ params }: PageProps) {
  
  const candidateId = (await params).id;
  // const { id: candidateId } = params;
  console.log('candidateId === ',candidateId);

  // block favicon, robots, random strings
  if (!UUID_REGEX.test(candidateId)) {
    notFound();
  }

  

  const candidateRes = await pool.query(
    `SELECT * FROM candidates WHERE id = $1`,
    [candidateId]
  );
  // console.log('candidateRes.rows === ',candidateRes.rows);

  if (!candidateRes.rows.length) {
    return <div className="p-6">Candidate not found</div>;
  }

  const notesRes = await pool.query(
    `
    SELECT n.*, u.email AS author_email
    FROM candidate_notes n
    JOIN users u ON u.public_id = n.author_id
    WHERE n.candidate_id = $1
    ORDER BY n.created_at DESC
    `,
    [candidateId]
  );

  return (
    <CandidateProfile
      candidate={candidateRes.rows[0]}
      notes={notesRes.rows}
    />
  );
}

