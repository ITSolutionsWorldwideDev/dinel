// apps/admin/components/candidates/UploadCandidateModal.tsx
"use client";

import { useState } from "react";
// import { useToast } from "@repo/ui";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 modal fade">
      <div className="modal-content modal-content-demo bg-white rounded w-full max-w-lg">
        <div className="modal-header flex">
          <h4 className="modal-title">Upload CV</h4>
          <Button onClick={onClose} className="btn-close float-right">
            X
          </Button>
        </div>
        <div className="modal-body">
          <input
            type="file"
            accept=".pdf,.docx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>

        <div className="modal-footer flex justify-end gap-2">
          <button
            onClick={onClose}
            className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={loading}
            className="btn btn-primary fs-13 fw-medium p-2 px-3"
          >
            {loading ? "Parsing…" : "Upload"}
          </button>
          {/* <button className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none">
            Cancel
          </button>
          <button className="btn btn-primary fs-13 fw-medium p-2 px-3">
            Save
          </button> */}
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-full max-w-md">




        
        <h3 className="font-semibold mb-4">Upload CV</h3>

        <input
          type="file"
          accept=".pdf,.docx"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={loading}
            className="btn btn-primary fs-13 fw-medium p-2 px-3"
          >
            {loading ? "Parsing…" : "Upload"}
          </button>
        </div>

        
      </div>


    </div> */
}
