"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    "All",
    "Industry Insights",
    "Career Tips",
    "Technology",
    "Sustainability",
    "Company News",
  ];

  return (
    <div className="w-full  bg-white p-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl    p-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-700 placeholder:text-slate-400"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                    activeFilter === filter
                      ? "bg-blue-500 text-white shadow-md shadow-blue-200"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter Display */}
          {searchQuery && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Searching for{" "}
                <span className="font-semibold text-slate-900">
                  "{searchQuery}"
                </span>{" "}
                in{" "}
                <span className="font-semibold text-blue-600">
                  {activeFilter}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Demo Content */}
        {/* <div className="mt-8 grid gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-2">
                    {activeFilter === "All" ? "Technology" : activeFilter}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Sample Article Title {item}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    This is a sample article description that would appear in
                    the search results...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
