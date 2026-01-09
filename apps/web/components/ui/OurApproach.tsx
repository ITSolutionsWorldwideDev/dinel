// app/components/OurApproach.tsx
import React from "react";

const items = [
  {
    letter: "T",
    title: "Technology",
    description:
      "You work with the latest technologies and innovations within your field.",
  },
  {
    letter: "I",
    title: "Insight",
    description:
      "We understand your ambitions, your experience and what you are really looking for.",
  },
  {
    letter: "E",
    title: "Experience",
    description:
      "With more than 25 years of experience in technology and secondment.",
  },
  {
    letter: "R",
    title: "Result",
    description: "You make an impact on projects and grow in your career.",
  },
];

const OurApproach = () => {
  return (
    <section className="container mx-auto  bg-linear-to-r from-orange-500 via-orange-400 to-blue-600 py-20 px-6">
      <div className=" text-center text-white">
        {/* Badge */}
        <span className="inline-block bg-white/20 text-sm px-4 py-1 rounded-full mb-4">
          Our Philosophy
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-16">
          Everything we do is based on one clear philosophy:
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-6 text-left hover:bg-white/30 transition"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mb-4">
                {item.letter}
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
