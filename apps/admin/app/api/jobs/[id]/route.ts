// apps/admin/app/api/jobs/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
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
      WHERE j.job_id = $1
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
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // const jobId = await params;
    const jobId = (await params).id;

    /* const jobId = Number((await params).id); // convert to number
    if (isNaN(jobId)) {
      return NextResponse.json({ error: "Invalid job id" }, { status: 400 });
    } */

    const body = await req.json();

    const existing = await pool.query(
      `SELECT status FROM jobs WHERE job_id = $1`,
      [jobId]
    );

    if (!existing.rows.length) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    const currentStatus = existing.rows[0].status;

    const allowedFields = [
      "title",
      "description",
      "location",
      "employment_type",
      "workplace_type",
      "department",
      "experience_level",
      "visibility",
      "status",
      "sector_id",
      "discipline_id",
    ];

    const fields: any = [];
    const values: any[] = [];

    for (const key of allowedFields) {
      if (body[key] !== undefined) {
        values.push(body[key]);
        fields.push(`${key} = $${values.length}`);
      }
    }

    /* Object.entries(body).forEach(([key, value]) => {
      values.push(value);
      fields.push(`${key} = $${values.length}`);
    });*/

    // if (body.title) {
    //   const slug = slugify(body.title, { lower: true });
    //   values.push(slug);
    //   fields.push(`slug = $${values.length}`);
    // }

    if (body.status === "PUBLISHED" && currentStatus !== "PUBLISHED") {
      fields.push(`published_at = NOW()`);
    }

    if (!fields.length) {
      return NextResponse.json(
        { error: "No fields to update" },
        { status: 400 },
      );
    }

    const query = `
      UPDATE jobs
      SET ${fields.join(", ")}, updated_at = NOW()
      WHERE job_id = $${values.length + 1}
      RETURNING *
    `;

    values.push(jobId);

    console.log("query === ", query);

    const result = await pool.query(query, values);

    if (!result.rows.length) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (err) {
    console.error("PUT /api/jobs/:id error:", err);
    return NextResponse.json(
      { error: "Failed to update job" },
      { status: 500 },
    );
  }
}
