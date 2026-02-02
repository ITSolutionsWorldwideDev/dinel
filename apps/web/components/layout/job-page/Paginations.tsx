"use client";
import { useState } from "react";
import JobCard from "./JobCard";
import { ChevronRight, ChevronLeft } from "lucide-react";

export interface Job {
  id: number;
  title: string;
  discipline: string;
  sector: string;
  location: string;
  image: string;
}

interface JobListProps {
  jobData: Job[];
}
const Paginations = ({ jobData }: JobListProps) => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = jobData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mx-auto flex items-start gap-6">
      <div className="flex-1">
        <JobCard jobData={currentJobs} />

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-8 mt-6 p-10">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 border border-[#BCBCBC] cursor-pointer "
          >
            <ChevronLeft />
          </button>

          <span className="flex items-center font-medium border-2 border-[#FF6B35] bg-[#FF6B35] text-white p-6 rounded">
            {currentPage}
          </span>
          <span className="flex items-center font-medium ">of</span>
          <span className="flex items-center font-medium border-2 border-[#FF6B35] p-5 text-[#FF6B35] rounded">
            {" "}
            {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 border border-[#BCBCBC] cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paginations;
