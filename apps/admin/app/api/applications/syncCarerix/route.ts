// apps/admin/app/api/applications/syncCarerix/route.ts

import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";
import axios from "axios";

const CARERIX_API_BASE = "https://api.carerix.com/rest/v1";

/* ------------------------------------
   GET (Sync applications from Carerix)
------------------------------------ */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tenantId = searchParams.get("tenantId");

  if (!tenantId) {
    return NextResponse.json({ error: "Missing tenantId" }, { status: 400 });
  }

  try {
    // 1️⃣ Fetch applications from Carerix
    const response = await axios.get(`${CARERIX_API_BASE}/Application`, {
      headers: {
        Authorization: `Bearer ${process.env.CARERIX_API_KEY}`,
      },
    });

    const applications = response.data; // assume array of applications

    let syncedCount = 0;

    for (const app of applications) {
      // Find candidate in DB
      const candidateRes = await pool.query(
        `SELECT id FROM candidates WHERE tenant_id = $1 AND email = $2`,
        [tenantId, app.candidate?.email || ""]
      );
      const candidate = candidateRes.rows[0];
      if (!candidate) continue;

      // Find job in DB by carerix_id
      const jobRes = await pool.query(
        `SELECT id FROM jobs WHERE carerix_id = $1`,
        [app.job?.id]
      );
      const job = jobRes.rows[0];
      if (!job) continue;

      // Upsert into applications table
      await pool.query(
        `
        INSERT INTO applications
          (tenant_id, candidate_id, job_id, status, applied_at, created_at, updated_at)
        VALUES
          ($1, $2, $3, $4, $5, NOW(), NOW())
        ON CONFLICT (tenant_id, candidate_id, job_id) DO UPDATE SET
          status = EXCLUDED.status,
          applied_at = EXCLUDED.applied_at,
          updated_at = NOW()
      `,
        [
          tenantId,
          candidate.id,
          job.id,
          app.status || "APPLIED",
          app.appliedDate ? new Date(app.appliedDate) : new Date(),
        ]
      );

      syncedCount++;
    }

    return NextResponse.json({
      message: "Carerix applications synced",
      synced: syncedCount,
    });
  } catch (err) {
    console.error("GET /api/applications/syncCarerix error:", err);
    return NextResponse.json(
      { error: "Failed to sync applications from Carerix" },
      { status: 500 }
    );
  }
}
