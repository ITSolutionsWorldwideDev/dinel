// apps/admin/components/users/usersList.tsx
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
type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: boolean;
};

export default function UsersListComponent() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    id: null as number | null,
    name: "",
    email: "",
    password: "",
    role: "member",
    status: true,
  });

  /* ------------------------------------
     Fetch Users
  ------------------------------------ */
  const { showToast } = useToast();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data.items || []);
    } catch {
      showToast("error", "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* ------------------------------------
     Modals
  ------------------------------------ */
  const openAddModal = () => {
    setIsEditMode(false);
    setFormData({
      id: null,
      name: "",
      email: "",
      password: "",
      role: "member",
      status: true,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (user: User) => {
    setIsEditMode(true);
    setFormData({
      id: user.id,
      name: user.name ?? "",
      email: user.email ?? "",
      password: "",
      role: user.role ?? "member",
      status: user.status ?? true,
    });
    // setFormData({ ...user, password: "" });
    setIsModalOpen(true);
  };

  /* ------------------------------------
     Create / Update
  ------------------------------------ */
  const handleSubmit = async () => {
    try {
      const method = isEditMode ? "PUT" : "POST";
      // const payload = { ...formData };
      // if (!payload.password && isEditMode) delete payload.password;

      const payload: any = {
        id: formData.id,
        name: formData.name,
        email: formData.email,
        role: formData.role,
        status: formData.status,
      };

      if (formData.password) {
        payload.password = formData.password;
      }

      const res = await fetch("/api/users", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();
      showToast("success", isEditMode ? "User updated" : "User created");
      setIsModalOpen(false);
      fetchUsers();
    } catch {
      showToast("error", "Save failed");
    }
  };

  /* ------------------------------------
     Delete
  ------------------------------------ */
  const handleDelete = async () => {
    if (!selectedId) return;
    try {
      await fetch(`/api/users?id=${selectedId}`, { method: "DELETE" });
      setSelectedId(null);
      fetchUsers();
    } catch {
      showToast("error", "Delete failed");
    }
  };

  /* ------------------------------------
     Table Columns
  ------------------------------------ */
  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" },
    {
      title: "Status",
      render: (_: any, record: User) => (record.status ? "Active" : "Inactive"),
    },
    {
      title: "Action",
      render: (_: any, record: User) => (
        <div className="flex gap-2">
          <button
            onClick={() => openEditModal(record)}
            className="text-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => setSelectedId(record.id)}
            className="text-red-600"
          >
            Delete
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
              <h4 className="text-lg font-semibold">users List</h4>
              <h6 className="text-gray-500">Manage your Users</h6>
            </div>
            <button
              onClick={openAddModal}
              className="btn btn-info flex flex-row gap-2"
            >
              <TbCirclePlus size={18} />
              Add users
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
                <Table columns={columns} dataSource={users} rowKey="id" />
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
                {isEditMode ? "Edit users" : "Add users"}
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
                <label className="col-form-label">Name:</label>

                <input
                  type="text"
                  placeholder="user name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2 mb-4"
                />
              </div>

              <div className="mb-3">
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-3">
                <label className="block mb-1 font-medium">
                  Password {isEditMode && "(leave blank to keep unchanged)"}
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-3">
                <label className="block mb-1 font-medium">Role</label>
                <select
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="member">Member</option>
                </select>
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
            <h4 className="font-bold mb-2">Delete users</h4>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this users?
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
