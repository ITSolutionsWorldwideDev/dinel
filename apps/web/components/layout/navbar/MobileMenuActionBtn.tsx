import React from "react";
import { FaBell } from "react-icons/fa6";
import { useState } from "react";
import { createPortal } from "react-dom";
import JobAlert from "../job-alert/JobAlert";
import Link from "next/link";
const MobileMenuActionBtn = () => {
  const [open, setOPen] = useState(false);
  return (
    <>
      <div className="xl:hidden flex items-center space-x-3 ">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200">
          <Link href={"/contact-us"} className="">
            Contact
          </Link>{" "}
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
          onClick={() => setOPen(!open)}
        >
          <FaBell />
          <span>Job alert</span>
        </button>
      </div>
      {open &&
        createPortal(
          <div className="absolute right-0 top-10  z-100">
            <JobAlert open={open} setOPen={setOPen} />
          </div>,
          document.body,
        )}
    </>
  );
};

export default MobileMenuActionBtn;
