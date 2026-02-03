// apps/web/app/api/cv/confirm/route.ts

import { NextResponse } from "next/server";
import { pool } from "@acme/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@repo/auth";
import crypto from "crypto";
import bcrypt from "bcryptjs";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { parsed, tenantId, cvHash, mode, candidateId } = await req.json();

  if (!parsed || !tenantId || !cvHash || !mode) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  if (mode === "update") {
    if (!candidateId) {
      return NextResponse.json(
        { error: "candidateId required for update" },
        { status: 400 },
      );
    }

    const result = await pool.query(
      `
      UPDATE candidates
      SET
        full_name = COALESCE($1, full_name),
        email = COALESCE($2, email),
        phone = COALESCE($3, phone),
        location = COALESCE($4, location),
        skills = $5::jsonb,
        experience = $6::jsonb,
        education = $7::jsonb,
        cv_hash = $8,
        updated_at = now()
      WHERE id = $9
      RETURNING *
      `,
      [
        parsed.full_name,
        parsed.email,
        parsed.phone,
        parsed.location,
        JSON.stringify(parsed.skills || []),
        JSON.stringify(parsed.experience || []),
        JSON.stringify(parsed.education || []),
        cvHash,
        candidateId,
      ],
    );

    return NextResponse.json({
      success: true,
      candidate: result.rows[0],
    });
  }

  if (mode === "create") {
    const plainPassword = crypto
      .randomBytes(8)
      .toString("base64url")
      .slice(0, 8);

    const passwordHash = await bcrypt.hash(plainPassword, 12);

    const result = await pool.query(
      `
      INSERT INTO candidates (
        tenant_id,
        full_name,
        email,
        phone,
        location,
        skills,
        experience,
        education,
        cv_hash,
        password_hash,
        source,
        consent_given_at,
        created_at
      )
      VALUES ($1,$2,$3,$4,$5,$6::jsonb,$7::jsonb,$8::jsonb,$9,$10,'cv-upload',now(),now())
      RETURNING *
      `,
      [
        tenantId,
        parsed.full_name,
        parsed.email,
        parsed.phone,
        parsed.location,
        JSON.stringify(parsed.skills || []),
        JSON.stringify(parsed.experience || []),
        JSON.stringify(parsed.education || []),
        cvHash,
        passwordHash,
      ],
    );

    return NextResponse.json({
      success: true,
      candidate: result.rows[0],
    });
  }

  return NextResponse.json({ error: "Invalid mode" }, { status: 400 });
}