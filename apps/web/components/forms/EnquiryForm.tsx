"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
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
  defaultJobTitle?: string;
  lockJobTitle?: boolean;
  vacancyId?: number | string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function EnquiryForm({
  categories,
  defaultMode = "hiring",
  lockMode = false,
  defaultCategory = "",
  lockCategory = false,
  defaultJobTitle = "",
  lockJobTitle = false,
  vacancyId,
}: EnquiryFormProps) {
  const locale = useLocale();
  const isNl = locale === "nl";

  const [mode, setMode] = useState<FormMode>(defaultMode);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Resolves whether defaultCategory is a matching slug or a label
  const resolveCategoryValue = (catInput: string) => {
    if (!catInput || !categories) return "";
    const found = categories.find(
      (c) =>
        c.value.toLowerCase() === catInput.toLowerCase() ||
        c.label.toLowerCase() === catInput.toLowerCase()
    );
    return found ? found.value : catInput;
  };

  const initialMatchedCategory = resolveCategoryValue(defaultCategory);

  const [hiringData, setHiringData] = useState<HiringFormState>({
    ...initialHiringState,
    category: initialMatchedCategory,
    jobPosition: defaultJobTitle,
  });

  const [jobSeekerData, setJobSeekerData] = useState<JobSeekerFormState>({
    ...initialJobSeekerState,
    category: initialMatchedCategory,
    jobTitle: defaultJobTitle,
  });

  const resetForms = () => {
    setHiringData({ 
      ...initialHiringState, 
      category: initialMatchedCategory, 
      jobPosition: defaultJobTitle 
    });
    setJobSeekerData({
      ...initialJobSeekerState,
      category: initialMatchedCategory,
      jobTitle: defaultJobTitle,
    });
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
        formData.append("jobPosition", hiringData.jobPosition);
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

        if (!res.ok) throw new Error(isNl ? "Het verzenden van de aanvraag is mislukt." : "Failed to submit hiring enquiry.");
      } else {
        if (!jobSeekerData.cv) {
          throw new Error(isNl ? "Voeg uw cv toe voordat u verzendt." : "Please attach your CV before submitting.");
        }

        const formData = new FormData();
        formData.append("mode", "jobseeker");
        formData.append("fullName", jobSeekerData.fullName);
        formData.append("email", jobSeekerData.email);
        formData.append("phone", jobSeekerData.phone);
        formData.append("category", jobSeekerData.category);
        formData.append("jobTitle", jobSeekerData.jobTitle);
        formData.append("coverMessage", jobSeekerData.coverMessage);
        formData.append("linkedin", jobSeekerData.linkedin);
        formData.append("hearAboutUs", (jobSeekerData as any).hearAboutUs || "");
        formData.append("cv", jobSeekerData.cv);
        if (vacancyId) {
          formData.append("vacancyId", String(vacancyId));
        }

        const res = await fetch("/api/enquiry", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) throw new Error(isNl ? "Het verzenden van de sollicitatie is mislukt." : "Failed to submit application.");
      }

      setStatus("success");
      resetForms();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : isNl
          ? "Er is iets misgegaan. Probeer het opnieuw."
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="flex w-full items-center justify-center bg-transparent py-4">
      <div className="w-full overflow-hidden rounded-3xl bg-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 border border-gray-100">
        
        {/* Left Half Section (Background #1a4550) */}
        <div className="bg-[#1a4550] p-8 sm:p-10 text-white flex flex-col justify-between lg:col-span-5 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase mb-6 text-white/90 backdrop-blur-sm border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f2c40d]"></span>
              {mode === "hiring"
                ? isNl
                  ? "Wervingspartners"
                  : "Hiring Partners"
                : isNl
                ? "Open Sollicitatie"
                : "Open Application"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white leading-tight">
              {mode === "hiring"
                ? isNl
                  ? "Op zoek naar toptalent?"
                  : "Looking to hire top-tier talent?"
                : lockJobTitle && defaultJobTitle
                ? isNl
                  ? `Solliciteer op ${defaultJobTitle}`
                  : `Apply for ${defaultJobTitle}`
                : isNl
                ? "Zie je jouw ideale functie niet?"
                : "Don't see your perfect role?"}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              {mode === "hiring"
                ? isNl
                  ? "Stuur uw wensen of functieomschrijving in en laat ons u verbinden met gescreende professionals die passen bij uw bedrijfscultuur."
                  : "Submit your requirements or job description and let us connect you with vetted professionals tailored to your culture."
                : isNl
                ? "Wij werven op puur talent, niet alleen op openstaande vacatures. Stuur ons je profiel en vertel ons wat je wilt bereiken."
                : "We hire for raw talent, not just open headcount. Send us your profile and let us know what you want to build."}
            </p>

            <div className="grid grid-cols-3 gap-3 py-6 border-y border-white/10">
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/5">
                <Zap className="h-5 w-5 text-[#f2c40d] mb-1.5" />
                <span className="text-xs font-semibold text-white">
                  {isNl ? "Snelle Screening" : "Fast Vetting"}
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/5">
                <Users className="h-5 w-5 text-[#f2c40d] mb-1.5" />
                <span className="text-xs font-semibold text-white">
                  {isNl ? "Toptalent" : "Top Talent"}
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/5">
                <Target className="h-5 w-5 text-[#f2c40d] mb-1.5" />
                <span className="text-xs font-semibold text-white">
                  {isNl ? "Directe Match" : "Direct Fit"}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3.5 pt-6 border-t border-white/10 text-xs text-gray-300 relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-white/10 text-[#f2c40d]">
                <Clock className="h-4 w-4 shrink-0" />
              </div>
              <span className="font-medium">
                {isNl
                  ? "Snelle reactie binnen 1-2 werkdagen"
                  : "Quick response within 1-2 business days"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-white/10 text-[#f2c40d]">
                <ShieldCheck className="h-4 w-4 shrink-0" />
              </div>
              <span className="font-medium">
                {isNl
                  ? "Veilige en vertrouwelijke gegevensverwerking"
                  : "Secure and confidential data handling"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-white/10 text-[#f2c40d]">
                <Award className="h-4 w-4 shrink-0" />
              </div>
              <span className="font-medium">
                {isNl
                  ? "Toegewijde ondersteuning voor teams & specialisten"
                  : "Dedicated support for teams & specialists"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-white/10 text-[#f2c40d]">
                <Coffee className="h-4 w-4 shrink-0" />
              </div>
              <span className="font-medium">
                {isNl
                  ? "Transparante en heldere communicatie"
                  : "Transparent and straightforward communication"}
              </span>
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
                {isNl ? "Ik zoek personeel" : "I'm Hiring"}
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
                {isNl ? "Ik zoek een baan" : "I'm Looking for a Job"}
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
                jobTitleLocked={lockJobTitle}
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
                  ? isNl
                    ? "Bedankt! Uw aanvraag is ontvangen — we nemen spoedig contact met u op."
                    : "Thanks! Your enquiry has been received — we'll be in touch shortly."
                  : isNl
                  ? "Bedankt! Uw sollicitatie is succesvol verzonden."
                  : "Thanks! Your application has been submitted successfully."}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 w-full rounded-xl bg-[#1a4550] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1a4550]/20 transition-all duration-200 hover:bg-[#123540] hover:shadow-xl hover:shadow-[#1a4550]/30 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting"
                ? isNl
                  ? "Gegevens verzenden..."
                  : "Submitting details..."
                : mode === "hiring"
                ? isNl
                  ? "Aanvraag Verzenden"
                  : "Submit Enquiry"
                : isNl
                ? "Sollicitatie Versturen"
                : "Submit Application"}
            </button>
            
            <p className="mt-4 text-center text-xs text-gray-400 font-medium">
              {isNl
                ? "Wij respecteren uw privacy. Uw gegevens worden nooit verkocht of gedeeld."
                : "We respect your privacy. Your info is never sold or shared."}
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}