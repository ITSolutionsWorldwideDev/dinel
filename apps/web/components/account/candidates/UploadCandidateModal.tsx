// apps/web/components/candidates/UploadCandidateModal.tsx
"use client";

import { useEffect, useState } from "react";
import { Button, useToast } from "@repo/ui";

export default function UploadCandidateModal({
  tenantId,
  onClose,
  onParsed,
}: {
  tenantId: string;
  onClose: () => void;
  onParsed: (data: {
    parsed: any;
    duplicate: any | null;
    cvHash: string;
  }) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const { showToast } = useToast();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleUpload = async () => {
    if (!file) {
      showToast("error", "Please select a file");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("tenantId", tenantId);

      const res = await fetch("/api/cv/parse", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        showToast("error", data.error || "CV parsing failed");
        return;
      }

      // ✅ OPEN PREVIEW
      onParsed(data);
    } catch (err) {
      showToast("error", "Something went wrong while parsing CV");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h3 className="text-lg font-semibold">Upload Resume</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">
          <p className="text-sm text-gray-600">
            Upload a PDF or DOCX resume. We’ll extract skills, experience, and
            education automatically.
          </p>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-8 text-center hover:border-blue-400 hover:bg-blue-50 transition">
            <input
              type="file"
              accept=".pdf,.docx"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <span className="text-3xl">📄</span>
            <span className="mt-2 text-sm font-medium">
              {file ? file.name : "Click to select a resume"}
            </span>
            <span className="mt-1 text-xs text-gray-500">
              PDF or DOCX, max 5MB
            </span>
          </label>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleUpload}
            disabled={loading || !file}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm cursor-pointer font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Parsing…" : "Upload & Parse"}
          </button>

          {loading && (
            <p className="text-xs text-gray-500 mt-2">
              Parsing resume… this may take a few seconds.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
