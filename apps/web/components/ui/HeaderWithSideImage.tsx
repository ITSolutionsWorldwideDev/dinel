import React from "react";
import Image from "next/image";
import Link from "next/link";
import Stats from "../layout/client/Stats";
import { FaqHeaderSection } from "./FaqHeaderSection";

interface props {
  heading: string;
  desc: string;
  image: string;
  btn1: string;
  btn2: string;
}
const HeaderWithSideImage = ({ heading, desc, image, btn1, btn2 }: props) => {
  return (
    <section className="relative w-full min-h-screen container mx-auto overflow-hidden">
      {/* Background Image */}
      {/* <Image
        src="/assets/professionals/67fda7679ab84f6d652e6ab45c424b5bf97582d5.jpg"
        alt="Industry Bridge"
        fill
        priority
        className="object-cover scale-x-[-1]"
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#000000B2] to-[#106FBC]" />

      {/* Big faded text */}

      {/* Content */}
      <div className="">
        <div className="relative z-10 h-full 2xl:flex  items-center mt-30  mx-auto ">
          <div className="px-6 ">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-1/2">
              {heading}
            </h2>

            <p className="mt-6 max-w-2xl text-white/90 text-base md:text-lg leading-relaxed">
              {desc}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
              >
                {btn1}
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-white text-[#0A7CD8] hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition"
              >
                {btn2}
              </Link>
            </div>
          </div>
          <div className=" h-screen w-auto absolute top-0 right-0 border-2 hidden 2xl:block">
            <Image
              src={`${image}`}
              alt="Side Image"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>

          <FaqHeaderSection />
        </div>
      </div>

      {/* <div className=""> */}

      {/* </div> */}
    </section>
  );
};

export default HeaderWithSideImage;
