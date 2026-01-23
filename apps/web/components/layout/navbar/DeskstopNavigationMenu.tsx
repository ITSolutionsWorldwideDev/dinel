import React from "react";
import ActionBtns from "./ActionBtns";
import MobileMenuBtn from "./MobileMenuBtn";
import Link from "next/link";

const DeskstopNavigationMenu = () => {
  const navLinks = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Professionals" },
    { name: "Clients" },
    { name: "Our Approach" },
    { name: "Mission & Vision" },
    { name: "Become a Dineler" },
    { name: "Vacancies" },
  ];
  return (
    <header className="">
      <nav className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.name.toLocaleLowerCase() === "home" ? (
                <Link
                  key={link.name}
                  href={`/`}
                  className="text-white text-md hover:text-orange-500 transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  href={`${link.name
                    .toLowerCase()
                    .trim()
                    .replace(/[\s\W-]+/g, "")
                    .replace(/^-+|-+$/g, "")}`}
                  className="text-white text-sm hover:text-orange-500 transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>
        </div>
        <MobileMenuBtn navLinks={navLinks} />
      </nav>
    </header>
  );
};

export default DeskstopNavigationMenu;
