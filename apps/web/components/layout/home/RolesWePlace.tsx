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
    <section className="pb-24 bg-gradient-to-b from-white via-[#f7fafa] to-white overflow-hidden">
      {/* Container with full stretched layout alignment */}
      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-[1500px] mx-auto">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-[#1a4550]">
              {t("badge")}
            </span>
            <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0d2b33] tracking-tight mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
            {t("subheading")}
          </p>
        </div>

        {/* MAIN CONTENT - Full width grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* IMAGE */}
          <div className="lg:col-span-5 flex flex-col relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1a4550]/10 to-[#f2c40d]/20 rounded-[2.5rem] blur-xl -z-10" />
            <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white bg-gray-100 h-full w-full min-h-[500px] shadow-2xl shadow-[#1a4550]/15 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                alt="Modern corporate office team collaborating"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b33]/60 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-[#f2c40d]">Global Placement</p>
                <p className="text-sm font-medium text-white/90">Connecting elite professionals with forward-thinking enterprises.</p>
              </div>
            </div>
          </div>

          {/* ROLES */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-col gap-6 h-full max-h-[600px] overflow-y-auto pr-3 scroll-smooth [scrollbar-width:thin] [scrollbar-color:#1a4550_transparent]">
              {roleCategories.map((category, index) => {
                const Icon = categories[index]?.icon;

                return (
                  <div
                    key={index}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    className="relative bg-white border-2 border-[#1a4550]/15 rounded-3xl p-7 flex-shrink-0 shadow-lg shadow-[#1a4550]/5 hover:shadow-xl hover:border-[#1a4550] transition-all duration-300 group overflow-hidden"
                  >
                    {/* Ambient hover top bar indicator */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a4550] to-[#f2c40d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#0d2b33] to-[#1a4550] text-[#f2c40d] shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0 border border-white/20">
                        {Icon && <Icon className="w-5 h-5" />}
                      </span>
                      <h3 className="text-xl font-bold text-[#0d2b33] group-hover:text-[#1a4550] transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.roles?.map((role, rIndex) => (
                        <span
                          key={rIndex}
                          className="text-xs md:text-sm text-gray-600 bg-[#f7fafa] border border-[#0d2b33]/10 rounded-full px-3.5 py-1.5 font-medium hover:border-[#1a4550]/30 transition-colors"
                        >
                          {role}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-gray-400">Verified Expertise</span>
                      <Link
                        href={categories[index]?.href || "#"}
                        className="inline-flex items-center gap-1.5 text-xs md:text-sm font-black text-[#1a4550] group-hover:text-[#0d2b33] transition-colors"
                      >
                        Read more
                        <FaArrowRight className="w-3 h-3 text-[#f2c40d] group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
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