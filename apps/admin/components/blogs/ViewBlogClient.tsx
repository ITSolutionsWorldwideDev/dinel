// apps/admin/components/blogs/ViewBlogClient.tsx
"use client";

import { useEffect, useState } from "react";
import { useToast } from "@repo/ui";

import Link from "next/link";
import { Button } from "@repo/ui";

export default function ViewBlogClient({ blogId }: { blogId: number }) {
  const { showToast } = useToast();

  const [blog, setblogData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    status: "",
    created_at: "",
    published_at: "",
    featured_image_url: "",
    meta_title: "",
    meta_description: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs?id=${blogId}`);
        const blog = await res.json();

        setblogData({
          title: blog.title,
          slug: blog.slug,
          excerpt: blog.excerpt,
          content: blog.content,
          status: blog.status,
          created_at: blog.created_at,
          published_at: blog.published_at,
          featured_image_url: blog.featured_image_url,
          meta_title: blog.meta_title,
          meta_description: blog.meta_description,
        });
      } catch {
        showToast("error", "Failed to load job");
      }
    };

    fetchBlog();
  }, [blogId]);

  return (
    <>
      <div className="page-wrapper p-4 mb-10">
        <div className="content max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">{blog.title}</h1>
              <p className="text-sm text-gray-500">
                Status:{" "}
                <span className="capitalize font-medium">{blog.status}</span>
              </p>
            </div>

            <div className="flex gap-2">
              <Link href={`/blogs/edit/${blogId}`}>
                <Button>Edit</Button>
              </Link>

              <Link href="/blogs">
                <Button variant="secondary">Back</Button>
              </Link>
            </div>
          </div>

          {/* Featured Image */}
          {blog.featured_image_url && (
            <img
              src={blog.featured_image_url}
              alt={blog.title}
              className="w-full h-90 object-cover rounded"
            />
          )}

          {/* Meta */}
          <div className="text-sm text-gray-500 flex gap-4">
            <span>
              Created: {new Date(blog.created_at).toLocaleDateString()}
            </span>
            {blog.published_at && (
              <span>
                Published: {new Date(blog.published_at).toLocaleDateString()}
              </span>
            )}
          </div>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-lg text-gray-700 italic">{blog.excerpt}</p>
          )}

          {/* Content */}
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </>
  );
}
