// apps/admin/app/api/jobs/syncCarerix/route.ts

import { NextResponse } from "next/server";
import { pool } from "@acme/db";
import axios from "axios";
import slugify from "slugify";

const CARERIX_API_BASE = "https://api.carerix.com/rest/v1";

export async function GET(req: Request) {
  try {
    // 1️⃣ Fetch jobs from Carerix
    const response = await axios.get(`${CARERIX_API_BASE}/JobOrder`, {
      headers: {
        Authorization: `Bearer ${process.env.CARERIX_API_KEY}`,
      },
    });

    const carerixJobs = response.data; // assume array of jobs

    // 2️⃣ Upsert jobs into DB
    for (const job of carerixJobs) {
      const slug = job.title
        ? slugify(job.title, { lower: true, strict: true })
        : `job-${job.id}`;

      // You may need default company_id and created_by
      const companyId = Number(process.env.DEFAULT_COMPANY_ID) || 1;
      const createdBy = Number(process.env.DEFAULT_USER_ID) || 1;

      await pool.query(
        `
        INSERT INTO jobs
          (title, slug, description, location, employment_type, workplace_type,
           department, experience_level, status, visibility, apply_url,
           company_id, created_by, published_at, closed_at, created_at, updated_at, carerix_id)
        VALUES
          ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,NOW(),NOW(),$16)
        ON CONFLICT (carerix_id) DO UPDATE SET
          title = EXCLUDED.title,
          slug = EXCLUDED.slug,
          description = EXCLUDED.description,
          location = EXCLUDED.location,
          employment_type = EXCLUDED.employment_type,
          workplace_type = EXCLUDED.workplace_type,
          department = EXCLUDED.department,
          experience_level = EXCLUDED.experience_level,
          status = EXCLUDED.status,
          visibility = EXCLUDED.visibility,
          apply_url = EXCLUDED.apply_url,
          published_at = EXCLUDED.published_at,
          closed_at = EXCLUDED.closed_at,
          updated_at = NOW()
      `,
        [
          job.title || "Untitled Job",
          slug,
          job.description || "",
          job.location || null,
          job.employmentType || "FULL_TIME",
          job.workplaceType || "ONSITE",
          job.department || null,
          job.experienceLevel || null,
          job.status || "DRAFT",
          "PUBLIC", // visibility
          job.applyUrl || null,
          companyId,
          createdBy,
          job.publishedDate ? new Date(job.publishedDate) : null,
          job.closedDate ? new Date(job.closedDate) : null,
          job.id, // carerix_id
        ]
      );
    }

    return NextResponse.json({
      message: "Carerix jobs synced",
      synced: carerixJobs.length,
    });
  } catch (err) {
    console.error("GET /api/jobs/syncCarerix error:", err);
    return NextResponse.json({ error: "Failed to sync jobs from Carerix" }, { status: 500 });
  }
}
