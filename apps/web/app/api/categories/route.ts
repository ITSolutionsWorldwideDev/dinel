// apps/web/app/api/categories/route.ts

import { NextResponse } from "next/server";
import { pool } from "@acme/db";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT category_id, category AS name, categoryslug AS slug
      FROM categories
      ORDER BY category ASC
    `);

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
