// apps/web/app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { runQuery } from "@acme/db";
import * as bcrypt from "bcryptjs";

const PUBLIC_TENANT_ID = "00000000-0000-0000-0000-000000000000";

export async function POST(req: NextRequest) {
  try {
    const { full_name, email, phone_number, location, password } = await req.json();

    if (!full_name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const exists: any = await runQuery(
      "SELECT id FROM candidates WHERE email = $1",
      [email],
    );

    if (Array.isArray(exists) ? exists.length > 0 : exists.rowCount > 0) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 },
      );
    }

    const password_hash = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO candidates (tenant_id, full_name, email, phone_number, location, source, password_hash, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5,'self_signup', $6, NOW(), NOW())
      RETURNING id, full_name, email
    `;
    const result = await runQuery(query, [
      PUBLIC_TENANT_ID,
      full_name,
      email,
      phone_number || null,
      location || null,
      password_hash,
    ]);

    const candidate = Array.isArray(result) ? result[0] : result.rows[0];

    return NextResponse.json({ success: true, candidate });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
