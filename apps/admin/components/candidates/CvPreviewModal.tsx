// apps/admin/components/candidates/CvPreviewModal.tsx
"use client";

import { Button, useToast } from "@repo/ui";

type Props = {
  data: any;
  onClose: () => void;
  onConfirm: (mode: "create" | "update") => void;
};

export default function CvPreviewModal({ data, onClose, onConfirm }: Props) {
  const { showToast } = useToast();
  const { parsed, duplicate } = data;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh]">
        <h3 className="text-lg font-semibold mb-2">CV Preview</h3>

        {duplicate && (
          <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded">
            ⚠️ Possible duplicate detected:
            <div className="text-sm mt-1">
              <strong>{duplicate.full_name}</strong> — {duplicate.email}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 text-sm">
          <Preview label="Name" value={parsed.full_name} />
          <Preview label="Email" value={parsed.email} />
          <Preview label="Phone" value={parsed.phone} />
          <Preview label="Location" value={parsed.location} />
          <Preview
            label="Experience"
            value={
              <ul className="space-y-2">
                {parsed.experience?.map(
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

          <Preview
            label="Education"
            value={
              <ul className="space-y-2">
                {parsed.education?.map(
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

        <div className="mt-4">
          <strong>Skills</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {parsed.skills?.map((s: string) => (
              <span key={s} className="px-2 py-1 bg-gray-100 rounded text-xs">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          {duplicate && (
            <Button
              //   variant="warning"
              onClick={() => onConfirm("update")}
            >
              Update Existing
            </Button>
          )}

          <Button variant="primary" onClick={() => onConfirm("create")}>
            Create Candidate
          </Button>
        </div>
      </div>
    </div>
  );
}

function Preview({ label, value }: { label: string; value: React.ReactNode }) {
  if (!value) return null;

  return (
    <div>
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-sm">{value || "—"}</div>
    </div>
  );
}

