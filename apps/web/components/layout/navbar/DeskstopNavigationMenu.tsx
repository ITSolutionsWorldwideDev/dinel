import React from "react";
import MobileMenuBtn from "./MobileMenuBtn";
import Image from "next/image";
import { candidateAuth } from "@repo/auth-web";
import { getTranslations } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import LanguageSwitcher from "../../common/LanguageSwitcher";

export default async function DeskstopNavigationMenu() {
  const session = await candidateAuth();
  const t = await getTranslations("nav");

  const categories = [
    { name: "IT & Development", href: "/it-development" },
    { name: "Design Services", href: "/design-services" },
    { name: "Marketing & Analytics", href: "/marketing-analytics" },
    { name: "Administration & Business Support", href: "/admin-business-support" },
    { name: "Finance & Accounting", href: "/finance-accounting" },
    { name: "Travel & Reservations", href: "/travel-reservations" },
  ];

  const navLinks = [
    { name: t("about"), href: "/about-us" },
    { name: t("clients"), href: "/clients" },
    { name: t("approach"), href: "/our-approach" },
    { name: t("mission"), href: "/mission-vision" },
    { name: t("becomeMember"), href: "/become-a-team-member" },
    { name: t("vacancies"), href: "/vacancies" },
    { name: t("blogs"), href: "/blogs" },
    { name: session ? t("myAccount") : t("member"), href: "/account" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="w-full px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between w-full">

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo/Logo 2.png"
                alt="Company Logo"
                width={130}
                height={45}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* First Link (About) */}
            {navLinks[0] && (
              <Link
                href={navLinks[0].href}
                className="px-3.5 py-2 rounded-full text-gray-700 text-sm font-medium hover:bg-[#0d2b33]/5 hover:text-[#0d2b33] transition-all duration-200 whitespace-nowrap"
              >
                {navLinks[0].name}
              </Link>
            )}

            {/* Services Dropdown on Hover */}
            <div className="relative group">
              <button className="px-3.5 py-2 rounded-full text-gray-700 text-sm font-medium hover:bg-[#0d2b33]/5 hover:text-[#0d2b33] transition-all duration-200 whitespace-nowrap flex items-center gap-1">
                Services ▾
              </button>
              <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-2xl py-2 hidden group-hover:block border border-gray-100">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={cat.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0d2b33]/5 hover:text-[#0d2b33] transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Remaining Links */}
            {navLinks.slice(1).map((link, index) => (
              <Link
                key={index}
                href={link.href ? link.href : "#"}
                className="px-3.5 py-2 rounded-full text-gray-700 text-sm font-medium hover:bg-[#0d2b33]/5 hover:text-[#0d2b33] transition-all duration-200 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Language Switcher */}
          <div className="hidden lg:flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <MobileMenuBtn navLinks={navLinks} categories={categories} />
          </div>

        </div>
      </nav>
    </header>
  );
}