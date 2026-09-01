import { getTranslations } from "next-intl/server";

export default async function ContactFormSection() {
  const t = await getTranslations("common");

  return (
    <section className="w-full max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-[#1a4550]/15 shadow-2xl shadow-[#1a4550]/5 mb-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d2b33] mb-8 text-center tracking-tight">
        {t("formTitle")}
      </h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4550] mb-2">{t("nameLabel")}</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4550] focus:ring-2 focus:ring-[#1a4550]/10 outline-none transition-all text-sm" required />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4550] mb-2">{t("companyLabel")}</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4550] focus:ring-2 focus:ring-[#1a4550]/10 outline-none transition-all text-sm" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4550] mb-2">{t("emailLabel")}</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4550] focus:ring-2 focus:ring-[#1a4550]/10 outline-none transition-all text-sm" required />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4550] mb-2">{t("phoneLabel")}</label>
            <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4550] focus:ring-2 focus:ring-[#1a4550]/10 outline-none transition-all text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4550] mb-2">{t("hiringForLabel")}</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4550] focus:ring-2 focus:ring-[#1a4550]/10 outline-none transition-all text-sm" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4550] mb-2">{t("categoryLabel")}</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4550] focus:ring-2 focus:ring-[#1a4550]/10 outline-none transition-all text-sm bg-white">
              <option value="placement">{t("cat1")}</option>
              <option value="staffing">{t("cat2")}</option>
              <option value="unsure">{t("cat3")}</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4550] mb-2">{t("messageLabel")}</label>
          <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a4550] focus:ring-2 focus:ring-[#1a4550]/10 outline-none transition-all text-sm resize-none"></textarea>
        </div>

        <button type="submit" className="w-full py-4 rounded-xl bg-[#f2c40d] text-[#0d2b33] font-black text-sm uppercase tracking-wider hover:bg-[#e2b50b] transition-all shadow-lg">
          {t("submitBtn")}
        </button>
      </form>
    </section>
  );
}