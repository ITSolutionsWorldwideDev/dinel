// apps\admin\components\jobs\JobForm.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type JobFormProps = {
  initialData: any;
  onSubmit: (data: any) => Promise<void>;
  mode?: "create" | "edit";
};

export default function JobForm({ initialData, onSubmit, mode = "create" }: JobFormProps) {
  const router = useRouter();

  const [form, setForm] = useState<any>({
    title: "",
    description: "",
    location: "",
    employment_type: "FULL_TIME",
    workplace_type: "ONSITE",
    department: "",
    experience_level: "JUNIOR",
    experience: "less_than_6_months",
    education: "secondary_education",
    visibility: "PUBLIC",
    status: "DRAFT",
    sector_id: "",
    discipline_id: "",
    work_city: "",
    work_full_address: "",
    work_postal_code: "",
    work_street: "",
    country_node: "",
    vacancy_information: "",
    hours_per_week: 0,
    deadline: "",
    closed_at: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sectors, setSectors] = useState<any[]>([]);
  const [disciplines, setDisciplines] = useState<any[]>([]);

  useEffect(() => {
    if (initialData) {
      setForm((prev: any) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const update = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
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
        setSectors(sectorData?.items ?? []);
        setDisciplines(disciplineData?.items ?? []);
      } catch (err) {
        console.error("Failed to load dropdowns", err);
      }
    };
    fetchDropdowns();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      setLoading(true);
      // Convert hours_per_week to number
      const payload = { ...form, hours_per_week: Number(form.hours_per_week) };
      await onSubmit(payload);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-header flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold">Jobs</h4>
      </div>
      <div className="card">
        <div className="card-header">{mode === "create" ? "Create Job" : "Edit Job"}</div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="max-w-3xl space-y-4">
            {error && <div className="p-3 bg-red-100 text-red-700 rounded">{error}</div>}

            {/* TITLE */}
            <div className="mb-3">
              <label>Job Title</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                required
              />
            </div>

            {/* DESCRIPTION */}
            <div className="mb-3">
              <label>Job Description</label>
              <textarea
                className="w-full border rounded px-3 py-2 min-h-40"
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                required
              />
            </div>

            {/* LOCATION */}
            <div className="mb-3">
              <label>Location</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
              />
            </div>

            {/* WORK CITY / ADDRESS */}
            <div className="mb-3">
              <label>Work City</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={form.work_city}
                onChange={(e) => update("work_city", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Full Address</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={form.work_full_address}
                onChange={(e) => update("work_full_address", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Postal Code</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={form.work_postal_code}
                onChange={(e) => update("work_postal_code", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Street</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={form.work_street}
                onChange={(e) => update("work_street", e.target.value)}
              />
            </div>

            {/* COUNTRY */}
            <div className="mb-3">
              <label>Country Node</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={form.country_node}
                onChange={(e) => update("country_node", e.target.value)}
              />
            </div>

            {/* VACANCY INFORMATION */}
            <div className="mb-3">
              <label>Vacancy Information</label>
              <textarea
                className="w-full border rounded px-3 py-2 min-h-80"
                value={form.vacancy_information}
                onChange={(e) => update("vacancy_information", e.target.value)}
              />
            </div>

            {/* HOURS PER WEEK */}
            <div className="mb-3">
              <label>Hours per Week</label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2"
                value={form.hours_per_week}
                onChange={(e) => update("hours_per_week", e.target.value)}
              />
            </div>

            {/* DEADLINE */}
            <div className="mb-3">
              <label>Deadline</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2"
                value={form.deadline}
                onChange={(e) => update("deadline", e.target.value)}
              />
            </div>

            {/* CLOSED AT */}
            <div className="mb-3">
              <label>Closed At</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2"
                value={form.closed_at}
                onChange={(e) => update("closed_at", e.target.value)}
              />
            </div>

            

            <div className="mb-3">
              <label className="col-form-label">Sector</label>
              <select
                className="w-full border rounded px-3 py-2"
                name="sector"
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
                name="discipline"
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
                name="employment_type"
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
                name="workplace_type"
                value={form.workplace_type}
                onChange={(e) => update("workplace_type", e.target.value)}
              >
                <option value="ONSITE">Onsite</option>
                <option value="REMOTE">Remote</option>
                <option value="HYBRID">Hybrid</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="col-form-label">Professional level</label>
              <select
                className="w-full border rounded px-3 py-2"
                name="experience_level"
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
              <label className="col-form-label">Experience</label>
              <select
                className="w-full border rounded px-3 py-2"
                name="experience"
                value={form.experience}
                onChange={(e) => update("experience", e.target.value)}
              >
                <option value="less_than_6_months">Less than 6 months</option>
                <option value="6_to_1_year">6 months-1 Years</option>
                <option value="1_to_2_year">1-2 Years</option>
                <option value="3_to_5_year">3-5 Years</option>
                <option value="6_to_10_year">6-10 Years</option>
                <option value="above_10_years">more than 10 Years</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="col-form-label">Education</label>
              <select
                className="w-full border rounded px-3 py-2"
                name="education"
                value={form.education}
                onChange={(e) => update("education", e.target.value)}
              >
                <option value="secondary_education">Secondary Education</option>
                <option value="LBO">LBO</option>
                <option value="MBO">MBO</option>
                <option value="HBO">HBO</option>
                <option value="University_(WO)">University (WO)</option>
              </select>
            </div>

            

            <div className="mb-3">
              <label className="col-form-label">Visibility</label>
              <select
                className="w-full border rounded px-3 py-2"
                name="visibility"
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
                name="status"
                value={form.status}
                onChange={(e) => update("status", e.target.value)}
              >
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED">Published</option>
                <option value="CLOSED">Closed</option>
              </select>
            </div>

            {/* Existing dropdowns: Sector / Discipline / Employment Type / Workplace / Experience / Education / Visibility / Status */}
            {/* You can keep all your select fields here exactly as in your previous JobForm code */}
            {/* ... */}

            <div className="flex gap-3">
              <button type="button" onClick={() => router.back()} className="btn btn-secondary">
                Cancel
              </button>
              <button type="submit" disabled={loading} className="btn btn-primary">
                {loading ? "Saving..." : "Save Job"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

/* "use client";

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
    experience: "less_than_6_months",
    education: "secondary_education",
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
          //<h6 className="text-gray-500">Manage Jobs</h6>
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

       
            <div className="mb-3">
              <label className="col-form-label">Job Title</label>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Job Title"
                name="title"
                id="title"
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
                name="description"
                id="description"
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
                name="location"
                id="location"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
              />
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
} */
