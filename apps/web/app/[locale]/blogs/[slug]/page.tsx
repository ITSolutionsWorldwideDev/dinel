// apps/web/app/blogs/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import BlogsHeader from "@/components/ui/BlogsHeader";

interface Blog {
  title: string;
  excerpt?: string;
  content: string;
  featured_image_url?: string;
  published_at: string;
}

async function getBlog(slug: string): Promise<Blog | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/blogs?slug=${encodeURIComponent(
      slug
    )}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) notFound();

  return (
    <>
      <BlogsHeader />
      <article className="bg-white">

        {blog.featured_image_url && (
          <div className="relative h-105 container mx-auto mt-5">
            <Image
              src={blog.featured_image_url}
              alt={blog.title}
              fill
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 py-12 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>

          <p className="text-sm text-gray-500">
            Published on {new Date(blog.published_at).toLocaleDateString()}
          </p>

          {blog.excerpt && (
            <p className="text-lg text-gray-700 italic">{blog.excerpt}</p>
          )}

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </article>
      <DinelGroupBv />
    </>
  );
}
