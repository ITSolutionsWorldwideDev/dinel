"use client";

import { Link } from "../../../i18n/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface VacanciesSearchBarProps {
  onSearch?: (value: string) => void;
}

export default function VacanciesSearchBar({ onSearch }: VacanciesSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const t = useTranslations("vacanciesSearch");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
      return;
    }

    if (!searchQuery.trim()) return;

    router.push(
      `/vacancies/all?search=${encodeURIComponent(searchQuery)}`
    );
  };

  const handleAllVacancies = () => {
    setSearchQuery("");
    if (onSearch) {
      onSearch("");
      return;
    }
    router.push("/vacancies/all");
  };

  return (
    <div className="w-[90vw] max-w-3xl bg-white flex items-center justify-center p-6 md:p-8 rounded-[2rem] border-2 border-[#1a4550]/15 shadow-2xl shadow-[#1a4550]/10 mx-auto relative overflow-hidden backdrop-blur-xl -mt-6 sm:-mt-8 md:-mt-10 z-20">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#1a4550]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#f2c40d]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-black text-[#0d2b33] tracking-tight mb-2">
            {t("heading")}
          </h2>

          <p className="text-xs md:text-sm text-gray-600 font-medium max-w-md mx-auto leading-relaxed">
            {t("subtext")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch justify-center max-w-2xl mx-auto">
          <div className="flex-1 relative shadow-inner rounded-xl">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1a4550]/50">
              <FaSearch size={14} />
            </div>

            <input
              type="text"
              placeholder={t("placeholder")}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (onSearch) {
                  onSearch(e.target.value);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="bg-[#f7fafa] w-full h-11 pl-11 pr-4 rounded-xl border-2 border-[#0d2b33]/10 focus:outline-none focus:bg-white focus:border-[#1a4550] focus:ring-4 focus:ring-[#1a4550]/10 text-xs md:text-sm text-[#0d2b33] font-medium placeholder:text-gray-400 transition-all"
            />
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="h-11 px-6 rounded-xl bg-[#f2c40d] text-[#0d2b33] text-xs md:text-sm font-black shadow-lg shadow-[#f2c40d]/20 hover:bg-[#0d2b33] hover:text-white transition-all duration-300 cursor-pointer shrink-0 active:scale-95"
          >
            {t("searchButton")}
          </button>

          <Link
            href="/vacancies/all"
            onClick={handleAllVacancies}
            className="h-11 px-6 rounded-xl border-2 border-[#1a4550]/20 bg-transparent text-[#1a4550] text-xs md:text-sm font-black hover:bg-[#1a4550] hover:text-white hover:border-[#1a4550] transition-all duration-300 cursor-pointer flex items-center justify-center shrink-0 active:scale-95 shadow-sm"
          >
            {t("allVacancies")}
          </Link>
        </div>
      </div>
    </div>
  );
}