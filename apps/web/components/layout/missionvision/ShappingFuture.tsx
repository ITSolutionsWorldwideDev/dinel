import Link from "next/link";
import React from "react";

const ShappingFuture = () => {
  return (
    <section className="bg-[#FF8026] py-20 px-4 relative">
      <img
        src="/assets/home/2ab3e25bb92dd58e32fa83e505bc6ebef6f6ed58(1).jpg"
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
        alt=""
      />
      <div className="max-w-3xl mx-auto text-center text-white">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 ">
          Join us in shaping the future
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg max-w-xl mx-auto mb-10">
          Whether you are a professional or an organization, we invites you
          to grow, contribute and make an impact together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/become-a-dineler`}>
            <button className="bg-white text-[#0A7CD8] px-6 py-3 font-medium cursor-pointer shadow hover:bg-gray-100 transition">
              Become a Team Member
            </button>
          </Link>

          <Link href={`/contact-us`}>
            <button className="border border-white px-6 py-3 font-medium cursor-pointer  hover:bg-white hover:text-orange-500 transition">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShappingFuture;
