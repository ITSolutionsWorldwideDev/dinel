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

  const services = [
    { label: "IT & Development", href: "/it-development" },
    { label: "Design Services", href: "/design-services" },
    { label: "Marketing & Analytics", href: "/marketing-analytics" },
    { label: "Administration & Business Support", href: "/admin-business-support" },
    { label: "Finance & Accounting", href: "/finance-accounting" },
    { label: "Travel & Reservations", href: "/travel-reservations" },
  ];

  return (
    <>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="xl:hidden text-[#0d2b33] p-2 focus:outline-none relative z-[10000]"
      >
        {mobileMenuOpen ? (
          <RxCross1 className="w-6 h-6" />
        ) : (
          <AiOutlineMenu className="w-7 h-7 font-bold" />
        )}
      </button>

      {mobileMenuOpen &&
        createPortal(
          <div className="xl:hidden fixed inset-0 top-[72px] z-[9999] bg-black/95 p-6 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div className="flex flex-col space-y-2 pb-10">
              
              {/* Dynamic Navigation Links Loop */}
              {navLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={link.href || "#"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-base font-medium hover:text-[#f2c40d] transition-colors py-3 border-b border-white/20"
                  >
                    {link.name}
                  </Link>

                  {/* Insert Services Dropdown right after Home or where appropriate */}
                  {index === 0 && (
                    <div className="py-2 border-b border-white/20">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between text-white text-base font-medium py-1 hover:text-[#f2c40d] transition-colors"
                      >
                        <span>Services</span>
                        <FaChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {servicesOpen && (
                        <div className="flex flex-col space-y-2 pl-4 mt-2">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setServicesOpen(false);
                              }}
                              className="text-gray-300 text-sm hover:text-[#f2c40d] transition-colors py-2"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Insert Categories right after Services/Approach */}
                  {index === 1 && categories && categories.length > 0 && (
                    <div className="py-2 border-b border-white/20">
                      <span className="text-white text-sm font-bold block mb-2">Categories</span>
                      <div className="flex flex-col space-y-2 pl-4">
                        {categories.map((cat, idx) => (
                          <Link
                            key={idx}
                            href={cat.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-300 text-sm hover:text-[#f2c40d] transition-colors py-2"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}

            </div>

            <div className="mt-auto pt-6 pb-8">
              <MobileMenuActionBtn />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default MobileMenuBtn;