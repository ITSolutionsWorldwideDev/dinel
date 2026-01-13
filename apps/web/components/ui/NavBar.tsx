import React from "react";
import DeskstopNavigationMenu from "../layout/navbar/DeskstopNavigationMenu";
import ActionBtns from "../layout/navbar/ActionBtns";

export default function NavBar() {
  return (
    <header className="absolute  w-full">
      

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

         
            <DeskstopNavigationMenu />
       
          <ActionBtns />
        </div>

       
      </nav>

    </header>
  );
}
