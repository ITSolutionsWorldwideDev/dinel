"use client";
import React, { useState } from "react";
import { ArrowRight, HardHat, Truck, Monitor } from "lucide-react";
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
      name: t("infrastructure"), // Supply Chain
      icon: Truck,
      href: "/careers?category=Supply+Chain", // Supply Chain category filter
      description: "Optimizing global logistics, warehouse operations, and inventory management for seamless flow and operational efficiency.",
    },
    {
      id: 2,
      name: t("energy"), // Engineering
      icon: HardHat,
      href: "/careers?category=Engineering", // Engineering category filter
      description: "Driving innovation and technical excellence across complex structural, mechanical, and industrial engineering projects.",
    },
    {
      id: 3,
      name: t("oilGas"), // IT
      icon: Monitor,
      href: "/careers?category=IT", // IT category filter
      description: "Empowering digital transformation through robust software solutions, cloud infrastructure, and advanced technical support.",
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

      <section className="bg-white pt-16 lg:mt-16 pb-20 overflow-hidden w-full">
        <div className="w-full pt-10 pb-0 px-4 md:px-10 lg:px-16">
          
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1a4550]/10 text-[#1a4550] text-xs font-bold tracking-wider uppercase mb-3">
              ~ Our Industries ~
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d2b33] tracking-tight">
              Industries <span className="text-[#1a4550]">We Work</span> in The Finest!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pt-10">
            {industries.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative bg-white pt-16 pb-6 px-6 rounded-3xl shadow-xl shadow-[#1a4550]/5 border border-gray-100 flex flex-col items-center justify-between text-center group hover:-translate-y-2 transition-all duration-300 w-full"
                >
                  {/* Floating Badge Icon */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[#1a4550] to-[#0d2b33] rounded-2xl rotate-45 flex items-center justify-center shadow-lg shadow-[#1a4550]/30 group-hover:rotate-90 transition-transform duration-500">
                    <IconComponent className="w-10 h-10 text-white -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
                  </div>

                  <div className="mt-4 w-full">
                    <h3 className="text-xl font-bold text-[#0d2b33] mb-2 group-hover:text-[#1a4550] transition-colors">
                      {item.name}
                    </h3>

                    <div className="w-12 h-1 bg-[#1a4550] mx-auto rounded-full mb-4" />

                    <p className="text-xs text-gray-500 leading-relaxed mb-6 px-2">
                      {item.description}
                    </p>
                  </div>

                  <Link href={item.href} className="w-full">
                    <div className="w-full bg-[#1a4550] text-white rounded-xl py-3 px-4 font-semibold flex items-center justify-between text-xs hover:bg-[#0d2b33] transition-all duration-300 shadow-md shadow-[#1a4550]/20">
                      <span>Explore Vacancies</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}