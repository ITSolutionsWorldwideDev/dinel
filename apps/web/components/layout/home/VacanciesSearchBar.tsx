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
    <div className="w-[80vw] max-w-5xl bg-gradient-to-r from-[#0d2b33] to-[#1a4550] flex items-center justify-center p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl mx-auto">
      <div className="w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {t("heading")}
          </h2>

          <p className="text-sm md:text-base text-white/80">
            {t("subtext")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-stretch justify-center max-w-3xl mx-auto">
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FaSearch size={16} />
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
              className="bg-white w-full h-11 pl-11 pr-4 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#f2c40d] text-sm text-gray-700"
            />
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="h-11 px-6 rounded-lg bg-[#f2c40d] text-[#0d2b33] text-sm font-semibold hover:bg-white transition-colors cursor-pointer shrink-0"
          >
            {t("searchButton")}
          </button>

          <Link
            href="/vacancies/all"
            onClick={handleAllVacancies}
            className="h-11 px-6 rounded-lg border-2 border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center shrink-0"
          >
            {t("allVacancies")}
          </Link>
        </div>
      </div>
    </div>
  );
}