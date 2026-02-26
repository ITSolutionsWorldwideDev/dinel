import Link from "next/link";
import React from "react";

interface HeadingDescAnd2BtnsWithBgProps {
    heading:string;
    description:string;
    btn1Text:string;
    btn2Text:string;
    btn1Href:string;
    btn2Href:string;
}

const HeadingDescAnd2BtnsWithBg = ({heading,description,btn1Text,btn2Text,btn1Href,btn2Href}:HeadingDescAnd2BtnsWithBgProps) => {
  return (
    <section className="bg-[#FF8026] py-20 px-4 relative">
      <img
          src="/assets/home/2ab3e25bb92dd58e32fa83e505bc6ebef6f6ed58(1).jpg"
          className="absolute   inset-0 w-full h-full object-cover mix-blend-multiply"
          alt=""
        />
      <div className="max-w-3xl mx-auto text-center text-white relative">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 ">
          {heading}
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg max-w-xl mx-auto mb-10">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
         <Link href={`/${btn1Href}`}>
          <button className="cursor-pointer bg-white text-[#0A7CD8] px-6 py-3 font-medium rounded shadow hover:bg-gray-100 transition ">
            {btn1Text}
          </button>
          </Link>

        <Link href={`/${btn2Href}`}>
          <button className="cursor-pointer border border-white px-6 py-3 font-medium rounded hover:bg-white hover:text-orange-500 transition">
            {btn2Text}
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeadingDescAnd2BtnsWithBg;
