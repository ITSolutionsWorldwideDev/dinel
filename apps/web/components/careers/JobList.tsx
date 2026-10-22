import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MapPin } from "lucide-react";
import { getDbPublishedJobs } from "@/lib/jobs/dbJobs";

interface UnifiedJobItem {
  slug: string;
  title: string;
  category: string;
  type: string;
  status: string;
  location: string;
}

interface UnifiedJobGroup {
  category: string;
  jobs: UnifiedJobItem[];
}

function normalizeTitle(t: string): string {
  return t.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export default async function JobList() {
  const locale = (await getLocale()) as "en" | "nl";

  // Load published jobs from Staff Outsourcing admin database
  const dbJobs = await getDbPublishedJobs();

  // Combine into unified groups by category
  const groupsMap = new Map<string, UnifiedJobItem[]>();

  for (const job of dbJobs) {
    let categoryName = job.sector_name || job.department;
    if (!categoryName) {
      const lower = job.title.toLowerCase();
      if (lower.includes("data") || lower.includes("power bi") || lower.includes("analytics")) {
        categoryName = "Data & Analytics";
      } else if (lower.includes("engineer") || lower.includes("structural") || lower.includes("mechanical")) {
        categoryName = locale === "nl" ? "Engineering" : "Engineering";
      } else if (lower.includes("supply") || lower.includes("logistics") || lower.includes("warehouse")) {
        categoryName = locale === "nl" ? "Supply Chain" : "Supply Chain";
      } else {
        categoryName = locale === "nl" ? "Informatie Technologie" : "Information Technology";
      }
    }

    const typeDisplay =
      job.employment_type === "FULL_TIME"
        ? locale === "nl" ? "Fulltime" : "Full-Time"
        : job.employment_type === "PART_TIME"
        ? locale === "nl" ? "Parttime" : "Part-Time"
        : job.employment_type || (locale === "nl" ? "Fulltime" : "Full-Time");

    const item: UnifiedJobItem = {
      slug: job.slug || String(job.id),
      title: job.title,
      category: categoryName,
      type: typeDisplay,
      status: locale === "nl" ? "Actief" : "Active",
      location: job.location || (locale === "nl" ? "Rotterdam, Nederland" : "Rotterdam, Netherlands"),
    };

    if (!groupsMap.has(categoryName)) {
      groupsMap.set(categoryName, []);
    }
    groupsMap.get(categoryName)!.push(item);
  }

  const jobGroups: UnifiedJobGroup[] = Array.from(
    groupsMap.entries(),
  ).map(([category, jobs]) => ({ category, jobs }));

  const totalJobs = jobGroups.reduce((acc, g) => acc + g.jobs.length, 0);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-slate-50 min-h-screen">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-[#0d2b33] tracking-tight">
            Find Your Next <span className="text-[#0d2b33]">Great Role</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            {totalJobs} {locale === "nl" ? "beschikbare functies" : "positions found"}
          </p>
        </div>

        <div className="space-y-12">
          {jobGroups.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 md:p-14 text-center border border-slate-200/80 shadow-sm max-w-2xl mx-auto space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0d2b33]/5 text-[#0d2b33] flex items-center justify-center font-bold text-2xl">
                💼
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#0d2b33]">
                {locale === "nl"
                  ? "Momenteel geen openstaande vacatures"
                  : "No open vacancies at the moment"}
              </h3>
              <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                {locale === "nl"
                  ? "We hebben op dit moment geen openstaande vacatures online staan. U kunt altijd een open sollicitatie sturen via ons contactformulier."
                  : "We currently do not have any open vacancies listed. You are welcome to submit an open application through our contact form."}
              </p>
              <div className="pt-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#0d2b33] text-white text-sm font-bold hover:bg-[#153e49] transition-all shadow-md shadow-[#0d2b33]/15"
                >
                  {locale === "nl"
                    ? "Open sollicitatie versturen"
                    : "Submit Open Application"}
                </Link>
              </div>
            </div>
          ) : (
            jobGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0d2b33]" />
                  <h3 className="text-xl font-black text-[#0d2b33] tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.jobs.map((job) => (
                    <div
                      key={job.slug}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-full bg-[#0d2b33]/10 text-[#0d2b33] text-[11px] font-bold tracking-wide uppercase">
                            {job.type}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-bold tracking-wide uppercase">
                            {job.status}
                          </span>
                        </div>

                        <Link
                          href={{
                            pathname: "/jobs/[slug]",
                            params: { slug: job.slug },
                          }}
                        >
                          <h4 className="font-extrabold text-[#0d2b33] text-lg sm:text-xl hover:underline cursor-pointer">
                            {job.title}
                          </h4>
                        </Link>

                        <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                          <MapPin className="w-3.5 h-3.5 text-[#0d2b33]" />
                          <span>{job.location}</span>
                        </div>
                      </div>

                      <div className="w-full sm:w-auto flex items-center justify-end">
                        <Link
                          href={{
                            pathname: "/jobs/[slug]",
                            params: { slug: job.slug },
                          }}
                          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0d2b33] text-white text-sm font-bold hover:bg-[#153e49] transition-colors text-center shadow-sm"
                        >
                          {locale === "nl" ? "Bekijk vacature" : "View details"}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}