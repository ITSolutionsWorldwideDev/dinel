import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getDbPublishedJobs, resolveJobCategory } from "@/lib/jobs/dbJobs";
import JobListView, { UnifiedJobGroup, UnifiedJobItem } from "./JobListView";

interface JobListProps {
  initialCategory?: string;
}

export default async function JobList({ initialCategory }: JobListProps = {}) {
  const locale = (await getLocale()) as "en" | "nl";

  // Load published jobs from database
  const dbJobs = await getDbPublishedJobs();

  // Combine into unified groups by correct category
  const groupsMap = new Map<string, UnifiedJobItem[]>();

  for (const job of dbJobs) {
    const categoryName = resolveJobCategory(job, locale);

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

  // Canonical ordering for categories
  const canonicalOrder = [
    "Supply Chain & Logistics",
    "Engineering",
    "IT & Support",
    "Software Development",
    "Data & Analytics",
    "Administration & Management",
  ];

  const jobGroups: UnifiedJobGroup[] = Array.from(
    groupsMap.entries(),
  )
    .map(([category, jobs]) => ({ category, jobs }))
    .sort((a, b) => {
      const idxA = canonicalOrder.indexOf(a.category);
      const idxB = canonicalOrder.indexOf(b.category);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.category.localeCompare(b.category);
    });

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

        {totalJobs === 0 ? (
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
          <JobListView
            initialGroups={jobGroups}
            totalJobs={totalJobs}
            locale={locale}
            initialCategory={initialCategory}
          />
        )}
      </div>
    </section>
  );
}