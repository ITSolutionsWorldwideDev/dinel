import { getTranslations } from "next-intl/server";

export default async function OurApproachLines() {
  const t = await getTranslations();

  const items = [
    t("ourApproach.lines.item1"),
    t("ourApproach.lines.item2"),
    t("ourApproach.lines.item3"),
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
        <div>
          <span className="inline-block text-[#f2c40d] text-xs font-black tracking-widest uppercase mb-4">
            {t("ourApproach.linesBadge")}
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-[#0d2b33] tracking-tight">
            {t("ourApproach.linesTitle")}
          </h2>
        </div>

        <div className="space-y-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-[#0d2b33] text-[#f2c40d] flex items-center justify-center font-black">
                ✓
              </div>

              <p className="text-slate-700 leading-relaxed pt-1">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}