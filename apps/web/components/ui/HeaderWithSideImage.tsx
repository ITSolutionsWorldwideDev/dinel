import React from "react";
import Image from "next/image";
import Link from "next/link";
import Stats from "../layout/client/Stats";
import { FaqHeaderSection } from "./FaqHeaderSection";
import NavBar from "./NavBar";

interface props {
  heading: string;
  desc: string;
  image: string;
  btn1: string;
  btn2: string;
}
const HeaderWithSideImage = ({ heading, desc, image, btn1, btn2 }: props) => {
  return (
    <section className="relative w-full h-auto lg:min-h-screen  overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#000000B2] to-[#106FBC]" />

      {/* Big faded text */}
      <NavBar />
      {/* Content */}

      <div className="relative z-10 h-full flex flex-col xl:flex-row justify-center items-center overflow-visible mx-auto">
        {/* TEXT COLUMN */}
        <div className="px-6 w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            {heading}
          </h2>

          <p className="mt-6 max-w-2xl text-white/90 text-base md:text-lg leading-relaxed mx-auto md:mx-0">
            {desc}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-blue-700 text-white px-6 py-3  font-medium transition"
            >
              {btn1}
            </Link>

            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white text-[#0A7CD8] hover:bg-gray-100 px-6 py-3  font-medium transition"
            >
              {btn2}
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative md:right-20 h-75 md:h-screen w-full md:w-auto overflow-visible">
          <Image
            src={image}
            alt="Side Image"
            width={500}
            height={500}
            className="w-full md:w-auto h-full object-cover"
          />
        </div>
      </div>

      {/* <div className=""> */}

      {/* </div> */}

      <div className="absolute top-1/3 lg:top-1/4 right-0  z-10">
        <FaqHeaderSection />
      </div>
    </section>
  );
};

export default HeaderWithSideImage;
