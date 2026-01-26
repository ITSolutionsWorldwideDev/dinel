import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import { FaqHeaderSection } from "./FaqHeaderSection";
interface header {
  heading1: string;
  heading2?: string;
  description: string;
  image: string;
}
const HeaderWithCenterTextandBgImg = ({
  heading1,
  heading2,
  description,
  image,
}: header) => {
  return (
    <section className="relative w-full h-auto lg:h-screen min-h-125 overflow-hidden">
      {/* Background Image */}
      <Image
        src={`${image}`} // put image in /public/hero.jpg
        alt="Industry Bridge"
        fill
        priority
        className="object-cover absolute inset-0 w-full h-full "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-600/60" />
      <NavBar />

      {/* Content */}
      <div className="relative z-10 h-1/2 flex  items-center container mx-auto justify-center">
        <div className="px-6 text-center">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {heading1}
          </h2>
          {heading2 && (
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
              {heading2}
            </h2>
          )}

          <p className="mt-6 mx-auto max-w-2xl text-white/90 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute top-1/3 lg:top-1/4 right-0 z-10">
        <FaqHeaderSection />
      </div>
    </section>
  );
};

export default HeaderWithCenterTextandBgImg;
