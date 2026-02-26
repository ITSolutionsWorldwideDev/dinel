import { NextResponse } from "next/server";
import { pool } from "@acme/db";

export async function GET() {
  try {
    const [disciplineResult, sectorResult] = await Promise.all([
      pool.query("SELECT discipline_id, discipline FROM disciplines "),
      pool.query("SELECT sector_id, sector FROM sectors "),
    ]);

    return NextResponse.json({
      disciplines: disciplineResult.rows,
      sectors: sectorResult.rows,
    });
  } catch (error: any) {
    console.error("Database Error:", error);

    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 },
    );
  }
}

// ------------------------------------
// post request
// ---------------------------------------

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, disciplines, industries, keywords, frequency } = body;

    if (!email || !frequency) {
      return NextResponse.json(
        { error: "Email and frequency are required" },
        { status: 400 },
      );
    }

    await pool.query(
      `
      INSERT INTO job_alerts 
      (email, discipline, industry, keywords, frequency)
      VALUES ($1, $2, $3, $4, $5)
      `,
      [email, disciplines, industries, keywords, frequency],
    );

    return NextResponse.json({ message: "Job alert created" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
