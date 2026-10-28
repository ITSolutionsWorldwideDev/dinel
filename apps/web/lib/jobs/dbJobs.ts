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
      LEFT JOIN sectors s ON CAST(s.sector_id AS TEXT) = CAST(j.sector_id AS TEXT)
      LEFT JOIN disciplines d ON CAST(d.discipline_id AS TEXT) = CAST(j.discipline_id AS TEXT)
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
      LEFT JOIN sectors s ON CAST(s.sector_id AS TEXT) = CAST(j.sector_id AS TEXT)
      LEFT JOIN disciplines d ON CAST(d.discipline_id AS TEXT) = CAST(j.discipline_id AS TEXT)
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

/**
 * Resolves a job's category into 6 consolidated, standard categories:
 * - "Supply Chain & Logistics"
 * - "Engineering"
 * - "IT & Support"
 * - "Software Development"
 * - "Data & Analytics" (merges Power BI, SAP/ERP, Data Engineering)
 * - "Administration & Management" (merges Executive Admin, PMO / Project Management)
 */
export function resolveJobCategory(
  job: {
    title: string;
    sector_name?: string | null;
    department?: string | null;
    discipline_name?: string | null;
  },
  locale: "en" | "nl" = "en"
): string {
  // 1. Explicit sector / department / discipline from database
  const explicit = (job.sector_name || job.department || job.discipline_name || "").trim();
  if (explicit) {
    const expLower = explicit.toLowerCase();
    if (expLower.includes("supply") || expLower.includes("logistics") || expLower.includes("warehouse")) {
      return "Supply Chain & Logistics";
    }
    if (expLower.includes("admin") || expLower.includes("pmo") || expLower.includes("management") || expLower.includes("secretar")) {
      return "Administration & Management";
    }
    if (expLower.includes("data") || expLower.includes("analytics") || expLower.includes("power bi") || expLower.includes("erp") || expLower.includes("sap")) {
      return "Data & Analytics";
    }
    if (expLower.includes("software") || expLower.includes("developer") || expLower.includes("development") || expLower.includes("devops")) {
      return "Software Development";
    }
    if (expLower.includes("support") || expLower.includes("werkplek") || expLower.includes("it-service") || expLower.includes("it service") || expLower.includes("helpdesk")) {
      return "IT & Support";
    }
    if (expLower.includes("engineering") || expLower.includes("techniek") || expLower.includes("hvac") || expLower.includes("heat tracing")) {
      return "Engineering";
    }
    return explicit;
  }

  // 2. Accurate classification based on Job Title
  const lower = (job.title || "").toLowerCase();

  // 1. Data & Analytics (Combines Power BI, SAP/ERP Master Data, Data Engineering)
  // E.g. "Power BI Developer", "Master Data Specialist – SAP S/4HANA", "Data Engineer", "ML Engineer"
  if (
    lower.includes("data") ||
    lower.includes("power bi") ||
    lower.includes("analytics") ||
    lower.includes("sap") ||
    lower.includes("s/4hana") ||
    lower.includes("erp") ||
    lower.includes("business intelligence") ||
    lower.includes("bi developer") ||
    lower.includes("ml engineer")
  ) {
    return "Data & Analytics";
  }

  // 2. Administration & Management (Combines PMO, Project Manager, Executive Admin)
  // E.g. "Executive Admin Assistant to the Director", "Project Manager (PMO)"
  if (
    lower.includes("admin") ||
    lower.includes("pmo") ||
    lower.includes("project manager") ||
    lower.includes("projectmanager") ||
    lower.includes("executive assistant") ||
    lower.includes("directie") ||
    lower.includes("office manager") ||
    lower.includes("program manager") ||
    lower.includes("coordinator") ||
    lower.includes("secretaresse") ||
    lower.includes("administratief")
  ) {
    return "Administration & Management";
  }

  // 3. IT & Support
  // E.g. "IT-servicemedewerker / Werkplekbeheerder – Eindhoven / Breda / Amsterdam / Rotterdam"
  if (
    lower.includes("werkplekbeheerder") ||
    lower.includes("it-service") ||
    lower.includes("it service") ||
    lower.includes("support") ||
    lower.includes("helpdesk") ||
    lower.includes("servicedesk") ||
    lower.includes("system administrator") ||
    lower.includes("systems administrator") ||
    lower.includes("sysadmin") ||
    lower.includes("network engineer") ||
    lower.includes("it specialist") ||
    lower.includes("it manager") ||
    lower.includes("it consultant") ||
    lower.includes("it-medewerker") ||
    lower.includes("it medewerker")
  ) {
    return "IT & Support";
  }

  // 4. Software Development
  // E.g. "Software Developer (Full-Stack Developer)", "AI Developer"
  if (
    lower.includes("software") ||
    lower.includes("developer") ||
    lower.includes("development") ||
    lower.includes("full-stack") ||
    lower.includes("fullstack") ||
    lower.includes("frontend") ||
    lower.includes("backend") ||
    lower.includes("programmer") ||
    lower.includes("devops") ||
    lower.includes("cloud")
  ) {
    return "Software Development";
  }

  // 5. Supply Chain & Logistics
  // E.g. "Supply Chain Planner – Starter Programma", "Warehouse Planner", "Procurement Specialist"
  if (
    lower.includes("supply chain") ||
    lower.includes("supply") ||
    lower.includes("logistics") ||
    lower.includes("warehouse") ||
    lower.includes("procurement") ||
    lower.includes("transport") ||
    lower.includes("planner") ||
    lower.includes("inventory") ||
    lower.includes("expeditor") ||
    lower.includes("magazijn") ||
    lower.includes("inkoop") ||
    lower.includes("voorraad")
  ) {
    return "Supply Chain & Logistics";
  }

  // 6. Engineering
  // E.g. "Monteur Heat Tracing", "Servicemonteur HVAC", "HVAC Service Technician", "Instrumentation Engineer"
  if (
    lower.includes("heat tracing") ||
    lower.includes("hvac") ||
    lower.includes("instrumentation") ||
    lower.includes("servicemonteur") ||
    lower.includes("monteur") ||
    lower.includes("technician") ||
    lower.includes("structural") ||
    lower.includes("mechanical") ||
    lower.includes("electrical") ||
    lower.includes("civil") ||
    lower.includes("piping") ||
    lower.includes("installatie") ||
    lower.includes("techniek") ||
    lower.includes("offshore") ||
    lower.includes("marine") ||
    lower.includes("engineer") ||
    lower.includes("engineering")
  ) {
    return "Engineering";
  }

  return "Engineering";
}

