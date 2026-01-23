// apps/web/app/blogs/BlogsPage.tsx

import BlogCards from "@/components/layout/blogs/BlogCard";
import SearchBar from "@/components/layout/blogs/SearchBar";
import AirticleCard from "@/components/layout/blogs/AirticleCard";

import Pagination from "@/components/common/Pagination";

interface Props {
  searchParams: {
    page?: string;
    search?: string;
    category?: string;
  };
}

async function getBlogs(params: {
  page: number;
  search?: string;
  category?: string;
}) {
  const qs = new URLSearchParams();

  qs.set("page", params.page.toString());
  qs.set("limit", "9");

  if (params.search) qs.set("search", params.search);
  if (params.category) qs.set("category", params.category);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/blogs?${qs.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/categories`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export default async function BlogsPage({ searchParams }: Props) {
  const page = Number(searchParams.page || 1);

  const [blogs, categories] = await Promise.all([
    getBlogs({
      page,
      search: searchParams.search,
      category: searchParams.category,
    }),
    getCategories(),
  ]);

  return (
    <>
      <SearchBar categories={categories} />
      <AirticleCard />
      <BlogCards blogs={blogs.items} />
      <Pagination
        page={blogs.page}
        totalPages={blogs.totalPages}
        basePath="/blogs"
        query={{
          search: searchParams.search,
          category: searchParams.category,
        }}
      />
    </>
  );
}
