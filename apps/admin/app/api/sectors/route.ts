// /app/api/sectors/route.ts (GET)

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
   GET (list or single sector)
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
    /* -------- Single sector -------- */
    if (id) {
      const result = await pool.query(
        `SELECT * FROM sectors WHERE sector_id = $1`,
        [id]
      );

      if (!result.rows.length) {
        return NextResponse.json({ error: "Sector not found" }, { status: 404 });
      }

      return NextResponse.json(result.rows[0]);
    }

    /* -------- List sectors -------- */
    const where: string[] = [];
    const values: any[] = [];

    if (search) {
      values.push(`%${search.toLowerCase()}%`);
      where.push(`LOWER(sector) LIKE $${values.length}`);
    }

    const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";

    let orderBy = "created_at DESC";
    if (sort === "nameAsc") orderBy = "sector ASC";
    if (sort === "nameDesc") orderBy = "sector DESC";
    if (sort === "dateAsc") orderBy = "created_at ASC";

    values.push(limit, offset);

    const dataQuery = `
      SELECT sector_id, sector, sectorslug, status, created_at, updated_at
      FROM sectors
      ${whereClause}
      ORDER BY ${orderBy}
      LIMIT $${values.length - 1} OFFSET $${values.length}
    `;

    const countQuery = `
      SELECT COUNT(*)::int AS count
      FROM sectors
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
    return NextResponse.json({ error: "Failed to fetch sectors" }, { status: 500 });
  }
}

/* ------------------------------------
   POST (create sector)
------------------------------------ */
export async function POST(req: NextRequest) {
  try {

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { sector, status = 1 } = body;

    if (!sector) {
      return NextResponse.json({ error: "Sector is required" }, { status: 400 });
    }

    const slug = slugify(sector);

    const result = await pool.query(
      `
      INSERT INTO sectors (sector, sectorslug, status, created_at, updated_at)
      VALUES ($1, $2, $3, NOW(), NOW())
      RETURNING *
      `,
      [sector, slug, status]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err: any) {
    console.error(err);

    if (err.code === "23505") {
      return NextResponse.json(
        { error: "Sector already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json({ error: "Failed to create sector" }, { status: 500 });
  }
}

/* ------------------------------------
   PUT (update sector)
------------------------------------ */
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { sector_id, sector, status } = body;

    if (!sector_id) {
      return NextResponse.json({ error: "Sector ID required" }, { status: 400 });
    }

    const slug = sector ? slugify(sector) : undefined;

    const result = await pool.query(
      `
      UPDATE sectors
      SET
        sector = COALESCE($1, sector),
        sectorslug = COALESCE($2, sectorslug),
        status = COALESCE($3, status),
        updated_at = NOW()
      WHERE sector_id = $4
      RETURNING *
      `,
      [sector, slug, status, sector_id]
    );

    if (!result.rows.length) {
      return NextResponse.json({ error: "Sector not found" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    console.error(err);

    if (err.code === "23505") {
      return NextResponse.json(
        { error: "Sector slug already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json({ error: "Failed to update sector" }, { status: 500 });
  }
}

/* ------------------------------------
   DELETE (remove sector)
------------------------------------ */
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Sector ID required" }, { status: 400 });
  }

  try {
    const result = await pool.query(
      `DELETE FROM sectors WHERE sector_id = $1 RETURNING *`,
      [id]
    );

    if (!result.rows.length) {
      return NextResponse.json({ error: "Sector not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Sector deleted successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete sector" }, { status: 500 });
  }
}
