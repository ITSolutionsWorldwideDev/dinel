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

  return null;
};

export default ActionBtns;