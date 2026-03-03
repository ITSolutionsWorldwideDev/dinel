// apps/web/components/layout/home/FindJobSlider.tsx
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { ArrowUpRight, Upload } from "lucide-react";
import JobSliderUpperSection from "./JobSliderUpperSection";
import JobSliderNormalCard from "./JobSliderNormalCard";
import JobSliderHoverCard from "./JobSliderHoverCard";
import VacanciesSearchBar from "./VacanciesSearchBar";

const FindJobSlider = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);

  type Job = {
    id: number;
    title: string;
    discipline: string;
    sector: string;
    location: string;
  };

  type JobFilters = {
    sort?: "recent" | "title_asc" | "title_desc";
    search?: string;
  };

  const [data, setData] = useState<{
    items: Job[];
    meta: {
      page: number;
      pageSize: number;
      totalPages: number;
      totalResults: number;
    };
  } | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState<JobFilters>({
    sort: "recent",
  });

  const jobData = data?.items;

  // const handleSearch = (value: string) => {
  //   setFilters((prev) => ({
  //     ...prev,
  //     search: value || undefined,
  //   }));

  //   setPage(1);
  // };

  // Sample JSON data

  /* const jobData = [
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
  ];  */

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        page: String(page),
        limit: "10",
        ...Object.fromEntries(Object.entries(filters).filter(([, v]) => v)),
      });

      const res = await fetch(`/api/jobs?${params.toString()}`);
      const json = await res.json();

      setData({
        items: json.items || [],
        meta: {
          page: json.page,
          pageSize: json.pageSize,
          totalPages: json.totalPages,
          totalResults: json.totalResults,
        },
      });
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [page, filters]);
  // Duplicate data for seamless loop
  // const duplicatedData = [...jobData, ...jobData, ...jobData];

  const duplicatedData = useMemo(() => {
    if (!jobData) return [];
    return [...jobData, ...jobData]; // duplicate once
  }, [jobData]);

  useEffect(() => {
    if (!jobData || jobData.length === 0) return;

    if (hoveredCard === null) {
      const interval = setInterval(() => {
        setOffset((prev) => {
          const cardWidth = 370;
          const totalWidth = cardWidth * jobData.length; // width of original set

          const newOffset = prev - 1;

          // seamless reset without jump
          if (Math.abs(newOffset) >= totalWidth) {
            return 0;
          }

          return newOffset;
        });
      }, 20); // adjust speed if needed

      return () => clearInterval(interval);
    }
  }, [hoveredCard, jobData]);

  /* useEffect(() => {
    if (!jobData || jobData.length === 0) return;

    if (hoveredCard === null) {
      const interval = setInterval(() => {
        setOffset((prev) => {
          const newOffset = prev - 1;
          const cardWidth = 370;

          if (Math.abs(newOffset) >= cardWidth * jobData.length) {
            return 0;
          }

          return newOffset;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [hoveredCard, jobData]); */

  return (
    <>
      <div className="mt-20">
        <div className=" bg-gray-50 py-16 overflow-hidden container mx-auto">
          <JobSliderUpperSection />

          <div className="relative">
            <div
              className="flex gap-6 transition-transform duration-100 ease-linear"
              style={{
                transform: `translateX(${offset}px)`,
                width: "fit-content",
              }}
            >
              {duplicatedData?.map((job, index) => (
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
      </div>
    </>
  );
};

export default FindJobSlider;
/* 


  const handleUploadCV = (jobTitle: any) => {
    alert(`Uploading CV for: ${jobTitle}`);
  }; */

/* useEffect(() => {
    if (hoveredCard === null) {
      const interval = setInterval(() => {
        setOffset((prev) => {
          const newOffset = prev + 1;
          const cardWidth = 370;
          if (Math.abs(newOffset) >= cardWidth * jobData?.length) {
            return 0;
          }
          return newOffset;
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [hoveredCard, jobData?.length]); */
