// apps/admin/app/api/cv/confirm/route.ts

import { NextResponse } from "next/server";
import { pool } from "@acme/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@repo/auth";

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
      { status: 400 }
    );
  }

  if (mode === "update") {
    if (!candidateId) {
      return NextResponse.json(
        { error: "candidateId required for update" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `
      UPDATE candidates
      SET
        full_name = $1,
        email = $2,
        phone = $3,
        location = $4,
        skills = $5::jsonb,
        experience = $6::jsonb,
        education = $7::jsonb,
        cv_hash = $8,
        updated_at = now()
      WHERE id = $9 AND tenant_id = $10
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
        tenantId,
      ]
    );

    return NextResponse.json({
      success: true,
      candidate: result.rows[0],
    });
  }

  if (mode === "create") {
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
        source,
        consent_given_at,
        created_at
      )
      VALUES ($1,$2,$3,$4,$5,$6::jsonb,$7::jsonb,$8::jsonb,$9,'cv-upload',now(),now())
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
      ]
    );

    return NextResponse.json({
      success: true,
      candidate: result.rows[0],
    });
  }

  return NextResponse.json({ error: "Invalid mode" }, { status: 400 });
}

/* import { NextResponse } from "next/server";
import { pool } from "@acme/db";

export async function POST(req: Request) {
  const { parsed, tenantId, cvHash, mode, candidateId } =
    await req.json();

  if (mode === "update") {
    const result = await pool.query(
      `
      UPDATE candidates
      SET
        full_name = $1,
        email = $2,
        phone = $3,
        skills = $4,
        experience = $5,
        education = $6,
        cv_hash = $7,
        updated_at = now()
      WHERE id = $8 AND tenant_id = $9
      RETURNING *
      `,
      [
        parsed.full_name,
        parsed.email,
        parsed.phone,
        parsed.skills,
        parsed.experience,
        parsed.education,
        cvHash,
        candidateId,
        tenantId
      ]
    );

    return NextResponse.json({ candidate: result.rows[0] });
  }

  // create
  const result = await pool.query(
    `
    INSERT INTO candidates (
      tenant_id,
      full_name,
      email,
      phone,
      skills,
      experience,
      education,
      cv_hash,
      source
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,'cv-upload')
    RETURNING *
    `,
    [
      tenantId,
      parsed.full_name,
      parsed.email,
      parsed.phone,
      parsed.skills,
      parsed.experience,
      parsed.education,
      cvHash
    ]
  );

  return NextResponse.json({ candidate: result.rows[0] });
} */
