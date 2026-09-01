import { getTranslations } from "next-intl/server";

export default async function OurApproachWork() {
  const t = await getTranslations();

  const items = [
    {
      number: "01",
      title: t("ourApproach.work.item1Title"),
      description: t("ourApproach.work.item1Desc"),
    },
    {
      number: "02",
      title: t("ourApproach.work.item2Title"),
      description: t("ourApproach.work.item2Desc"),
    },
    {
      number: "03",
      title: t("ourApproach.work.item3Title"),
      description: t("ourApproach.work.item3Desc"),
    },
    {
      number: "04",
      title: t("ourApproach.work.item4Title"),
      description: t("ourApproach.work.item4Desc"),
    },
  ];

  return (
    <section className="bg-[#f7f9fa] py-20 md:py-24 my-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-[#0A7CD8] text-xs font-black tracking-widest uppercase mb-4">
            {t("ourApproach.workBadge")}
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-[#0d2b33] tracking-tight mb-5">
            {t("ourApproach.workTitle")}
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            {t("ourApproach.workSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-2xl p-7 md:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#0d2b33] text-[#f2c40d] flex items-center justify-center font-black">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0d2b33] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}