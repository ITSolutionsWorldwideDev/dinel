// apps/admin/app/(admin)/dashboard/page.tsx
"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  Briefcase,
  Users,
  FileCheck,
  TrendingUp,
  PlusCircle,
  ExternalLink,
  Building,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function Dashboard() {
  const { data: session } = useSession();
  const [jobCount, setJobCount] = useState<number | null>(null);

  useEffect(() => {
    // Quick lightweight count fetch
    fetch("/api/jobs?limit=1")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.totalResults === "number") {
          setJobCount(data.totalResults);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="page-wrapper">
      <div className="content p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-[#0d2b33] to-[#1a4550] rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider mb-3">
                Staff Outsourcing Admin Portal
              </span>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                Welcome Back
                {session?.user?.name
                  ? `, ${session.user.name}`
                  : session?.user?.email
                  ? `, ${session.user.email.split("@")[0]}`
                  : ""} 👋
              </h1>
              <p className="text-white/80 text-sm mt-1 max-w-xl leading-relaxed">
                Manage your job vacancies, candidate applications, and website content with real-time updates.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/jobs/create"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#0d2b33] font-bold text-sm hover:bg-slate-100 transition shadow-md"
              >
                <PlusCircle className="w-4 h-4" />
                Post New Job
              </Link>
              <a
                href="http://localhost:3000/careers"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition border border-white/20"
              >
                <ExternalLink className="w-4 h-4" />
                Live Website
              </a>
            </div>
          </div>

          {/* Decorative ambient backdrop */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Total Jobs Posted
              </p>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                {jobCount !== null ? jobCount : "—"}
              </h3>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#0d2b33] dark:text-emerald-400 hover:underline mt-2"
              >
                Manage jobs <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#0d2b33]/10 text-[#0d2b33] flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Applications
              </p>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                Active
              </h3>
              <Link
                href="/applications"
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline mt-2"
              >
                Review submissions <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Candidates
              </p>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                Talent Pool
              </h3>
              <Link
                href="/candidates"
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline mt-2"
              >
                View candidates <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Categories & Sectors
              </p>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                Active
              </h3>
              <Link
                href="/sectors"
                className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline mt-2"
              >
                Manage sectors <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Quick Actions & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Job Vacancy Management
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Create, review, and publish jobs with custom responsibilities and requirement bullet points.
            </p>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/jobs/create"
                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700/80 flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-white transition"
              >
                <span>➕ Create New Job Vacancy</span>
                <span className="text-xs text-[#0d2b33] dark:text-emerald-400 font-bold">Open form →</span>
              </Link>
              <Link
                href="/jobs"
                className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700/80 flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-white transition"
              >
                <span>📋 Manage Published & Draft Jobs</span>
                <span className="text-xs text-slate-400">View list →</span>
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Platform & Website Integration
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Direct live sync with Staff Outsourcing careers portal and candidate parsing pipeline.
            </p>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                ✅ <strong>Jobs Pipeline:</strong> Dedicated to Staff Outsourcing without publishing to ITWW.
              </div>
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 text-xs text-blue-800 dark:text-blue-300 font-medium">
                ✅ <strong>CV Ingestion:</strong> Resumes submitted on the website forward automatically to Talent Genie.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
