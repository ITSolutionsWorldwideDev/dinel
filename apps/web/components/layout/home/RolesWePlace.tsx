"use client";

import React, { useRef } from "react";
import { Link } from "../../../i18n/navigation";
import {
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaHeadset,
  FaCalculator,
  FaPlane,
  FaArrowRight,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

const categories = [
  { name: "IT & Development", href: "/it-development", icon: FaCode },
  { name: "Design Services", href: "/design-services", icon: FaPaintBrush },
  { name: "Marketing & Analytics", href: "/marketing-analytics", icon: FaChartLine },
  { name: "Administration & Business Support", href: "/admin-business-support", icon: FaHeadset },
  { name: "Finance & Accounting", href: "/finance-accounting", icon: FaCalculator },
  { name: "Travel & Reservations", href: "/travel-reservations", icon: FaPlane },
];

type CategoryRoles = {
  title: string;
  roles: string[];
};

export default function RolesWePlace() {
  const t = useTranslations("rolesWePlace");
  const roleCategories = t.raw("categories") as CategoryRoles[];
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0d2b33] bg-[#f2c40d]/15 px-3 py-1.5 rounded-full inline-block mb-3">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0d2b33] tracking-tight">
            {t("heading")}
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            {t("subheading")}
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">

          {/* IMAGE */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-2xl overflow-hidden border border-[#0d2b33]/10 bg-gray-100 aspect-[4/5] w-full">
              <img
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="Modern corporate office team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ROLES */}
          <div className="lg:col-span-7 relative">
            <div className="flex flex-col gap-5 max-h-[560px] overflow-y-auto pr-6 scroll-smooth [scrollbar-width:thin] [scrollbar-color:#0d2b33_transparent]">
              {roleCategories.map((category, index) => {
                const Icon = categories[index]?.icon;

                return (
                  <div
                    key={index}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    className="bg-white border border-[#0d2b33]/10 rounded-2xl p-7"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0d2b33]/5 text-[#0d2b33]">
                        {Icon && <Icon className="w-5 h-5" />}
                      </span>
                      <h3 className="text-xl font-bold text-[#0d2b33]">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {category.roles?.map((role, rIndex) => (
                        <span
                          key={rIndex}
                          className="text-sm text-gray-600 bg-gray-50 border border-[#0d2b33]/10 rounded-full px-3.5 py-1.5"
                        >
                          {role}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={categories[index]?.href || "#"}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d2b33] hover:gap-3 transition-all"
                    >
                      Read more
                      <FaArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}