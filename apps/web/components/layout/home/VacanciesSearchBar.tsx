"use client";

import { Link, useRouter } from "../../../i18n/navigation";
import React, { useMemo, useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { useLocale } from "next-intl";
import { allJobs, jobCategories, localizeJob } from "../../../app/data/jobs";

interface VacanciesSearchBarProps {
  onSearch?: (value: string) => void;
}

export default function VacanciesSearchBar({ onSearch }: VacanciesSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categoryOpen, setCategoryOpen] = useState(false);

  const router = useRouter();
  const locale = useLocale() as "en" | "nl";

  // Categories list for the dropdown filter
  const categories = useMemo(() => {
    const seen = new Set<string>();
    const list: { label: string; value: string }[] = [];
    jobCategories.forEach((group: any) => {
      const label = group.category[locale];
      if (!seen.has(label)) {
        seen.add(label);
        list.push({ label, value: label });
      }
    });
    return list;
  }, [locale]);

  // Live filtered jobs for auto-suggestion dropdown
  const filteredJobs = useMemo(() => {
    if (!searchQuery.trim() && !selectedCategory) return [];
    
    return allJobs.filter((job) => {
      const localized = localizeJob(job, locale);
      const matchesQuery = searchQuery.trim() === "" || 
        localized.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        localized.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || localized.category === selectedCategory;
      
      return matchesQuery && matchesCategory;
    }).slice(0, 5); // Limit to top 5 results for clean dropdown
  }, [searchQuery, selectedCategory, locale]);

const handleSearch = () => {
    const results = filteredJobs ?? [];
    if (results.length === 1 && results[0]) {
      router.push(`/jobs/${results[0]?.slug}`);
    } else {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.set("search", searchQuery.trim());
      if (selectedCategory) params.set("category", selectedCategory);
      const qs = params.toString();
      router.push(`/careers${qs ? `?${qs}` : ""}`);
    }
  };

  const handleAllVacancies = () => {
    setSearchQuery("");
    setSelectedCategory("");
    if (onSearch) {
      onSearch("");
      return;
    }
    router.push("/careers");
  };

  const handleCategorySelect = (value: string) => {
    setSelectedCategory((prev) => (prev === value ? "" : value));
    setCategoryOpen(false);
  };

  return (
    <div className="w-[90vw] max-w-3xl bg-white flex flex-col items-center justify-center p-6 md:p-8 rounded-[2rem] border-2 border-[#1a4550]/15 shadow-2xl shadow-[#1a4550]/10 mx-auto relative backdrop-blur-xl -mt-6 sm:-mt-8 md:-mt-10 z-30 overflow-visible">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#1a4550]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#f2c40d]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-black text-[#0d2b33] tracking-tight mb-2">
            Search Open Vacancies
          </h2>
          <p className="text-xs md:text-sm text-gray-600 font-medium max-w-md mx-auto leading-relaxed">
            Find your next career opportunity with our team.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch justify-center max-w-3xl mx-auto relative">
          {/* Category Filter Dropdown */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="h-11 px-4 rounded-xl border-2 border-[#0d2b33]/10 bg-[#f7fafa] hover:bg-white hover:border-[#1a4550] transition-all text-xs md:text-sm font-bold text-[#0d2b33] flex items-center gap-2 min-w-[150px] justify-between cursor-pointer"
            >
              <span className="truncate">
                {selectedCategory || "All Categories"}
              </span>
              <FaChevronDown
                className={`w-3 h-3 shrink-0 text-[#1a4550] transition-transform duration-200 ${
                  categoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* FIXED DROPDOWN (Added proper z-index and absolute positioning) */}
            {categoryOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl shadow-[#1a4550]/20 rounded-xl border-2 border-[#1a4550]/10 py-2 z-50 max-h-72 overflow-y-auto">
                <button
                  type="button"
                  onClick={() => handleCategorySelect("")}
                  className={`w-full text-left px-4 py-2 text-xs md:text-sm hover:bg-[#1a4550]/5 transition-colors ${
                    !selectedCategory ? "font-black text-[#1a4550]" : "text-gray-700 font-medium"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => handleCategorySelect(cat.value)}
                    className={`w-full text-left px-4 py-2 text-xs md:text-sm hover:bg-[#1a4550]/5 transition-colors ${
                      selectedCategory === cat.value
                        ? "font-black text-[#1a4550]"
                        : "text-gray-700 font-medium"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Input Container with Live Suggestions Dropdown */}
          <div className="flex-1 relative shadow-inner rounded-xl">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1a4550]/50">
              <FaSearch size={14} />
            </div>

            <input
              type="text"
              placeholder="Search by job title or keyword..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (onSearch) onSearch(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              className="bg-[#f7fafa] w-full h-11 pl-11 pr-4 rounded-xl border-2 border-[#0d2b33]/10 focus:outline-none focus:bg-white focus:border-[#1a4550] focus:ring-4 focus:ring-[#1a4550]/10 text-xs md:text-sm text-[#0d2b33] font-medium placeholder:text-gray-400 transition-all"
            />

            {/* LIVE AUTO-SUGGESTION RESULTS DROPDOWN */}
            {searchQuery.trim() && filteredJobs.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-2xl shadow-[#1a4550]/20 rounded-xl border-2 border-[#1a4550]/10 py-2 z-50 max-h-72 overflow-y-auto">
                {filteredJobs.map((job) => {
                  const localized = localizeJob(job, locale);
                  return (
                    <Link
                      key={job.slug}
                      href={`/jobs/${job.slug}`}
                      className="block px-4 py-3 hover:bg-[#1a4550]/5 transition-colors border-b border-gray-100 last:border-none"
                      onClick={() => setSearchQuery("")}
                    >
                      <p className="text-xs md:text-sm font-bold text-[#0d2b33]">
                        {localized.title}
                      </p>
                      <p className="text-[11px] text-gray-500 font-medium">
                        {localized.category} • {localized.location}
                      </p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="h-11 px-6 rounded-xl bg-[#f2c40d] text-[#0d2b33] text-xs md:text-sm font-black shadow-lg shadow-[#f2c40d]/20 hover:bg-[#0d2b33] hover:text-white transition-all duration-300 cursor-pointer shrink-0 active:scale-95"
          >
            Search
          </button>

          <Link
            href="/careers"
            onClick={handleAllVacancies}
            className="h-11 px-6 rounded-xl border-2 border-[#1a4550]/20 bg-transparent text-[#1a4550] text-xs md:text-sm font-black hover:bg-[#1a4550] hover:text-white hover:border-[#1a4550] transition-all duration-300 cursor-pointer flex items-center justify-center shrink-0 active:scale-95 shadow-sm"
          >
            All Vacancies
          </Link>
        </div>
      </div>
    </div>
  );
}