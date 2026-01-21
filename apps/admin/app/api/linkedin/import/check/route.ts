// apps/admin/app/api/linkedin/import/check/route.ts
import { NextResponse } from "next/server";
import { pool } from "@acme/db";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");
  const tenantId = req.headers.get("x-tenant-id");

  if (!authHeader || !tenantId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");
  jwt.verify(token, process.env.EXTENSION_JWT_SECRET!);

  const { linkedinUrl } = await req.json();

  const result = await pool.query(
    `
    SELECT id, full_name
    FROM candidates
    WHERE tenant_id = $1 AND linkedin_url = $2
    LIMIT 1
    `,
    [tenantId, linkedinUrl]
  );

  return NextResponse.json({
    exists: (result.rowCount || 0) > 0,
    candidate: result.rows[0] ?? null
  });
}
