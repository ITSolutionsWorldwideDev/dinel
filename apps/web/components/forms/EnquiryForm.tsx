"use client";

import { useState } from "react";
import { Briefcase, UserSearch } from "lucide-react";
import HiringFields from "./HiringFields";
import JobSeekerFields from "./JobSeekerFields";
import {
  Category,
  FormMode,
  HiringFormState,
  JobSeekerFormState,
  initialHiringState,
  initialJobSeekerState,
} from "./types";

interface EnquiryFormProps {
  /** Fixed set of categories relevant to this page (e.g. IT Development, Marketing). */
  categories: Category[];
  /** Default mode when the form loads. */
  defaultMode?: FormMode;
  /** If true, hides the Hiring/Job Seeker toggle — used on pages where context is already known. */
  lockMode?: boolean;
  /** Pre-select and lock the category dropdown — used on category/service pages. */
  defaultCategory?: string;
  lockCategory?: boolean;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function EnquiryForm({
  categories,
  defaultMode = "hiring",
  lockMode = false,
  defaultCategory = "",
  lockCategory = false,
}: EnquiryFormProps) {
  const [mode, setMode] = useState<FormMode>(defaultMode);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [hiringData, setHiringData] = useState<HiringFormState>({
    ...initialHiringState,
    category: defaultCategory,
  });

  const [jobSeekerData, setJobSeekerData] = useState<JobSeekerFormState>({
    ...initialJobSeekerState,
    category: defaultCategory,
  });

  const resetForms = () => {
    setHiringData({ ...initialHiringState, category: defaultCategory });
    setJobSeekerData({ ...initialJobSeekerState, category: defaultCategory });
  };

  const handleModeSwitch = (newMode: FormMode) => {
    if (newMode === mode) return;
    setMode(newMode);
    setStatus("idle");
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      if (mode === "hiring") {
        const formData = new FormData();
        formData.append("mode", "hiring");
        formData.append("companyName", hiringData.companyName);
        formData.append("contactPerson", hiringData.contactPerson);
        formData.append("email", hiringData.email);
        formData.append("phone", hiringData.phone);
        formData.append("category", hiringData.category);
        formData.append("positions", hiringData.positions);
        formData.append("jobDescription", hiringData.jobDescription);
        formData.append("budget", hiringData.budget);
        if (hiringData.jobDescriptionFile) {
          formData.append("jobDescriptionFile", hiringData.jobDescriptionFile);
        }

        const res = await fetch("/api/enquiry", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) throw new Error("Failed to submit hiring enquiry.");
      } else {
        if (!jobSeekerData.cv) {
          throw new Error("Please attach your CV before submitting.");
        }

        const formData = new FormData();
        formData.append("mode", "jobseeker");
        formData.append("fullName", jobSeekerData.fullName);
        formData.append("email", jobSeekerData.email);
        formData.append("phone", jobSeekerData.phone);
        formData.append("category", jobSeekerData.category);
        formData.append("coverMessage", jobSeekerData.coverMessage);
        formData.append("linkedin", jobSeekerData.linkedin);
        formData.append("cv", jobSeekerData.cv);

        const res = await fetch("/api/enquiry", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) throw new Error("Failed to submit application.");
      }

      setStatus("success");
      resetForms();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="flex h-full w-full flex-col rounded-3xl border-2 border-[#1a4550]/15 bg-white p-7 shadow-lg shadow-[#1a4550]/5">
      {!lockMode && (
        <div className="mb-6 flex rounded-md bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => handleModeSwitch("hiring")}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-md py-2 text-sm font-medium transition-colors ${
              mode === "hiring"
                ? "bg-[#1a4550] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Briefcase className="h-4 w-4" />
            I&apos;m Hiring
          </button>
          <button
            type="button"
            onClick={() => handleModeSwitch("jobseeker")}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-md py-2 text-sm font-medium transition-colors ${
              mode === "jobseeker"
                ? "bg-[#1a4550] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <UserSearch className="h-4 w-4" />
            I&apos;m Looking for a Job
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {mode === "hiring" ? (
          <HiringFields
            data={hiringData}
            onChange={setHiringData}
            categories={categories}
            categoryLocked={lockCategory}
          />
        ) : (
          <JobSeekerFields
            data={jobSeekerData}
            onChange={setJobSeekerData}
            categories={categories}
            categoryLocked={lockCategory}
          />
        )}

        {status === "error" && (
          <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            {errorMessage}
          </p>
        )}

        {status === "success" && (
          <p className="mt-4 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
            {mode === "hiring"
              ? "Thanks! Your enquiry has been received — we'll be in touch shortly."
              : "Thanks! Your application has been submitted successfully."}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-6 w-full rounded-md bg-[#1a4550] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#123540] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting"
            ? "Submitting..."
            : mode === "hiring"
            ? "Submit Enquiry"
            : "Submit Application"}
        </button>
      </form>
    </div>
  );
}