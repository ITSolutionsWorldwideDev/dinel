import { Link } from "../../i18n/navigation";
import type { Pathnames } from "../../i18n/routing";
import { getTranslations } from "next-intl/server";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

type StaticPathnames = Exclude<Pathnames, `${string}[${string}]${string}`>;

type FooterLink = { label: string; href: StaticPathnames };

export default async function Footer() {
  const t = await getTranslations("footer");

  const services: FooterLink[] = [
    { label: t("services.itDevelopment"), href: "/it-development" },
    { label: t("services.designServices"), href: "/design-services" },
    { label: t("services.marketingAnalytics"), href: "/marketing-analytics" },
    { label: t("services.adminBusinessSupport"), href: "/admin-business-support" },
    { label: t("services.financeAccounting"), href: "/finance-accounting" },
    { label: t("services.travelReservations"), href: "/travel-reservations" },
  ];

  const categories: FooterLink[] = [
    { label: t("categories.recruitmentOutsourcing"), href: "/recruitment-outsourcing" },
    { label: t("categories.recruitmentProcessOutsourcing"), href: "/recruitment-process-outsourcing" },
    { label: t("categories.temporaryStaffing"), href: "/temporary-staffing" },
    { label: t("categories.payrolling"), href: "/payrolling" },
  ];

  const mainLinks: FooterLink[] = [
    { label: t("mainLinks.home"), href: "/" },
    { label: t("mainLinks.about"), href: "/about" },
    { label: t("mainLinks.ourApproach"), href: "/our-approach" },
    { label: t("mainLinks.contactUs"), href: "/contact-us" },
  ];

  const companyLinks: FooterLink[] = [
    { label: t("companyLinks.privacyPolicy"), href: "/privacy-policy" },
    { label: t("companyLinks.termsConditions"), href: "/terms-and-conditions" },
    { label: t("companyLinks.contact"), href: "/contact-us" },
  ];

  const socials = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/staffoutsourcing-nl/", label: "LinkedIn" },
    { icon: FaFacebookF, href: "https://www.facebook.com/staffoutsourcing.nl/", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/staffoutsourcingsocial/", label: "Instagram" },
  ];

  return (
    <footer className="w-full bg-[#0d2b33] text-white text-xs">
      {/* ================= NEWSLETTER BANNER ================= */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-white/5 rounded-2xl p-5 sm:p-7 md:p-8 border border-white/10 shadow-lg shadow-black/10">
            <div className="max-w-xl text-center lg:text-left w-full">
              <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white">
                {t("newsletterTitle")}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-white/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {t("newsletterDesc")}
              </p>
            </div>

            <form className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-2.5 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              <div className="relative w-full sm:w-72 md:w-80">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/40">
                  <FaEnvelope className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  required
                  placeholder={t("emailPlaceholder")}
                  className="w-full h-12 sm:h-11 pl-11 pr-4 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#f2c40d] focus:ring-2 focus:ring-[#f2c40d]/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto h-12 sm:h-11 px-6 bg-[#f2c40d] text-[#0d2b33] font-bold rounded-xl text-sm hover:bg-white active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md shadow-[#f2c40d]/10"
              >
                <FaPaperPlane className="w-3.5 h-3.5" />
                <span>{t("subscribeBtn")}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-8 gap-x-6 lg:gap-6">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-3 text-center sm:text-left flex flex-col items-center sm:items-start">
            <Link href="/" className="inline-block">
              <span className="text-xl font-extrabold tracking-tight">
                {t("brandName")}
              </span>
            </Link>
            <p className="mt-3 text-xs text-white/70 leading-relaxed max-w-sm">
              {t("brandDesc")}
            </p>
            <div className="flex items-center gap-2.5 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#f2c40d] hover:text-[#0d2b33] hover:border-[#f2c40d] transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4 pb-2 border-b border-white/10 sm:border-none sm:pb-0">
              {t("headings.navigation")}
            </h3>
            <ul className="space-y-2.5">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-white/70 hover:text-[#f2c40d] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4 pb-2 border-b border-white/10 sm:border-none sm:pb-0">
              {t("headings.company")}
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-white/70 hover:text-[#f2c40d] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4 pb-2 border-b border-white/10 sm:border-none sm:pb-0">
              {t("headings.rolesWePlace")}
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-xs text-white/70 hover:text-[#f2c40d] transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORIES */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4 pb-2 border-b border-white/10 sm:border-none sm:pb-0">
              {t("headings.howWeHire")}
            </h3>
            <ul className="space-y-2.5">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link href={category.href} className="text-xs text-white/70 hover:text-[#f2c40d] transition-colors">
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ================= CONTACT BAR ================= */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
          <div className="flex items-center gap-3 bg-white/5 px-5 py-4 rounded-xl border border-white/10 h-full w-full">
            <FaMapMarkerAlt className="w-4 h-4 text-[#f2c40d] shrink-0" />
            <span className="leading-relaxed">{t("address")}</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-5 py-4 rounded-xl border border-white/10 h-full w-full">
            <FaPhoneAlt className="w-4 h-4 text-[#f2c40d] shrink-0" />
            <a href="tel:+31 85 800 2385" className="hover:text-[#f2c40d] transition-colors">
              +31 85 800 2385
            </a>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-5 py-4 rounded-xl border border-white/10 h-full w-full">
            <FaEnvelope className="w-3.5 h-3.5" />
            <a href="mailto:info@staffoutsourcing.nl" className="hover:text-[#f2c40d] transition-colors break-all">
              info@staffoutsourcing.nl
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-5 flex items-center justify-center">
          <p className="text-[11px] text-white/60">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}