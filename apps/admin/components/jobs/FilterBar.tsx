// apps/admin/components/jobs/FilterBar.tsx
"use client";

import type { JobFilters } from "@/types/job";

type Filters = {
  status?: string;
  employment_type?: string;
  workplace_type?: string;
  experience_level?: string;
  sort?: string;
  search?: string;
};

type Props = {
  filters: JobFilters;
  onChange: <K extends keyof JobFilters>(
    key: K,
    value: JobFilters[K]
  ) => void;
  onClear: () => void;
};

const OPTIONS = {
  status: ["DRAFT", "PUBLISHED", "CLOSED"],
  employment_type: ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERN"],
  workplace_type: ["ONSITE", "REMOTE", "HYBRID"],
  experience_level: ["JUNIOR", "MID", "SENIOR", "LEAD"],
  sort: ["recent", "title_asc", "title_desc"],
};

export default function FilterBar({ filters, onChange, onClear }: Props) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search job title / location"
        value={filters.search || ""}
        onChange={(e) => onChange("search", e.target.value)}
        className="px-3 py-2 border rounded text-sm w-64"
      />

      {Object.entries(OPTIONS).map(([key, items]) => (
        <select
          key={key}
          value={filters[key as keyof Filters] || ""}
          onChange={(e) =>
            onChange(key as keyof Filters, e.target.value)
          }
          className="px-3 py-2 border rounded text-sm"
        >
          <option value="">{key.replace("_", " ")}</option>
          {items.map((item) => (
            <option key={item} value={item}>
              {item.replace("_", " ")}
            </option>
          ))}
        </select>
      ))}

      <button
        onClick={onClear}
        className="px-3 py-2 text-sm border rounded bg-gray-100 hover:bg-gray-200"
      >
        Clear
      </button>
    </div>
  );
}


/* export default function FilterBar({ filters, onChange, onClear }: Props) {
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
} */
