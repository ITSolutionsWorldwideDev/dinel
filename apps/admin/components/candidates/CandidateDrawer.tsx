// apps/admin/components/candidates/CandidateDrawer.tsx
"use client";

import CandidateProfile from "./CandidateProfile";

export default function CandidateDrawer({
  open,
  onClose,
  candidate,
}: {
  open: boolean;
  onClose: () => void;
  candidate: any;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/40" onClick={onClose} />
      <div className="w-180 bg-white overflow-y-auto">
        <CandidateProfile candidate={candidate} notes={[]} />
      </div>
    </div>
  );
}
