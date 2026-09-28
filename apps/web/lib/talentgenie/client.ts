// lib/talentgenie/client.ts
// Talent Genie (HR App) API integration for Staff Outsourcing website

const TALENT_GENIE_API_URL =
  process.env.TALENT_GENIE_API_URL ||
  "https://it-solution-code-hr-app-backend.vercel.app/api";

// Types
export type TalentGenieJob = {
  vacancy_id: number;
  job_info_id: number;
  title: string;
  description: string;
  required_skills: string[];
  experience_level: string | null;
  department_id: number | null;
  hiring_request_id: number | null;
  ai_summary: string | null;
  match_score: number | null;
  parsed_data: Record<string, unknown>;
  created_at: string;
  published_at: string;
  location: string | null;
  employment_type: string | null;
  pdf_url: string | null;
};

// Fetch all published jobs from Talent Genie
export async function getTalentGenieJobs(): Promise<TalentGenieJob[]> {
  try {
    const res = await fetch(`${TALENT_GENIE_API_URL}/website/jobs`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) {
      console.error(`[TalentGenie] Failed to fetch jobs: ${res.status}`);
      return [];
    }
    return (await res.json()) as TalentGenieJob[];
  } catch (err) {
    console.error("[TalentGenie] Error fetching jobs:", err);
    return [];
  }
}

// Fetch a single job by vacancy_id
export async function getTalentGenieJobById(
  vacancyId: number
): Promise<TalentGenieJob | null> {
  try {
    const res = await fetch(
      `${TALENT_GENIE_API_URL}/website/jobs/${vacancyId}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    return (await res.json()) as TalentGenieJob;
  } catch (err) {
    console.error(`[TalentGenie] Error fetching job ${vacancyId}:`, err);
    return null;
  }
}

// Forward a CV to Talent Genie after candidate applies
export type TalentGenieCVSubmission = {
  fileBuffer: Buffer;
  fileName: string;
  vacancyId?: number | null;
  candidateEmail?: string;
};

export async function forwardCvToTalentGenie(
  submission: TalentGenieCVSubmission
): Promise<{ success: boolean; candidate_id?: number; error?: string }> {
  try {
    const form = new FormData();
    const blob = new Blob([new Uint8Array(submission.fileBuffer)], {
      type: "application/pdf",
    });
    form.append("file", blob, submission.fileName || "resume.pdf");

    if (submission.vacancyId && submission.vacancyId > 0) {
      form.append("vacancy_id", String(submission.vacancyId));
    }

    const res = await fetch(`${TALENT_GENIE_API_URL}/candidates/parse-cv`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`[TalentGenie] CV forward failed ${res.status}: ${text}`);
      return { success: false, error: text };
    }
    const data = await res.json();
    return { success: true, candidate_id: data.candidate?.id || data.id };
  } catch (err) {
    console.error("[TalentGenie] Error forwarding CV:", err);
    return { success: false, error: String(err) };
  }
}

// Build a slug from a Talent Genie job (prefix tg- to avoid conflicts)
export function talentGenieJobSlug(job: TalentGenieJob): string {
  return `tg-${job.vacancy_id}-${job.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

// Create a new vacancy in Talent Genie
export async function createTalentGenieVacancy(params: {
  title: string;
  description: string;
  department_id?: number;
  required_skills?: string[];
  experience_level?: string;
  employment_type?: string;
}): Promise<{ success: boolean; vacancy_id?: number; error?: string }> {
  try {
    const res = await fetch(`${TALENT_GENIE_API_URL}/vacancies/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: params.title,
        description: params.description,
        department_id: params.department_id || 8, // default to IT / Software Development
        required_skills: params.required_skills || [],
        experience_level: params.experience_level || "MID",
        status: "open",
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return { success: false, error: text };
    }

    const data = await res.json();
    const vacancyId = data.id || data.vacancy_id;

    // Publish to website integration so it appears immediately
    if (vacancyId) {
      await fetch(`${TALENT_GENIE_API_URL}/integrations/website/publish`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vacancy_id: vacancyId }),
      }).catch((e) => console.warn("[TalentGenie] Auto-publish notice:", e));
    }

    return { success: true, vacancy_id: vacancyId };
  } catch (err) {
    console.error("[TalentGenie] Create vacancy error:", err);
    return { success: false, error: String(err) };
  }
}

