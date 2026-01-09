// apps\admin\components\jobs\jobList.tsx
"use client";

import { useEffect, useState } from "react";
import FilterBar from "./FilterBar";

import { useRouter } from "next/navigation";
import Table from "@/core/common/pagination/datatable";
import { Edit, Trash2 } from "react-feather";
import { TbCirclePlus, TbTrash } from "react-icons/tb";

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

  const [filters, setFilters] = useState({
    status: "",
    employment_type: "",
    workplace_type: "",
    experience_level: "",
    sort: "recent",
  });

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

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
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

  /*  const fetchJobs = async () => {
    try {
      setLoading(true);

      const res = await fetch(`/api/jobs?page=${page}&limit=10`);
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
  }; */

  useEffect(() => {
    fetchJobs();
  }, [page, filters]);

  const handleClearFilters = () => {
    setFilters({
      status: "",
      employment_type: "",
      workplace_type: "",
      experience_level: "",
      sort: "recent",
    });
    setPage(1);
  };

  /* ------------------------------------
       Delete
    ------------------------------------ */
  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await fetch(`/api/jobs?id=${selectedId}`, { method: "DELETE" });
      setShowDeleteModal(false);
      setSelectedId(null);
      setPage(1);
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  /* ------------------------------------
         Table Columns
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
    published_at: string;
    status: string;
  };

  const columns = [
    {
      title: "Title",
      render: (_: any, record: Job) => (
        <button
          onClick={() => router.push(`/jobs/${record.id}/view`)}
          className="text-blue-600 hover:underline font-medium"
        >
          {record.title}
        </button>
      ),
    },

    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Employment Type",
      dataIndex: "employment_type",
    },
    {
      title: "Workplace Type",
      dataIndex: "workplace_type",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Experience Level",
      dataIndex: "experience_level",
    },
    {
      title: "Visibility",
      dataIndex: "visibility",
    },
    {
      title: "Published At",
      dataIndex: "published_at",
    },
    {
      title: "Status",
      render: (_: any, record: Job) => (
        <span
          className={
            record.status === "PUBLISHED"
              ? "text-green-600 font-medium"
              : "text-gray-500 font-medium"
          }
        >
          {record.status}
        </span>
      ),
    },
    {
      title: "Action",
      render: (_: any, record: Job) => (
        <div className="flex gap-2">
          <button
            onClick={() => router.push(`/jobs/${record.id}/edit`)}
            className="p-2 text-blue-600"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => {
              setSelectedId(record.id);
              setShowDeleteModal(true);
            }}
            className="p-2 text-red-600"
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
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header flex justify-between items-center mb-4">
            <div>
              <h4 className="text-lg font-semibold">Jobs List</h4>
              <h6 className="text-gray-500">Manage Jobs</h6>
            </div>
            <button
              onClick={() => router.push(`/jobs/create`)}
              className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded"
            >
              <TbCirclePlus size={18} />
              Add Job
            </button>
          </div>

          <div className="card table-list-card">
            <div className="card-header flex justify-between items-center">
              <FilterBar
                filters={filters}
                onChange={handleFilterChange}
                onClear={handleClearFilters}
              />
            </div>

            <div className="card-body overflow-auto">
              {loading ? (
                <p className="text-center py-6">Loading...</p>
              ) : (
                <Table
                  columns={columns}
                  dataSource={data?.items || []}
                  rowKey="id"
                />
              )}
            </div>

            {/* PAGINATION */}
            {meta && meta.totalPages > 1 && (
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
            )}

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
                      className="px-4 py-2 bg-gray-200 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDelete}
                      className="px-4 py-2 bg-red-600 text-white rounded"
                    >
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
