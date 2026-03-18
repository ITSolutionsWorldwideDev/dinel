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

    const body = await req.json();

    const existing = await pool.query(
      `SELECT status FROM jobs WHERE job_id = $1`,
      [jobId],
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
      "experience",
      "education",
      "visibility",
      "status",
      "sector_id",
      "discipline_id",
      "work_city",
      "work_full_address",
      "work_postal_code",
      "work_street",
      "country_node",
      "vacancy_information",
      "intro_information",
      "company_information",
      "additional_information",
      "requirements",
      "hours_per_week",
      "deadline",
      "closed_at",
    ];

    const fields: any = [];
    const values: any[] = [];

    const dateFields = ["deadline", "closed_at"];
    const uuidFields = ["job_id", "sector_id", "discipline_id"];

    for (const key of allowedFields) {
      if (body[key] !== undefined) {
        let value = body[key];

        if (dateFields.includes(key)) {
          value = value ? new Date(value) : null;
        } else if (uuidFields.includes(key)) {
          value = value || null;
        }

        values.push(value);
        fields.push(`${key} = $${values.length}`);
      }
    }
    if (body.status === "PUBLISHED" && currentStatus !== "PUBLISHED") {
      fields.push(`published_at = NOW()`);
    }

    if (!fields.length) {
      return NextResponse.json(
        { error: "No fields to update" },
        { status: 400 },
      );
    }

    console.log("fields === ", fields.join(", "));

    const query = `
      UPDATE jobs
      SET ${fields.join(", ")}, updated_at = NOW()
      WHERE job_id = $${values.length + 1}
      RETURNING *
    `;

    values.push(jobId);

    // console.log("query === ", query);

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

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const client = await pool.connect();

  try {
    const { id } = await params; // ✅ MUST await

    await client.query("BEGIN");

    const jobResult = await client.query(
      "SELECT id FROM jobs WHERE job_id = $1",
      [id],
    );

    if (!jobResult.rows.length) {
      await client.query("ROLLBACK");
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    const jobDbId = jobResult.rows[0].id;

    await client.query("DELETE FROM job_integrations WHERE job_id = $1", [
      jobDbId,
    ]);

    await client.query("DELETE FROM jobs WHERE id = $1", [jobDbId]);

    await client.query("COMMIT");

    return NextResponse.json(
      { message: "Job deleted successfully" },
      { status: 200 },
    );
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("DELETE /api/jobs/:id error:", err);

    return NextResponse.json(
      { error: "Failed to delete job" },
      { status: 500 },
    );
  } finally {
    client.release();
  }
}
