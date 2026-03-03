"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import VacanciesSearchBar from "./VacanciesSearchBar";
const industries = [
  {
    id: 1,
    name: "Infrastructure",
    icon: "/assets/home/Group (5).png",
    href: "vacancies/infastructure",
    // href: "infastructure-vacancies",
  },
  {
    id: 2,
    name: "Energy",
    icon: "/assets/home/Group (6).png",
    href: "vacancies/energy",
  },
  {
    id: 3,
    name: "Oil & Gas",
    icon: "/assets/home/Group (7).png",
    href: "vacancies/oil-gas",
    // href: "vacancies/oil-gasandindustry-vacancies",
  },
];

type JobFilters = {
  sort?: "recent" | "title_asc" | "title_desc";
  search?: string;
};

export default function IndustryWeWork() {
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
      <div className="relative flex justify-center items-center ">
        <div className="lg:absolute z-30">
          <VacanciesSearchBar onSearch={handleSearch} />
        </div>
      </div>

      <section className=" bg-gray-50 lg:mt-20">
        <div className="container mx-auto py-20 px-10">
          <h2 className="text-center text-3xl md:text-4xl lg:text-8xl font-semibold text-black  p-10">
            The Industries we work in
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-20 mx-auto">
            {industries.map((item) => (
              <div
                key={item.id}
                className="bg-[#FF8026]  flex flex-col items-center justify-between p-6 h-56"
              >
                {/* icon */}
                <img src={item.icon} alt={item.name} className="w-25 h-25 " />

                {/* button style */}

                <Link href={`/${item.href}`} className="w-full pointer ">
                  <div className="w-full bg-white  mt-6 py-3 text-gray-700 flex items-center justify-between px-3 text-sm hover:bg-amber-100">
                    <span>{item.name}</span>
                    <span>
                      <ArrowRight className="text-gray-500" />
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
