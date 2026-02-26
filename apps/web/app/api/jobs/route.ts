// apps/web/app/api/jobs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // -------------------------
    // Query Params
    // -------------------------
    const sectorSlug = searchParams.get("sector");
    const disciplines = searchParams.getAll("discipline");
    const locations = searchParams.getAll("location");
    const search = searchParams.get("search");

    // const page = Number(searchParams.get("page") || 1);
    // const limit = Number(searchParams.get("limit") || 9);
    const page = Math.max(Number(searchParams.get("page")) || 1, 1);
    const limit = Math.min(Number(searchParams.get("limit")) || 9, 50);
    const offset = (page - 1) * limit;

    // -------------------------
    // Build Conditions
    // -------------------------
    const conditions: string[] = [`j.status = 'PUBLISHED'`];
    const values: any[] = [];

    let joinSector = "";

    console.log("sectorSlug === ", sectorSlug);

    // Sector filter (via slug)
    if (sectorSlug && sectorSlug != "all") {
      values.push(sectorSlug);
      joinSector = `JOIN sectors s ON s.sector_id = j.sector_id`;
      conditions.push(`s.sectorslug = $${values.length}`);
    }

    // Multi-discipline filter
    if (disciplines.length > 0) {
      values.push(disciplines);
      conditions.push(`j.discipline_id = ANY($${values.length})`);
    }

    // Multi-location filter
    if (locations.length > 0) {
      values.push(locations);
      conditions.push(`j.location = ANY($${values.length})`);
    }

    // Search Filter (Title + Description + Location)
    if (search) {
      values.push(`%${search}%`);
      conditions.push(`(
        j.title ILIKE $${values.length}
        OR j.description ILIKE $${values.length}
        OR j.location ILIKE $${values.length}
      )`);
    }
    /* if (search) {
      values.push(`%${search}%`);
      conditions.push(`(
        j.title ILIKE $${values.length}
        OR j.short_description ILIKE $${values.length}
      )`);
    } */

    const whereClause = conditions.length
      ? `WHERE ${conditions.join(" AND ")}`
      : "";

    // -------------------------
    // Main Query
    // -------------------------
    /* const jobsQuery = `
      SELECT j.*
      FROM jobs j
      ${joinSector}      
      ${whereClause}
      ORDER BY j.published_at DESC
      LIMIT $${values.length + 1}
      OFFSET $${values.length + 2}
    `; */

    const jobsQuery = `
      SELECT 
        j.*,
        s.sector AS sector_name,
        s.sectorslug AS sector_slug,
        d.discipline AS discipline_name,
        d.disciplineslug AS discipline_slug
      FROM jobs j
      LEFT JOIN sectors s ON s.sector_id = j.sector_id
      LEFT JOIN disciplines d ON d.discipline_id = j.discipline_id
      ${whereClause}
      ORDER BY j.published_at DESC
      LIMIT $${values.length + 1}
      OFFSET $${values.length + 2}
    `;

    const jobsValues = [...values, limit, offset];

    // -------------------------
    // Count Query (without limit/offset)
    // -------------------------
    const countQuery = `
      SELECT COUNT(*)
      FROM jobs j
      LEFT JOIN sectors s ON s.sector_id = j.sector_id
      LEFT JOIN disciplines d ON d.discipline_id = j.discipline_id
      ${whereClause}
    `;

    const [jobsResult, countResult] = await Promise.all([
      pool.query(jobsQuery, jobsValues),
      pool.query(countQuery, values),
    ]);

    const total = Number(countResult.rows[0].count);

    return NextResponse.json({
      items: jobsResult.rows,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Jobs API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 },
    );
  }
}

/* export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const sector = searchParams.get("sector");
    const discipline = searchParams.get("discipline");
    const location = searchParams.get("location");

    const conditions: string[] = [`status = 'PUBLISHED'`];
    const values: any[] = [];

    if (sector) {
      values.push(sector);
      conditions.push(`sector_id = $${values.length}`);
    }

    if (discipline) {
      values.push(discipline);
      conditions.push(`discipline_id = $${values.length}`);
    }

    if (location) {
      values.push(`%${location}%`);
      conditions.push(`location ILIKE $${values.length}`);
    }

    const query = `
      SELECT *
      FROM jobs
      WHERE ${conditions.join(" AND ")}
      ORDER BY published_at DESC
    `;

    const result = await pool.query(query, values);

    return NextResponse.json({ items: result.rows });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
} */
