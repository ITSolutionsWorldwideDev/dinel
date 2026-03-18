// apps/admin/components/category/FilterBar.tsx

"use client";

import { Menu } from "@headlessui/react";

type Props = {
  search: string;
  setSearch: (val: string) => void;
  setStatus: (val: string | null) => void;
  setSort: (val: string | null) => void;
};

export default function FilterBar({
  search,
  setSearch,
  setStatus,
  setSort,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 items-center">

      {/* Search */}
      <input
        type="text"
        placeholder="Search categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-2 rounded-md text-sm w-60"
      />

      {/* Status Filter */}
      <Menu as="div" className="relative">
        <Menu.Button className="px-3 py-2 bg-white border rounded-md text-sm">
          Status
        </Menu.Button>

        <Menu.Items className="absolute mt-2 w-40 bg-white shadow-lg rounded-md border z-50">

          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setStatus("Active")}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  active && "bg-gray-100"
                }`}
              >
                Active
              </button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setStatus("InActive")}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  active && "bg-gray-100"
                }`}
              >
                Inactive
              </button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setStatus(null)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  active && "bg-gray-100"
                }`}
              >
                All
              </button>
            )}
          </Menu.Item>

        </Menu.Items>
      </Menu>

      {/* Sort */}
      <Menu as="div" className="relative">
        <Menu.Button className="px-3 py-2 bg-white border rounded-md text-sm">
          Sort
        </Menu.Button>

        <Menu.Items className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border z-50">

          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setSort("nameAsc")}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  active && "bg-gray-100"
                }`}
              >
                Name Ascending
              </button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setSort("nameDesc")}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  active && "bg-gray-100"
                }`}
              >
                Name Descending
              </button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setSort("dateAsc")}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  active && "bg-gray-100"
                }`}
              >
                Oldest
              </button>
            )}
          </Menu.Item>

        </Menu.Items>
      </Menu>

    </div>
  );
}

/* "use client";

import { Menu } from "@headlessui/react";
import Link from "next/link";

export default function FilterBar() {
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
