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

  const navLinks = [
    { name: t("about"), href: "/about-us" },
    { name: t("professionals"), href: "/professionals" },
    { name: t("clients"), href: "/clients" },
    { name: t("approach"), href: "/our-approach" },
    { name: t("mission"), href: "/mission-vision" },
    { name: t("becomeMember"), href: "/become-a-team-member" },
    { name: t("vacancies"), href: "/vacancies" },
    { name: t("blogs"), href: "/blogs" },
    { name: session ? t("myAccount") : t("member"), href: "/account" },
  ];

  return (
    <header className="w-full shadow-sm sticky top-0 z-50">
      <nav className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center">
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

          <div className="hidden xl:flex items-center space-x-1 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href ? link.href : "#"}
                className="px-3.5 py-2 rounded-full text-gray-700 text-sm font-medium hover:bg-[#0d2b33]/5 hover:text-[#0d2b33] transition-all duration-200 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center">
            <LanguageSwitcher />
          </div>

          <div className="xl:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <MobileMenuBtn navLinks={navLinks} />
          </div>

        </div>
      </nav>
    </header>
  );
}
