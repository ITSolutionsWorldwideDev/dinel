import { getTranslations } from "next-intl/server";
import { Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

export default async function ContactChannels() {
  const t = await getTranslations("common");

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 max-w-[1500px] mx-auto mb-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d2b33] text-center mb-8 tracking-tight">
        {t("waysTitle")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="bg-white p-8 rounded-3xl border border-[#1a4550]/15 shadow-xl shadow-[#1a4550]/5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#0d2b33] text-[#f2c40d] flex items-center justify-center font-bold text-xl mb-6 shadow-md">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0d2b33] mb-3">{t("callTitle")}</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">{t("callDesc")}</p>
          </div>
          
          <Link
            href="/contact-us"
            className="inline-flex justify-center items-center py-3 px-6 rounded-xl bg-[#0d2b33] text-white font-bold text-sm hover:bg-[#1a4550] transition-all shadow-md"
          >
            {t("callBtn")}
          </Link>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-[#f2c40d]/40 shadow-xl shadow-[#1a4550]/5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#f2c40d] text-[#0d2b33] flex items-center justify-center font-bold text-xl mb-6 shadow-md">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0d2b33] mb-3">{t("whatsappTitle")}</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">{t("whatsappDesc")}</p>
          </div>
          
          <Link
            href="/contact-us"
            className="inline-flex justify-center items-center py-3 px-6 rounded-xl bg-[#f2c40d] text-[#0d2b33] font-bold text-sm hover:bg-[#e2b50b] transition-all shadow-md"
          >
            {t("whatsappBtn")}
          </Link>
        </div>
      </div>
    </section>
  );
}