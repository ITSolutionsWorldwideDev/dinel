"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, Upload } from "lucide-react";
import JobSliderUpperSection from "./JobSliderUpperSection";
import JobSliderNormalCard from "./JobSliderNormalCard";
import JobSliderHoverCard from "./JobSliderHoverCard";

const FindJobSlider = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);

  // Sample JSON data
  const jobData = [
    {
      id: 1,
      title: "Senior Logistiek Medewerker",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
    },
    {
      id: 2,
      title: "Installatieverant woordelijke Hoog- en Laagspanning",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
    },
    {
      id: 3,
      title: "Senior Logistiek Medewerker",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
    },

    {
      id: 3,
      title: "Senior Logistiek Medewerker",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
    },

    {
      id: 3,
      title: "Senior Logistiek Medewerker",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
    },

    {
      id: 3,
      title: "Senior Logistiek Medewerker",
      discipline: "CONSTRUCTION & MAINTENANCE",
      sector: "PETROCHEMICAL",
      location: "FLEVOLAND",
    },
  ];

  // Duplicate data for seamless loop
  // const duplicatedData = [...jobData, ...jobData, ...jobData];

  useEffect(() => {
    if (hoveredCard === null) {
      const interval = setInterval(() => {
        setOffset((prev) => {
          const newOffset = prev + 1;
          const cardWidth = 370;
          if (Math.abs(newOffset) >= cardWidth * jobData.length) {
            return 0;
          }
          return newOffset;
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [hoveredCard, jobData.length]);

  const handleUploadCV = (jobTitle: any) => {
    alert(`Uploading CV for: ${jobTitle}`);
  };

  return (
    <div className=" bg-gray-50 py-16 overflow-hidden    container mx-auto">
      <JobSliderUpperSection />

      <div className="relative">
        <div
          className="flex gap-6 transition-transform duration-100 ease-linear"
          style={{
            transform: `translateX(${offset}px)`,
            width: "fit-content",
          }}
        >
          {jobData.map((job, index) => (
            <div
              key={`${job.id}-${index}`}
              className={`shrink-0 w-87.5 h-100 rounded-lg shadow-lg transition-all duration-300 cursor-pointer relative ${
                hoveredCard === `${job.id}-${index}`
                  ? "bg-[url('/assets/home/ac558c59fa76f4ddec80658fcef8766dc73597c2.jpg')] bg-cover  "
                  : "bg-white"
              }`}
              onMouseEnter={() => setHoveredCard(`${job.id}-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-8 h-full flex flex-col justify-between">
                {hoveredCard === `${job.id}-${index}` ? (
                  // Upload CV State
                  <JobSliderHoverCard job={job} />
                ) : (
                  // Normal State
                  <>
                    <JobSliderNormalCard job={job} />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindJobSlider;
