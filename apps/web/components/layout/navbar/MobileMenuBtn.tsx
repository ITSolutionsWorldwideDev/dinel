"use client";

import React, { useState } from "react";
import MobileMenuActionBtn from "./MobileMenuActionBtn";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

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
          {mobileMenuOpen ? <RxCross1 /> : <AiOutlineMenu />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="xl:hidden mt-4 pb-4 absolute mr-10 top-20 bg-black/80 w-[90vw]  md:w-[50vw]  right-0 px-4 overflow-hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link: any) => (
              <a
                key={link.name}
                href={`${link.name
                  .toLowerCase()
                  .trim()
                  .replace(/[\s\W-]+/g, "")
                  .replace(/^-+|-+$/g, "")}`}
                className="text-white text-sm hover:text-orange-500 transition-colors duration-200 py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
          <MobileMenuActionBtn />
        </div>
      )}
    </>
  );
};

export default MobileMenuBtn;
