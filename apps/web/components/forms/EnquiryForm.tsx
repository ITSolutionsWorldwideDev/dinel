"use client";

import { useState } from "react";
import { Briefcase, UserSearch, Clock, ShieldCheck, Award, Coffee, Zap, Users, Target } from "lucide-react";
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
  categories: Category[];
  defaultMode?: FormMode;
  lockMode?: boolean;
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
    <div className="flex w-full items-center justify-center bg-transparent py-4">
      <div className="w-full overflow-hidden rounded-3xl bg-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 border border-gray-100">
        
        {/* Left Half Section (Background #1a4550) */}
        <div className="bg-[#1a4550] p-8 sm:p-10 text-white flex flex-col justify-between lg:col-span-5 relative overflow-hidden">
          {/* Subtle decorative glow effect */}
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase mb-6 text-white/90 backdrop-blur-sm border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f2c40d]"></span>
              {mode === "hiring" ? "Hiring Partners" : "Open Application"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white leading-tight">
              {mode === "hiring" ? "Looking to hire top-tier talent?" : "Don't see your perfect role?"}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              {mode === "hiring"
                ? "Submit your requirements or job description and let us connect you with vetted professionals tailored to your culture."
                : "We hire for raw talent, not just open headcount. Send us your profile and let us know what you want to build."}
            </p>

            {/* Stats / Badges Row - Balanced alignment */}
            <div className="grid grid-cols-3 gap-3 py-6 border-y border-white/10">
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/5">
                <Zap className="h-5 w-5 text-[#f2c40d] mb-1.5" />
                <span className="text-xs font-semibold text-white">Fast Vetting</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/5">
                <Users className="h-5 w-5 text-[#f2c40d] mb-1.5" />
                <span className="text-xs font-semibold text-white">Top Talent</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/5">
                <Target className="h-5 w-5 text-[#f2c40d] mb-1.5" />
                <span className="text-xs font-semibold text-white">Direct Fit</span>
              </div>
            </div>
          </div>

          {/* Bottom Features List */}
          <div className="mt-8 space-y-3.5 pt-6 border-t border-white/10 text-xs text-gray-300 relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-white/10 text-[#f2c40d]">
                <Clock className="h-4 w-4 shrink-0" />
              </div>
              <span className="font-medium">Quick response within 1-2 business days</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-white/10 text-[#f2c40d]">
                <ShieldCheck className="h-4 w-4 shrink-0" />
              </div>
              <span className="font-medium">Secure and confidential data handling</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-white/10 text-[#f2c40d]">
                <Award className="h-4 w-4 shrink-0" />
              </div>
              <span className="font-medium">Dedicated support for teams & specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-white/10 text-[#f2c40d]">
                <Coffee className="h-4 w-4 shrink-0" />
              </div>
              <span className="font-medium">Transparent and straightforward communication</span>
            </div>
          </div>
        </div>

        {/* Right Half Section (Form Fields Container) */}
        <div className="p-6 sm:p-10 lg:col-span-7 bg-white flex flex-col justify-center">
          {!lockMode && (
            <div className="mb-8 flex rounded-xl bg-gray-100 p-1.5 border border-gray-200/60 shadow-inner">
              <button
                type="button"
                onClick={() => handleModeSwitch("hiring")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all duration-200 ${
                  mode === "hiring"
                    ? "bg-[#1a4550] text-white shadow-md shadow-[#1a4550]/20"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50"
                }`}
              >
                <Briefcase className="h-4 w-4" />
                I&apos;m Hiring
              </button>
              <button
                type="button"
                onClick={() => handleModeSwitch("jobseeker")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all duration-200 ${
                  mode === "jobseeker"
                    ? "bg-[#1a4550] text-white shadow-md shadow-[#1a4550]/20"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50"
                }`}
              >
                <UserSearch className="h-4 w-4" />
                I&apos;m Looking for a Job
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="rounded-xl bg-red-50 p-4 border border-red-100 text-sm text-red-700 animate-shake">
                {errorMessage}
              </div>
            )}

            {status === "success" && (
              <div className="rounded-xl bg-green-50 p-4 border border-green-100 text-sm text-green-700 font-medium">
                {mode === "hiring"
                  ? "Thanks! Your enquiry has been received — we'll be in touch shortly."
                  : "Thanks! Your application has been submitted successfully."}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 w-full rounded-xl bg-[#1a4550] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1a4550]/20 transition-all duration-200 hover:bg-[#123540] hover:shadow-xl hover:shadow-[#1a4550]/30 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting"
                ? "Submitting details..."
                : mode === "hiring"
                ? "Submit Enquiry"
                : "Submit Application"}
            </button>
            
            <p className="mt-4 text-center text-xs text-gray-400 font-medium">
              We respect your privacy. Your info is never sold or shared.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}