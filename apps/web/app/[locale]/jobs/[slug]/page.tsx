import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { MapPin, ArrowLeft, Clock3, CheckCircle2 } from "lucide-react";
// Adjust this relative path if your tsconfig paths aren't set up for monorepo packages yet
import { allJobs, getJobBySlug } from "../../../data/jobs";

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

  return (
    <div className="bg-[#f6f4ef]">
      {/* ---------- HERO HEADER ---------- */}
      <section className="bg-[#0d2b33] text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-16 pt-10 pb-14">
          <Link
            href="/jobs"
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
      <section className="max-w-5xl mx-auto px-6 md:px-16 py-14">
        <div className="grid md:grid-cols-[1fr_300px] gap-14">
          {/* Main content */}
          <div>
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#0d2b33] mb-4">
                About the role
              </h2>
              <p className="text-slate-600 leading-relaxed text-[15px] max-w-[65ch]">
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

            <div className="pt-10 border-t border-slate-200">
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
          </div>

          {/* Sticky sidebar */}
          <aside className="md:sticky md:top-10 h-fit">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
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

              <Link
                href="/contact-us"
                className="mt-6 block w-full text-center px-6 py-3 rounded-xl bg-[#0d2b33] text-white text-sm font-bold hover:bg-[#153e49] transition-colors"
              >
                Apply for this role
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}