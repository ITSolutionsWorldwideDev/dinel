// apps/web/components/account/types.ts

export type ApplicationStatus =
  | "APPLIED"
  | "SHORTLISTED"
  | "INTERVIEW"
  | "REJECTED"
  | "HIRED";

export type Application = {
  id: string;
  jobTitle: string;
  company: string;
  location?: string;
  status: ApplicationStatus;
  appliedAt: string;
};
