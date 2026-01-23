import React from "react";
import ActionBtns from "./ActionBtns";
import MobileMenuBtn from "./MobileMenuBtn";
import Link from "next/link";

const DeskstopNavigationMenu = () => {
  const navLinks = [
    { name: "Home", herf: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Professionals", href: "/professionals" },
    { name: "Clients", href: "/clients" },
    { name: "Our Approach", href: "/our-approach" },
    { name: "Mission & Vision", href: "/mission-vision" },
    { name: "Become a Dineler", href: "/become-a-dineler" },
    { name: "Vacancies", href: "/vacancies" },
    { name: "Blogs", href: "/blogs" },
  ];
  return (
    <header className="">
      <nav className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link: any) => (
              <Link
                key={link.name}
                href={(link.href)?link.href:'#'}
                className="text-white text-sm hover:text-orange-500 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <MobileMenuBtn navLinks={navLinks} />
      </nav>
    </header>
  );
};

export default DeskstopNavigationMenu;
