"use client";
import Link from "next/link";
import { createPortal } from "react-dom";
import { FaBell } from "react-icons/fa6";
import React, { useState, useRef, useEffect } from "react";
import JobAlert from "../job-alert/JobAlert";

const ActionBtns = () => {
  const [open, setOPen] = useState(false);
  return (
    <>
      <div className="hidden xl:flex items-center space-x-3 ">
        <Link href="/contact-us">
          <button className="bg-[#FF8026] hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200">
            Contact
          </button>
        </Link>

        <button
          className="bg-[#0A7CD8] hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200 flex items-center space-x-2 cursor-pointer"
          onClick={() => setOPen(!open)}
        >
          <FaBell />
          <span>Job alert</span>
        </button>
      </div>
      {open &&
        createPortal(
          <div className="absolute right-0 top-10  z-100">
            <JobAlert open={open} setOPen={setOPen}/>
          </div>,
          document.body,
        )}
    </>
  );
};

export default ActionBtns;
