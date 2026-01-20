export type JobFilters = {
  status?: "DRAFT" | "PUBLISHED" | "CLOSED";
  employment_type?: "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERN";
  workplace_type?: "ONSITE" | "REMOTE" | "HYBRID";
  experience_level?: "JUNIOR" | "MID" | "SENIOR" | "LEAD";
  sort?: "recent" | "title_asc" | "title_desc";
  search?: string;
};
