"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { X } from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { Category } from "../forms/types"; // Adjust relative path to types.ts if needed

interface Role {
  title: string;
  description: string;
  link?: string;
}

interface CategoryRolesProps {
  title: string;
  roles: Role[];
  categories: Category[];
}

export default function CategoryRoles({ title, roles, categories }: CategoryRolesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleCardClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setIsModalOpen(true);
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-[#f7fafa] to-white py-20 overflow-hidden">
      {/* Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-[3px] bg-[#f2c40d] rounded-full" />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-[#1a4550]">
              Available Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0d2b33] tracking-tight max-w-2xl leading-tight">
            {title}
          </h2>
        </div>
        <p className="text-sm text-gray-500 max-w-sm font-medium">
          Hand-picked, verified professionals equipped with deep technical capabilities to accelerate your upcoming initiatives.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {roles?.map((role: Role, index: number) => (
          <button
            type="button"
            onClick={() => handleCardClick(role.title)}
            key={index}
            className="relative bg-white text-left rounded-2xl p-7 flex flex-col justify-between border-2 border-[#1a4550]/20 shadow-lg shadow-[#1a4550]/5 hover:shadow-xl hover:border-[#1a4550] transition-all duration-300 group overflow-hidden w-full cursor-pointer"
          >
            {/* Ambient hover top bar indicator */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a4550] to-[#f2c40d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black tracking-widest text-[#1a4550]/80 bg-[#1a4550]/10 px-3 py-1 rounded-md border border-[#1a4550]/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#f2c40d] group-hover:scale-150 transition-transform duration-300" />
              </div>

              <h3 className="text-lg font-bold text-[#0d2b33] leading-snug group-hover:text-[#1a4550] transition-colors mb-2">
                {role.title}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                {role.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between w-full">
              <span className="text-[11px] font-semibold text-gray-400">Verified talent</span>
              <span className="text-xs font-bold text-[#1a4550] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ready <FaArrowRight className="w-3 h-3 text-[#f2c40d]" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-4xl my-auto bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-md transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto max-h-[90vh] p-2 sm:p-4">
              <EnquiryForm
                categories={categories}
                defaultMode="jobseeker"
                lockMode={false}
                defaultCategory={title}
                lockCategory={false}
                defaultJobTitle={selectedRole}
                lockJobTitle={true}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}