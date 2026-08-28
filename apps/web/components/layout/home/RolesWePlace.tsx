"use client";

import React, { useState } from "react";
import { Link } from "../../../i18n/navigation";
import { FaCode, FaPaintBrush, FaChartLine, FaHeadset, FaCalculator, FaPlane } from "react-icons/fa";
import { useTranslations } from "next-intl";

const categoryIcons = [
  <FaCode className="w-5 h-5 text-[#0d2b33]" />,
  <FaPaintBrush className="w-5 h-5 text-[#0d2b33]" />,
  <FaChartLine className="w-5 h-5 text-[#0d2b33]" />,
  <FaHeadset className="w-5 h-5 text-[#0d2b33]" />,
  <FaCalculator className="w-5 h-5 text-[#0d2b33]" />,
  <FaPlane className="w-5 h-5 text-[#0d2b33]" />,
];

type Category = {
  title: string;
  href: string;
  roles: string[];
};

export default function RolesWePlace() {
  const [activeCategory, setActiveCategory] = useState(0);
  const t = useTranslations("rolesWePlace");
  const roleCategories = t.raw("categories") as Category[];

  const currentCategory = roleCategories[activeCategory] || roleCategories[0];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0d2b33] bg-[#0d2b33]/5 px-3 py-1.5 rounded-full inline-block mb-3">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0d2b33] tracking-tight">
            {t("heading")}
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            {t("subheading")}
          </p>
        </div>

        <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {roleCategories.map((category, index) => {
            const isActive = activeCategory === index;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`whitespace-nowrap inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 shrink-0 border ${
                  isActive
                    ? "bg-[#0d2b33] text-white border-[#0d2b33] shadow-md"
                    : "bg-gray-50 text-gray-700 border-[#0d2b33]/30 hover:bg-gray-100 hover:border-[#0d2b33]"
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center ${isActive ? "bg-white/10 text-white" : "bg-white text-[#0d2b33] shadow-xs border border-[#0d2b33]/20"}`}>
                  {categoryIcons[index]}
                </span>
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-3">
          {currentCategory?.roles?.map((role, rIndex) => (
            <Link
              key={rIndex}
              href={currentCategory.href}
              className="bg-white border border-[#0d2b33] rounded-full px-6 py-3 text-sm font-medium text-[#0d2b33] shadow-2xs hover:bg-[#0d2b33] hover:text-white transition-all duration-200 flex items-center gap-2.5 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#f2c40d] group-hover:bg-white transition-colors"></span>
              {role}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}