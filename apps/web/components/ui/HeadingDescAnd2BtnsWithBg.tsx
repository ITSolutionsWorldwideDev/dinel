import React from "react";

interface HeadingDescAnd2BtnsWithBgProps {
    heading:string;
    description:string;
    btn1Text:string;
    btn2Text:string;
}

const HeadingDescAnd2BtnsWithBg = ({heading,description,btn1Text,btn2Text}:HeadingDescAnd2BtnsWithBgProps) => {
  return (
    <section className="bg-[#FF8026] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center text-white">
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
          <button className="bg-white text-[#0A7CD8] px-6 py-3 font-medium rounded shadow hover:bg-gray-100 transition">
            {btn1Text}
          </button>

          <button className="border border-white px-6 py-3 font-medium rounded hover:bg-white hover:text-orange-500 transition">
            {btn2Text}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeadingDescAnd2BtnsWithBg;
