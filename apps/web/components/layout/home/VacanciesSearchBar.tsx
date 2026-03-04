"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

type Props = {
  onSearch: (value: string) => void;
};

export default function VacanciesSearchBar({ onSearch }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

console.log(onSearch, "onSearch in search bar");
  const router = useRouter();
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    // onSearch(searchQuery);
     router.push(`/vacancies/all?search=${encodeURIComponent(searchQuery)}`);

  };

  

  return (
    <div className="w-[85vw] bg-linear-to-r from-[#D34A03] to-[#0A7CD8] flex items-center justify-center p-4 border-5 border-white container mx-auto">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find the job that suits you
          </h1>
          <p className="text-lg text-white/90">
            We offer multiple vacancies in our portfolio. Search our online
            vacancies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 items-stretch">
          <div className="flex-1 relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 p-3">
              <FaSearch size={20} color="black " />
            </div>
            <div className="  mr-2" />

            <input
              type="text"
              placeholder="Search vacancies by keyword"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
             
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className=" bg-white w-full h-12 pl-12 pr-4  border-0 focus:outline-none focus:ring-2  text-gray-700"
            />
          </div>

          <button
            onClick={handleSearch}
            className="h-12 px-8 border-2 border-white  text-white font-medium  transition-colors cursor-pointer"
          >
            To Search
          </button>

          <Link href={`/vacancies/all`} className="">
            <button
              // onClick={() => console.log("View all vacancies")}
              onClick={() => {
                setSearchQuery("");
                onSearch("");
              }}
              className="h-12 px-8 bg-[#FF8026]  text-white font-medium  transition-colors cursor-pointer"
            >
              All Vacancies
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
