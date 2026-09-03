import { getTranslations } from "next-intl/server";

export default async function CareerHero() {
  const t = await getTranslations("careers.hero");

  return (
    <section className="relative w-full bg-gradient-to-br from-[#0d2b33] via-[#1a4550] to-[#0d2b33] text-white py-24 px-6 md:px-16 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <span className="inline-block py-1.5 px-5 rounded-full bg-[#f2c40d]/10 text-[#f2c40d] border border-[#f2c40d]/30 text-xs font-bold tracking-widest uppercase shadow-sm">
          {t("badge")}
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          {t("title")}
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light">
          {t("description")}
        </p>
      </div>
    </section>
  );
}