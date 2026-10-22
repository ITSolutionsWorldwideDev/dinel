export type LocalizedText = {
  en: string;
  nl: string;
};

export type Job = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  type: LocalizedText;
  status: LocalizedText;
  location: LocalizedText;
  description: LocalizedText;
  responsibilities: LocalizedText[];
  requirements: LocalizedText[];
};

export type JobCategoryGroup = {
  category: LocalizedText;
  jobs: Job[];
};

export const jobCategories: JobCategoryGroup[] = [];

// Flat list — useful for lookups, generateStaticParams, search, etc.
export const allJobs: Job[] = jobCategories.flatMap((group) => group.jobs);

export function getJobBySlug(slug: string): Job | undefined {
  return allJobs.find((job) => job.slug === slug);
}

export function localizeJob(job: Job, locale: "en" | "nl") {
  return {
    slug: job.slug,
    title: job.title[locale],
    category: job.category[locale],
    type: job.type[locale],
    status: job.status[locale],
    location: job.location[locale],
    description: job.description[locale],
    responsibilities: job.responsibilities.map((r) => r[locale]),
    requirements: job.requirements.map((r) => r[locale]),
  };
}

export function localizeJobCategories(locale: "en" | "nl") {
  return jobCategories.map((group) => ({
    category: group.category[locale],
    jobs: group.jobs.map((job) => localizeJob(job, locale)),
  }));
}
