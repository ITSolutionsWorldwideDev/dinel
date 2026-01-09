import React from "react";
import { FaBell } from "react-icons/fa6";

const MobileMenuActionBtn = () => {
  return (
    <div className="xl:hidden flex items-center space-x-3 ">
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200">
        Contact
      </button>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
        <FaBell />
        <span>Job alert</span>
      </button>
    </div>
  );
};

export default MobileMenuActionBtn;
