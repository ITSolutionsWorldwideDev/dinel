// apps/web/app/api/account/applications/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";
import { candidateAuth } from "@repo/auth-web";

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const body = await req.json();
//   const { id } = await params;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: applicationId } = await params;

  const session = await candidateAuth();

  if (!session || session.expired) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const candidateId = session.user.id;
  // const applicationId = params.id;

  try {
    const query = `
      SELECT
        a.id,
        a.status,
        a.applied_at,
        j.title AS job_title,
        j.description,
        j.company_name,
        j.location
      FROM applications a
      JOIN jobs j ON a.job_id = j.id
      WHERE a.id = $1
        AND a.candidate_id = $2
      LIMIT 1
    `;

    const res = await pool.query(query, [
      applicationId,
      candidateId,
    ]);

    if (!res.rows.length) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(res.rows[0]);
  } catch (err) {
    console.error("GET application detail error:", err);
    return NextResponse.json(
      { error: "Failed to fetch application" },
      { status: 500 }
    );
  }
}
