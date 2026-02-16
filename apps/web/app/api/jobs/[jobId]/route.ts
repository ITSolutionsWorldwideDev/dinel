// apps/web/app/api/jobs/[jobId]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";

interface Props {
  params: Promise<{ jobId: string }>;
}

export async function GET(
  req: NextRequest,
  { params }: Props
) {
  try {
    const { jobId } = await params;

    const result = await pool.query(
      `
      SELECT j.*, s.sector, s.sectorslug
      FROM jobs j
      LEFT JOIN sectors s ON s.sector_id = j.sector_id
      WHERE j.job_id = $1
      LIMIT 1
      `,
      [jobId]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0]);

  } catch (error) {
    console.error("Single Job API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch job" },
      { status: 500 }
    );
  }
}
