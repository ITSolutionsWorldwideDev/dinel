// apps/web/components/layout/job-page/Discipline.tsx

"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const disciplines = [
  "Design",
  "Development",
  "Marketing",
  "Finance",
  "Human Resources",
];

export default function Discipline() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  return (
    <div className="w-full max-w-md  overflow-hidden bg-white">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-4 shadow-sm"
      >
        <span className="font-medium">Disciplines</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="border-t px-4 py-3 space-y-2">
          {disciplines.map((item) => (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => toggleSelect(item)}
                className="accent-red-600"
              />
              <span className="text-sm">{item}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
