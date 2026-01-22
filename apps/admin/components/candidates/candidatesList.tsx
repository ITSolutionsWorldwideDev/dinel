// apps/admin/components/candidates/candidatesList.tsx
"use client";

import { useEffect, useState } from "react";
import Table from "@/core/common/pagination/datatable";
import { Edit, Trash2 } from "react-feather";
import { TbCirclePlus, TbTrash } from "react-icons/tb";
import FilterBar from "./FilterBar";
import { Button, useToast } from "@repo/ui";
import UploadCandidateModal from "./UploadCandidateModal";
import CvPreviewModal from "./CvPreviewModal";
import SyncButton from "@/components/common/SyncButton";

/* ------------------------------------
   Types
------------------------------------ */

type Candidate = {
  id: string;
  tenant_id: string;

  full_name: string;
  email?: string;
  phone?: string;
  location?: string;

  headline?: string;
  skills?: string[];

  source: "cv-upload" | "linkedin-extension" | "manual";
  cv_url?: string;
  linkedin_url?: string;

  created_at: string;
  updated_at?: string;
};

type CandidateFilters = {
  search?: string;
  source?: string;
  sort?: string;
};

export default function CandidatesListComponent({
  tenantId,
}: {
  tenantId: string;
}) {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewData, setPreviewData] = useState<{
    parsed: any;
    duplicate: any | null;
    cvHash: string;
  } | null>(null);

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 20;

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [filters, setFilters] = useState<CandidateFilters>({
    search: "",
    source: "",
    sort: "",
  });

  const { showToast } = useToast();

  /* ------------------------------------
     Fetch Candidates
  ------------------------------------ */

  const fetchCandidates = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();
      params.set("tenantId", tenantId);
      params.set("page", String(page));
      params.set("limit", String(pageSize));

      if (filters.search) params.set("search", filters.search);
      if (filters.source) params.set("source", filters.source);
      if (filters.sort) params.set("sort", filters.sort);

      const res = await fetch(`/api/candidate?${params.toString()}`);
      if (!res.ok) throw new Error();

      const data = await res.json();
      setCandidates(data.items || []);
      setTotal(data.total || 0);
    } catch {
      showToast("error", "Failed to load candidates");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, [filters, page]);

  /* ------------------------------------
     Modals
  ------------------------------------ */

  const handleConfirm = async (mode: "create" | "update") => {
    if (!previewData) return;

    try {
      const res = await fetch("/api/cv/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parsed: previewData.parsed,
          tenantId,
          cvHash: previewData.cvHash,
          mode,
          candidateId: previewData.duplicate?.id,
        }),
      });

      if (!res.ok) throw new Error();

      showToast("success", "Candidate saved successfully");

      setPreviewOpen(false);
      setPreviewData(null);

      fetchCandidates();
    } catch {
      showToast("error", "Failed to save candidate");
    }
  };

  /* ------------------------------------
     Delete
  ------------------------------------ */
  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await fetch(`/api/candidate?id=${selectedId}`, {
        method: "DELETE",
      });

      setShowDeleteModal(false);
      setSelectedId(null);
      fetchCandidates();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  /* ------------------------------------
     Table Columns
  ------------------------------------ */
  const columns = [
    {
      title: "Candidate",
      render: (_: any, c: Candidate) => (
        <div>
          <div className="font-medium">{c.full_name}</div>
          <div className="text-xs text-gray-500">{c.email}</div>
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Skills",
      render: (_: any, c: Candidate) => (
        <div className="flex flex-wrap gap-1">
          {c.skills?.slice(0, 3).map((s) => (
            <span key={s} className="px-2 py-0.5 bg-gray-100 rounded text-xs">
              {s}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Source",
      render: (_: any, c: Candidate) => (
        <span className="text-xs capitalize">{c.source.replace("-", " ")}</span>
      ),
    },
    {
      title: "Added",
      render: (_: any, c: Candidate) =>
        new Date(c.created_at).toLocaleDateString(),
    },
    {
      title: "Action",
      render: (_: any, c: Candidate) => (
        <div className="flex gap-2">
          <a href={`/candidates/${c.id}`} className="text-blue-600">
            View
          </a>
          <button className="text-red-600">Delete</button>
        </div>
      ),
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
              <h4 className="text-lg font-semibold">Candidate List</h4>
              <h6 className="text-gray-500">Manage your candidates</h6>
            </div>
            <div className="flex gap-2">
              <SyncButton
                label="Candidates"
                endpoint="/api/candidate/syncCarerix"
                onDone={fetchCandidates}
              />

              <button
                onClick={() => setShowUploadModal(true)}
                className="btn btn-info flex flex-row gap-2"
              >
                <TbCirclePlus size={18} />
                Add Candidate
              </button>
            </div>
          </div>

          <div className="card table-list-card">
            <div className="card-header flex justify-between items-center">
              <FilterBar filters={filters} setFilters={setFilters} />
            </div>

            <div className="card-body">
              {loading ? (
                <p className="text-center py-6">Loading...</p>
              ) : (
                <Table columns={columns} dataSource={candidates} rowKey="id" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded p-6 text-center max-w-sm">
            <TbTrash size={32} className="mx-auto text-red-600 mb-2" />
            <h4 className="font-bold mb-2">Delete Candidate</h4>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this candidate?
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

      {showUploadModal && (
        <UploadCandidateModal
          tenantId={tenantId}
          onClose={() => setShowUploadModal(false)}
          onParsed={(data) => {
            setShowUploadModal(false);
            setPreviewData(data);
            setPreviewOpen(true);
          }}
        />
      )}

      {/* <UploadCandidateModal
          tenantId={tenantId}
          onClose={() => setShowUploadModal(false)}
          onSuccess={fetchCandidates}
        /> */}
      {previewOpen && previewData && (
        <CvPreviewModal
          data={previewData}
          onClose={() => {
            setPreviewOpen(false);
            setPreviewData(null);
          }}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}
