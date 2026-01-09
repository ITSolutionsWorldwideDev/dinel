// apps/admin/components/jobs/FilterBar.tsx
"use client";

import { Menu } from "@headlessui/react";
import Link from "next/link";

type Filters = {
  status?: string;
  employment_type?: string;
  workplace_type?: string;
  experience_level?: string;
  sort?: string;
};

type Props = {
  filters: Filters;
  onChange: (key: keyof Filters, value: string) => void;
  onClear: () => void;
};

export default function FilterBar({ filters, onChange, onClear }: Props) {
  const filterItems: Record<string, string[]> = {
    status: ["DRAFT", "PUBLISHED", "CLOSED"],
    employment_type: ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERN"],
    workplace_type: ["ONSITE", "REMOTE", "HYBRID"],
    experience_level: ["JUNIOR", "MID", "SENIOR", "LEAD"],
    sort: ["recent", "title_asc", "title_desc"],
  };

  const hasActiveFilters = Object.values(filters).some(Boolean);

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(filterItems).map(([key, items]) => (
        <Menu key={key} as="div" className="relative inline-block">
          <Menu.Button className="px-3 py-2 bg-white border rounded-md text-sm">
            {filters[key as keyof Filters] || key.replace("_", " ")}
          </Menu.Button>

          <Menu.Items className="absolute z-50 mt-2 w-48 bg-white border rounded shadow">
            {items.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={() =>
                      onChange(key as keyof Filters, item)
                    }
                    className={`w-full text-left px-4 py-2 text-sm ${
                      active ? "bg-gray-100" : ""
                    }`}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      ))}

      {/* CLEAR FILTERS */}
      {hasActiveFilters && (
        <button
          onClick={onClear}
          className="px-3 py-2 text-sm border rounded-md bg-gray-100 hover:bg-gray-200"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}

/*   return (
    <div className="flex flex-wrap gap-2 align-items-center">
      {Object.entries(filterItems).map(([key, items]) => (
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
