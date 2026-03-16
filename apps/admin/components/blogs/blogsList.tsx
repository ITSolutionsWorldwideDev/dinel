// apps/admin/components/blogs/blogsList.tsx
"use client";

import { useEffect, useState } from "react";
import { TbCirclePlus, TbTrash } from "react-icons/tb";
import FilterBar from "./FilterBar";
import { useToast } from "@repo/ui";
import Link from "next/link";
import BlogCard from "./BlogCard";

/* ------------------------------------
   Types
------------------------------------ */
type Blog = {
  blog_id: number;
  title: string;
  slug: string;
  excerpt: string;
  status: "draft" | "published";
  featured_image_url?: string;
  created_at: string;
  author_name?: string;
};

export default function BlogsListComponent() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [sort, setSort] = useState<string | null>(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    blog_id: null as number | null,
    name: "",
    status: true,
  });

  /* ------------------------------------
     Fetch Blogs
  ------------------------------------ */
  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      if (search) params.append("search", search);
      if (sort) params.append("sort", sort);

      const res = await fetch(`/api/blogs?${params.toString()}`);
      const data = await res.json();

      let items = data.items || [];

      // frontend status filter
      if (status) {
        items = items.filter((b: Blog) =>
          status === "Published"
            ? b.status === "published"
            : b.status === "draft",
        );
      }

      setBlogs(items);
    } catch (err) {
      console.error("Failed to load blogs", err);
      showToast("error", "Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [search, status, sort]);

  /* ------------------------------------
     Delete
  ------------------------------------ */
  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await fetch(`/api/blogs?id=${selectedId}`, {
        method: "DELETE",
      });

      setShowDeleteModal(false);
      setSelectedId(null);
      fetchBlogs();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  /* ------------------------------------
     Render
  ------------------------------------ */
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header flex justify-between items-center mb-4">
            <div>
              <h4 className="text-lg font-semibold">Blog List</h4>
              <h6 className="text-gray-500">Manage your blogs</h6>
            </div>
            {/* <Link
              href="/blogs/create"
              className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded  hover:bg-blue-700"
            >
              <TbCirclePlus size={18} />
              Add Blog
            </Link> */}
            <Link
              href="/blogs/create"
              className="btn btn-info flex flex-row gap-2"
            >
              <TbCirclePlus size={18} />
              Add Blog
            </Link>
          </div>
          <div className="card">
            <div className="card-header flex justify-between items-center">
              <FilterBar
                search={search}
                setSearch={setSearch}
                setStatus={setStatus}
                setSort={setSort}
              />
            </div>
            <div className="card-body p-3"></div>
          </div>

          {loading ? (
            <div className="card">
              <div className="card-body p-3">
                <p className="text-center py-6">Loading...</p>
              </div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="card">
              <div className="card-body p-3">
                <p className="text-center py-10 text-gray-500">
                  No blogs found
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog.blog_id}
                  blog={blog}
                  onDelete={(id) => {
                    setSelectedId(id);
                    setShowDeleteModal(true);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* DELETE MODAL */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded p-6 text-center max-w-sm">
            <TbTrash size={32} className="mx-auto text-red-600 mb-2" />
            <h4 className="font-bold mb-2">Delete Blog</h4>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this blog?
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="btn btn-danger cursor-pointer"
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
