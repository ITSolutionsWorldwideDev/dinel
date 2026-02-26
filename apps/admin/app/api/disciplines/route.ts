// /app/api/disciplines/route.ts (GET)

import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@repo/auth";

/* ------------------------------------
   Utils
------------------------------------ */
function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ------------------------------------
   GET (list or single discipline)
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
    /* -------- Single discipline -------- */
    if (id) {
      const result = await pool.query(
        `SELECT * FROM disciplines WHERE discipline_id = $1`,
        [id]
      );

      if (!result.rows.length) {
        return NextResponse.json({ error: "Discipline not found" }, { status: 404 });
      }

      return NextResponse.json(result.rows[0]);
    }

    /* -------- List disciplines -------- */
    const where: string[] = [];
    const values: any[] = [];

    if (search) {
      values.push(`%${search.toLowerCase()}%`);
      where.push(`LOWER(discipline) LIKE $${values.length}`);
    }

    const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";

    let orderBy = "created_at DESC";
    if (sort === "nameAsc") orderBy = "discipline ASC";
    if (sort === "nameDesc") orderBy = "discipline DESC";
    if (sort === "dateAsc") orderBy = "created_at ASC";

    values.push(limit, offset);

    const dataQuery = `
      SELECT discipline_id, discipline, disciplineslug, status, created_at, updated_at
      FROM disciplines
      ${whereClause}
      ORDER BY ${orderBy}
      LIMIT $${values.length - 1} OFFSET $${values.length}
    `;

    const countQuery = `
      SELECT COUNT(*)::int AS count
      FROM disciplines
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
    return NextResponse.json({ error: "Failed to fetch disciplines" }, { status: 500 });
  }
}

/* ------------------------------------
   POST (create discipline)
------------------------------------ */
export async function POST(req: NextRequest) {
  try {

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { discipline, status = 1 } = body;

    if (!discipline) {
      return NextResponse.json({ error: "Discipline is required" }, { status: 400 });
    }

    const slug = slugify(discipline);

    const result = await pool.query(
      `
      INSERT INTO disciplines (discipline, disciplineslug, status, created_at, updated_at)
      VALUES ($1, $2, $3, NOW(), NOW())
      RETURNING *
      `,
      [discipline, slug, status]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err: any) {
    console.error(err);

    if (err.code === "23505") {
      return NextResponse.json(
        { error: "Discipline already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json({ error: "Failed to create discipline" }, { status: 500 });
  }
}

/* ------------------------------------
   PUT (update discipline)
------------------------------------ */
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { discipline_id, discipline, status } = body;

    if (!discipline_id) {
      return NextResponse.json({ error: "Discipline ID required" }, { status: 400 });
    }

    const slug = discipline ? slugify(discipline) : undefined;

    const result = await pool.query(
      `
      UPDATE disciplines
      SET
        discipline = COALESCE($1, discipline),
        disciplineslug = COALESCE($2, disciplineslug),
        status = COALESCE($3, status),
        updated_at = NOW()
      WHERE discipline_id = $4
      RETURNING *
      `,
      [discipline, slug, status, discipline_id]
    );

    if (!result.rows.length) {
      return NextResponse.json({ error: "Discipline not found" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    console.error(err);

    if (err.code === "23505") {
      return NextResponse.json(
        { error: "Discipline slug already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json({ error: "Failed to update discipline" }, { status: 500 });
  }
}

/* ------------------------------------
   DELETE (remove discipline)
------------------------------------ */
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Discipline ID required" }, { status: 400 });
  }

  try {
    const result = await pool.query(
      `DELETE FROM disciplines WHERE discipline_id = $1 RETURNING *`,
      [id]
    );

    if (!result.rows.length) {
      return NextResponse.json({ error: "Discipline not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Discipline deleted successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete discipline" }, { status: 500 });
  }
}
