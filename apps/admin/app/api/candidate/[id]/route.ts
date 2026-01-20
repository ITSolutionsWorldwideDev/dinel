// /app/api/candidate/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";
import { notFound } from "next/navigation";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }>  }
) {
  const body = await req.json();
  // const { id } = params;
  const { id } = await params;

  const result = await pool.query(
    `
    UPDATE candidates
    SET
      full_name = $1,
      headline = $2,
      email = $3,
      phone = $4,
      location = $5,
      linkedin_url = $6,
      cv_url = $7,
      skills = $8,
      experience = $9,
      education = $10,
      updated_at = now()
    WHERE id = $11
    RETURNING *
    `,
    [
      body.full_name,
      body.headline,
      body.email,
      body.phone,
      body.location,
      body.linkedin_url,
      body.cv_url,
      body.skills,
      body.experience,
      body.education,
      id,
    ]
  );

  if (!result.rows.length) {
    notFound();
  }

  return NextResponse.json(result.rows[0]);
}

/* import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await req.json();

  const result = await pool.query(
    `
    UPDATE candidates
    SET
      full_name = $1,
      email = $2,
      phone = $3,
      updated_at = now()
    WHERE id = $4
    RETURNING *
    `,
    [
      body.full_name,
      body.email,
      body.phone,
      id,
    ]
  );

  if (!result.rows.length) {
    return NextResponse.json(
      { error: "Candidate not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(result.rows[0]);
} */
