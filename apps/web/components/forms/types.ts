export type FormMode = "hiring" | "jobseeker";

export interface Category {
  value: string;
  label: string;
}

export interface HiringFormState {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  category: string;
  positions: string;
  jobDescription: string;
  budget: string;
  jobDescriptionFile: File | null;
}

export interface JobSeekerFormState {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  coverMessage: string;
  linkedin: string;
  cv: File | null;
}

export const initialHiringState: HiringFormState = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  category: "",
  positions: "",
  jobDescription: "",
  budget: "",
  jobDescriptionFile: null,
};

export const initialJobSeekerState: JobSeekerFormState = {
  fullName: "",
  email: "",
  phone: "",
  category: "",
  coverMessage: "",
  linkedin: "",
  cv: null,
};