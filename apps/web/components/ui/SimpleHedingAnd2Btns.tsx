import React from "react";
import HeadingAndDesc from "../ui/HeadingAndDesc";
import { ArrowRight } from "lucide-react";
import { SignPrivateKeyInput } from "crypto";

interface SimpleHedingAnd2BtnsProps {
  heading: string;
  des: string;
  btn1: string;
  btn2: string;
  btn1Classes?: string;
  btn2Classes?: string;
  icon?: React.ReactNode;
}

const SimpleHedingAnd2Btns = ({
  heading,
  des,
  btn1,
  btn2,
  btn1Classes,
  btn2Classes,
  icon,
}: SimpleHedingAnd2BtnsProps) => {
  return (
    <>
      <div className="mt-10">
        <HeadingAndDesc heading={`${heading}`} desc={`${des}`} />
      </div>
      .
      <div className="flex items-center justify-center space-x-3">
        <button
          className={`flex items-center justify-center hover:bg-blue-700  px-6 py-3  font-medium transition ${btn1Classes}`}
        >
          {btn1} <span>{icon}</span>
        </button>

        <button
          className={`${btn2Classes} hover:bg-blue-700  px-6 py-3  font-medium transition`}
        >
          {btn2}
        </button>
      </div>
    </>
  );
};

export default SimpleHedingAnd2Btns;
