// apps/web/components/candidates/CandidateEditForm.tsx
"use client";

import { useState } from "react";
import { useToast } from "@repo/ui";

import ExperienceEditor from "./editors/ExperienceEditor";
import EducationEditor from "./editors/EducationEditor";
import UploadCandidateModal from "./UploadCandidateModal";
import CvPreviewModal from "./CvPreviewModal";

type CandidateForm = {
  full_name: string;
  headline?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin_url?: string;
  cv_url?: string;
  skills?: string[];
  experience?: any[];
  education?: any[];
};

export default function CandidateEditForm({
  candidate,
  onSave,
}: {
  candidate: CandidateForm & { id: string; tenant_id: string };
  onSave: (c: any) => void;
}) {
  const { showToast } = useToast();

  const [form, setForm] = useState<CandidateForm>({
    full_name: candidate.full_name || "",
    headline: candidate.headline || "",
    email: candidate.email || "",
    phone: candidate.phone || "",
    location: candidate.location || "",
    linkedin_url: candidate.linkedin_url || "",
    cv_url: candidate.cv_url || "",
    skills: candidate.skills || [],
    experience: candidate.experience || [],
    education: candidate.education || [],
  });

  const [saving, setSaving] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewData, setPreviewData] = useState<{
    parsed: any;
    duplicate: any | null;
    cvHash: string;
  } | null>(null);

  async function save() {
    setSaving(true);

    const res = await fetch(`/api/candidate/${candidate.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setSaving(false);

    if (res.ok) onSave(data);
    else alert(data.error || "Failed to update candidate");
  }

  /* ------------------------------------
     Modals
  ------------------------------------ */

  const handleConfirm = async (mode: "create" | "update") => {
    if (!previewData) return;

    setSaving(true);

    try {
      const res = await fetch("/api/cv/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parsed: previewData.parsed,
          tenantId: candidate.tenant_id,
          cvHash: previewData.cvHash,
          mode,
          candidateId: previewData.duplicate?.id,
        }),
      });

      if (!res.ok) throw new Error();

      showToast("success", "Candidate saved successfully");

      setPreviewOpen(false);
      setPreviewData(null);
      setSaving(false);

      const data = await res.json();

      setForm({
        full_name: data.candidate.full_name,
        email: data.candidate.email,
        phone: data.candidate.phone,
        location: data.candidate.location,
        skills: data.candidate.skills,
        experience: data.candidate.experience,
        education: data.candidate.education,
        cv_url: data.candidate.cv_url,
      });

      onSave(data.candidate);

      // onSave(data);
    } catch {
      showToast("error", "Failed to save candidate");
    }
  };

  return (
    <div className="space-y-6">
      {/* ---------- Resume Upload CTA ---------- */}
    <div className="rounded-xl border border-dashed border-blue-300 bg-blue-50 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-blue-900">
          Auto-fill your profile with Resume
        </h3>
        <p className="text-sm text-blue-700 mt-1 max-w-xl">
          Upload your resume and we’ll extract skills, experience, and education
          automatically. You can review and edit everything before saving.
        </p>
      </div>

      <button
        onClick={() => setShowUploadModal(true)}
        className="inline-flex items-center justify-center gap-2 cursor-pointer rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
      >
        📄 Upload Resume
      </button>
    </div>

    {/* ---------- Divider ---------- */}
    <div className="relative flex items-center">
      <div className="grow border-t" />
      <span className="mx-4 text-xs text-gray-500 uppercase">
        Or edit manually
      </span>
      <div className="grow border-t" />
    </div>

      {/* BASIC INFO */}
      <Section title="Basic Info">
        <Input
          label="Full Name"
          value={form.full_name}
          onChange={(v) => setForm({ ...form, full_name: v })}
        />
        <Input
          label="Headline"
          value={form.headline}
          onChange={(v) => setForm({ ...form, headline: v })}
        />
      </Section>

      {/* CONTACT */}
      <Section title="Contact">
        <Input
          label="Email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
        />
        <Input
          label="Phone"
          value={form.phone}
          onChange={(v) => setForm({ ...form, phone: v })}
        />
        <Input
          label="Location"
          value={form.location}
          onChange={(v) => setForm({ ...form, location: v })}
        />
        <Input
          label="LinkedIn URL"
          value={form.linkedin_url}
          onChange={(v) => setForm({ ...form, linkedin_url: v })}
        />
      </Section>

      {/* SKILLS */}
      <Section title="Skills">
        <input
          className="w-full border p-2 rounded"
          placeholder="Comma separated (React, Node, SQL)"
          value={(form.skills || []).join(", ")}
          onChange={(e) =>
            setForm({
              ...form,
              skills: e.target.value
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean),
            })
          }
        />
      </Section>

      <Section title="Experience">
        <ExperienceEditor
          value={form.experience || []}
          onChange={(v) => setForm({ ...form, experience: v })}
        />
      </Section>

      <Section title="Education">
        <EducationEditor
          value={form.education || []}
          onChange={(v) => setForm({ ...form, education: v })}
        />
      </Section>

      {/* CV */}
      <Section title="CV">
        <Input
          label="CV URL"
          value={form.cv_url}
          onChange={(v) => setForm({ ...form, cv_url: v })}
        />
      </Section>

      {showUploadModal && (
        <UploadCandidateModal
          tenantId={candidate.tenant_id}
          onClose={() => setShowUploadModal(false)}
          onParsed={(data) => {
            setShowUploadModal(false);
            setPreviewData(data);
            setPreviewOpen(true);
          }}
        />
      )}

      {previewOpen && previewData && (
        <CvPreviewModal
          data={previewData}
          onClose={() => {
            setPreviewOpen(false);
            setPreviewData(null);
          }}
          onConfirm={handleConfirm}
        />
      )}

      <button
        onClick={save}
        disabled={saving}
        className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded"
      >
        {saving ? "Saving…" : "Save Changes"}
      </button>
    </div>
  );
}

/* ---------------- Helpers ---------------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold">{title}</h4>
      {children}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-xs text-gray-500">{label}</label>
      <input
        className="w-full border p-2 rounded"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

/* function Textarea({
  value,
  onChange,
}: {
  value?: string;
  onChange: (v: string) => void;
}) {
  return (
    <textarea
      rows={6}
      className="w-full border p-2 rounded font-mono text-xs"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function safeJsonParse(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}
 */

{
  /* <Section title="Experience (JSON)">
        <Textarea
          value={JSON.stringify(form.experience, null, 2)}
          onChange={(v) =>
            setForm({ ...form, experience: safeJsonParse(v) })
          }
        />
      </Section>
      <Section title="Education (JSON)">
        <Textarea
          value={JSON.stringify(form.education, null, 2)}
          onChange={(v) =>
            setForm({ ...form, education: safeJsonParse(v) })
          }
        />
      </Section> */
}

/* "use client";

import { useState } from "react";

export default function CandidateEditForm({
  candidate,
  onSave,
}: {
  candidate: any;
  onSave: (c: any) => void;
}) {
  const [form, setForm] = useState(candidate);
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);

    const res = await fetch(`/api/candidate/${candidate.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setSaving(false);

    if (res.ok) onSave(data);
  }

  return (
    <div className="space-y-3">
      <input
        className="w-full border p-2 rounded"
        value={form.full_name}
        onChange={(e) => setForm({ ...form, full_name: e.target.value })}
      />

      <input
        className="w-full border p-2 rounded"
        value={form.email || ""}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        className="w-full border p-2 rounded"
        value={form.phone || ""}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <button
        onClick={save}
        disabled={saving}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {saving ? "Saving…" : "Save"}
      </button>
    </div>
  );
} */
