"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "../../../i18n/navigation";
import VacanciesSearchBar from "./VacanciesSearchBar";
import { useTranslations } from "next-intl";

type JobFilters = {
  sort?: "recent" | "title_asc" | "title_desc";
  search?: string;
};

export default function IndustryWeWork() {
  const t = useTranslations("industryWeWork");

  const industries = [
    {
      id: 1,
      name: t("infrastructure"),
      icon: "/assets/home/Group (5).png",
      href: "vacancies/infastructure",
    },
    {
      id: 2,
      name: t("energy"),
      icon: "/assets/home/Group (6).png",
      href: "vacancies/energy",
    },
    {
      id: 3,
      name: t("oilGas"),
      icon: "/assets/home/Group (7).png",
      href: "vacancies/oil-gas",
    },
  ];

  const [filters, setFilters] = useState<JobFilters>({
    sort: "recent",
  });
  const [page, setPage] = useState(1);

  const handleSearch = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      search: value || undefined,
    }));
    setPage(1);
  };

  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className="lg:absolute z-35">
          <VacanciesSearchBar onSearch={handleSearch} />
        </div>
      </div>

      <section className="bg-gray-50 pt-12 lg:mt-12 pb-0">
        <div className="w-full pt-10 pb-0 px-4 md:px-8 lg:px-12">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0d2b33] mb-12">
            {t("heading")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
            {industries.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-[#0d2b33] to-[#1a4550] flex flex-col items-center justify-between p-6 h-56 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img src={item.icon} alt={item.name} className="w-20 h-20 brightness-0 invert" />

                <Link href={`/${item.href}`} className="w-full pointer">
                  <div className="w-full bg-white rounded-lg mt-4 py-3 text-[#0d2b33] font-medium flex items-center justify-between px-3 text-sm hover:bg-[#f2c40d] transition-colors">
                    <span>{item.name}</span>
                    <span>
                      <ArrowRight className="text-[#0d2b33]" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}