"use client";

import React, { useState } from "react";
import MobileMenuActionBtn from "./MobileMenuActionBtn";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import { createPortal } from "react-dom";

interface NavLink {
  name: string;
  href?: string;
}

interface Category {
  name: string;
  href: string;
}

const MobileMenuBtn = ({ 
  navLinks, 
  categories 
}: { 
  navLinks: NavLink[]; 
  categories: Category[]; 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="xl:hidden text-[#0d2b33] p-2 focus:outline-none"
      >
        {mobileMenuOpen ? (
          <RxCross1 className="w-6 h-6" />
        ) : (
          <AiOutlineMenu className="w-7 h-7 font-bold" />
        )}
      </button>
      {mobileMenuOpen &&
        createPortal(
          <div className="xl:hidden p-6 absolute z-100 top-20 bg-black/95 inset-x-0 mx-auto w-full h-fit overflow-y-auto max-h-[85vh] shadow-2xl">
            <div className="flex flex-col space-y-2">
              
              {/* First Link (About) */}
              {navLinks[0] && (
                <Link
                  href={navLinks[0].href || "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-sm hover:text-orange-500 transition-colors duration-200 py-2 border-b border-white/20"
                >
                  {navLinks[0].name}
                </Link>
              )}

              {/* Services Dropdown Accordion */}
              <div className="py-2 border-b border-white/20">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between text-white text-sm py-1 hover:text-orange-500 transition-colors"
                >
                  <span>Services</span>
                  <FaChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                
                {servicesOpen && (
                  <div className="flex flex-col space-y-2 pl-4 mt-2">
                    {categories.map((cat, idx) => (
                      <Link
                        key={idx}
                        href={cat.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setServicesOpen(false);
                        }}
                        className="text-gray-300 text-sm hover:text-orange-500 transition-colors duration-200 py-1.5"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Remaining Links */}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href ? link.href : "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-sm hover:text-orange-500 transition-colors duration-200 py-2 border-b border-white/20"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <MobileMenuActionBtn />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default MobileMenuBtn;