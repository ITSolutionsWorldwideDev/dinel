// apps/admin/components/applications/applicationsList.tsx
"use client";

import { useEffect, useState } from "react";
import Table from "@/core/common/pagination/datatable";
import { Edit, Trash2 } from "react-feather";
import { TbCirclePlus, TbTrash } from "react-icons/tb";
import FilterBar from "./FilterBar";
import { Button, useToast } from "@repo/ui";
import CandidateDrawer from "../candidates/CandidateDrawer";

/* ------------------------------------
   Types
------------------------------------ */
type Application = {
  id: number;
  full_name: string;
  email: string;
  phone?: string;
  job_title: string;
  status: string;
  applied_at: string;
  source: string;
};

type ApiResponse = {
  items: Application[];
  totalResults: number;
  page: number;
  pageSize: number;
  totalPages: number;
};


  function SourceBadge({ source }: { source: string }) {
    const map: Record<string, string> = {
      carerix: "bg-purple-100 text-purple-700",
      linkedin: "bg-blue-100 text-blue-700",
      "cv-upload": "bg-gray-100 text-gray-700",
    };

    return (
      <span
        className={`px-2 py-1 rounded text-xs font-medium ${
          map[source] || "bg-gray-100"
        }`}
      >
        {source}
      </span>
    );
  }

export default function ApplicationsListComponent({
  tenantId,
}: {
  tenantId: string;
}) {
  const { showToast } = useToast();

  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalResults, setTotalResults] = useState(0);

  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isEditMode, setIsEditMode] = useState(false);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);

  // const [selectedId, setSelectedId] = useState<number | null>(null);

  const [filters, setFilters] = useState<{
    status?: string;
    jobId?: string;
  }>({});

  // const [formData, setFormData] = useState({
  //   id: null as number | null,
  //   name: "",
  //   status: true,
  // });

  /* ------------------------------------
     Fetch Applications
  ------------------------------------ */
  const fetchApplications = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        tenantId: tenantId,
        page: String(page),
        limit: String(pageSize),
        ...(filters.status && { status: filters.status }),
        ...(filters.jobId && { search: filters.jobId }),
      });

      const res = await fetch(`/api/applications?${params.toString()}`);
      if (!res.ok) throw new Error();

      const data: ApiResponse = await res.json();

      setApplications(data.items);
      setTotalResults(data.totalResults);
    } catch (err) {
      console.error("Failed to load applications", err);
      showToast("error", "Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [page]);

  /* ------------------------------------
     Modals
  ------------------------------------ */


  // const openAddModal = () => {
  //   setIsEditMode(false);
  //   setFormData({
  //     id: null,
  //     name: "",
  //     status: true,
  //   });
  //   setIsModalOpen(true);
  // };

  // const openEditModal = (record: Application) => {
  //   setIsEditMode(true);
  //   setFormData({
  //     id: record.id,
  //     name: record.name,
  //     status: record.status === 1,
  //   });
  //   setIsModalOpen(true);
  // };

  /* ------------------------------------
     Create / Update
  ------------------------------------ */
  // const handleSubmit = async () => {
  //   try {
  //     const payload = {
  //       applications: formData.name,
  //       status: formData.status ? 1 : 0,
  //     };

  //     const res = await fetch("/api/applications", {
  //       method: isEditMode ? "PUT" : "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(
  //         isEditMode ? { id: formData.id, ...payload } : payload
  //       ),
  //     });

  //     if (!res.ok) throw new Error();

  //     showToast(
  //       "success",
  //       isEditMode ? "Applications updated" : "Applications created"
  //     );

  //     setIsModalOpen(false);
  //     fetchApplications();
  //   } catch (err) {
  //     showToast("error", "Failed to save Applications");
  //     console.error("Save failed", err);
  //   }
  // };

  /* ------------------------------------
     Delete
  ------------------------------------ */
  // const handleDelete = async () => {
  //   if (!selectedId) return;

  //   try {
  //     await fetch(`/api/applications?id=${selectedId}`, {
  //       method: "DELETE",
  //     });

  //     setShowDeleteModal(false);
  //     setSelectedId(null);
  //     fetchApplications();
  //   } catch (err) {
  //     console.error("Delete failed", err);
  //   }
  // };

  /* ------------------------------------
     Table Columns
  ------------------------------------ */
  const columns = [
    // {
    //   title: "Candidate",
    //   render: (_: any, record: Application) => (
    //     <div>
    //       <p className="font-medium">{record.full_name}</p>
    //       <p className="text-xs text-gray-500">{record.email}</p>
    //     </div>
    //   ),
    // },
    {
      title: "Candidate",
      render: (_: any, r: Application) => (
        <button onClick={() => setSelectedCandidate(r)} className="text-left">
          <p className="font-medium text-blue-600 hover:underline">
            {r.full_name}
          </p>
          <p className="text-xs text-gray-500">{r.email}</p>
        </button>
      ),
    },

    {
      title: "Job",
      dataIndex: "job_title",
    },
    {
      title: "Status",
      render: (_: any, record: Application) => {
        const statusColor =
          record.status === "APPLIED"
            ? "text-blue-600"
            : record.status === "INTERVIEW"
              ? "text-yellow-600"
              : record.status === "HIRED"
                ? "text-green-600"
                : "text-gray-600";

        return (
          <span className={`font-medium ${statusColor}`}>{record.status}</span>
        );
      },
    },
    {
      title: "Applied On",
      render: (_: any, record: Application) =>
        new Date(record.applied_at).toLocaleDateString(),
    },
    {
      title: "Source",
      render: (_: any, r: Application) => <SourceBadge source={r.source} />,
    },
  ];

  /* ------------------------------------
     Render
  ------------------------------------ */
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header flex justify-between items-center mb-4">
            <div>
              <h4 className="text-lg font-semibold">Applications</h4>
              <h6 className="text-gray-500">
                View candidates who applied for jobs
              </h6>
            </div>
          </div>

          <div className="card table-list-card">
            <div className="card-header flex justify-between items-center">
              <FilterBar
                status={filters.status}
                jobId={filters.jobId}
                onChange={(next) => {
                  setPage(1);
                  setFilters((prev) => ({ ...prev, ...next }));
                }}
              />
            </div>

            <div className="card-body">
              {loading ? (
                <p className="text-center py-6">Loading applications...</p>
              ) : (
                <Table
                  columns={columns}
                  dataSource={applications}
                  rowKey="id"
                  pagination={{
                    current: page,
                    pageSize,
                    total: totalResults,
                    onChange: (p: number) => setPage(p),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <CandidateDrawer
        open={!!selectedCandidate}
        candidate={selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
      />

      {/* ADD / EDIT MODAL */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 modal fade">
          <div className="modal-content modal-content-demo bg-white rounded w-full max-w-lg">
            <div className="modal-header flex">
              <h4 className="modal-title">
                {isEditMode ? "Edit Applications" : "Add Applications"}
              </h4>
              <Button
                className="btn-close float-right"
                onClick={() => setIsModalOpen(false)}
              >
                X
              </Button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="col-form-label">Applications:</label>
                <input
                  type="text"
                  placeholder="Applications name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2 mb-4"
                />
              </div>

              <label className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  checked={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.checked })
                  }
                />
                Active
              </label>
            </div>

            <div className="modal-footer flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="btn btn-primary fs-13 fw-medium p-2 px-3"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* DELETE MODAL */}
      {/* {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded p-6 text-center max-w-sm">
            <TbTrash size={32} className="mx-auto text-red-600 mb-2" />
            <h4 className="font-bold mb-2">Delete Applications</h4>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this applications?
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
      )} */}
    </>
  );
}
