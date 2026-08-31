import React from "react";
import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";

type Point = { title: string; desc: string };

const WhyDutchCompanies = async () => {
  const t = await getTranslations("whyDutchCompanies");
  const points = t.raw("points") as Point[];

  return (
    <section className="bg-gradient-to-b from-white via-[#f7fafa] to-white relative overflow-hidden pb-24">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#f2c40d]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#0d2b33]/5 blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-[1500px] mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* IMAGE COLUMN */}
          <div className="md:col-span-5 w-full h-full min-h-[450px] lg:min-h-[550px] relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1a4550]/10 to-[#f2c40d]/20 rounded-[2.5rem] blur-xl -z-10" />
            <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white bg-gray-100 shadow-2xl shadow-[#1a4550]/15 h-full w-full group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                alt="Dutch business team meeting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b33]/50 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="md:col-span-7 flex flex-col justify-center py-4">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[3px] bg-[#f2c40d] rounded-full" />
              <span className="text-xs font-black tracking-[0.2em] uppercase text-[#1a4550] bg-[#1a4550]/5 border border-[#1a4550]/15 px-3.5 py-1.5 rounded-full">
                {t("badge")}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-[#0d2b33] tracking-tight mb-6 leading-tight">
              {t("heading")}
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 font-medium">
              {t("para1")}
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-medium">
              {t("para2")}
            </p>

            <ul className="space-y-4">
              {points.map((point) => (
                <li
                  key={point.title}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-[#0d2b33]/10 shadow-sm hover:border-[#1a4550]/40 transition-all duration-300"
                >
                  <span className="mt-0.5 shrink-0 w-7 h-7 rounded-xl bg-gradient-to-br from-[#0d2b33] to-[#1a4550] flex items-center justify-center shadow-md border border-white/20">
                    <Check className="w-4 h-4 text-[#f2c40d]" />
                  </span>
                  <div>
                    <p className="font-extrabold text-[#0d2b33] text-base mb-1">
                      {point.title}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                      {point.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyDutchCompanies;