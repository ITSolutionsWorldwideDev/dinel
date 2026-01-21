import HeadingAndDesc from "@/components/ui/HeadingAndDesc";

import { FiSearch, FiPhone } from "react-icons/fi";
import { LuFileText } from "react-icons/lu";
import { TbRocket } from "react-icons/tb";
import React from "react";

const HowToApply = () => {
  const steps = [
    {
      number: "1",
      title: "Browse & Select",
      desc: "Explore our vacancies and find the perfect role that matches your skills and ambitions",
      icon: <FiSearch />,
    },
    {
      number: "2",
      title: "Submit Application",
      desc: "Apply directly through our platform with your CV and motivation in just a few clicks",
      icon: <LuFileText />,
    },
    {
      number: "3",
      title: "Get Contacted",
      desc: "Our recruiter will reach out to discuss the opportunity and assess the perfect fit",
      icon: <FiPhone />,
    },
    {
      number: "4",
      title: "Start Your Project",
      desc: "Begin your journey with full guidance and support from the Dinel team",
      icon: <TbRocket />,
    },
  ];
  return (
    <div className="container mx-auto p-10">
      <HeadingAndDesc
        heading="How to apply"
        desc="Four simple steps to your next challenge"
      />

      <section className="w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 container mx-auto px-4">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white border-l-4 border-[#FF6B35] hover:border-[#2B7FFF] transition-all duration-200  shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-lg p-6 flex gap-4"
            >
              {/* Number Background */}
              <span className="absolute text-[140px] font-bold text-[#FF6A0025] -top-10 -left-5 pointer-events-none select-none">
                {item.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-[#FF6A00] text-white rounded-lg text-2xl relative z-10">
                {item.icon}
              </div>

              {/* Text content */}
              <div className="relative z-10">
                <h3 className="font-semibold text-lg mb-1 text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowToApply;
