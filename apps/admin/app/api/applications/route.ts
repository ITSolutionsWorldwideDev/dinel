// apps/admin/app/api/applications/route.ts

import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const tenantId = searchParams.get("tenantId");
  if (!tenantId) {
    return NextResponse.json({ error: "Missing tenantId" }, { status: 400 });
  }

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const search = searchParams.get("search");
  const status = searchParams.get("status"); // e.g., 'APPLIED', 'INTERVIEW', etc.
  const sort = searchParams.get("sort"); // e.g., 'candidateAsc', 'candidateDesc', 'dateAsc'

  const offset = (page - 1) * limit;

  try {
    const where: string[] = ["a.tenant_id = $1"];
    const values: any[] = [tenantId];

    // Search by candidate name, email, or job title
    if (search) {
      values.push(`%${search.toLowerCase()}%`);
      where.push(
        `(LOWER(c.full_name) LIKE $${values.length} OR LOWER(c.email) LIKE $${values.length} OR LOWER(j.title) LIKE $${values.length})`
      );
    }

    if (status) {
      values.push(status);
      where.push(`a.status = $${values.length}`);
    }

    const whereClause = `WHERE ${where.join(" AND ")}`;

    // Sorting
    let orderBy = "a.created_at DESC";
    if (sort === "candidateAsc") orderBy = "c.full_name ASC";
    if (sort === "candidateDesc") orderBy = "c.full_name DESC";
    if (sort === "jobAsc") orderBy = "j.title ASC";
    if (sort === "jobDesc") orderBy = "j.title DESC";
    if (sort === "dateAsc") orderBy = "a.applied_at ASC";

    // Add pagination values
    values.push(limit, offset);

    const dataQuery = `
      SELECT
        a.id,
        c.full_name,
        c.email,
        c.phone,
        j.title AS job_title,
        a.status,
        a.applied_at
      FROM applications a
      JOIN candidates c ON a.candidate_id = c.id
      JOIN jobs j ON a.job_id = j.id
      ${whereClause}
      ORDER BY ${orderBy}
      LIMIT $${values.length - 1}
      OFFSET $${values.length}
    `;

    const countQuery = `
      SELECT COUNT(*)::int AS count
      FROM applications a
      JOIN candidates c ON a.candidate_id = c.id
      JOIN jobs j ON a.job_id = j.id
      ${whereClause}
    `;

    const [dataRes, countRes] = await Promise.all([
      pool.query(dataQuery, values),
      pool.query(countQuery, values.slice(0, where.length)), // tenant_id + filters
    ]);

    return NextResponse.json({
      items: dataRes.rows,
      totalResults: countRes.rows[0].count,
      page,
      pageSize: limit,
      totalPages: Math.ceil(countRes.rows[0].count / limit),
    });
  } catch (err) {
    console.error("GET /api/applications error:", err);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
