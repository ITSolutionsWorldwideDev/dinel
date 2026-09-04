import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function OurApproachCTA() {
  const t = await getTranslations();

  return (
    <section className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16 pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0d2b33] to-[#1a4550] text-white px-8 py-16 md:px-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,196,13,0.18),transparent_45%)] pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-5">
            {t("ourApproach.ctaTitle")}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto mb-9 text-lg leading-relaxed">
            {t("ourApproach.ctaSubtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/en/contact-us"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#f2c40d] text-[#0d2b33] font-bold hover:bg-[#ffd83d] transition"
            >
              {t("ourApproach.ctaPrimary")}
            </Link>

            <Link
              href="/en/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white font-bold hover:bg-white/20 transition"
            >
              {t("ourApproach.ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}