// apps/admin/components/candidates/CandidateProfile.tsx
"use client";

import { useState } from "react";
import CandidateEditForm from "./CandidateEditForm";
import CandidateNotes from "./CandidateNotes";

export default function CandidateProfile({
  candidate,
  notes,
}: {
  candidate: any;
  notes: any[];
}) {
  const [editing, setEditing] = useState(false);
  const [current, setCurrent] = useState(candidate);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header flex justify-between items-center mb-4">
            <div>
              <h4 className="text-lg font-semibold">Profile Preview</h4>
              <h6 className="text-gray-500">Manage candidate profile</h6>
            </div>
          </div>

          <div className="card table-list-card">
            <div className="card-header flex justify-between items-center">
              <h2 className="text-xl font-semibold">{current.full_name}</h2>
              <button
                onClick={() => setEditing(!editing)}
                className="text-blue-600"
              >
                {editing ? "Cancel" : "Edit"}
              </button>
            </div>

            <div className="card-body">
              <div className="p-6 grid grid-cols-3 gap-6">
                {/* LEFT */}
                <div className="col-span-2 bg-white p-6 rounded">
                  <div className="flex justify-between mb-4"></div>

                  {editing ? (
                    <CandidateEditForm
                      candidate={current}
                      onSave={(updated) => {
                        setCurrent(updated);
                        setEditing(false);
                      }}
                    />
                  ) : (
                    <CandidateSummary candidate={current} />
                  )}
                </div>

                {/* RIGHT */}
                <div className="bg-white p-6 rounded">
                  <CandidateNotes candidateId={candidate.id} notes={notes} />

                  <ApplicationTimeline
                    stages={candidate.application_stages || []}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CandidateSummary({ candidate }: { candidate: any }) {
  return (
    <div className="space-y-2 text-sm">
      <p>
        <b>Email:</b> {candidate.email}
      </p>
      <p>
        <b>Phone:</b> {candidate.phone}
      </p>
      <p>
        <b>Location:</b> {candidate.location}
      </p>
      <div className="mt-4">
        <strong>Skills</strong>
        <div className="flex flex-wrap gap-2 mt-2">
          {candidate.skills?.map((s: string) => (
            <span key={s} className="px-2 py-1 bg-gray-100 rounded text-xs">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <Preview
          label="Experience"
          value={
            <ul className="space-y-2">
              {candidate.experience?.map(
                (
                  exp: {
                    company: string;
                    title: string;
                    start?: string;
                    end?: string;
                  },
                  i: number
                ) => (
                  <li key={i} className="border rounded p-2">
                    <div className="font-medium">{exp.title}</div>
                    <div className="text-sm text-gray-600">{exp.company}</div>
                    <div className="text-xs text-gray-500">
                      {exp.start} – {exp.end || "Present"}
                    </div>
                  </li>
                )
              )}
            </ul>
          }
        />
      </div>

      <div className="mt-4">
        <Preview
          label="Education"
          value={
            <ul className="space-y-2">
              {candidate.education?.map(
                (
                  edu: {
                    institution: string;
                    degree?: string;
                    start?: string;
                    end?: string;
                  },
                  i: number
                ) => (
                  <li key={i} className="border rounded p-2">
                    <div className="font-medium">{edu.degree}</div>
                    <div className="text-sm text-gray-600">
                      {edu.institution}
                    </div>
                    <div className="text-xs text-gray-500">
                      {edu.start} – {edu.end}
                    </div>
                  </li>
                )
              )}
            </ul>
          }
        />
      </div>
      {/* <p>
        <b>Skills:</b> {(candidate.skills || []).join(", ")}
      </p> */}
    </div>
  );
}

function ApplicationTimeline({ stages }: { stages: any[] }) {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold">Application Timeline</h4>

      {stages.map((s, i) => (
        <div key={i} className="border-l-2 pl-4 relative">
          <span className="absolute -left-1.5 top-1 w-3 h-3 bg-blue-600 rounded-full" />
          <p className="font-medium">{s.status}</p>
          <p className="text-xs text-gray-500">
            {new Date(s.date).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

function Preview({ label, value }: { label: string; value: React.ReactNode }) {
  if (!value) return null;

  return (
    <div>
      <div className=" mb-2">
        <strong>{label}</strong>
      </div>
      <div className="text-sm">{value || "—"}</div>
    </div>
  );
}
