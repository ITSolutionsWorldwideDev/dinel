// app/components/OurApproach.tsx
import React from "react";

interface ApproachItem {
  letter: string;
  title: string;
  description: string;
}

interface OurApproachProps {
  uppertetxt?: string;
  heading: string;
  subtitle: string;
  data: ApproachItem[];
}
const OurApproach = ({
  uppertetxt,
  heading,
  subtitle,
  data,
}: OurApproachProps) => {
  return (
    <section className="container mx-auto  bg-linear-to-r from-[#FF8026] to-[#0A7CD8] py-20 px-6">
      <div className=" text-center text-white">
        {/* Badge */}
        {uppertetxt && (
          <span className="inline-block bg-white/20 text-sm px-4 py-1 rounded-full mb-4">
            {uppertetxt}
          </span>
        )}

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{heading}</h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-16">{subtitle}</p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item: any, index: number): any => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md border border-white/30  p-6 text-center hover:bg-white/30 transition"
            >
              <div className="flex items-center justify-center text-center">
                <div className="w-15 h-15 shadow-xl  bg-linear-to-b from-[#FF6B35] to-[#E55A2B] text-white flex items-center justify-center text-3xl font-bold mb-4">
                  {item.letter}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-white/80 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
