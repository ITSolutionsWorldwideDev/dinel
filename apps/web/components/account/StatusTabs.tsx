// apps/web/components/account/StatusTabs.tsx
"use client";

import { cn } from "@/lib/utils";
import type { ApplicationStatus } from "./types";

const STATUSES: {
  label: string;
  value: ApplicationStatus | null;
}[] = [
  { label: "All", value: null },
  { label: "Applied", value: "APPLIED" },
  { label: "Interview", value: "INTERVIEW" },
  { label: "Rejected", value: "REJECTED" },
];

export default function StatusTabs({
  value,
  onChange,
}: {
  value: ApplicationStatus | null;
  onChange: (v: ApplicationStatus | null) => void;
}) {
  return (
    <div className="flex gap-2 mb-4 border-b pb-2">
      {STATUSES.map((s) => (
        <button
          key={s.label}
          onClick={() => onChange(s.value)}
          className={cn(
            "px-3 py-1 text-sm rounded-full",
            value === s.value
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
