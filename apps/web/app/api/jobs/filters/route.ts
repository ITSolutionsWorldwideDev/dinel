// apps/web/app/api/jobs/filters/route.ts
import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sector = searchParams.get("sector");

  const values: any[] = [];

  let condition = `WHERE j.status = 'PUBLISHED'`;
  let joinSector = "";

  if (sector) {
    values.push(sector);
    joinSector = `JOIN sectors s ON s.sector_id = j.sector_id`;
    condition += ` AND s.sectorslug = $${values.length}`;
  }

  const sectorsQuery = `SELECT sector_id, sector, sectorslug FROM sectors WHERE status = 1`;

  const disciplinesQuery = `
      SELECT DISTINCT d.discipline, d.discipline_id
      FROM jobs j
      ${joinSector}
      LEFT JOIN disciplines d ON d.discipline_id = j.discipline_id
      ${condition}`;

  const locationsQuery = ` SELECT DISTINCT j.location FROM jobs j ${joinSector} ${condition}`;

  const filterValues = [...values];

  const [sectors, disciplines, locations] = await Promise.all([
    pool.query(sectorsQuery),
    pool.query(disciplinesQuery, filterValues),
    pool.query(locationsQuery, filterValues),
  ]);

  return NextResponse.json({
    sectors: sectors.rows,
    disciplines: disciplines.rows,
    locations: locations.rows,
  });
}

// const sectorsQuery = `
//   SELECT DISTINCT s.sector, s.sector_id
//   FROM jobs j
//   LEFT JOIN sectors s ON s.sector_id = j.sector_id
//   WHERE j.status = 'PUBLISHED'
// `;
