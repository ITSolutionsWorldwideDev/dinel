import React from "react";

const StatsSection = () => {
  // Stats data for easy maintenance
  const stats = [
    { value: "25+", label: "Year Of Experience" },
    { value: "200+", label: "Project's Complete" },
    { value: "68+", label: "Team Members" },
    { value: "99+", label: "Total Award Wins" },
  ];

  return (
    <div className="w-full p-8 ">
      <div className="relative  container  mx-auto overflow-hidden   p-5">
        <div className="absolute inset-0 z-0 bg-cover bg-center  bg-[url('/assets/home/a440c36d86129b5de6ed4bdc30ecc4087b6122d5.jpg')]" />
        <div className="absolute   inset-0 bg-linear-to-r from-[#FF8026]/70 via-[#008001]/70 to-[#0A7CD8]/70" />

        {/* Solid Inner Box that hides background */}
        <div className="relative m-2 border border-white p-8 md:p-12 z-10 bg-linear-to-r from-[#FF8026] via-[#008001] to-[#0A7CD8]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 items-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center text-white
              ${index !== stats.length - 1 ? "md:border-r md:border-white" : ""}`}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
                  {stat.value}
                </h2>
                <p className="text-sm md:text-base font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
