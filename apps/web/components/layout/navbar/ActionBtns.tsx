import Link from "next/link";
import React from "react";
import { FaBell } from "react-icons/fa6";

const ActionBtns = () => {
  return (
    <div className="hidden xl:flex items-center space-x-3 ">
      <Link href="/contactus">
        <button className="bg-[#FF8026] hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200">
          Contact
        </button>
      </Link>

      <button className="bg-[#0A7CD8] hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
        <FaBell />
        <span>Job alert</span>
      </button>
    </div>
  );
};

export default ActionBtns;
