import { getTranslations } from "next-intl/server";

export default async function ContactHero() {
  const t = await getTranslations("common");

  return (
    <section className="relative w-full bg-gradient-to-br from-[#0d2b33] via-[#1a4550] to-[#0d2b33] text-white py-24 md:py-32 px-6 md:px-16 overflow-hidden rounded-3xl border border-white/10 shadow-2xl mb-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,196,13,0.2),transparent_50%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block py-2 px-6 rounded-full bg-[#f2c40d]/10 text-[#f2c40d] border border-[#f2c40d]/30 text-xs font-black tracking-widest uppercase mb-6 shadow-lg">
          {t("heroBadge")}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
          {t("heroTitle")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          {t("heroSubtitle")}
        </p>
      </div>
    </section>
  );
}