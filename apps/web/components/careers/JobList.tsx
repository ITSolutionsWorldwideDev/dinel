import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MapPin } from "lucide-react";
import { localizeJobCategories, allJobs } from "@/app/data/jobs";
import {
  getTalentGenieJobs,
  talentGenieJobSlug,
  type TalentGenieJob,
} from "@/lib/talentgenie/client";

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

  // 1. Load primary Staff Outsourcing jobs from jobs.ts (with full Dutch & English translations)
  const hardcodedCategories = localizeJobCategories(locale);

  // 2. Load live published jobs from Talent Genie API
  const tgJobs: TalentGenieJob[] = await getTalentGenieJobs();

  // Combine into unified groups with strict deduplication
  const groupsMap = new Map<string, UnifiedJobItem[]>();
  const seenJobTitles = new Set<string>();

  // Check which jobs are currently active in Talent Genie
  const activeTgTitles = new Set(tgJobs.map((j) => normalizeTitle(j.title)));
  const useTgFilter = tgJobs.length > 0;

  // Add primary Staff Outsourcing jobs (only if still active in Talent Genie, or fallback if TG offline)
  for (const group of hardcodedCategories) {
    const list: UnifiedJobItem[] = [];
    for (const j of group.jobs) {
      const norm = normalizeTitle(j.title);
      // If Talent Genie is connected, only display jobs that exist in Talent Genie!
      if (useTgFilter && !activeTgTitles.has(norm)) {
        continue;
      }
      if (!seenJobTitles.has(norm)) {
        seenJobTitles.add(norm);
        list.push({
          slug: j.slug,
          title: j.title,
          category: group.category,
          type: j.type,
          status: j.status,
          location: j.location,
        });
      }
    }
    if (list.length > 0) {
      groupsMap.set(group.category, list);
    }
  }

  // Add any additional unique jobs created directly in Talent Genie
  for (const tg of tgJobs) {
    const norm = normalizeTitle(tg.title);
    if (seenJobTitles.has(norm)) {
      // Already displayed via primary Staff Outsourcing list — skip duplicate!
      continue;
    }
    seenJobTitles.add(norm);

    const slug = talentGenieJobSlug(tg);

    // Map TG department or title to category
    let categoryName =
      locale === "nl" ? "Informatie Technologie" : "Information Technology";
    const lowerTitle = tg.title.toLowerCase();
    if (lowerTitle.includes("data") || lowerTitle.includes("power bi") || lowerTitle.includes("analytics")) {
      categoryName = locale === "nl" ? "Data & Analytics" : "Data & Analytics";
    } else if (lowerTitle.includes("engineer") || lowerTitle.includes("structural") || lowerTitle.includes("mechanical")) {
      categoryName = locale === "nl" ? "Engineering" : "Engineering";
    } else if (lowerTitle.includes("supply") || lowerTitle.includes("logistics") || lowerTitle.includes("warehouse") || lowerTitle.includes("procurement")) {
      categoryName = locale === "nl" ? "Supply Chain" : "Supply Chain";
    }

    const item: UnifiedJobItem = {
      slug,
      title: tg.title,
      category: categoryName,
      type: tg.employment_type || (locale === "nl" ? "Fulltime" : "Full-Time"),
      status: locale === "nl" ? "Actief" : "Active",
      location:
        tg.location ||
        (locale === "nl" ? "Rotterdam, Nederland" : "Rotterdam, Netherlands"),
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
          {jobGroups.map((group, groupIndex) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}