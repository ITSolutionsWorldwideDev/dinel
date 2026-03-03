// /apps/web/app/api/candidate/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";
import { notFound } from "next/navigation";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }>  }
) {
  const body = await req.json();
  const { id } = await params;

  const result = await pool.query(
    `
    UPDATE candidates
    SET
      full_name = $1,
      headline = $2,
      email = $3,
      phone_number = $4,
      location = $5,
      linkedin_url = $6,
      cv_url = $7,
      skills = $8::jsonb,
      experience = $9::jsonb,
      education = $10::jsonb,
      updated_at = now()
    WHERE id = $11
    RETURNING *
    `,
    [
      body.full_name,
      body.headline,
      body.email,
      body.phone_number,
      body.location,
      body.linkedin_url,
      body.cv_url,
      JSON.stringify(body.skills ?? []),
      JSON.stringify(body.experience ?? []),
      JSON.stringify(body.education ?? []),
      id,
    ]
  );

  if (!result.rows.length) {
    notFound();
  }

  return NextResponse.json(result.rows[0]);
}
