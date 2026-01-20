import React from "react";

interface TextWithBorderAndBgProps {
  text: string;
}

const TextWithBorderAndBg = ({ text }: TextWithBorderAndBgProps) => {
  return (
    <div className="max-w-3xl mx-auto bg-linear-to-r from-[#0A7CD81A] to-[#FF6B351A] border border-[#0A7CD81A]">
      <div className="  p-8 text-center ">
        <p className="text-gray-700 text-lg">{text}</p>
      </div>
    </div>
  );
};

export default TextWithBorderAndBg;
