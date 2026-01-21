// apps/admin/components/applications/FilterBar.tsx
"use client";

type Props = {
  status?: string;
  jobId?: string;
  onChange: (filters: { status?: string; jobId?: string }) => void;
};

const STATUSES = ["APPLIED", "INTERVIEW", "HIRED", "REJECTED"];

export default function FilterBar({ status, jobId, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      {/* Status */}
      <select
        value={status || ""}
        onChange={(e) => onChange({ status: e.target.value || undefined })}
        className="border rounded px-3 py-2 text-sm"
      >
        <option value="">All Status</option>
        {STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/* Job */}
      <input
        type="text"
        placeholder="Filter by job title"
        value={jobId || ""}
        onChange={(e) => onChange({ jobId: e.target.value || undefined })}
        className="border rounded px-3 py-2 text-sm"
      />
    </div>
  );
}
