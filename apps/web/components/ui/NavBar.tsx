import React from "react";
import DeskstopNavigationMenu from "../layout/navbar/DeskstopNavigationMenu";
import ActionBtns from "../layout/navbar/ActionBtns";

export default function NavBar() {
  return (
    <header className="absolute  w-full">
      {/* Background with gradient overlay */}
      {/* <div className="absolute inset-0 bg-linear-to-r from-blue-900 via-blue-700 to-blue-500 opacity-95" /> */}

      {/* Navigation container */}
      <nav className="relative z-100 container mx-auto  py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/assets/logo/59319e5239b932c82b4371b85dbaa8aaad4a249d.png"
              alt="logo"
              className="w-70 bg-white"
            />
          </div>

          {/* Desktop Navigation */}
          {/* <div> */}
            <DeskstopNavigationMenu />
          {/* </div> */}
          <ActionBtns />
        </div>

        {/* Mobile Navigation */}
      </nav>

      {/* Decorative bottom border */}
    </header>
  );
}
