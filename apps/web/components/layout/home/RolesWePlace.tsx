"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaCode, FaPaintBrush, FaChartLine, FaHeadset, FaCalculator, FaPlane } from "react-icons/fa";

export default function RolesWePlace() {
  const [activeCategory, setActiveCategory] = useState(0);

  const roleCategories = [
    {
      title: "IT & Development",
      href: "/professionals/it-development",
      icon: <FaCode className="w-5 h-5 text-[#0d2b33]" />,
      roles: [
        "Full Stack Developer",
        "Front-End Developer",
        "Back-End Developer",
        "App Developer (iOS/Android)",
        "Data Engineer",
        "AI Engineer",
        "ML Engineer",
        "Software Tester (QA)",
        "IT Support (Remote)",
        "Electrical Engineer",
      ],
    },
    {
      title: "Design Services",
      href: "/professionals/design-services",
      icon: <FaPaintBrush className="w-5 h-5 text-[#0d2b33]" />,
      roles: [
        "Webdesigner/Developer",
        "Graphic Designer",
      ],
    },
    {
      title: "Marketing & Analytics",
      href: "/professionals/marketing-analytics",
      icon: <FaChartLine className="w-5 h-5 text-[#0d2b33]" />,
      roles: [
        "Social Media Manager",
        "Content Creator/Copywriter",
        "Online Marketer",
        "Google Analytics Specialist",
        "Power BI Specialist",
        "Data Analyst",
      ],
    },
    {
      title: "Admin & Business Support",
      href: "/professionals/admin-business-support",
      icon: <FaHeadset className="w-5 h-5 text-[#0d2b33]" />,
      roles: [
        "Virtual Assistant",
        "Ecommerce Web Shop Assistant",
        "Customer Support Agent (Remote)",
        "Data Entry Specialist",
        "HR Assistant (Remote)",
        "Customer Relations Agent",
      ],
    },
    {
      title: "Finance & Accounting",
      href: "/professionals/finance-accounting",
      icon: <FaCalculator className="w-5 h-5 text-[#0d2b33]" />,
      roles: [
        "Accountant/Financial Assistant",
        "Administrative Accounting Assistant",
        "Microsoft Excel Specialist",
      ],
    },
    {
      title: "Travel & Reservations",
      href: "/professionals/travel-reservations",
      icon: <FaPlane className="w-5 h-5 text-[#0d2b33]" />,
      roles: [
        "Online Travel Advisor",
        "Reservations Clerk",
        "Customer Service (Travel Agency)",
        "Travel Marketer",
      ],
    },
  ];

  const currentCategory = roleCategories[activeCategory] || roleCategories[0];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0d2b33] bg-[#0d2b33]/5 px-3 py-1.5 rounded-full inline-block mb-3">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0d2b33] tracking-tight">
            Roles we place
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            Roles grouped by what you&apos;re actually hiring for. Click a category below to switch roles.
          </p>
        </div>

        {/* Category Headings / Pills Bar (Single Line, No Wrap/Sidebar) */}
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
                  {category.icon}
                </span>
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Clean Pill Badges Grid Only with Theme Blue Outlines */}
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