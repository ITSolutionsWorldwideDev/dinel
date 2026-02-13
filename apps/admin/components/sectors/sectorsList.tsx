// apps/admin/components/sectors/sectorsList.tsx
"use client";

import { useEffect, useState } from "react";
import Table from "@/core/common/pagination/datatable";
import { Edit, Trash2 } from "react-feather";
import { TbCirclePlus, TbTrash } from "react-icons/tb";
import FilterBar from "./FilterBar";
import { Button, useToast } from "@repo/ui";

/* ------------------------------------
   Types
------------------------------------ */
type Sector = {
  sector_id: number;
  sector: string;
  sectorslug: string;
  status: number;
};

export default function SectorListComponent() {
  const [categories, setCategories] = useState<Sector[]>([]);
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    sector_id: null as number | null,
    sector: "",
    status: true,
  });

  /* ------------------------------------
     Fetch Categories
  ------------------------------------ */
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/sectors");
      const data = await res.json();
      setCategories(data.items || []);
    } catch (err) {
      console.error("Failed to load categories", err);
      showToast("error", "Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  /* ------------------------------------
     Modals
  ------------------------------------ */
  const openAddModal = () => {
    setIsEditMode(false);
    setFormData({
      sector_id: null,
      sector: "",
      status: true,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (record: Sector) => {
    setIsEditMode(true);
    setFormData({
      sector_id: record.sector_id,
      sector: record.sector,
      status: record.status === 1,
    });
    setIsModalOpen(true);
  };

  /* ------------------------------------
     Create / Update
  ------------------------------------ */
  const handleSubmit = async () => {
    try {
      const payload = {
        sector: formData.sector,
        status: formData.status ? 1 : 0,
      };
      

      const res = await fetch("/api/sectors", {
        method: isEditMode ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          isEditMode
            ? { sector_id: formData.sector_id, ...payload }
            : payload
        ),
      });

      if (!res.ok) throw new Error();

      showToast(
        "success",
        isEditMode ? "Sector updated" : "Sector created"
      );

      setIsModalOpen(false);
      fetchCategories();
    } catch (err) {
      console.error("Save failed", err);
      showToast("error", "Failed to save Sector");
    }
  };

  /* ------------------------------------
     Delete
  ------------------------------------ */
  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await fetch(`/api/sectors?id=${selectedId}`, {
        method: "DELETE",
      });

      setShowDeleteModal(false);
      setSelectedId(null);
      fetchCategories();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  /* ------------------------------------
     Table Columns
  ------------------------------------ */
  const columns = [
    {
      title: "Sector",
      dataIndex: "sector",
    },
    {
      title: "Slug",
      dataIndex: "sectorslug",
    },
    {
      title: "Status",
      render: (_: any, record: Sector) =>
        record.status === 1 ? (
          <span className="text-green-600 font-medium">Active</span>
        ) : (
          <span className="text-red-600 font-medium">Inactive</span>
        ),
    },
    {
      title: "Action",
      render: (_: any, record: Sector) => (
        <div className="flex gap-2">
          <button
            onClick={() => openEditModal(record)}
            className="p-2 text-blue-600"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => {
              setSelectedId(record.sector_id);
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

  /* ------------------------------------
     Render
  ------------------------------------ */
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header flex justify-between items-center mb-4">
            <div>
              <h4 className="text-lg font-semibold">Sector List</h4>
              <h6 className="text-gray-500">Manage your categories</h6>
            </div>
            <button
              onClick={openAddModal}
              className="btn btn-info flex flex-row gap-2"
            >
              <TbCirclePlus size={18} />
              Add Sector
            </button>
          </div>

          <div className="card table-list-card">
            <div className="card-header flex justify-between items-center">
              <FilterBar />
            </div>

            <div className="card-body">
              {loading ? (
                <p className="text-center py-6">Loading...</p>
              ) : (
                <Table
                  columns={columns}
                  dataSource={categories}
                  rowKey="sector_id"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ADD / EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 modal fade">
          <div className="modal-content modal-content-demo bg-white rounded w-full max-w-lg">
            <div className="modal-header flex">
              <h4 className="modal-title">
                {isEditMode ? "Edit Sector" : "Add Sector"}
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
                <label className="col-form-label">Sector:</label>

                <input
                  type="text"
                  placeholder="Sector name"
                  value={formData.sector}
                  onChange={(e) =>
                    setFormData({ ...formData, sector: e.target.value })
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
      )}

      {/* DELETE MODAL */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded p-6 text-center max-w-sm">
            <TbTrash size={32} className="mx-auto text-red-600 mb-2" />
            <h4 className="font-bold mb-2">Delete Sector</h4>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this sector?
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
