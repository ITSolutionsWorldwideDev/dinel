"use client";

import { useState, useMemo } from "react";
import { Link } from "@/i18n/navigation";
import { MapPin } from "lucide-react";

export interface UnifiedJobItem {
  slug: string;
  title: string;
  category: string;
  type: string;
  status: string;
  location: string;
}

export interface UnifiedJobGroup {
  category: string;
  jobs: UnifiedJobItem[];
}

interface JobListViewProps {
  initialGroups: UnifiedJobGroup[];
  totalJobs: number;
  locale: "en" | "nl";
  initialCategory?: string;
}

export default function JobListView({
  initialGroups,
  totalJobs,
  locale,
  initialCategory,
}: JobListViewProps) {
  // Normalize initial category match if provided
  const initialSelected = useMemo(() => {
    if (!initialCategory) return "ALL";
    const match = initialGroups.find(
      (g) =>
        g.category.toLowerCase() === initialCategory.toLowerCase() ||
        g.category.toLowerCase().includes(initialCategory.toLowerCase()) ||
        initialCategory.toLowerCase().includes(g.category.toLowerCase())
    );
    return match ? match.category : "ALL";
  }, [initialCategory, initialGroups]);

  const [selectedCategory, setSelectedCategory] = useState<string>(initialSelected);

  // Available categories list
  const categoryTabs = useMemo(() => {
    return initialGroups.map((g) => ({
      name: g.category,
      count: g.jobs.length,
    }));
  }, [initialGroups]);

  // Filter groups according to selected category
  const filteredGroups = useMemo(() => {
    if (selectedCategory === "ALL") {
      return initialGroups;
    }
    return initialGroups.filter((g) => g.category === selectedCategory);
  }, [selectedCategory, initialGroups]);

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      {initialGroups.length > 1 && (
        <div className="w-full overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1">
          <div className="flex items-center justify-start lg:justify-center gap-1.5 sm:gap-2 min-w-max mx-auto px-1">
            <button
              type="button"
              onClick={() => setSelectedCategory("ALL")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                selectedCategory === "ALL"
                  ? "bg-[#0d2b33] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {locale === "nl" ? "Alle categorieën" : "All Categories"}{" "}
              <span
                className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  selectedCategory === "ALL"
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {totalJobs}
              </span>
            </button>

            {categoryTabs.map((cat) => {
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                    isActive
                      ? "bg-[#0d2b33] text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat.name}{" "}
                  <span
                    className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Vacancy Groups */}
      <div className="space-y-12">
        {filteredGroups.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 md:p-14 text-center border border-slate-200/80 shadow-sm max-w-2xl mx-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0d2b33]/5 text-[#0d2b33] flex items-center justify-center font-bold text-2xl">
              💼
            </div>
            <h3 className="text-xl md:text-2xl font-black text-[#0d2b33]">
              {locale === "nl"
                ? "Momenteel geen openstaande vacatures in deze categorie"
                : "No open vacancies in this category"}
            </h3>
            <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              {locale === "nl"
                ? "Bekijk andere categorieën of stuur ons een open sollicitatie via het contactformulier."
                : "Please browse other categories or send an open application via our contact form."}
            </p>
            <div className="pt-3 flex flex-wrap gap-3 justify-center">
              <button
                type="button"
                onClick={() => setSelectedCategory("ALL")}
                className="px-6 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 text-sm font-bold hover:bg-slate-50 transition"
              >
                {locale === "nl" ? "Toon alle vacatures" : "Show All Vacancies"}
              </button>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#0d2b33] text-white text-sm font-bold hover:bg-[#153e49] transition shadow-md shadow-[#0d2b33]/15"
              >
                {locale === "nl" ? "Contact opnemen" : "Contact Us"}
              </Link>
            </div>
          </div>
        ) : (
          filteredGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0d2b33]" />
                <h3 className="text-xl font-black text-[#0d2b33] tracking-tight">
                  {group.category}
                </h3>
                <span className="text-xs font-bold text-slate-400">
                  ({group.jobs.length})
                </span>
              </div>

              <div className="space-y-4">
                {group.jobs.map((job) => (
                  <div
                    key={job.slug}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-slate-300 transition-colors"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-[#0d2b33]/10 text-[#0d2b33] text-[11px] font-bold tracking-wide uppercase">
                          {job.type}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-bold tracking-wide uppercase">
                          {job.status}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold tracking-wide uppercase">
                          {job.category}
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
  );
}
