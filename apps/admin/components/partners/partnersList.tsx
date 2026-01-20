// apps/admin/components/partners/partnersList.tsx
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
type Partner = {
  partner_id: number;
  partner: string;
  site_url: string;
  email: string;
  password_hash: string;
  status: number;
};

export default function PartnersListComponent() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    partner_id: null as number | null,
    partner: "",
    site_url: "",
    email: "",
    password_hash: "",
    status: true,
  });

  /* ------------------------------------
     Fetch Partners
  ------------------------------------ */
  const fetchPartners = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/partner");
      const data = await res.json();
      setPartners(data.items || []);
    } catch (err) {
      showToast("error", "Failed to load partners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  /* ------------------------------------
     Modals
  ------------------------------------ */
  const openAddModal = () => {
    setIsEditMode(false);
    setFormData({
      partner_id: null,
      partner: "",
      site_url: "",
      email: "",
      password_hash: "",
      status: true,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (record: Partner) => {
    setIsEditMode(true);
    setFormData({
      partner_id: record.partner_id,
      partner: record.partner,
      site_url: record.site_url,
      email: record.email,
      password_hash: record.password_hash,
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
        partner: formData.partner,
        site_url: formData.site_url,
        email: formData.email,
        password_hash: formData.password_hash,
        status: formData.status ? 1 : 0,
      };

      const res = await fetch("/api/partner", {
        method: isEditMode ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          isEditMode ? { partner_id: formData.partner_id, ...payload } : payload
        ),
      });

      if (!res.ok) throw new Error();

      showToast("success", isEditMode ? "Partner updated" : "Partner created");

      setIsModalOpen(false);
      fetchPartners();
    } catch (err) {
      console.error("Save failed", err);
      showToast("error", "Failed to save Partner");
    }
  };

  /* ------------------------------------
     Delete
  ------------------------------------ */
  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await fetch(`/api/partner?id=${selectedId}`, {
        method: "DELETE",
      });

      setShowDeleteModal(false);
      setSelectedId(null);
      fetchPartners();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  /* ------------------------------------
     Table Columns
  ------------------------------------ */
  const columns = [
    {
      title: "Partner",
      dataIndex: "partner",
    },
    {
      title: "URL",
      dataIndex: "site_url",
    },
    {
      title: "Email/Username",
      dataIndex: "email",
    },
    {
      title: "Status",
      render: (_: any, record: Partner) =>
        record.status === 1 ? (
          <span className="text-green-600 font-medium">Active</span>
        ) : (
          <span className="text-red-600 font-medium">Inactive</span>
        ),
    },
    {
      title: "Action",
      render: (_: any, record: Partner) => (
        <div className="flex gap-2">
          <button
            onClick={() => openEditModal(record)}
            className="p-2 text-blue-600"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => {
              setSelectedId(record.partner_id);
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
              <h4 className="text-lg font-semibold">Partner List</h4>
              <h6 className="text-gray-500">Manage your partners</h6>
            </div>
            <button
              onClick={openAddModal}
              className="btn btn-info flex flex-row gap-2"
            >
              <TbCirclePlus size={18} />
              Add Partner
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
                  dataSource={partners}
                  rowKey="partner_id"
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
                {isEditMode ? "Edit Partner" : "Add Partner"}
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
                <label className="col-form-label">Partner:</label>

                <input
                  type="text"
                  placeholder="Partner name"
                  value={formData.partner}
                  onChange={(e) =>
                    setFormData({ ...formData, partner: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2 mb-4"
                />
              </div>

              <div className="mb-3">
                <label className="col-form-label">Site Url:</label>

                <input
                  type="text"
                  placeholder="Site Url"
                  value={formData.site_url}
                  onChange={(e) =>
                    setFormData({ ...formData, site_url: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2 mb-4"
                />
              </div>

              <div className="mb-3">
                <label className="col-form-label">
                  Partner Email/Username:
                </label>

                <input
                  type="text"
                  placeholder="Email/Username"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2 mb-4"
                />
              </div>

              <div className="mb-3">
                <label className="col-form-label">Password</label>

                <div className="relative pass-group">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password_hash || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password_hash: e.target.value,
                      })
                    }
                    className="w-full pass-input border  rounded px-3 py-2 mb-4"
                  />
                  <span
                    className={`input-group-text cursor-pointer fa fa-xs toggle-password ${
                      isPasswordVisible ? "fa-eye-slash" : "fa-eye"
                    } text-xs `}
                    onClick={() => setPasswordVisible(!isPasswordVisible)}
                  ></span>
                </div>
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
            <h4 className="font-bold mb-2">Delete Partner</h4>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this partner?
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
