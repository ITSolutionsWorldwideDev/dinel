// apps\admin\components\jobs\JobForm.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type JobFormProps = {
  initialData: any;
  onSubmit: (data: any) => Promise<void>;
  mode?: "create" | "edit";
};

export default function JobForm({
  initialData,
  onSubmit,
  mode = "create",
}: JobFormProps) {
  const router = useRouter();
  const [form, setForm] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      await onSubmit(form);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-header flex justify-between items-center mb-4">
        <div>
          <h4 className="text-lg font-semibold">Jobs</h4>
          {/* <h6 className="text-gray-500">Manage Jobs</h6> */}
        </div>
      </div>
      <div className="card">
        <div className="card-header flex justify-between items-center">
          {mode === "create" ? "Create Job" : "Edit Job"}
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit} className="max-w-3xl space-y-4">
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded">{error}</div>
            )}

            {/* TITLE */}
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Job Title"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              required
            />

            {/* DESCRIPTION */}
            <textarea
              className="w-full border rounded px-3 py-2 min-h-30"
              placeholder="Job Description"
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              required
            />

            {/* LOCATION */}
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Location"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
            />

            {/* EMPLOYMENT TYPE */}
            <select
              className="w-full border rounded px-3 py-2"
              value={form.employment_type}
              onChange={(e) => update("employment_type", e.target.value)}
            >
              <option value="FULL_TIME">Full Time</option>
              <option value="PART_TIME">Part Time</option>
              <option value="CONTRACT">Contract</option>
              <option value="INTERN">Intern</option>
            </select>

            {/* WORKPLACE TYPE */}
            <select
              className="w-full border rounded px-3 py-2"
              value={form.workplace_type}
              onChange={(e) => update("workplace_type", e.target.value)}
            >
              <option value="ONSITE">Onsite</option>
              <option value="REMOTE">Remote</option>
              <option value="HYBRID">Hybrid</option>
            </select>

            {/* EXPERIENCE LEVEL */}
            <select
              className="w-full border rounded px-3 py-2"
              value={form.experience_level}
              onChange={(e) => update("experience_level", e.target.value)}
            >
              <option value="JUNIOR">Junior</option>
              <option value="MID">Mid</option>
              <option value="SENIOR">Senior</option>
              <option value="LEAD">Lead</option>
            </select>

            {/* VISIBILITY */}
            <select
              className="w-full border rounded px-3 py-2"
              value={form.visibility}
              onChange={(e) => update("visibility", e.target.value)}
            >
              <option value="PUBLIC">Public</option>
              <option value="PRIVATE">Private</option>
            </select>

            {/* STATUS */}
            <select
              className="w-full border rounded px-3 py-2"
              value={form.status}
              onChange={(e) => update("status", e.target.value)}
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
              <option value="CLOSED">Closed</option>
            </select>

            {/* ACTIONS */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => router.back()}
                className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary fs-13 fw-medium p-2 px-3"
              >
                {loading ? "Saving..." : "Save Job"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
