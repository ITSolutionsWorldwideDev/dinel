// apps/admin/types/candidate.ts
export type Candidate = {
  id: string;
  tenant_id: string;

  full_name: string;
  email?: string;
  phone?: string;
  location?: string;

  headline?: string;
  skills?: string[];

  source: "cv-upload" | "linkedin-extension" | "manual";
  cv_url?: string;
  linkedin_url?: string;

  created_at: string;
  updated_at?: string;
};
