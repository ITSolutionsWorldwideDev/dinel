// apps/admin/app/(admin)/blogs/[id]/view/page.tsx

import ViewBlogClient from "@/components/blogs/ViewBlogClient";

interface PageProps {
  params: Promise<{ id: number }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <ViewBlogClient blogId={id} />;
}
