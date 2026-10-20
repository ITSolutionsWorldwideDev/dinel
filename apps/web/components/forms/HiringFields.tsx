"use client";

import { useRef } from "react";
import { useLocale } from "next-intl";
import {
  Building2,
  User,
  Mail,
  Phone,
  Layers,
  Users,
  Briefcase,
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

const categoryLabelsNl: Record<string, string> = {
  "it-development": "IT en Ontwikkeling",
  "design-services": "Ontwerpdiensten",
  "marketing-analytics": "Marketing en Analytics",
  "admin-business-support": "Administratie en Bedrijfsondersteuning",
  "finance-accounting": "Financiën en Boekhouding",
  "travel-reservations": "Reizen en Reserveringen",
  "supply-chain": "Logistiek en Supply Chain",
};

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
  const locale = useLocale();
  const isNl = locale === "nl";
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
      alert(isNl ? "Upload een PDF- of Word-document." : "Please upload a PDF or Word document.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(
        isNl
          ? `Bestand is te groot. Maximale grootte is ${MAX_FILE_SIZE_MB}MB.`
          : `File is too large. Max size is ${MAX_FILE_SIZE_MB}MB.`
      );
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
        <label className={labelClass}>{isNl ? "Bedrijfsnaam *" : "Company Name *"}</label>
        <div className="relative">
          <Building2 className={`h-4 w-4 ${iconWrapClass}`} />
          <input
            type="text"
            required
            value={data.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            className={inputClass}
            placeholder={isNl ? "Uw bedrijfsnaam" : "Your company name"}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>{isNl ? "Contactpersoon *" : "Contact Person *"}</label>
        <div className="relative">
          <User className={`h-4 w-4 ${iconWrapClass}`} />
          <input
            type="text"
            required
            value={data.contactPerson}
            onChange={(e) => update("contactPerson", e.target.value)}
            className={inputClass}
            placeholder={isNl ? "Volledige naam" : "Full name"}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>{isNl ? "E-mailadres *" : "Email *"}</label>
        <div className="relative">
          <Mail className={`h-4 w-4 ${iconWrapClass}`} />
          <input
            type="email"
            required
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            placeholder={isNl ? "u@bedrijf.nl" : "you@company.com"}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>{isNl ? "Telefoonnummer" : "Phone"}</label>
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
        <label className={labelClass}>{isNl ? "Categorie *" : "Category *"}</label>
        <div className="relative">
          <Layers className={`h-4 w-4 ${iconWrapClass}`} />
          <select
            required
            value={data.category}
            onChange={(e) => update("category", e.target.value)}
            disabled={categoryLocked}
            className={`${inputClass} disabled:bg-gray-100 disabled:text-gray-600`}
          >
            <option value="">{isNl ? "Selecteer een categorie" : "Select a category"}</option>
            {categories?.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {isNl ? (categoryLabelsNl[cat.value] || cat.label) : cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 👇 NEW FIELD: Job Position */}
      <div>
        <label className={labelClass}>{isNl ? "Functie *" : "Job Position *"}</label>
        <div className="relative">
          <Briefcase className={`h-4 w-4 ${iconWrapClass}`} />
          <input
            type="text"
            required
            value={data.jobPosition}
            onChange={(e) => update("jobPosition", e.target.value)}
            className={inputClass}
            placeholder={isNl ? "bijv. Frontend Developer" : "e.g. Frontend Developer"}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>{isNl ? "Aantal posities" : "Number of Positions"}</label>
        <div className="relative">
          <Users className={`h-4 w-4 ${iconWrapClass}`} />
          <input
            type="number"
            min={1}
            value={data.positions}
            onChange={(e) => update("positions", e.target.value)}
            className={inputClass}
            placeholder={isNl ? "bijv. 2" : "e.g. 2"}
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass}>{isNl ? "Schrijf een bericht *" : "Write a Message *"}</label>
        <div className="relative">
          <FileText className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <textarea
            required
            rows={3}
            value={data.jobDescription}
            onChange={(e) => update("jobDescription", e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm focus:border-[#1a4550] focus:outline-none focus:ring-1 focus:ring-[#1a4550]"
            placeholder={
              isNl
                ? "Beschrijf de rol, vereiste vaardigheden en verantwoordelijkheden..."
                : "Describe the role, required skills, and responsibilities..."
            }
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass}>
          {isNl ? "Functieomschrijving document" : "Job Description Document"}{" "}
          <span className="font-normal text-gray-400">{isNl ? "(optioneel)" : "(optional)"}</span>
        </label>
        <label
          htmlFor="jobDescriptionFile"
          className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-600 transition-colors hover:border-[#1a4550]/50 hover:bg-[#1a4550]/5"
        >
          <Paperclip className="h-4 w-4 shrink-0 text-[#1a4550]" />
          <span className="flex-1 truncate">
            {data.jobDescriptionFile
              ? data.jobDescriptionFile.name
              : isNl
              ? "Voeg een JD, specificatie of briefing toe (PDF of Word)"
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
              {isNl ? "Verwijderen" : "Remove"}
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
          {isNl
            ? `Max ${MAX_FILE_SIZE_MB}MB. Toevoegen in plaats van of als aanvulling op de beschrijving hierboven.`
            : `Max ${MAX_FILE_SIZE_MB}MB. Attach instead of, or in addition to, the description above.`}
        </p>
      </div>

      <div>
        <label className={labelClass}>{isNl ? "KVK-nummer" : "KVK Number"}</label>
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

      <div>
        <label className={labelClass}>
          {isNl ? "Hoe heeft u over ons gehoord?" : "Where did you hear about us?"}
        </label>
        <div className="relative">
          <HelpCircle className={`h-4 w-4 ${iconWrapClass}`} />
          <select
            value={(data as any).hearAboutUs || ""}
            onChange={(e) => update("hearAboutUs" as any, e.target.value)}
            className={inputClass}
          >
            <option value="">{isNl ? "Selecteer een optie" : "Select an option"}</option>
            <option value="facebook">Facebook</option>
            <option value="linkedin">LinkedIn</option>
            <option value="google">{isNl ? "Google Zoeken" : "Google Search"}</option>
            <option value="instagram">Instagram</option>
            <option value="friend">{isNl ? "Vriend / Collega" : "Friend / Colleague"}</option>
            <option value="other">{isNl ? "Anders" : "Other"}</option>
          </select>
        </div>
      </div>
    </div>
  );
}