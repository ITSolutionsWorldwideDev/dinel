// apps/web/components/account/TabsClient.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { User, Briefcase, LogOut } from "lucide-react";
import ApplicationsTab from "@/components/account/ApplicationsTab";
import StatusTabs from "./StatusTabs";

import type { Application, ApplicationStatus } from "./types";

type Tab = {
  id: number;
  label: string;
  icon: React.ReactNode;
};

const tabs: Tab[] = [
  { id: 1, label: "Profile", icon: <User size={18} /> },
  { id: 2, label: "Applications", icon: <Briefcase size={18} /> },
  { id: 3, label: "Logout", icon: <LogOut size={18} /> },
];

// type Application = {
//   id: string;
//   jobTitle: string;
//   company: string;
//   location?: string;
//   status: string;
//   appliedAt: string;
// };

const PAGE_SIZE = 10;

export default function TabsClient({
  candidateID,
  profileSlot,
}: {
  candidateID: string;
  profileSlot: React.ReactNode;
}) {
  const [active, setActive] = useState(1);

  const handleClick = async (tab: Tab) => {
    if (tab.label === "Logout") {
      await signOut({ callbackUrl: "/login" });
      return;
    }
    setActive(tab.id);
  };

  // applications state
  const [applications, setApplications] = useState<Application[]>([]);
  const [status, setStatus] = useState<ApplicationStatus | null>(null);

  //   const [applications, setApplications] = useState<Application[]>([]);
  //   const [status, setStatus] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchApplications = async (reset = false) => {
    if (loading || (!reset && !hasMore)) return;

    setLoading(true);

    const params = new URLSearchParams({
      page: reset ? "1" : page.toString(),
      limit: PAGE_SIZE.toString(),
    });

    if (status) params.set("status", status);

    const res = await fetch(`/api/account/applications?${params}`);
    const data = await res.json();

    const mapped: Application[] = data.items.map((a: any) => ({
      id: a.id,
      jobTitle: a.job_title,
      company: a.company_name,
      location: a.location,
      status: a.status as ApplicationStatus,
      appliedAt: a.applied_at,
    }));

    setApplications((prev) => (reset ? mapped : [...prev, ...mapped]));

    setHasMore(data.page < data.totalPages);
    setPage((p) => (reset ? 2 : p + 1));
    setLoading(false);
  };

  useEffect(() => {
    if (active === 2) {
      setApplications([]);
      setPage(1);
      fetchApplications(true);
    }
  }, [active, status]);

  useEffect(() => {
    if (!observerRef.current || !hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          fetchApplications();
        }
      },
      { threshold: 1 },
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [hasMore, loading]);

  return (
    <section className="w-full">
      {/* Top Tabs */}
      <div className="border-b mb-6">
        <nav className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab)}
              className={cn(
                "relative flex items-center gap-2 px-1 pb-3 text-sm font-medium transition",
                active === tab.id
                  ? "text-[#106FBC]"
                  : "text-gray-500 hover:text-gray-800",
              )}
            >
              {tab.icon}
              {tab.label}

              {/* Active underline */}
              {active === tab.id && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-[#106FBC] rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Card */}
      <div className="rounded-xl border bg-white shadow-sm p-6 transition-all">
        {active === 1 && profileSlot}
        {active === 2 && (
          <>
          
          <div className="page-header flex justify-between items-center mb-8 border-b-2 rounded-lg p-4 text-white bg-[#FF8026]">
            <div>
              <h4 className="text-lg font-semibold">Applications</h4>
              <h6 className="">Check Applications Status</h6>
            </div>
          </div>
            <StatusTabs
              value={status}
              onChange={(v) => {
                setStatus(v);
                setPage(1);
              }}
            />

            <ApplicationsTab applications={applications} />

            {hasMore && (
              <div
                ref={observerRef}
                className="py-6 text-center text-sm text-gray-500"
              >
                {loading ? "Loading more…" : "Scroll to load more"}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}