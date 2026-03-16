// apps/admin/components/blogs/FilterBar.tsx

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
        placeholder="Search blogs..."
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
                onClick={() => setStatus("Published")}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  active && "bg-gray-100"
                }`}
              >
                Published
              </button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setStatus("Draft")}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  active && "bg-gray-100"
                }`}
              >
                Draft
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
                Title Ascending
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
                Title Descending
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
