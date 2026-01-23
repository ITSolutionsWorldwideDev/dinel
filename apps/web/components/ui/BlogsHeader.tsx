// apps/web/components/ui/BlogsHeader.tsx

import DeskstopNavigationMenu from "../layout/navbar/DeskstopNavigationMenu";
import ActionBtns from "../layout/navbar/ActionBtns";

export default function BlogsHeader() {
  return (
    <header className=" w-full inset-0 bg-linear-to-r from-[#000000B2] to-[#106FBC]">
      <nav className="relative z-100 container mx-auto  py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/assets/Group 1.png" alt="logo" className="w-[70%] " />
          </div>
          <DeskstopNavigationMenu />
          <ActionBtns />
        </div>
      </nav>
    </header>
  );
}
