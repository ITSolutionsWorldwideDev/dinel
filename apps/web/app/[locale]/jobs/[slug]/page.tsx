import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { MapPin, ArrowLeft, Clock3, CheckCircle2 } from "lucide-react";
import { allJobs, getJobBySlug } from "../../../data/jobs";
import EnquiryForm from "@/components/forms/EnquiryForm";

// Pre-render a static page for every job slug at build time
export function generateStaticParams() {
  return allJobs.map((job) => ({
    slug: job.slug,
  }));
}

// Dynamic <title> / meta description per job
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Job not found" };
  }

  return {
    title: `${job.title} | Careers`,
    description: job.description,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  // Define categories array matching the Category type ({ value, label })
  const allCategories = [
    { value: job.category, label: job.category }
  ];

  return (
    <div className="bg-[#f6f4ef]">
      {/* ---------- HERO HEADER ---------- */}
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

      {/* ---------- BODY ---------- */}
      <section className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16 py-14">
        <div className="grid md:grid-cols-[1fr_350px] gap-14 items-start">
          {/* Main content */}
          <div>
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#0d2b33] mb-4">
                About the role
              </h2>
              <p className="text-slate-600 leading-relaxed text-[15px] max-w-none">
                {job.description}
              </p>
            </div>

            <div className="mb-12 pt-10 border-t border-slate-200">
              <h2 className="text-xl font-bold text-[#0d2b33] mb-5">
                Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a15a] mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14 pt-10 border-t border-slate-200">
              <h2 className="text-xl font-bold text-[#0d2b33] mb-5">
                Requirements
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-[15px] text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a15a] mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ---------- APPLICATION FORM SECTION (Job Seeker Locked) ---------- */}
            <div id="apply-form" className="pt-10 border-t border-slate-200 scroll-mt-10">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#0d2b33] tracking-tight">
                  Apply for this role
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Fill out your details below to submit your application for {job.title}.
                </p>
              </div>

              <div className="w-full">
                <EnquiryForm
                  categories={allCategories}
                  defaultMode="jobseeker"
                  lockMode={true}
                  defaultCategory={job.category}
                  lockCategory={true}
                />
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
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
                  <dd className="text-[#0d2b33] font-semibold">{job.location}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-400">Status</dt>
                  <dd className="text-emerald-600 font-semibold">{job.status}</dd>
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