"use client";

import React, { useState } from "react";
import MobileMenuActionBtn from "./MobileMenuActionBtn";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { createPortal } from "react-dom";

interface NavLink {
  name: string;
  href?: string;
}

const MobileMenuBtn = ({ navLinks }: { navLinks: NavLink[] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="xl:hidden text-white p-2"
      >
        {mobileMenuOpen ? <RxCross1 /> : <AiOutlineMenu />}
      </button>
      {mobileMenuOpen &&
        createPortal(
          <div className="xl:hidden  p-10 absolute z-100 top-1/5  bg-black/90 container mx-auto w-full h-full inset-0  overflow-hidden">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
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

{
  /* <a
                key={link.name}
                href={`${link.name
                  .toLowerCase()
                  .trim()
                  .replace(/[\s\W-]+/g, "")
                  .replace(/^-+|-+$/g, "")}`}
                className="text-white text-sm hover:text-orange-500 transition-colors duration-200 py-2"
              >
                {link.name}
              </a> */
}
