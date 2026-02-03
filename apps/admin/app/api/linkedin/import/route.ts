// apps/admin/app/api/linkedin/import/route.ts
import { NextResponse } from "next/server";
import { pool } from "@acme/db";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import bcrypt from "bcryptjs";

type JwtPayload = {
  userId: string;
  tenantId: string;
  email: string;
};

export async function POST(req: Request) {
  try {
    // -----------------------------
    // Auth
    // -----------------------------
    const authHeader = req.headers.get("authorization");
    const tenantId = req.headers.get("x-tenant-id");

    if (!authHeader || !tenantId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    let decoded: JwtPayload;

    try {
      decoded = jwt.verify(
        token,
        process.env.EXTENSION_JWT_SECRET!,
      ) as JwtPayload;
    } catch {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // -----------------------------
    // Payload validation
    // -----------------------------
    const { profile } = await req.json();

    if (!profile?.linkedinUrl || !profile?.fullName) {
      return NextResponse.json(
        { error: "Invalid profile payload" },
        { status: 400 },
      );
    }

    const plainPassword = crypto
      .randomBytes(8)
      .toString("base64url")
      .slice(0, 8);

    const passwordHash = await bcrypt.hash(plainPassword, 12);

    // -----------------------------
    // UPSERT candidate
    // -----------------------------
    const result = await pool.query(
      `
      INSERT INTO candidates (
        tenant_id,
        full_name,
        headline,
        location,
        linkedin_url,
        experience,
        education,
        skills,
        imported_by,
        password_hash,
        consent_given_at
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,NOW())
      ON CONFLICT (tenant_id, linkedin_url)
      DO UPDATE SET
        full_name = EXCLUDED.full_name,
        headline = EXCLUDED.headline,
        location = EXCLUDED.location,
        experience = EXCLUDED.experience,
        education = EXCLUDED.education,
        skills = EXCLUDED.skills,
        updated_at = NOW()
      RETURNING *;
      `,
      [
        tenantId,
        profile.fullName,
        profile.headline,
        profile.location,
        profile.linkedinUrl,
        profile.experience ?? [],
        profile.education ?? [],
        profile.skills ?? [],
        decoded.userId,
        passwordHash,
      ],
    );

    return NextResponse.json({
      success: true,
      candidate: result.rows[0],
    });
  } catch (error) {
    console.error("LinkedIn import error", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
