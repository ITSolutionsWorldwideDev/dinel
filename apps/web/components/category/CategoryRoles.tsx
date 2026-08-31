import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function CategoryRoles({ title, roles }: { title: string; roles: string[] }) {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#f7fafa] to-white py-20 overflow-hidden">
      {/* Header */}
      <div className="w-full px-4 sm:px-6 lg:px-16 mb-16 max-w-[1500px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
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
      <div className="w-full px-4 sm:px-6 lg:px-16 max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {roles?.map((roleName: string, index: number) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl p-7 flex flex-col justify-between border-2 border-[#1a4550]/20 shadow-lg shadow-[#1a4550]/5 hover:shadow-xl hover:border-[#1a4550] transition-all duration-300 group overflow-hidden w-full"
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

              <h3 className="text-lg font-bold text-[#0d2b33] leading-snug group-hover:text-[#1a4550] transition-colors">
                {roleName}
              </h3>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-400">Verified talent</span>
              <span className="text-xs font-bold text-[#1a4550] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ready <FaArrowRight className="w-3 h-3 text-[#f2c40d]" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}