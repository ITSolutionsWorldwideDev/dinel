import React from "react";
import MobileMenuBtn from "./MobileMenuBtn";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import LanguageSwitcher from "../../common/LanguageSwitcher";
import { ChevronDown } from "lucide-react";

export default async function DeskstopNavigationMenu() {
  // Navigation translations
  const navT = await getTranslations("nav");

  // Common translations
  const commonT = await getTranslations();

  // Existing Services (Localized)
  const services = [
    {
      name: navT("servicesList.itDevelopment"),
      href: "/it-development",
    },
    {
      name: navT("servicesList.designServices"),
      href: "/design-services",
    },
    {
      name: navT("servicesList.marketingAnalytics"),
      href: "/marketing-analytics",
    },
    {
      name: navT("servicesList.adminBusinessSupport"),
      href: "/admin-business-support",
    },
    {
      name: navT("servicesList.financeAccounting"),
      href: "/finance-accounting",
    },
    {
      name: navT("servicesList.travelReservations"),
      href: "/travel-reservations",
    },
  ];

  // Categories
  const categories = [
    {
      name: commonT("whoWeHelp.cardsA.0.title"),
      href: "/service/recruitment-placement",
    },
    {
      name: commonT("whoWeHelp.cardsA.1.title"),
      href: "/service/recruitment-process-outsourcing",
    },
    {
      name: commonT("whoWeHelp.cardsB.0.title"),
      href: "/service/temporary-staffing",
    },
    {
      name: commonT("whoWeHelp.cardsB.1.title"),
      href: "/service/payrolling",
    },
  ];

  // Mobile navigation links
  const navLinks = [
    {
      name: navT("home"),
      href: "/",
    },
    {
      name: navT("approach"),
      href: "/our-approach",
    },
    {
      name: navT("contact"),
      href: "/contact-us",
    },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-md shadow-md shadow-[#0d2b33]/5 sticky top-0 z-50 border-b border-[#0d2b33]/10">
      <nav className="w-full px-4 sm:px-8 lg:px-16 py-3.5 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between w-full">

          {/* ================= LOGO ================= */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src="/assets/logo/Logo 2.png"
                alt="Staff Outsourcing"
                width={130}
                height={45}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden lg:flex items-center space-x-1">

            {/* HOME */}
            <Link
              href="/"
              className="px-3.5 py-2 rounded-xl text-gray-700 text-xs xl:text-sm font-bold hover:bg-[#0d2b33]/5 hover:text-[#0d2b33] transition-all duration-300 whitespace-nowrap"
            >
              {navT("home")}
            </Link>

            {/* ================= SERVICES ================= */}
            <div className="relative group py-2">
              <button
                type="button"
                className="px-3.5 py-2 rounded-xl text-gray-700 text-xs xl:text-sm font-bold hover:bg-[#0d2b33]/5 hover:text-[#0d2b33] transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
              >
                {navT("services")}
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300 text-[#1a4550]" />
              </button>

              <div className="absolute top-full left-0 w-72 bg-white shadow-2xl shadow-[#1a4550]/15 rounded-2xl py-3 hidden group-hover:block border-2 border-[#1a4550]/10 translate-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="block px-4 py-2.5 mx-2 rounded-xl text-xs xl:text-sm text-gray-700 font-medium hover:bg-[#1a4550]/5 hover:text-[#1a4550] hover:font-bold transition-all"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* ================= CATEGORIES ================= */}
            <div className="relative group py-2">
              <button
                type="button"
                className="px-3.5 py-2 rounded-xl text-gray-700 text-xs xl:text-sm font-bold hover:bg-[#0d2b33]/5 hover:text-[#0d2b33] transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
              >
                {navT("categories")}
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300 text-[#1a4550]" />
              </button>

              <div className="absolute top-full left-0 w-80 bg-white shadow-2xl shadow-[#1a4550]/15 rounded-2xl py-3 hidden group-hover:block border-2 border-[#1a4550]/10 translate-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={category.href}
                    className="block px-4 py-3 mx-2 rounded-xl text-xs xl:text-sm text-gray-700 font-medium hover:bg-[#1a4550]/5 hover:text-[#1a4550] hover:font-bold transition-all"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* ================= OUR APPROACH ================= */}
            <Link
              href="/our-approach"
              className="px-3.5 py-2 rounded-xl text-gray-700 text-xs xl:text-sm font-bold hover:bg-[#0d2b33]/5 hover:text-[#0d2b33] transition-all duration-300 whitespace-nowrap"
            >
              {navT("approach")}
            </Link>

            {/* ================= CONTACT US ================= */}
            <Link
              href="/contact-us"
              className="px-3.5 py-2 rounded-xl text-gray-700 text-xs xl:text-sm font-bold hover:bg-[#0d2b33]/5 hover:text-[#0d2b33] transition-all duration-300 whitespace-nowrap"
            >
              {navT("contact")}
            </Link>
          </div>

          {/* ================= DESKTOP LANGUAGE ================= */}
          <div className="hidden lg:flex items-center">
            <LanguageSwitcher />
          </div>

          {/* ================= MOBILE / TABLET ================= */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />

            <MobileMenuBtn
              navLinks={navLinks}
              categories={categories}
            />
          </div>

        </div>
      </nav>
    </header>
  );
}