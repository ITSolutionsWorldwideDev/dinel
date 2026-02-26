"use client";

import { useState } from "react";
// import JobApplicationForm from "./JobApplicationForm";
import JobApplicationForm from "@/components/ui/JobApplicationForm";

interface ApplyNowBtnProps {
  title: string;
  jobId: string;
}
export default function ApplyNowBtn({title, jobId}: ApplyNowBtnProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Apply button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-orange-500 text-white cursor-pointer px-6 py-3 rounded-md hover:bg-orange-600 transition"
      >
        Apply Now
      </button>

      {/* Form modal */}
      {isOpen && <JobApplicationForm onClose={() => setIsOpen(false)} title={title} jobId={jobId}/>}
    </>
  );
}
