//apps/admin/app/api/jobs/[id]/match/route.ts

import { NextResponse, NextRequest } from "next/server";
import { pool } from "@acme/db";
import { matchCandidateToJob } from "@acme/matching";

// interface Params {
//   params: { id: string };
// }

export async function POST(
  _req: Request,
//   { params }: Params
{ params }: { params: Promise<{ id: string }>  }
) {
  const { id } = await params;
  const jobId = id;
//   const jobId = params.id;

// export async function POST(
//   _req: NextRequest,
//   context: { params: { id: string } }
// ) {
//   const jobId = context.params.id;

  try {
    const jobRes = await pool.query(
      `SELECT * FROM jobs WHERE id = $1`,
      [jobId]
    );

    if (!jobRes.rows.length) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    const job = jobRes.rows[0];

    const candidatesRes = await pool.query(
      `SELECT * FROM candidates WHERE tenant_id = $1`,
      [job.tenant_id]
    );

    for (const candidate of candidatesRes.rows) {
      const { score, breakdown } = matchCandidateToJob(candidate, job);

      await pool.query(
        `
        INSERT INTO job_matches
          (tenant_id, job_id, candidate_id, score, breakdown)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (job_id, candidate_id)
        DO UPDATE SET
          score = EXCLUDED.score,
          breakdown = EXCLUDED.breakdown,
          matched_at = now()
        `,
        [
          job.tenant_id,
          job.id,
          candidate.id,
          score,
          breakdown,
        ]
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("MATCH JOB ERROR:", err);
    return NextResponse.json(
      { error: "Matching failed" },
      { status: 500 }
    );
  }
}
