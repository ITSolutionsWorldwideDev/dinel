import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MapPin, ArrowLeft, Clock3, CheckCircle2 } from "lucide-react";
import { getJobBySlug, localizeJob, allJobs } from "@/app/data/jobs";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { getCanonicalUrl } from "@/lib/seo";
import {
  getTalentGenieJobs,
  getTalentGenieJobById,
  talentGenieJobSlug,
  type TalentGenieJob,
} from "@/lib/talentgenie/client";

// Schema.org employment type mapper
function mapEmploymentType(type: string): string {
  const normalized = type.toLowerCase();
  if (normalized.includes("part")) return "PART_TIME";
  if (normalized.includes("contract")) return "CONTRACTOR";
  if (normalized.includes("temp")) return "TEMPORARY";
  if (normalized.includes("intern") || normalized.includes("stage"))
    return "INTERN";
  if (normalized.includes("volunteer")) return "VOLUNTEER";
  return "FULL_TIME";
}

// Helper: parse vacancy_id from tg-{id}-{rest} slug
function parseVacancyIdFromSlug(slug: string): number | null {
  const match = slug.match(/^tg-(\d+)-/);
  if (match && match[1]) return parseInt(match[1], 10);
  return null;
}

// Unified Job Interface for rendering in original design
interface UnifiedJobDetail {
  slug: string;
  title: string;
  category: string;
  type: string;
  status: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  vacancyId?: number;
}

async function resolveUnifiedJob(
  slug: string,
  locale: "en" | "nl",
): Promise<UnifiedJobDetail | null> {
  // 1. Check if it's a Talent Genie slug (tg-{vacancy_id}-...)
  const tgVacancyId = parseVacancyIdFromSlug(slug);
  if (tgVacancyId) {
    const tgJob = await getTalentGenieJobById(tgVacancyId);
    if (tgJob) {
      return transformTalentGenieJob(tgJob, slug, locale);
    }
  }

  // 2. Check hardcoded jobs in jobs.ts
  const rawJob = getJobBySlug(slug);
  if (rawJob) {
    const localized = localizeJob(rawJob, locale);
    // Find matching Talent Genie vacancy_id so applications link to Talent Genie
    const allTgJobs = await getTalentGenieJobs();
    const matchedTg = allTgJobs.find(
      (j) =>
        j.title.toLowerCase().trim() === rawJob.title.en.toLowerCase().trim(),
    );

    return {
      slug: localized.slug,
      title: localized.title,
      category: localized.category,
      type: localized.type,
      status: localized.status,
      location: localized.location,
      description: localized.description,
      responsibilities: localized.responsibilities || [],
      requirements: localized.requirements || [],
      vacancyId: matchedTg?.vacancy_id,
    };
  }

  // 3. Fallback: Check if any Talent Genie job matches the title slug
  const allTgJobs = await getTalentGenieJobs();
  const matchedTg = allTgJobs.find(
    (j) => talentGenieJobSlug(j) === slug || String(j.vacancy_id) === slug,
  );
  if (matchedTg) {
    return transformTalentGenieJob(matchedTg, slug, locale);
  }

  return null;
}

function transformTalentGenieJob(
  tgJob: TalentGenieJob,
  slug: string,
  locale: "en" | "nl",
): UnifiedJobDetail {
  // Extract bullet points or sentences from description for responsibilities
  const descLines = tgJob.description
    ? tgJob.description
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
    : [];

  const respItems = descLines
    .filter((l) => l.startsWith("-") || l.startsWith("•") || l.startsWith("*"))
    .map((l) => l.replace(/^[-•*]\s*/, "").trim());

  // Category
  let category =
    locale === "nl" ? "Informatie Technologie" : "Information Technology";
  if (
    tgJob.title.toLowerCase().includes("power bi") ||
    tgJob.title.toLowerCase().includes("data")
  ) {
    category = "Data & Analytics";
  }

  return {
    slug,
    title: tgJob.title,
    category,
    type: tgJob.employment_type || (locale === "nl" ? "Fulltime" : "Full-Time"),
    status: locale === "nl" ? "Actief" : "Active",
    location:
      tgJob.location ||
      (locale === "nl" ? "Rotterdam, Nederland" : "Rotterdam, Netherlands"),
    description: tgJob.ai_summary || descLines[0] || tgJob.description,
    responsibilities:
      respItems.length > 0
        ? respItems
        : descLines.slice(1, Math.min(descLines.length, 6)),
    requirements:
      tgJob.required_skills && tgJob.required_skills.length > 0
        ? tgJob.required_skills
        : ["Relevant professional experience", "Strong communication skills"],
    vacancyId: tgJob.vacancy_id,
  };
}

// Pre-render static pages for build time
export async function generateStaticParams() {
  const hardcodedSlugs = allJobs.map((j) => ({ slug: j.slug }));
  const tgJobs = await getTalentGenieJobs();
  const tgSlugs = tgJobs.map((j) => ({ slug: talentGenieJobSlug(j) }));
  return [...hardcodedSlugs, ...tgSlugs];
}

// Dynamic <title> / meta description per job
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const job = await resolveUnifiedJob(slug, (locale as "en" | "nl") || "en");

  if (!job) {
    return {
      title: "Job not found",
    };
  }

  return {
    title: `${job.title} | Careers`,
    description: job.description.slice(0, 160),
    alternates: {
      canonical: getCanonicalUrl(locale, ["jobs", slug]),
    },
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = (await getLocale()) as "en" | "nl";
  const job = await resolveUnifiedJob(slug, locale);

  if (!job) {
    notFound();
  }

  const allCategories = [{ value: job.category, label: job.category }];

  const today = new Date();
  const validThroughDate = new Date();
  validThroughDate.setFullYear(today.getFullYear() + 2);

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: [
      job.description,
      ...(job.responsibilities || []),
      ...(job.requirements || []),
    ].join(" "),
    identifier: {
      "@type": "PropertyValue",
      name: "Staff Outsourcing",
      value: job.slug,
    },
    datePosted: today.toISOString(),
    validThrough: validThroughDate.toISOString(),
    employmentType: mapEmploymentType(job.type),
    hiringOrganization: {
      "@type": "Organization",
      name: "Staff Outsourcing",
      sameAs: "https://staffoutsourcing.nl",
      logo: "https://staffoutsourcing.nl/assets/logo/Logo%202.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mandenmakerstraat 100C",
        postalCode: "3194 DG",
        addressLocality: "Hoogvliet Rotterdam",
        addressCountry: "NL",
      },
    },
  };

  return (
    <div className="bg-[#f6f4ef]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      {/* ---------- HERO HEADER (ORIGINAL DESIGN) ---------- */}
      <section className="bg-[#0d2b33] text-white">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16 pt-10 pb-14">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            All open roles
          </Link>

          <p className="text-[#c9a15a] text-sm font-semibold mb-3">
            {job.category}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] max-w-2xl">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8 text-[15px] text-white/70">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c9a15a]" />
              {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Clock3 className="w-4 h-4 text-[#c9a15a]" />
              {job.type}
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c9a15a]" />
              {job.status}
            </span>
          </div>
        </div>
      </section>

      {/* ---------- BODY (ORIGINAL DESIGN) ---------- */}
      <section className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16 py-14">
        <div className="grid md:grid-cols-[1fr_350px] gap-14 items-start">
          {/* Main content */}
          <div>
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#0d2b33] mb-4">
                About the role
              </h2>
              <p className="text-slate-600 leading-relaxed text-[15px] max-w-none whitespace-pre-line">
                {job.description}
              </p>
            </div>

            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="mb-12 pt-10 border-t border-slate-200">
                <h2 className="text-xl font-bold text-[#0d2b33] mb-5">
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[15px] text-slate-600 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a15a] mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <div className="mb-14 pt-10 border-t border-slate-200">
                <h2 className="text-xl font-bold text-[#0d2b33] mb-5">
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((item: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[15px] text-slate-600 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a15a] mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ---------- APPLICATION FORM SECTION (Job Seeker Locked) ---------- */}
            <div
              id="apply-form"
              className="pt-10 border-t border-slate-200 scroll-mt-10"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#0d2b33] tracking-tight">
                  Apply for this role
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Fill out your details below to submit your application for{" "}
                  {job.title}.
                </p>
              </div>

              <div className="w-full">
                <EnquiryForm
                  categories={allCategories}
                  defaultMode="jobseeker"
                  lockMode={true}
                  defaultCategory={job.category}
                  lockCategory={true}
                  defaultJobTitle={job.title}
                  lockJobTitle={true}
                  vacancyId={job.vacancyId}
                />
              </div>
            </div>
          </div>

          {/* Sticky sidebar (ORIGINAL DESIGN) */}
          <aside className="sticky top-10 h-fit">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-[#0d2b33] mb-5">
                Job overview
              </h3>

              <dl className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <dt className="text-slate-400">Category</dt>
                  <dd className="text-[#0d2b33] font-semibold text-right">
                    {job.category}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <dt className="text-slate-400">Type</dt>
                  <dd className="text-[#0d2b33] font-semibold">{job.type}</dd>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <dt className="text-slate-400">Location</dt>
                  <dd className="text-[#0d2b33] font-semibold">
                    {job.location}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-400">Status</dt>
                  <dd className="text-emerald-600 font-semibold">
                    {job.status}
                  </dd>
                </div>
              </dl>

              <a
                href="#apply-form"
                className="mt-6 block w-full text-center px-6 py-3 rounded-xl bg-[#0d2b33] text-white text-sm font-bold hover:bg-[#153e49] transition-colors"
              >
                Apply for this role
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
