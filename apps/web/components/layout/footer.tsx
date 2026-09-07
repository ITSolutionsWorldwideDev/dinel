import { Link } from "../../i18n/navigation";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default async function Footer() {
  // ================= SERVICES =================
  const services = [
    { label: "IT & Development", href: "/it-development" },
    { label: "Design Services", href: "/design-services" },
    { label: "Marketing & Analytics", href: "/marketing-analytics" },
    { label: "Administration & Business Support", href: "/admin-business-support" },
    { label: "Finance & Accounting", href: "/finance-accounting" },
    { label: "Travel & Reservations", href: "/travel-reservations" },
  ];

  // ================= CATEGORIES =================
  const categories = [
    { label: "Recruitment / Placement", href: "/service/recruitment-placement" },
    { label: "Recruitment Process Outsourcing", href: "/service/recruitment-process-outsourcing" },
    { label: "Temporary Staffing", href: "/service/temporary-staffing" },
    { label: "Payrolling", href: "/service/payrolling" },
  ];

  // ================= MAIN LINKS =================
  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  // ================= SOCIALS =================
  const socials = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/staffoutsourcing-nl/", label: "LinkedIn" },
    { icon: FaFacebookF, href: "https://www.facebook.com/staffoutsourcing.nl/", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/staffoutsourcingsocial/", label: "Instagram" },
  ];

  return (
    <footer className="w-full bg-[#0d2b33] text-white">
      {/* ================= NEWSLETTER BANNER ================= */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-6 bg-white/5 rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                Stay Updated with Our Newsletter
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Subscribe to get the latest staffing insights, industry trends, and exclusive updates directly to your inbox.
              </p>
            </div>

            {/* Subscription Form */}
            <form className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full sm:w-80">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/40">
                  <FaEnvelope className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#f2c40d] focus:ring-1 focus:ring-[#f2c40d] transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#f2c40d] text-[#0d2b33] font-semibold rounded-xl text-sm hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Subscribe</span>
                <FaPaperPlane className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-8 lg:gap-8">
          
          {/* ================= BRAND ================= */}
          <div className="sm:col-span-2 lg:col-span-3 text-center sm:text-left flex flex-col items-center sm:items-start">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight">
                Staff Outsourcing
              </span>
            </Link>

            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
              Providing top-tier staffing, recruitment, and outsourcing solutions to scale your business globally with efficiency.
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
                  className="w-10 h-10 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#f2c40d] hover:text-[#0d2b33] hover:border-[#f2c40d] transition-all duration-200"
                >
                  <Icon className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* ================= MAIN NAVIGATION ================= */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 sm:mb-5 pb-2 border-b border-white/10 sm:border-none sm:pb-0">
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
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 sm:mb-5 pb-2 border-b border-white/10 sm:border-none sm:pb-0">
              How We Hire
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
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 sm:mb-5 pb-2 border-b border-white/10 sm:border-none sm:pb-0">
              Roles We Place
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
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 sm:mb-5 pb-2 border-b border-white/10 sm:border-none sm:pb-0">
              Contact
            </h3>

            <ul className="space-y-3.5">
              {/* Address */}
              <li className="flex items-start gap-3 text-sm text-white/70">
                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-[#f2c40d] shrink-0" />
                <span>Mandenmakerstraat 100C, 3194 DG Hoogvliet Rotterdam, Netherlands</span>
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
                  href="mailto:info@staffoutsourcing.nl"
                  className="hover:text-[#f2c40d] transition-colors whitespace-nowrap break-all"
                >
                  info@staffoutsourcing.nl
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}