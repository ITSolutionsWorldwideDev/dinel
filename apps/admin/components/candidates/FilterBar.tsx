"use client";

import { Menu } from "@headlessui/react";
import Link from "next/link";

type Props = {
  filters: {
    search?: string;
    source?: string;
    sort?: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<any>>;
};

export default function FilterBar({ filters, setFilters }: Props) {
  return (
    <div className="flex gap-3 flex-wrap items-center">
      {/* Search */}
      <input
        type="text"
        placeholder="Search name or email"
        value={filters.search || ""}
        onChange={(e) =>
          setFilters((f: any) => ({ ...f, search: e.target.value }))
        }
        className="border px-3 py-2 rounded text-sm"
      />

      {/* Source */}
      <select
        value={filters.source || ""}
        onChange={(e) =>
          setFilters((f: any) => ({ ...f, source: e.target.value }))
        }
        className="border px-3 py-2 rounded text-sm"
      >
        <option value="">All sources</option>
        <option value="cv-upload">CV Upload</option>
        <option value="linkedin-extension">LinkedIn</option>
        <option value="manual">Manual</option>
      </select>

      {/* Sort */}
      <select
        value={filters.sort || ""}
        onChange={(e) =>
          setFilters((f: any) => ({ ...f, sort: e.target.value }))
        }
        className="border px-3 py-2 rounded text-sm"
      >
        <option value="">Newest</option>
        <option value="nameAsc">Name A–Z</option>
        <option value="nameDesc">Name Z–A</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
}



/* export default function FilterBar() {
  const filterItems = {
    status: ["Active", "InActive"],
    sort: ["Recently Added", "Ascending", "Descending", "Last Month", "Last 7 Days"],
  };

  return (
    <div className="flex flex-wrap gap-2 align-items-center">
      
      {Object.entries(filterItems).map(([label, items]) => (
        <Menu key={label} as="div" className="relative inline-block text-right">
          <Menu.Button className="px-3 py-2 bg-white border rounded-md shadow-sm text-sm hover:bg-gray-50">
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Menu.Button>

          <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border focus:outline-none z-50">
            {items.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <Link
                    href="#"
                    className={`block px-4 py-2 text-sm rounded-md ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {item}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      ))}
    </div>
  );
} */
