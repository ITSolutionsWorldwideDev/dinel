// apps/admin/components/jobs/JobForm.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

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
    location: "Rotterdam, Netherlands",
    employment_type: "FULL_TIME",
    workplace_type: "HYBRID",
    department: "",
    experience_level: "MID",
    experience: "3_to_5_year",
    education: "HBO",
    visibility: "PUBLIC",
    status: "PUBLISHED",
    sector_id: "",
    discipline_id: "",
    work_city: "Rotterdam",
    work_full_address: "",
    work_postal_code: "",
    work_street: "",
    country_node: null,
    vacancy_information: "",
    intro_information: "",
    company_information: "",
    additional_information: "",
    requirements: "",
    hours_per_week: 40,
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
        intro_information:
          initialData.intro_information || initialData.description || "",
        description:
          initialData.description || initialData.intro_information || "",
      }));
    }
  }, [initialData]);

  const update = (key: string, value: any) => {
    setForm((prev: any) => {
      const next = { ...prev, [key]: value };
      if (key === "intro_information" && !prev.description) {
        next.description = value;
      }
      return next;
    });
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
      const payload = {
        ...form,
        description: form.intro_information || form.description || form.title,
        hours_per_week: Number(form.hours_per_week) || 40,
      };
      await onSubmit(payload);
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-5 mb-8">
        <div>
          <button
            type="button"
            onClick={() => router.push("/jobs")}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Jobs
          </button>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            {mode === "create" ? "Create Job Vacancy" : "Edit Job Vacancy"}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push("/jobs")}
            className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-bold hover:bg-slate-50 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-lg bg-[#0d2b33] hover:bg-[#153e49] text-white text-sm font-bold shadow-sm transition disabled:opacity-50"
          >
            {loading ? "Saving..." : mode === "create" ? "Publish Job" : "Save Changes"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-300 text-red-800 text-sm font-bold">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-8 shadow-sm">
        {/* SECTION 1: BASIC INFORMATION */}
        <div>
          <h2 className="text-base font-extrabold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-200 mb-6">
            1. Job Details
          </h2>

          <div className="space-y-5">
            {/* Job Title */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Job Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Senior Data Engineer"
                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#0d2b33] focus:ring-1 focus:ring-[#0d2b33] outline-none transition"
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                required
              />
            </div>

            {/* 2 Cols: Sector & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Category / Sector
                </label>
                <select
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 font-medium focus:border-[#0d2b33] focus:ring-1 focus:ring-[#0d2b33] outline-none transition"
                  value={form?.sector_id ?? ""}
                  onChange={(e) => update("sector_id", e.target.value || null)}
                >
                  <option value="">Select Category</option>
                  {sectors.map((s) => (
                    <option key={s.sector_id} value={s.sector_id}>
                      {s.sector}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rotterdam, Netherlands"
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#0d2b33] focus:ring-1 focus:ring-[#0d2b33] outline-none transition"
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                />
              </div>
            </div>

            {/* 3 Cols: Employment Type, Workplace Type, Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Employment Type
                </label>
                <select
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 font-medium focus:border-[#0d2b33] focus:ring-1 focus:ring-[#0d2b33] outline-none transition"
                  value={form.employment_type}
                  onChange={(e) => update("employment_type", e.target.value)}
                >
                  <option value="FULL_TIME">Full Time</option>
                  <option value="PART_TIME">Part Time</option>
                  <option value="CONTRACT">Contract</option>
                  <option value="INTERN">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Workplace Type
                </label>
                <select
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 font-medium focus:border-[#0d2b33] focus:ring-1 focus:ring-[#0d2b33] outline-none transition"
                  value={form.workplace_type}
                  onChange={(e) => update("workplace_type", e.target.value)}
                >
                  <option value="ONSITE">Onsite</option>
                  <option value="HYBRID">Hybrid</option>
                  <option value="REMOTE">Remote</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Hours per Week
                </label>
                <input
                  type="number"
                  placeholder="40"
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#0d2b33] focus:ring-1 focus:ring-[#0d2b33] outline-none transition"
                  value={form.hours_per_week}
                  onChange={(e) => update("hours_per_week", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: CONTENT (DIRECT MATCH TO WEBSITE LAYOUT) */}
        <div>
          <h2 className="text-base font-extrabold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-200 mb-6">
            2. Job Content
          </h2>

          <div className="space-y-6">
            {/* Overview */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1">
                Role Overview <span className="text-red-600">*</span>
              </label>
              <p className="text-xs text-slate-500 mb-2">
                Main summary paragraph shown under the job title on the website.
              </p>
              <textarea
                rows={4}
                placeholder="Write 2-4 sentences describing the job mission and context..."
                className="w-full bg-white border border-slate-300 rounded-lg p-3 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#0d2b33] focus:ring-1 focus:ring-[#0d2b33] outline-none transition"
                value={form.intro_information}
                onChange={(e) => update("intro_information", e.target.value)}
                required
              />
            </div>

            {/* Responsibilities */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1">
                Key Responsibilities
              </label>
              <p className="text-xs text-slate-500 mb-2">
                Enter each responsibility on a new line (shows as bullet points on the website).
              </p>
              <textarea
                rows={5}
                placeholder={"Develop and maintain data pipelines\nCollaborate with cross-functional engineering teams\nOptimize SQL queries and data models"}
                className="w-full bg-white border border-slate-300 rounded-lg p-3 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#0d2b33] focus:ring-1 focus:ring-[#0d2b33] outline-none transition"
                value={form.vacancy_information}
                onChange={(e) => update("vacancy_information", e.target.value)}
              />
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1">
                Requirements & Qualifications
              </label>
              <p className="text-xs text-slate-500 mb-2">
                Enter each requirement on a new line (shows as qualifications and skill tags).
              </p>
              <textarea
                rows={5}
                placeholder={"3+ years of professional experience\nStrong knowledge of Python and SQL\nFluent in English or Dutch"}
                className="w-full bg-white border border-slate-300 rounded-lg p-3 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#0d2b33] focus:ring-1 focus:ring-[#0d2b33] outline-none transition"
                value={form.requirements}
                onChange={(e) => update("requirements", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: PUBLISHING SETTINGS */}
        <div>
          <h2 className="text-base font-extrabold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-200 mb-6">
            3. Publishing Status
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Status
              </label>
              <select
                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm font-bold text-slate-900 focus:border-[#0d2b33] focus:ring-1 focus:ring-[#0d2b33] outline-none transition"
                value={form.status}
                onChange={(e) => update("status", e.target.value)}
              >
                <option value="PUBLISHED">Published (Live on Website)</option>
                <option value="DRAFT">Draft (Hidden)</option>
                <option value="CLOSED">Closed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Application Deadline (Optional)
              </label>
              <input
                type="date"
                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 font-medium focus:border-[#0d2b33] focus:ring-1 focus:ring-[#0d2b33] outline-none transition"
                value={form.deadline}
                onChange={(e) => update("deadline", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => router.push("/jobs")}
            className="px-6 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-bold hover:bg-slate-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 rounded-lg bg-[#0d2b33] hover:bg-[#153e49] text-white text-sm font-bold shadow-sm transition disabled:opacity-50"
          >
            {loading ? "Saving..." : mode === "create" ? "Publish Job" : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
