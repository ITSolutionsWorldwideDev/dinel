// apps\admin\components\jobs\JobForm.tsx

"use client";

import { useState, useEffect } from "react";
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
  const [form, setForm] = useState<any>({
    title: "",
    description: "",
    location: "",
    employment_type: "FULL_TIME",
    workplace_type: "ONSITE",
    department: "",
    experience_level: "JUNIOR",
    visibility: "PUBLIC",
    status: "DRAFT",
    sector_id: "",
    discipline_id: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm((prev: any) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [sectors, setSectors] = useState<any[]>([]);
  const [disciplines, setDisciplines] = useState<any[]>([]);

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

  useEffect(() => {
    const fetchDropdowns = async () => {
      try {
        const [sectorRes, disciplineRes] = await Promise.all([
          fetch("/api/sectors"),
          fetch("/api/disciplines"),
        ]);

        const sectorData = await sectorRes.json();
        const disciplineData = await disciplineRes.json();

        setSectors(sectorData?.items);
        setDisciplines(disciplineData?.items);
      } catch (err) {
        console.error("Failed to load dropdowns", err);
      }
    };

    fetchDropdowns();
  }, []);

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
            <div className="mb-3">
              <label className="col-form-label">Job Title</label>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Job Title"
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="col-form-label">Job Description</label>
              <textarea
                className="w-full border rounded px-3 py-2 min-h-30"
                placeholder="Job Description"
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="col-form-label">Location</label>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Location"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="col-form-label">Sector</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={form?.sector_id ?? ""}
                onChange={(e) => update("sector_id", e.target.value || null)}
              >
                <option value="">Select Sector</option>
                {sectors.map((sector) => (
                  <option key={sector.sector_id} value={sector.sector_id}>
                    {sector.sector}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="col-form-label">Discipline</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={form?.discipline_id ?? ""}
                onChange={(e) =>
                  update("discipline_id", e.target.value || null)
                }
              >
                <option value="">Select Discipline</option>
                {disciplines.map((discipline) => (
                  <option
                    key={discipline.discipline_id}
                    value={discipline.discipline_id}
                  >
                    {discipline.discipline}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="col-form-label">Employment Type</label>
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
            </div>

            <div className="mb-3">
              <label className="col-form-label">Workplace Type</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={form.workplace_type}
                onChange={(e) => update("workplace_type", e.target.value)}
              >
                <option value="ONSITE">Onsite</option>
                <option value="REMOTE">Remote</option>
                <option value="HYBRID">Hybrid</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="col-form-label">Experience Level</label>
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
            </div>

            <div className="mb-3">
              <label className="col-form-label">Visibility</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={form.visibility}
                onChange={(e) => update("visibility", e.target.value)}
              >
                <option value="PUBLIC">Public</option>
                <option value="PRIVATE">Private</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="col-form-label">Status</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={form.status}
                onChange={(e) => update("status", e.target.value)}
              >
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Published</option>
                <option value="CLOSED">Closed</option>
              </select>
            </div>

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
