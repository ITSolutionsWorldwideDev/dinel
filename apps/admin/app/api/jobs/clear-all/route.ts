// apps/admin/app/api/jobs/clear-all/route.ts
import { NextResponse } from "next/server";
import { pool } from "@acme/db";

export async function GET() {
  return handleClear();
}

export async function POST() {
  return handleClear();
}

async function handleClear() {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Clear dependent relations first
    await client.query("DELETE FROM job_integrations").catch(() => {});
    await client.query("DELETE FROM applications WHERE vacancy_id IS NOT NULL").catch(() => {});

    // Delete all jobs
    const res = await client.query("DELETE FROM jobs RETURNING id");

    await client.query("COMMIT");

    return NextResponse.json({
      success: true,
      deletedCount: res.rowCount,
      message: `Successfully removed all ${res.rowCount} jobs from database.`,
    });
  } catch (err: any) {
    await client.query("ROLLBACK");
    console.error("Error clearing jobs:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    client.release();
  }
}
