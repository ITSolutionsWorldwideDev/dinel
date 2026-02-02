import React from "react";
import { LuHeartHandshake } from "react-icons/lu";
import Link from "next/link";
const TechnicalProfessionals = () => {
  return (
    <section className="bg-[#FF8026] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center text-white">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center">
            <span className="text-2xl">
              <LuHeartHandshake />
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 ">
          Looking for the right technical professionals?
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg max-w-xl mx-auto mb-10">
          Let’s discuss how Dinel can support your organization with expertise,
          capacity and continuity.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link href={'/contact-us'}>
          <button className="bg-white text-[#0A7CD8] px-6 py-3 font-medium rounded shadow hover:bg-gray-100 transition">
            Contact Dinel
          </button>
          </Link>

          <button className="border border-white px-6 py-3 font-medium rounded hover:bg-white hover:text-orange-500 transition">
            Schedule a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProfessionals;
