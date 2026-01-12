// apps/admin/app/api/jobs/route.ts

import { NextResponse } from "next/server";
import { pool } from "@acme/db";
import slugify from "slugify";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const search = searchParams.get("search");
  const status = searchParams.get("status");
  const sort = searchParams.get("sort");

  const offset = (page - 1) * limit;

  try {
    const where: string[] = [];
    const values: any[] = [];

    if (search) {
      values.push(`%${search.toLowerCase()}%`);
      where.push(
        `(LOWER(title) LIKE $${values.length} OR LOWER(location) LIKE $${values.length})`
      );
    }

    if (status) {
      values.push(status);
      where.push(`status = $${values.length}`);
    }

    const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";

    let orderBy = "created_at DESC";
    if (sort === "titleAsc") orderBy = "title ASC";
    if (sort === "titleDesc") orderBy = "title DESC";
    if (sort === "dateAsc") orderBy = "created_at ASC";

    values.push(limit, offset);

    const dataQuery = `
      SELECT
        id,
        title,
        slug,
        location,
        employment_type,
        workplace_type,
        status,
        created_at,
        published_at
      FROM jobs
      ${whereClause}
      ORDER BY ${orderBy}
      LIMIT $${values.length - 1}
      OFFSET $${values.length}
    `;

    const countQuery = `
      SELECT COUNT(*)::int AS count
      FROM jobs
      ${whereClause}
    `;

    const [dataRes, countRes] = await Promise.all([
      pool.query(dataQuery, values),
      pool.query(countQuery, values.slice(0, where.length ? values.length - 2 : 0)),
    ]);

    return NextResponse.json({
      items: dataRes.rows,
      totalResults: countRes.rows[0].count,
      page,
      pageSize: limit,
      totalPages: Math.ceil(countRes.rows[0].count / limit),
    });
  } catch (err) {
    console.error("GET /api/jobs error:", err);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      title,
      description,
      location,
      employment_type,
      workplace_type,
      department,
      experience_level,
      visibility,
      status,
    } = body;

    if (!title || !description || !employment_type || !workplace_type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const slug = slugify(title, { lower: true });

    // TODO: replace with auth context later
    const companyId = 1;
    const createdBy = 1;

    const query = `
      INSERT INTO jobs (
        title,
        slug,
        description,
        location,
        employment_type,
        workplace_type,
        department,
        experience_level,
        visibility,
        status,
        company_id,
        created_by
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
      RETURNING *
    `;

    const values = [
      title,
      slug,
      description,
      location,
      employment_type,
      workplace_type,
      department || null,
      experience_level,
      visibility || "PUBLIC",
      status || "DRAFT",
      companyId,
      createdBy,
    ];

    const result = await pool.query(query, values);

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err) {
    console.error("POST /api/jobs error:", err);
    return NextResponse.json(
      { error: "Failed to create job" },
      { status: 500 }
    );
  }
}

