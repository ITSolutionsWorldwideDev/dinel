import { getTranslations } from "next-intl/server";

export default async function OurApproachThinking() {
  const t = await getTranslations();

  const items = [
    {
      number: "01",
      title: t("ourApproach.thinking.item1Title"),
      description: t("ourApproach.thinking.item1Desc"),
    },
    {
      number: "02",
      title: t("ourApproach.thinking.item2Title"),
      description: t("ourApproach.thinking.item2Desc"),
    },
    {
      number: "03",
      title: t("ourApproach.thinking.item3Title"),
      description: t("ourApproach.thinking.item3Desc"),
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-8 md:py-12">
      <div className="text-center mb-14">
        <span className="inline-block text-[#f2c40d] text-xs font-black tracking-widest uppercase mb-4">
          {t("ourApproach.thinkingBadge")}
        </span>

        <h2 className="text-3xl md:text-5xl font-black text-[#0d2b33] tracking-tight">
          {t("ourApproach.thinkingTitle")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.number}
            className="bg-white rounded-2xl border border-slate-200 p-7 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0d2b33] text-[#f2c40d] flex items-center justify-center font-black text-lg mb-6">
              {item.number}
            </div>

            <h3 className="text-xl font-bold text-[#0d2b33] mb-4">
              {item.title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}