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

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      // Show all pages if total is 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first 2 pages
      pages.push(1, 2);

      // Determine if current page should be shown in the middle
      if (currentPage > 2 && currentPage < totalPages - 1) {
        // Current page is in the middle (not in first 2 or last 2)
        pages.push("...");
        pages.push(currentPage);
        pages.push("...");
      } else if (currentPage <= 2) {
        // Current page is in first 2
        pages.push("...");
      } else {
        // Current page is in last 2
        pages.push("...");
      }

      // Always show last 2 pages
      pages.push(totalPages - 1, totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="container mx-auto flex items-start gap-6">
      <div className="flex-1">
        <JobCard jobData={currentJobs} />

        {/* Pagination Buttons */}
        <div className="flex justify-center items-center gap-3 mt-6 p-10 flex-wrap">
          {/* Prev */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="p-3 rounded border border-[#BCBCBC] disabled:opacity-50 cursor-pointer"
          >
            <ChevronLeft />
          </button>

          {/* Page Numbers */}
          {pageNumbers.map((page, index) => {
            if (page === "...") {
              return (
                <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                  ...
                </span>
              );
            }

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page as number)}
                className={`w-10 h-10 rounded border font-medium transition cursor-pointer
                  ${
                    currentPage === page
                      ? "bg-[#FF6B35] text-white border-[#FF6B35]"
                      : "border-[#BCBCBC] text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {page}
              </button>
            );
          })}

          {/* Next */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="p-3 rounded border border-[#BCBCBC] disabled:opacity-50 cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paginations;