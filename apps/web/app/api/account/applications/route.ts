// apps/web/app/api/account/applications/route.ts

import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";
import { candidateAuth } from "@repo/auth-web";

export async function GET(req: NextRequest) {
  const session = await candidateAuth();

  if (!session || session.expired) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const candidateId = session.user.id;

  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const status = searchParams.get("status"); // APPLIED | INTERVIEW | etc
  const sort = searchParams.get("sort"); // dateAsc | dateDesc

  const offset = (page - 1) * limit;

  try {
    const where: string[] = ["a.candidate_id = $1"];
    const values: any[] = [candidateId];

    if (status) {
      values.push(status);
      where.push(`a.status = $${values.length}`);
    }

    const whereClause = `WHERE ${where.join(" AND ")}`;

    let orderBy = "a.applied_at DESC";
    if (sort === "dateAsc") orderBy = "a.applied_at ASC";

    values.push(limit, offset);

    const dataQuery = `
      SELECT
        a.id,
        j.title AS job_title,
        j.company_name,
        j.location,
        a.status,
        a.applied_at
      FROM applications a
      JOIN jobs j ON a.job_id = j.id
      ${whereClause}
      ORDER BY ${orderBy}
      LIMIT $${values.length - 1}
      OFFSET $${values.length}
    `;

    const countQuery = `
      SELECT COUNT(*)::int AS count
      FROM applications a
      ${whereClause}
    `;

    const [dataRes, countRes] = await Promise.all([
      pool.query(dataQuery, values),
      pool.query(countQuery, values.slice(0, where.length)),
    ]);

    return NextResponse.json({
      items: dataRes.rows,
      page,
      pageSize: limit,
      totalResults: countRes.rows[0].count,
      totalPages: Math.ceil(countRes.rows[0].count / limit),
    });
  } catch (err) {
    console.error("GET /api/account/applications error:", err);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
