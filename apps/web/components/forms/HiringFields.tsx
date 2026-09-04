"use client";

import { useRef } from "react";
import {
  Building2,
  User,
  Mail,
  Phone,
  Layers,
  Users,
  FileText,
  Wallet,
  Paperclip,
  HelpCircle,
} from "lucide-react";
import { Category, HiringFormState } from "./types";

interface HiringFieldsProps {
  data: HiringFormState;
  onChange: (data: HiringFormState) => void;
  categories: Category[];
  categoryLocked?: boolean;
}

const MAX_FILE_SIZE_MB = 10;
const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const inputClass =
  "w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm focus:border-[#1a4550] focus:outline-none focus:ring-1 focus:ring-[#1a4550]";
const labelClass = "mb-1 block text-sm font-medium text-gray-700";
const iconWrapClass =
  "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400";

export default function HiringFields({
  data,
  onChange,
  categories,
  categoryLocked = false,
}: HiringFieldsProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = (field: keyof HiringFormState, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (!file) {
      onChange({ ...data, jobDescriptionFile: null });
      return;
    }

    if (!ACCEPTED_TYPES.includes(file.type)) {
      alert("Please upload a PDF or Word document.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(`File is too large. Max size is ${MAX_FILE_SIZE_MB}MB.`);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    onChange({ ...data, jobDescriptionFile: file });
  };

  const removeFile = () => {
    onChange({ ...data, jobDescriptionFile: null });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label className={labelClass}>Company Name *</label>
        <div className="relative">
          <Building2 className={`h-4 w-4 ${iconWrapClass}`} />
          <input
            type="text"
            required
            value={data.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            className={inputClass}
            placeholder="Your company name"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Contact Person *</label>
        <div className="relative">
          <User className={`h-4 w-4 ${iconWrapClass}`} />
          <input
            type="text"
            required
            value={data.contactPerson}
            onChange={(e) => update("contactPerson", e.target.value)}
            className={inputClass}
            placeholder="Full name"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email *</label>
        <div className="relative">
          <Mail className={`h-4 w-4 ${iconWrapClass}`} />
          <input
            type="email"
            required
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Phone</label>
        <div className="relative">
          <Phone className={`h-4 w-4 ${iconWrapClass}`} />
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            placeholder="+31 6 12345678"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Category *</label>
        <div className="relative">
          <Layers className={`h-4 w-4 ${iconWrapClass}`} />
          <select
            required
            value={data.category}
            onChange={(e) => update("category", e.target.value)}
            disabled={categoryLocked}
            className={`${inputClass} disabled:bg-gray-100 disabled:text-gray-600`}
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Number of Positions</label>
        <div className="relative">
          <Users className={`h-4 w-4 ${iconWrapClass}`} />
          <input
            type="number"
            min={1}
            value={data.positions}
            onChange={(e) => update("positions", e.target.value)}
            className={inputClass}
            placeholder="e.g. 2"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass}>Write a Message *</label>
        <div className="relative">
          <FileText className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <textarea
            required
            rows={5}
            value={data.jobDescription}
            onChange={(e) => update("jobDescription", e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm focus:border-[#1a4550] focus:outline-none focus:ring-1 focus:ring-[#1a4550]"
            placeholder="Describe the role, required skills, and responsibilities..."
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass}>
          Job Description Document <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <label
          htmlFor="jobDescriptionFile"
          className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-600 transition-colors hover:border-[#1a4550]/50 hover:bg-[#1a4550]/5"
        >
          <Paperclip className="h-4 w-4 shrink-0 text-[#1a4550]" />
          <span className="flex-1 truncate">
            {data.jobDescriptionFile
              ? data.jobDescriptionFile.name
              : "Attach a JD, spec sheet, or brief (PDF or Word)"}
          </span>
          {data.jobDescriptionFile && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                removeFile();
              }}
              className="shrink-0 text-xs font-medium text-red-600 hover:underline"
            >
              Remove
            </button>
          )}
        </label>
        <input
          ref={fileInputRef}
          id="jobDescriptionFile"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
        <p className="mt-1 text-xs text-gray-500">
          Max {MAX_FILE_SIZE_MB}MB. Attach instead of, or in addition to, the description above.
        </p>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass}>KVK Number</label>
        <div className="relative">
          <Wallet className={`h-4 w-4 ${iconWrapClass}`} />
          <input
            type="text"
            value={data.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={inputClass}
            placeholder=""
          />
        </div>
      </div>

      {/* Where did you hear about us? field */}
      <div className="sm:col-span-2">
        <label className={labelClass}>Where did you hear about us?</label>
        <div className="relative">
          <HelpCircle className={`h-4 w-4 ${iconWrapClass}`} />
          <select
            value={(data as any).hearAboutUs || ""}
            onChange={(e) => update("hearAboutUs" as any, e.target.value)}
            className={inputClass}
          >
            <option value="">Select an option</option>
            <option value="facebook">Facebook</option>
            <option value="linkedin">LinkedIn</option>
            <option value="google">Google Search</option>
            <option value="instagram">Instagram</option>
            <option value="friend">Friend / Colleague</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
}