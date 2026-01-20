import React from "react";

interface props {
  heading: string;
  desc: string;
  btn1txt: string;
  btn2txt: string;
}

const TextWithTwoBtns = ({ heading, desc, btn1txt, btn2txt }:props) => {
  return (
    <>
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>

          {/* Subheading */}
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {desc}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
              {btn1txt}
            </button>

            <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-3 rounded-lg border-2 border-blue-600 shadow-md transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
              {btn2txt}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextWithTwoBtns;
