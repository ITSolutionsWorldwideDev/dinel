// apps/web/lib/jobs/dbJobs.ts
import { pool } from "@acme/db";

export type DbJob = {
  id: number;
  job_id?: string;
  slug: string;
  title: string;
  description: string;
  location: string | null;
  employment_type: string | null;
  workplace_type: string | null;
  department: string | null;
  experience_level: string | null;
  status: string;
  visibility?: string;
  sector_id?: string | null;
  discipline_id?: string | null;
  sector_name?: string | null;
  discipline_name?: string | null;
  vacancy_information?: string | null;
  intro_information?: string | null;
  company_information?: string | null;
  additional_information?: string | null;
  offer_information?: string | null;
  requirements?: string | null;
  hours_per_week?: number | null;
  deadline?: string | null;
  created_at?: string;
  published_at?: string;
};

export async function getDbPublishedJobs(): Promise<DbJob[]> {
  try {
    const query = `
      SELECT 
        j.*,
        s.sector AS sector_name,
        s.sectorslug AS sector_slug,
        d.discipline AS discipline_name,
        d.disciplineslug AS discipline_slug
      FROM jobs j
      LEFT JOIN sectors s ON s.sector_id = j.sector_id
      LEFT JOIN disciplines d ON d.discipline_id = j.discipline_id
      WHERE j.status = 'PUBLISHED'
      ORDER BY COALESCE(j.published_at, j.created_at) DESC
    `;
    const res = await pool.query(query);
    return res.rows as DbJob[];
  } catch (err) {
    console.error("[DbJobs] Error fetching published jobs:", err);
    return [];
  }
}

export async function getDbJobBySlug(slug: string): Promise<DbJob | null> {
  try {
    const query = `
      SELECT 
        j.*,
        s.sector AS sector_name,
        s.sectorslug AS sector_slug,
        d.discipline AS discipline_name,
        d.disciplineslug AS discipline_slug
      FROM jobs j
      LEFT JOIN sectors s ON s.sector_id = j.sector_id
      LEFT JOIN disciplines d ON d.discipline_id = j.discipline_id
      WHERE j.slug = $1 OR CAST(j.id AS TEXT) = $1 OR CAST(j.job_id AS TEXT) = $1
      LIMIT 1
    `;
    const res = await pool.query(query, [slug]);
    if (!res.rows.length) return null;
    return res.rows[0] as DbJob;
  } catch (err) {
    console.error(`[DbJobs] Error fetching job by slug ${slug}:`, err);
    return null;
  }
}

export function parseListItems(raw: string | null | undefined): string[] {
  if (!raw) return [];
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^[-•*]\s*/, "").trim())
    .filter(Boolean);
}
