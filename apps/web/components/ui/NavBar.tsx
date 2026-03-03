import React from "react";
import DeskstopNavigationMenu from "../layout/navbar/DeskstopNavigationMenu";
import ActionBtns from "../layout/navbar/ActionBtns";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="  w-full ">
      {/* Navigation container */}
      <nav className="relative z-100 container mx-auto p-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 ">
            <Link
              href="/"
              className="relative w-28 sm:w-32 md:w-40 lg:w-48 h-10 sm:h-12 md:h-14 lg:h-16"
            >
              <Image
                src="/assets/Group 1 1.png"
                alt="logo"
                fill
                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <DeskstopNavigationMenu />

          <ActionBtns />
        </div>
      </nav>
    </header>
  );
}
