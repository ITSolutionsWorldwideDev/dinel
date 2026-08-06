import React from "react";
import DeskstopNavigationMenu from "../layout/navbar/DeskstopNavigationMenu";
import ActionBtns from "../layout/navbar/ActionBtns";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="w-full">
      {/* Navigation container */}
      <nav className="relative z-100 container mx-auto p-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
         

          <DeskstopNavigationMenu />

          <ActionBtns />
        </div>
      </nav>
    </header>
  );
}
