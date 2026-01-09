// apps/admin/app/api/jobs/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { pool } from "@repo/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const query = `
      SELECT
        j.*,
        COALESCE(
          json_agg(ji.*) FILTER (WHERE ji.id IS NOT NULL),
          '[]'
        ) AS integrations
      FROM jobs j
      LEFT JOIN job_integrations ji ON ji.job_id = j.id
      WHERE j.id = $1
      GROUP BY j.id
    `;

    const result = await pool.query(query, [id]);

    if (!result.rows.length) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (err) {
    console.error("GET /api/jobs/:id error:", err);
    return NextResponse.json({ error: "Failed to fetch job" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // const jobId = await params;

    const jobId = Number((await params).id); // convert to number
    if (isNaN(jobId)) {
      return NextResponse.json({ error: "Invalid job id" }, { status: 400 });
    }
    
    const body = await req.json();

    const fields: any = [];
    const values: any[] = [];

    Object.entries(body).forEach(([key, value]) => {
      values.push(value);
      fields.push(`${key} = $${values.length}`);
    });

    if (!fields.length) {
      return NextResponse.json(
        { error: "No fields to update" },
        { status: 400 }
      );
    }

    const query = `
      UPDATE jobs
      SET ${fields.join(", ")}, updated_at = NOW()
      WHERE id = $${values.length + 1}
      RETURNING *
    `;

    values.push(jobId);

    const result = await pool.query(query, values);

    return NextResponse.json(result.rows[0]);
  } catch (err) {
    console.error("PUT /api/jobs/:id error:", err);
    return NextResponse.json(
      { error: "Failed to update job" },
      { status: 500 }
    );
  }
}
