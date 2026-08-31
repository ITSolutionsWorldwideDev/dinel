import { Link } from "../../i18n/navigation";
import { getTranslations } from "next-intl/server";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default async function Footer() {
  const t = await getTranslations("footer");

  const companyLinks = [
    { label: t("links.about"), href: "/mission-vision" },
    { label: t("links.howItWorks"), href: "/our-approach" },
    { label: t("links.industries"), href: "/energy" },
    { label: t("links.faq"), href: "/faq" },
    { label: t("links.contact"), href: "/contact-us" },
  ];

  const jobSeekerLinks = [
    { label: t("links.vacancies"), href: "/vacancies" },
    { label: t("links.allVacancies"), href: "/vacancies/all" },
    { label: t("links.howToApply"), href: "/vacancies" },
  ];

  const legalLinks = [
    { label: t("links.privacy"), href: "/privacy-policy" },
    { label: t("links.terms"), href: "/terms-conditions" },
  ];

  const socials = [
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaXTwitter, href: "https://twitter.com", label: "X" },
  ];

  return (
    <footer className="w-full bg-[#0d2b33] text-white">
      {/* Container ki width expand kar ke columns ko pure grid pe distribute kiya hai */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start justify-between">

          {/* Brand Column (Left) */}
          <div className="lg:col-span-4">
            <span className="text-2xl font-extrabold tracking-tight block">
              {t("brandName")}
            </span>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
              {t("brandDescription")}
            </p>

            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#f2c40d] hover:text-[#0d2b33] hover:border-[#f2c40d] transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links (Middle Left) */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              {t("headings.company")}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#f2c40d] transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Seeker Links (Middle Right) */}
          <div className="lg:col-span-3 lg:ml-auto">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              {t("headings.jobSeekers")}
            </h3>
            <ul className="space-y-3">
              {jobSeekerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#f2c40d] transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Right) */}
          <div className="lg:col-span-3 lg:ml-auto">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              {t("headings.contact")}
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-[#f2c40d] shrink-0" />
                <span>{t("address")}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <FaPhoneAlt className="w-3.5 h-3.5 text-[#f2c40d] shrink-0" />
                <a href={`tel:${t("phone")}`} className="hover:text-[#f2c40d] transition-colors whitespace-nowrap">
                  {t("phone")}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <FaEnvelope className="w-3.5 h-3.5 text-[#f2c40d] shrink-0" />
                <a href={`mailto:${t("email")}`} className="hover:text-[#f2c40d] transition-colors whitespace-nowrap">
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/60 hover:text-[#f2c40d] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}