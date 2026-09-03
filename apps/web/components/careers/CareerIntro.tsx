import { getTranslations } from "next-intl/server";

export default async function CareerIntro() {
  const t = await getTranslations("careers.intro");

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-[#0d2b33]/5 text-[#0d2b33] border border-[#0d2b33]/10 text-xs font-extrabold tracking-widest uppercase">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0d2b33] tracking-tight leading-tight">
            {t("titlePrefix")} <span className="text-[#0d2b33]">{t("titleHighlight")}</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-[#0d2b33]/30 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-[#0d2b33]/10 text-[#0d2b33] flex items-center justify-center font-black text-xl mb-6 shadow-sm">
              01
            </div>
            <h3 className="text-xl font-bold text-[#0d2b33] mb-3">
              {t("card1Title")}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t("card1Desc")}
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-[#0d2b33]/30 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-[#0d2b33]/10 text-[#0d2b33] flex items-center justify-center font-black text-xl mb-6 shadow-sm">
              02
            </div>
            <h3 className="text-xl font-bold text-[#0d2b33] mb-3">
              {t("card2Title")}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t("card2Desc")}
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-[#0d2b33]/30 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-[#0d2b33]/10 text-[#0d2b33] flex items-center justify-center font-black text-xl mb-6 shadow-sm">
              03
            </div>
            <h3 className="text-xl font-bold text-[#0d2b33] mb-3">
              {t("card3Title")}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t("card3Desc")}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}