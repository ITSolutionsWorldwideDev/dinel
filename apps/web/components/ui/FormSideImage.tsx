import Link from "next/link";
import React from "react";

interface LoginImageProps {
  image: string;
  heading: string;
  desc: string;
}
const FormSideImage = ({ image, heading, desc }: LoginImageProps) => {
  return (
    <main className="min-h-screen relative overflow-hidden ">
      {/* Background image */}
      {/* <div className="absolute  inset-0 bg-linear-to-br from-[#FF6B35] to-[#0A7CD8]" /> */}

      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(${image})`, // place image in public folder
        }}
      />
      {/* <img
        src="/assets/8de6dd4ea97098339dd92da4572cd8074f734c9f.jpg"
        alt=""
        className="w-full h-screen  "
      /> */}

      {/* Gradient overlay */}
      <div className="absolute opacity-80 inset-0 bg-linear-to-br from-[#0A7CD8] via-[#0A7CD8] to-[#FF6B35]" />
      <div className="absolute inset-0 bg-linear-to-t from-[#FF6B35]/70  to-[#0A7CD8]/10" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col min-h-screen px-6">
        {/* Header */}
        <header className="flex justify-end py-6 mt-10">
          <Link href={"/"}>
            <div className=" text-right">
             
            </div>
          </Link>
        </header>

        {/* Hero text */}
        <section className="flex flex-1 items-center justify-center">
          <div className="max-w-xl text-white">
            <h2 className="text-2xl md:text-3xl text-center font-bold leading-tight">
              {heading}
            </h2>

            <p className="mt-4 text-xl text-center text-white/90">{desc}</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FormSideImage;
