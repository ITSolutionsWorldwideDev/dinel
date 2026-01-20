// apps/admin/app/api/candidates/syncCarerix/route.ts

import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";
import axios from "axios";
import crypto from "crypto";

const CARERIX_API_BASE = "https://api.carerix.com/rest/v1";

/* ------------------------------------
   GET (Sync candidates from Carerix)
------------------------------------ */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tenantId = searchParams.get("tenantId");

  if (!tenantId) {
    return NextResponse.json({ error: "Missing tenantId" }, { status: 400 });
  }

  try {
    // 1️⃣ Fetch candidates from Carerix
    const response = await axios.get(`${CARERIX_API_BASE}/Candidate`, {
      headers: {
        Authorization: `Bearer ${process.env.CARERIX_API_KEY}`,
      },
    });

    const carerixCandidates = response.data; // Assuming an array of candidates

    // 2️⃣ Upsert candidates into DB
    for (const c of carerixCandidates) {
      const fullName = `${c.firstName || ""} ${c.lastName || ""}`.trim();
      const cvHash = c.email
        ? crypto.createHash("sha256").update(c.email).digest("hex")
        : crypto.randomUUID(); // fallback if email not available

      await pool.query(
        `
        INSERT INTO candidates
          (tenant_id, full_name, headline, location, linkedin_url, skills, experience, education,
           source, cv_url, email, phone, cv_hash, created_at, updated_at)
        VALUES
          ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,NOW(),NOW())
        ON CONFLICT (tenant_id, cv_hash) DO UPDATE SET
          full_name = EXCLUDED.full_name,
          headline = EXCLUDED.headline,
          location = EXCLUDED.location,
          linkedin_url = EXCLUDED.linkedin_url,
          skills = EXCLUDED.skills,
          experience = EXCLUDED.experience,
          education = EXCLUDED.education,
          source = EXCLUDED.source,
          cv_url = EXCLUDED.cv_url,
          email = EXCLUDED.email,
          phone = EXCLUDED.phone,
          updated_at = NOW()
      `,
        [
          tenantId,
          fullName,
          c.headline || null,
          c.location || null,
          c.linkedinUrl || null,
          JSON.stringify(c.skills || []),
          JSON.stringify(c.experience || []),
          JSON.stringify(c.education || []),
          "carerix", // source
          c.cvUrl || null,
          c.email || null,
          c.phone || null,
          cvHash,
        ]
      );
    }

    // 3️⃣ Return paginated candidates (like your existing API)
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 20);
    const offset = (page - 1) * limit;

    const search = searchParams.get("search");
    const source = searchParams.get("source");
    const status = searchParams.get("status"); // optional
    const sort = searchParams.get("sort");

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

    const countQuery = `SELECT COUNT(*)::int FROM candidates ${whereClause}`;

    const [dataRes, countRes] = await Promise.all([
      pool.query(dataQuery, [...values, limit, offset]),
      pool.query(countQuery, values),
    ]);

    return NextResponse.json({
      items: dataRes.rows,
      total: countRes.rows[0].count,
      page,
      pageSize: limit,
      synced: carerixCandidates.length,
    });
  } catch (err) {
    console.error("GET /api/candidates/syncCarerix error:", err);
    return NextResponse.json(
      { error: "Failed to sync candidates from Carerix" },
      { status: 500 }
    );
  }
}
