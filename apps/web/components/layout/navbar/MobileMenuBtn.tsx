"use client";
import Link from "next/link";
import React, { useState } from "react";
import MobileMenuActionBtn from "./MobileMenuActionBtn";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { createPortal } from "react-dom";
const MobileMenuBtn = ({ navLinks }: any) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div>
        {" "}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-white p-2"
        >
          {mobileMenuOpen ? (
            <RxCross1 className="size-[22] font-bold" />
          ) : (
            <AiOutlineMenu className="size-[32] font-bold" />
          )}
        </button>
      </div>
      {mobileMenuOpen &&
        createPortal(
          <div className="xl:hidden mt-4 p-10 absolute z-100 top-1/5  bg-black/90 container mx-auto w-full inset-0  overflow-hidden">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link: any) =>
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
                    className="text-white text-sm hover:text-orange-500 transition-colors duration-200 py-2 border-b border-white/30 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>

            <div className="mt-6 ">
              <MobileMenuActionBtn />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default MobileMenuBtn;
