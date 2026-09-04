import { getTranslations } from "next-intl/server";

export default async function ContactDetailsAndReassurance() {
  const t = await getTranslations("common");

  return (
    <section className="w-full max-w-[1500px] mx-auto space-y-8 mb-16 px-4 sm:px-8 lg:px-16">
      <div className="bg-[#f7fafa] p-8 md:p-10 rounded-3xl border border-[#1a4550]/10 shadow-sm">
        <h3 className="text-xl font-extrabold text-[#0d2b33] mb-6">{t("detailsTitle")}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div>
            <span className="font-bold text-[#1a4550] block text-xs uppercase tracking-wider">{t("emailField")}</span>
            <span className="text-gray-600">info@staffoutsourcing.nl</span>
          </div>
          <div>
            <span className="font-bold text-[#1a4550] block text-xs uppercase tracking-wider">{t("phoneField")}</span>
            <span className="text-gray-600">+31 (0) 00 000 0000</span>
          </div>
          <div>
            <span className="font-bold text-[#1a4550] block text-xs uppercase tracking-wider">{t("kvkField")}</span>
            <span className="text-gray-600">12345678</span>
          </div>
          <div>
            <span className="font-bold text-[#1a4550] block text-xs uppercase tracking-wider">{t("responseField")}</span>
            <span className="text-gray-600">{t("responseVal")}</span>
          </div>
        </div>
      </div>

      <div className="text-center px-6">
        <p className="text-sm md:text-base text-gray-500 font-medium italic">
          "{t("reassurance")}"
        </p>
      </div>
    </section>
  );
}