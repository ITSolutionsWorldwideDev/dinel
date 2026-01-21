//apps/admin/app/api/jobs/[id]/matches/route.ts
import { NextResponse } from "next/server";
import { pool } from "@acme/db";

// interface Params {
//   params: { id: string };
// }

export async function GET(
  _req: Request,
  //   { params }: Params
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const jobId = id;
  //   const jobId = params.id;

  const res = await pool.query(
    `
    SELECT
      jm.score,
      jm.breakdown,
      c.id,
      c.full_name,
      c.email,
      c.location,
      c.source
    FROM job_matches jm
    JOIN candidates c ON c.id = jm.candidate_id
    WHERE jm.job_id = $1
    ORDER BY jm.score DESC
    `,
    [jobId]
  );

  return NextResponse.json({
    items: res.rows,
  });
}
