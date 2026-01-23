import React from "react";
import DeskstopNavigationMenu from "../layout/navbar/DeskstopNavigationMenu";
import ActionBtns from "../layout/navbar/ActionBtns";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="  w-full">
      {/* Navigation container */}
      <nav className="relative z-100 container mx-auto  p-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <img
                src="/assets/Group 1.png"
                alt="logo"
                className="w-[70%] lg:w-full "
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
