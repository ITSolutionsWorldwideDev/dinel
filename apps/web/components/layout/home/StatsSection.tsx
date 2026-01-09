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
    <div className="w-full p-8 bg-white ">
      <div className="relative max-w-6xl mx-auto overflow-hidden rounded-sm border-2 border-blue-400">
        {/* 1. The Gradient Background Layer */}
        <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-green-600 to-blue-500 opacity-90" />

        {/* 2. The Grid Lines Overlay 
            Using a data URI for a simple repeating grid pattern */}
        <div
          className="absolute  inset-0 opacity-30 bg-cover "
          style={{
            backgroundImage: `url("assets/home/a440c36d86129b5de6ed4bdc30ecc4087b6122d5.jpg")`,
            // backgroundSize: '20px 20px'
          }}
        />

        {/* 3. The Inner Border Container */}
        <div className="relative m-2 border border-white/60 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 items-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center text-white
                  ${index !== stats.length - 1 ? "md:border-r md:border-white/40" : ""}`}
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
