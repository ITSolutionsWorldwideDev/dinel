// apps\admin\components\jobs\jobList.tsx
"use client";

import { useEffect, useState } from "react";
import FilterBar from "./FilterBar";

import { useRouter } from "next/navigation";
import Table from "@/core/common/pagination/datatable";
import { Edit, Trash2 } from "react-feather";
import { TbCirclePlus, TbTrash } from "react-icons/tb";
import type { JobFilters } from "@/types/job";
import SyncButton from "@/components/common/SyncButton";

/* ------------------------------------
   Types
------------------------------------ */

type Job = {
  id: number;
  title: string;
  location: string;
  employment_type: string;
  workplace_type: string;
  department: string;
  experience_level: string;
  visibility: string;
  status: string;
};

export default function JobsPage() {
  const router = useRouter();

  const [data, setData] = useState<{
    items: Job[];
    meta: {
      page: number;
      pageSize: number;
      totalPages: number;
      totalResults: number;
    };
  } | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState<JobFilters>({
    sort: "recent",
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleFilterChange = <K extends keyof JobFilters>(
    key: K,
    value: JobFilters[K],
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value || undefined,
    }));
    setPage(1);
  };

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        page: String(page),
        limit: "10",
        ...Object.fromEntries(Object.entries(filters).filter(([, v]) => v)),
      });

      const res = await fetch(`/api/jobs?${params.toString()}`);
      const json = await res.json();

      setData({
        items: json.items || [],
        meta: {
          page: json.page,
          pageSize: json.pageSize,
          totalPages: json.totalPages,
          totalResults: json.totalResults,
        },
      });
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [page, filters]);

  const DEFAULT_FILTERS: JobFilters = {
    sort: "recent",
  };

  const handleClearFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setPage(1);
  };

  /* const handleClearFilters = () => {
    setFilters({
      status: "",
      employment_type: "",
      workplace_type: "",
      experience_level: "",
      sort: "recent",
    });
    setPage(1);
  }; */

  /* ------------------------------------
       Delete
    ------------------------------------ */
  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      // await fetch(`/api/jobs?id=${selectedId}`, { method: "DELETE" });
      await fetch(`/api/jobs/${selectedId}`, {
        method: "DELETE",
      });

      setShowDeleteModal(false);
      setSelectedId(null);
      setPage(1);
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  /* ------------------------------------
       Publish / Unpublish Status Update
    ------------------------------------ */
  const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);

  const handleUpdateStatus = async (
    jobId: string,
    newStatus: "PUBLISHED" | "DRAFT",
  ) => {
    try {
      setUpdatingStatusId(jobId);
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) {
        throw new Error("Failed to update status");
      }
      await fetchJobs();
    } catch (err) {
      console.error("Failed to update status", err);
      alert("Failed to update status. Please try again.");
    } finally {
      setUpdatingStatusId(null);
    }
  };

  /* ------------------------------------
         Table Columns
      ------------------------------------ */

  type Job = {
    id: number;
    job_id: string;
    title: string;
    location: string;
    employment_type: string;
    workplace_type: string;
    department: string;
    experience_level: string;
    visibility: string;
    published_at: string;
    status: string;
  };

  const columns = [
    {
      title: "Title",
      render: (_: any, record: Job) => (
        <button
          onClick={() => router.push(`/jobs/${record.job_id}/view`)}
          className="text-blue-600 hover:underline font-medium text-left"
        >
          {record.title}
        </button>
      ),
    },

    {
      title: "Location",
      dataIndex: "location",
    },
    // {
    //   title: "Employment Type",
    //   dataIndex: "employment_type",
    // },
    {
      title: "Workplace Type",
      dataIndex: "workplace_type",
    },
    // {
    //   title: "Department",
    //   dataIndex: "department",
    // },
    {
      title: "Experience Level",
      dataIndex: "experience_level",
    },
    // {
    //   title: "Visibility",
    //   dataIndex: "visibility",
    // },
    {
      title: "Published At",
      render: (_: any, record: Job) =>
        record.published_at
          ? new Date(record.published_at).toLocaleString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })
          : "-",
    },
    {
      title: "Status",
      render: (_: any, r: Job) => (
        <div className="flex items-center gap-2">
          <StatusBadge status={r.status} />
          {r.status === "DRAFT" && (
            <button
              type="button"
              disabled={updatingStatusId === r.job_id}
              onClick={() => handleUpdateStatus(r.job_id, "PUBLISHED")}
              className="px-2.5 py-1 rounded text-xs font-bold bg-[#0d2b33] hover:bg-[#153e49] text-white transition disabled:opacity-50 cursor-pointer shadow-xs whitespace-nowrap"
              title="Publish this draft vacancy to live website"
            >
              {updatingStatusId === r.job_id ? "Publishing..." : "Publish"}
            </button>
          )}
        </div>
      ),
    },
    {
      title: "Action",
      render: (_: any, record: Job) => (
        <div className="flex items-center gap-1.5">
          {record.status === "DRAFT" ? (
            <button
              type="button"
              disabled={updatingStatusId === record.job_id}
              onClick={() => handleUpdateStatus(record.job_id, "PUBLISHED")}
              className="px-2.5 py-1 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition disabled:opacity-50 whitespace-nowrap"
              title="Publish Job"
            >
              {updatingStatusId === record.job_id ? "..." : "Publish"}
            </button>
          ) : (
            <button
              type="button"
              disabled={updatingStatusId === record.job_id}
              onClick={() => handleUpdateStatus(record.job_id, "DRAFT")}
              className="px-2 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition disabled:opacity-50 whitespace-nowrap"
              title="Unpublish (Revert to Draft)"
            >
              {updatingStatusId === record.job_id ? "..." : "Unpublish"}
            </button>
          )}
          <button
            onClick={() => router.push(`/jobs/${record.job_id}/edit`)}
            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition"
            title="Edit"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => {
              setSelectedId(record.job_id);
              setShowDeleteModal(true);
            }}
            className="p-1.5 text-red-600 hover:bg-red-50 rounded transition"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  const meta = data?.meta;

  return (
    <>
      <div className="page-wrapper bg-[#f8fafc]">
        <div className="content p-6 max-w-7xl mx-auto space-y-6">
          <div className="page-header flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Jobs List</h1>
              <p className="text-sm font-semibold text-slate-500 mt-1">Manage, edit, and publish job vacancies</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={async () => {
                  if (confirm("Are you sure you want to delete ALL old jobs?")) {
                    try {
                      setLoading(true);
                      await fetch("/api/jobs/clear-all", { method: "POST" });
                      fetchJobs();
                    } catch (e) {
                      console.error(e);
                    } finally {
                      setLoading(false);
                    }
                  }
                }}
                className="px-4 py-2.5 rounded-xl border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 text-xs font-bold flex items-center gap-1.5 transition"
              >
                <TbTrash size={15} />
                Delete All Old Jobs
              </button>
              <button
                onClick={() => router.push(`/jobs/create`)}
                className="px-5 py-2.5 rounded-xl bg-[#0d2b33] hover:bg-[#153e49] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition"
              >
                <TbCirclePlus size={16} />
                Add Job
              </button>
            </div>
          </div>

          <div className="card table-list-card bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="card-header bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center">
              <FilterBar
                filters={filters}
                onChange={handleFilterChange}
                onClear={handleClearFilters}
              />
            </div>

            <div className="card-body bg-white p-4 overflow-auto">
              {loading ? (
                <p className="text-center py-6">Loading...</p>
              ) : (
                <>
                  <p className="text-sm text-gray-500 px-6 pt-3">
                    Showing {data?.items.length} of {meta?.totalResults} jobs
                  </p>

                  <Table
                    columns={columns}
                    dataSource={data?.items || []}
                    rowKey="id"
                  />
                </>
              )}
            </div>

            {/* PAGINATION */}
            {meta && meta.totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t bg-gray-50">
                {/* LEFT SIDE INFO */}
                <div className="text-sm text-gray-600">
                  Page <span className="font-semibold">{meta.page}</span> of{" "}
                  <span className="font-semibold">{meta.totalPages}</span>
                </div>

                {/* RIGHT SIDE CONTROLS */}
                <div className="flex items-center gap-2">
                  {/* PREV BUTTON */}
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={meta.page === 1}
                    className={`px-3 py-1.5 rounded-md border text-sm font-medium transition
                    ${
                      meta.page === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    ← Previous
                  </button>

                  {/* PAGE NUMBERS (SMART RANGE) */}
                  {Array.from({ length: meta.totalPages })
                    .filter((_, i) => {
                      const pageNumber = i + 1;
                      return (
                        pageNumber === 1 ||
                        pageNumber === meta.totalPages ||
                        Math.abs(pageNumber - meta.page) <= 1
                      );
                    })
                    .map((_, i) => {
                      const pageNumber =
                        meta.page === 1 ? i + 1 : meta.page - 1 + i;

                      return (
                        <button
                          key={pageNumber}
                          onClick={() => setPage(pageNumber)}
                          className={`px-3 py-1.5 rounded-md border text-sm font-medium transition
                          ${
                            meta.page === pageNumber
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white hover:bg-gray-100"
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}

                  {/* NEXT BUTTON */}
                  <button
                    onClick={() =>
                      setPage((p) => Math.min(meta.totalPages, p + 1))
                    }
                    disabled={meta.page === meta.totalPages}
                    className={`px-3 py-1.5 rounded-md border text-sm font-medium transition
                    ${
                      meta.page === meta.totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* {meta && meta.totalPages > 1 && (
              <div className="flex gap-2 justify-end p-4">
                {Array.from({ length: meta.totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-3 py-1 border rounded ${
                      meta.page === i + 1 ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )} */}

            {/* DELETE MODAL */}
            {showDeleteModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-white rounded p-6 text-center max-w-sm">
                  <TbTrash size={32} className="mx-auto text-red-600 mb-2" />
                  <h4 className="font-bold mb-2">Delete Job</h4>
                  <p className="text-gray-600 mb-4">
                    Are you sure you want to delete this Job?
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    >
                      Cancel
                    </button>
                    <button onClick={handleDelete} className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    PUBLISHED: "bg-green-100 text-green-700",
    DRAFT: "bg-gray-100 text-gray-600",
    CLOSED: "bg-red-100 text-red-600",
  };

  return (
    <span className={`px-2 py-1 rounded text-xs ${map[status]}`}>{status}</span>
  );
}

// const [filters, setFilters] = useState({
//   status: "",
//   employment_type: "",
//   workplace_type: "",
//   experience_level: "",
//   sort: "recent",
// });
