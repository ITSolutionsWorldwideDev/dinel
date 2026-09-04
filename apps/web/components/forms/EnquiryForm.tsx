"use client";

import { useState } from "react";
import { Briefcase, UserSearch, Clock, ShieldCheck, Award, Coffee } from "lucide-react";
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
        formData.append("hearAboutUs", (hiringData as any).hearAboutUs || "");
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
        formData.append("hearAboutUs", (jobSeekerData as any).hearAboutUs || "");
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
  <div className="flex w-full items-center justify-center bg-transparent pt-1 pb-4">
  <div className="w-full overflow-hidden rounded-3xl bg-white shadow-xl grid grid-cols-1 lg:grid-cols-12 border border-gray-200">
{/* Left Half Section (Background #1a4550) */}
<div className="bg-[#1a4550] p-8 text-white flex flex-col justify-between lg:col-span-5">
  <div>
    <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-6 text-white/90">
      {mode === "hiring" ? "HIRING PARTNERS" : "OPEN APPLICATION"}
    </span>
    <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
      {mode === "hiring" ? "Looking to hire top-tier talent?" : "Don't see your perfect role?"}
    </h2>
    <p className="text-sm text-gray-300 leading-relaxed mb-8">
      {mode === "hiring"
        ? "Submit your requirements or job description and let us connect you with vetted professionals suited for your culture."
        : "We hire for talent, not just open headcount. Send us your profile and tell us what you would like to build — we will reach out when the right opportunity opens."}
    </p>

    {/* Stats Row - fills empty space */}
    <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10">
      <div>
        <p className="text-2xl font-bold text-[#f2c40d]">150+</p>
        <p className="text-[11px] text-gray-300 mt-1">Placements Made</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-[#f2c40d]">48h</p>
        <p className="text-[11px] text-gray-300 mt-1">Avg. Response</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-[#f2c40d]">98%</p>
        <p className="text-[11px] text-gray-300 mt-1">Client Satisfaction</p>
      </div>
    </div>
  </div>

  {/* Bottom Bullet Points / Features */}
  <div className="mt-8 space-y-3 pt-6 border-t border-white/10 text-xs text-gray-300">
    <div className="flex items-center gap-3">
      <Clock className="h-4 w-4 shrink-0 text-white/80" />
      <span>We respond quickly within 1-2 business days</span>
    </div>
    <div className="flex items-center gap-3">
      <ShieldCheck className="h-4 w-4 shrink-0 text-white/80" />
      <span>Your data is secure and handled with privacy</span>
    </div>
    <div className="flex items-center gap-3">
      <Award className="h-4 w-4 shrink-0 text-white/80" />
      <span>Dedicated support for professionals and companies</span>
    </div>
    <div className="flex items-center gap-3">
      <Coffee className="h-4 w-4 shrink-0 text-white/80" />
      <span>Relaxed, transparent, and direct communication</span>
    </div>
  </div>
</div>
        {/* Right Half Section (Form Fields Container) */}
        <div className="p-6 sm:p-8 lg:col-span-7 bg-white flex flex-col justify-center">
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
            
            <p className="mt-3 text-center text-xs text-gray-400">
              We respect your privacy. Your info is never sold or shared.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}