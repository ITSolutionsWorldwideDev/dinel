import React from "react";

export default function CategoryRoles({ title, roles }: { title: string; roles: string[] }) {
  return (
    <section className="w-full bg-white">
      {/* Header */}
      <div className="w-full px-4 sm:px-6 lg:px-12 mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#f2c40d]" />
          <span className="text-xs font-semibold tracking-wide text-[#0d2b33]/60">
            Available Expertise
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0d2b33] tracking-tight max-w-2xl">
          {title}
        </h2>
      </div>

      {/* Grid - centers when the last row isn't full */}
      <div className="w-full px-4 sm:px-6 lg:px-12 flex flex-wrap justify-center gap-6">
        {roles?.map((roleName: string, index: number) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] bg-white outline outline-1 outline-[#0d2b33]/15 hover:outline-2 hover:outline-[#0d2b33] p-7 flex flex-col justify-between transition-all duration-300 group"
          >
            <div>
              <span className="block text-[11px] font-semibold tracking-wide text-[#0d2b33]/40 mb-5">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg font-semibold text-[#0d2b33] leading-snug">
                {roleName}
              </h3>
            </div>

            <div className="mt-8 pt-5 border-t border-[#0d2b33]/10 flex items-center justify-between">
              <span className="text-[11px] text-[#0d2b33]/40">Verified talent</span>
              <span className="text-[11px] font-semibold text-[#0d2b33]/60 group-hover:text-[#0d2b33] transition-colors">
                Ready to hire
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}