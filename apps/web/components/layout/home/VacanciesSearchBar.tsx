"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function VacanciesSearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-[80vw] bg-linear-to-r from-[#D34A03] to-[#0A7CD8] flex items-center justify-center p-4 border-5 border-white container mx-auto">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find the job that suits you
          </h1>
          <p className="text-lg text-white/90">
            We have over 1,000 vacancies in our portfolio. Search our online
            vacancies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-stretch">
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FaSearch size={20} color="black" />
            </div>
            <div className="absolute left-11 top-1/4 w-0.5 font-bold h-6 bg-black mr-2" />

            <input
              type="text"
              placeholder="Search vacancies by keyword"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              // onKeyPress={handleKeyPress}
              className="ml-3 bg-white w-full h-12 pl-12 pr-4 rounded border-0 focus:outline-none focus:ring-2  text-gray-700"
            />
          </div>

          <button
            onClick={handleSearch}
            className="h-12 px-8 border-2 border-white  text-white font-medium rounded transition-colors"
          >
            To Search
          </button>

          <button
            onClick={() => console.log("View all vacancies")}
            className="h-12 px-8 bg-[#FF8026]  text-white font-medium rounded transition-colors"
          >
            All Vacancies
          </button>
        </div>
      </div>
    </div>
  );
}
