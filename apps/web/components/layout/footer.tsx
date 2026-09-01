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
  const navT = await getTranslations("nav");

  // ================= SERVICES =================
  const services = [
    {
      label: "IT & Development",
      href: "/it-development",
    },
    {
      label: "Design Services",
      href: "/design-services",
    },
    {
      label: "Marketing & Analytics",
      href: "/marketing-analytics",
    },
    {
      label: "Administration & Business Support",
      href: "/admin-business-support",
    },
    {
      label: "Finance & Accounting",
      href: "/finance-accounting",
    },
    {
      label: "Travel & Reservations",
      href: "/travel-reservations",
    },
  ];

  // ================= CATEGORIES =================
  const categories = [
    {
      label: "Recruitment / Placement",
      href: "/service/recruitment-placement",
    },
    {
      label: "Recruitment Process Outsourcing",
      href: "/service/recruitment-process-outsourcing",
    },
    {
      label: "Temporary Staffing",
      href: "/service/temporary-staffing",
    },
    {
      label: "Payrolling",
      href: "/service/payrolling",
    },
  ];

  // ================= MAIN LINKS =================
  const mainLinks = [
    {
      label: navT("home"),
      href: "/",
    },
    {
      label: navT("approach"),
      href: "/our-approach",
    },
    {
      label: navT("contact"),
      href: "/contact-us",
    },
  ];

  // ================= SOCIALS =================
  const socials = [
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com",
      label: "X",
    },
  ];

  // ================= LEGAL =================
  const legalLinks = [
    {
      label: "Cookie Policy",
      href: "/cookie-policy",
    },
    {
      label: "Sitemap",
      href: "/sitemap",
    },
  ];

  return (
    <footer className="w-full bg-[#0d2b33] text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight">
                {t("brandName")}
              </span>
            </Link>

            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
              {t("brandDescription")}
            </p>

            {/* Socials */}
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

          {/* ================= MAIN NAVIGATION ================= */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Navigation
            </h3>

            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#f2c40d] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/70 hover:text-[#f2c40d] transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CATEGORIES ================= */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Categories
            </h3>

            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-sm text-white/70 hover:text-[#f2c40d] transition-colors"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              {navT("contact")}
            </h3>

            <ul className="space-y-3.5">

              {/* Address */}
              <li className="flex items-start gap-3 text-sm text-white/70">
                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-[#f2c40d] shrink-0" />

                <span>
                  XYZ Street, ABC Road, City Name
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3 text-sm text-white/70">
                <FaPhoneAlt className="w-3.5 h-3.5 text-[#f2c40d] shrink-0" />

                <a
                  href="tel:+0000000000"
                  className="hover:text-[#f2c40d] transition-colors whitespace-nowrap"
                >
                  +00 000 0000000
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3 text-sm text-white/70">
                <FaEnvelope className="w-3.5 h-3.5 text-[#f2c40d] shrink-0" />

                <a
                  href="mailto:info@example.com"
                  className="hover:text-[#f2c40d] transition-colors whitespace-nowrap"
                >
                  info@example.com
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} All rights reserved.
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