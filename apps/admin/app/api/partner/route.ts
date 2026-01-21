// /app/api/partner/route.ts (GET)

import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";

/* ------------------------------------
   GET (list or single partners)
------------------------------------ */
export async function GET(req: NextRequest,
  context: { params: {} }) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 20);
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");

  const offset = (page - 1) * limit;

  try {
    /* -------- Single partners -------- */
    if (id) {
      const result = await pool.query(
        `SELECT * FROM partners WHERE partner_id = $1`,
        [id]
      );

      if (!result.rows.length) {
        return NextResponse.json({ error: "Partner not found" }, { status: 404 });
      }

      return NextResponse.json(result.rows[0]);
    }

    /* -------- List partners -------- */
    const where: string[] = [];
    const values: any[] = [];

    if (search) {
      values.push(`%${search.toLowerCase()}%`);
      where.push(`LOWER(partner) LIKE $${values.length}`);
    }

    const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";

    let orderBy = "created_at DESC";
    if (sort === "nameAsc") orderBy = "partners ASC";
    if (sort === "nameDesc") orderBy = "partners DESC";
    if (sort === "dateAsc") orderBy = "created_at ASC";

    values.push(limit, offset);

    const dataQuery = `
      SELECT partner_id, partner, site_url, email, password_hash, status, created_at, updated_at
      FROM partners
      ${whereClause}
      ORDER BY ${orderBy}
      LIMIT $${values.length - 1} OFFSET $${values.length}
    `;

    const countQuery = `
      SELECT COUNT(*)::int AS count
      FROM partners
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
    return NextResponse.json({ error: "Failed to fetch partners" }, { status: 500 });
  }
}

/* ------------------------------------
   POST (create partners)
------------------------------------ */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { partner, site_url, email, password_hash, status = 1 } = body;

    if (!partner) {
      return NextResponse.json({ error: "Partner is required" }, { status: 400 });
    }

    const result = await pool.query(
      `
      INSERT INTO partners (partner, site_url, email, password_hash, status, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
      RETURNING *
      `,
      [partner, site_url, email, password_hash, status]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err: any) {
    console.error(err);

    if (err.code === "23505") {
      return NextResponse.json(
        { error: "Partner already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json({ error: "Failed to create partners" }, { status: 500 });
  }
}

/* ------------------------------------
   PUT (update partners)
------------------------------------ */
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { partner_id, partner, site_url, email, password_hash, status } = body;

    if (!partner_id) {
      return NextResponse.json({ error: "Partner ID required" }, { status: 400 });
    }

    const result = await pool.query(
      `
      UPDATE partners
      SET
        partner = COALESCE($1, partner),
        site_url = COALESCE($2, site_url),
        email = COALESCE($2, email),
        password_hash = COALESCE($2, password_hash),
        status = COALESCE($3, status),
        updated_at = NOW()
      WHERE partner_id = $4
      RETURNING *
      `,
      [partner, site_url, email, password_hash, status, partner_id]
    );

    if (!result.rows.length) {
      return NextResponse.json({ error: "Partner not found" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    console.error(err);

    if (err.code === "23505") {
      return NextResponse.json(
        { error: "Partner slug already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json({ error: "Failed to update partners" }, { status: 500 });
  }
}

/* ------------------------------------
   DELETE (remove partners)
------------------------------------ */
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Partner ID required" }, { status: 400 });
  }

  try {
    const result = await pool.query(
      `DELETE FROM partners WHERE partner_id = $1 RETURNING *`,
      [id]
    );

    if (!result.rows.length) {
      return NextResponse.json({ error: "Partner not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Partner deleted successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete partners" }, { status: 500 });
  }
}
