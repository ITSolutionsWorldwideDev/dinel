import React from "react";
import { LuHeartHandshake } from "react-icons/lu";

const ShappingFuture = () => {
  return (
    <section className="bg-[#FF8026] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center text-white">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 ">
          Join us in shaping the future
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg max-w-xl mx-auto mb-10">
          Whether you are a professional or an organization, Dinel invites you
          to grow, contribute and make an impact together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#0A7CD8] px-6 py-3 font-medium rounded shadow hover:bg-gray-100 transition">
            Become a Dineler
          </button>

          <button className="border border-white px-6 py-3 font-medium rounded hover:bg-white hover:text-orange-500 transition">
            Contact Dinel
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShappingFuture;
