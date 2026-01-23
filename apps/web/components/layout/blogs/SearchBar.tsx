// apps/web/components/layout/blogs/SearchBar.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useState } from "react";
interface Category {
  name: string;
  slug: string;
}

export default function SearchBar({
  categories,
}: {
  categories: Category[];
}) {
  const router = useRouter();
  const params = useSearchParams();

  const [search, setSearch] = useState(params.get("search") || "");
  const activeCategory = params.get("category") || "all";

  function applyFilters(category?: string) {
    const qs = new URLSearchParams();

    if (search) qs.set("search", search);
    if (category && category !== "all") qs.set("category", category);

    router.push(`/blogs?${qs.toString()}`);
  }

  return (
    <div className="py-8">
      <div className="container mx-auto space-y-6">

        <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Search */}
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 " />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && applyFilters(activeCategory)}
            placeholder="Search articles..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-700 placeholder:text-slate-40"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => applyFilters("all")}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap  text-slate-600  ${
              activeCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 hover:bg-slate-200"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => applyFilters(cat.slug)}
              className={`px-4 py-2 rounded-lg ${
                activeCategory === cat.slug
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}