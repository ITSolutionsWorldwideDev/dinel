import React from "react";
import MobileMenuBtn from "./MobileMenuBtn";
import Link from "next/link";
import Image from "next/image";
import { candidateAuth } from "@repo/auth-web";

export default async function DeskstopNavigationMenu() {
  const session = await candidateAuth();

  const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Professionals", href: "/professionals" },
    { name: "Clients", href: "/clients" },
    { name: "Our Approach", href: "/our-approach" },
    { name: "Mission & Vision", href: "/mission-vision" },
    { name: "Become a Team Member", href: "/become-a-team-member" },
    { name: "Vacancies", href: "/vacancies" },
    { name: "Blogs", href: "/blogs" },
    { name: session ? "My Account" : "Member", href: "/account" },
  ];

  return (
    <header className="w-full shadow-sm sticky top-0 z-50">
      {/* bg-white yahan se hata diya gaya hai */}
      <nav className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* 1. Top Left: Logo */}
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

          {/* 2. Middle: Navigation Links with curved hover pill background (Desktop Only) */}
          <div className="hidden xl:flex items-center space-x-1 mx-auto">
            {navLinks.map((link: any) => (
              <Link
                key={link.name}
                href={link.href ? link.href : "#"}
                className="px-3.5 py-2 rounded-full text-gray-700 text-sm font-medium hover:bg-[#0d2b33]/5 hover:text-[#0d2b33] transition-all duration-200 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu trigger */}
          <div className="xl:hidden flex items-center">
            <MobileMenuBtn navLinks={navLinks} />
          </div>

        </div>
      </nav>
    </header>
  );
}