// apps/web/components/account/ApplicationsTab.tsx
"use client";

import { Briefcase, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Application, ApplicationStatus } from "./types";

// type ApplicationStatus =
//   | "Applied"
//   | "Shortlisted"
//   | "Interview"
//   | "Rejected"
//   | "Hired";

const STATUS_LABEL: Record<ApplicationStatus, string> = {
  APPLIED: "Applied",
  SHORTLISTED: "Shortlisted",
  INTERVIEW: "Interview",
  REJECTED: "Rejected",
  HIRED: "Hired",
};

const STATUS_STYLES: Record<ApplicationStatus, string> = {
  APPLIED: "bg-blue-50 text-blue-700",
  SHORTLISTED: "bg-purple-50 text-purple-700",
  INTERVIEW: "bg-yellow-50 text-yellow-700",
  REJECTED: "bg-red-50 text-red-700",
  HIRED: "bg-green-50 text-green-700",
};

export default function ApplicationsTab({
  applications,
}: {
  applications: Application[];
}) {
  if (!applications.length) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      {applications.map((app) => (
        <div
          key={app.id}
          className="rounded-lg border bg-white p-5 transition hover:shadow-md cursor-pointer"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-base flex items-center gap-2">
                <Briefcase size={16} />
                {app.jobTitle}
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                {app.company}
              </p>

              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                {app.location && (
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {app.location}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  Applied on{" "}
                  {new Date(app.appliedAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <span
              className={cn(
                "text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap",
                STATUS_STYLES[app.status],
              )}
            >
              {STATUS_LABEL[app.status]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center border rounded-lg bg-gray-50">
      <Briefcase className="text-gray-400 mb-4" size={36} />
      <h3 className="font-semibold">No applications yet</h3>
      <p className="text-sm text-gray-500 mt-1 max-w-sm">
        Once you apply for jobs, your applications will appear here so you can
        track their progress.
      </p>
    </div>
  );
}
