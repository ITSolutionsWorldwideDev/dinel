// /app/api/candidate/route.ts (GET)

import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";

/* ------------------------------------
   GET (list or single candidate)
------------------------------------ */

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const tenantId = searchParams.get("tenantId");
  if (!tenantId) {
    return NextResponse.json({ error: "Missing tenantId" }, { status: 400 });
  }

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 20);
  const search = searchParams.get("search");
  const status = searchParams.get("status"); // active | inactive
  const source = searchParams.get("source"); // cv-upload | linkedin-extension
  const sort = searchParams.get("sort");

  const offset = (page - 1) * limit;

  const where: string[] = ["tenant_id = $1"];
  const values: any[] = [tenantId];

  if (search) {
    values.push(`%${search.toLowerCase()}%`);
    where.push(
      `(LOWER(full_name) LIKE $${values.length} OR LOWER(email) LIKE $${values.length})`
    );
  }

  if (source) {
    values.push(source);
    where.push(`source = $${values.length}`);
  }

  const whereClause = `WHERE ${where.join(" AND ")}`;

  let orderBy = "created_at DESC";
  if (sort === "nameAsc") orderBy = "full_name ASC";
  if (sort === "nameDesc") orderBy = "full_name DESC";
  if (sort === "oldest") orderBy = "created_at ASC";

  const dataQuery = `
    SELECT
      id, full_name, email, phone, location,
      skills, source, linkedin_url, cv_url,
      created_at
    FROM candidates
    ${whereClause}
    ORDER BY ${orderBy}
    LIMIT $${values.length + 1}
    OFFSET $${values.length + 2}
  `;

  const countQuery = `
    SELECT COUNT(*)::int
    FROM candidates
    ${whereClause}
  `;

  const [dataRes, countRes] = await Promise.all([
    pool.query(dataQuery, [...values, limit, offset]),
    pool.query(countQuery, values),
  ]);

  return NextResponse.json({
    items: dataRes.rows,
    total: countRes.rows[0].count,
    page,
    pageSize: limit,
  });
}

/* export async function GET(req: NextRequest,
  context: { params: {} }) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 20);
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");

  const offset = (page - 1) * limit;

  try {
    // -------- Single candidate --------
    if (id) {
      const result = await pool.query(
        `SELECT * FROM candidates WHERE id = $1`,
        [id]
      );

      if (!result.rows.length) {
        return NextResponse.json({ error: "Candidate not found" }, { status: 404 });
      }

      return NextResponse.json(result.rows[0]);
    }

    // -------- List candidates --------
    const where: string[] = [];
    const values: any[] = [];

    if (search) {
      values.push(`%${search.toLowerCase()}%`);
      where.push(`LOWER(full_name) LIKE $${values.length}`);
    }


    const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";

    let orderBy = "created_at DESC";
    if (sort === "nameAsc") orderBy = "candidates ASC";
    if (sort === "nameDesc") orderBy = "candidates DESC";
    if (sort === "dateAsc") orderBy = "created_at ASC";

    values.push(limit, offset);

    const dataQuery = `
      SELECT id, tenant_id, full_name, headline, location, linkedin_url, experience, education, skills, source, consent_given_at, imported_by, created_at, updated_at, cv_url, email, phone, cv_hash
      FROM candidates
      ${whereClause}
      ORDER BY ${orderBy}
      LIMIT $${values.length - 1} OFFSET $${values.length}
    `;

    const countQuery = `
      SELECT COUNT(*)::int AS count
      FROM candidates
      ${whereClause}
    `;

    const [dataRes, countRes] = await Promise.all([
      pool.query(dataQuery, values),
      pool.query(countQuery, values.slice(0, where.length ? 1 : 0)),
    ]);

    return NextResponse.json({
      items: dataRes.rows,
      totalResults: countRes.rows[0].count,
      page,
      pageSize: limit,
      totalPages: Math.ceil(countRes.rows[0].count / limit),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch candidates" }, { status: 500 });
  }
} */

/* ------------------------------------
   POST (create candidates)
------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { full_name, site_url, email, password_hash, status = 1 } = body;

    if (!full_name) {
      return NextResponse.json(
        { error: "Candidate is required" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `
      INSERT INTO candidates (full_name, site_url, email, password_hash, status, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
      RETURNING *
      `,
      [full_name, site_url, email, password_hash, status]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err: any) {
    console.error(err);

    if (err.code === "23505") {
      return NextResponse.json(
        { error: "Candidate already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create candidates" },
      { status: 500 }
    );
  }
}

/* ------------------------------------
   PUT (update candidates)
------------------------------------ */
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, full_name, site_url, email, password_hash, status } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Candidate ID required" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `
      UPDATE candidates
      SET
        full_name = COALESCE($1, full_name),
        site_url = COALESCE($2, site_url),
        email = COALESCE($2, email),
        password_hash = COALESCE($2, password_hash),
        status = COALESCE($3, status),
        updated_at = NOW()
      WHERE id = $4
      RETURNING *
      `,
      [full_name, site_url, email, password_hash, status, id]
    );

    if (!result.rows.length) {
      return NextResponse.json(
        { error: "Candidate not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    console.error(err);

    if (err.code === "23505") {
      return NextResponse.json(
        { error: "Candidate slug already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to update candidates" },
      { status: 500 }
    );
  }
}

/* ------------------------------------
   DELETE (remove candidates)
------------------------------------ */
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Candidate ID required" },
      { status: 400 }
    );
  }

  try {
    const result = await pool.query(
      `DELETE FROM candidates WHERE id = $1 RETURNING *`,
      [id]
    );

    if (!result.rows.length) {
      return NextResponse.json(
        { error: "Candidate not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Candidate deleted successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to delete candidates" },
      { status: 500 }
    );
  }
}
