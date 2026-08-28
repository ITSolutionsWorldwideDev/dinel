"use client";
import { Link } from "../../../i18n/navigation";
import { createPortal } from "react-dom";
import { FaBell } from "react-icons/fa6";
import React, { useState } from "react";
import JobAlert from "../job-alert/JobAlert";
import { useTranslations } from "next-intl";

const ActionBtns = () => {
  const [open, setOPen] = useState(false);
  const t = useTranslations("actionBtns");

  const buttonCommonStyles =
    "h-11 px-5 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 flex items-center justify-center whitespace-nowrap";

  return (
    <>
      <div className="hidden xl:flex items-center space-x-3">
        <Link href="/contact-us">
          <button
            className={`bg-gradient-to-br from-[#0d2b33] to-[#1a4550] hover:from-[#1a4550] hover:to-[#0d2b33] text-white ${buttonCommonStyles}`}
          >
            {t("contact")}
          </button>
        </Link>

        <button
          className={`bg-[#f2c40d] hover:bg-[#d9ad00] text-[#0d2b33] space-x-2 ${buttonCommonStyles}`}
          onClick={() => setOPen(!open)}
        >
          <FaBell className="shrink-0 text-base" />
          <span>{t("jobAlert")}</span>
        </button>
      </div>

      {open &&
        createPortal(
          <div className="absolute right-0 top-10 md:right-1/5 md:top-1/5 z-100">
            <JobAlert open={open} setOPen={setOPen} />
          </div>,
          document.body,
        )}
    </>
  );
};

export default ActionBtns;