"use client";
import React from "react";
import { FaBell } from "react-icons/fa6";
import { useState } from "react";
import { createPortal } from "react-dom";
import JobAlert from "../job-alert/JobAlert";
import { Link } from "../../../i18n/navigation";
import { useTranslations } from "next-intl";

const MobileMenuActionBtn = () => {
  const [open, setOPen] = useState(false);
  const t = useTranslations("actionBtns");

  return (
    <>
      <div className="xl:hidden flex items-center space-x-3 ">
        <button className="bg-[#0d2b33] hover:bg-[#071c22] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
          <Link href={"/contact-us"} className="">
            {t("contact")}
          </Link>{" "}
        </button>
        <button
          className="bg-[#f2c40d] hover:bg-[#e0b207] text-[#0d2b33] px-6 py-2 rounded-full text-sm font-bold transition-colors duration-200 flex items-center space-x-2"
          onClick={() => setOPen(!open)}
        >
          <FaBell />
          <span>{t("jobAlert")}</span>
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