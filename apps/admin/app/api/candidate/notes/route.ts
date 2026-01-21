// /app/api/candidate/notes/route.ts
import { pool } from "@acme/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@repo/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.public_id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { candidateId, note } = await req.json();

  const res = await pool.query(
    `
    INSERT INTO candidate_notes (candidate_id, tenant_id, author_id, note)
    VALUES ($1,$2,$3,$4)
    RETURNING *
    `,
    [
      candidateId,
      session.user.id,
      session.user.public_id,
      note,
    ]
  );

  return NextResponse.json(res.rows[0]);
}
