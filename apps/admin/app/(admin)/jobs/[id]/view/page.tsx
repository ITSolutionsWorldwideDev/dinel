// apps/admin/app/(admin)/jobs/[id]/view/page.tsx

import ViewJobClient from "@/components/jobs/ViewJobClient";

interface PageProps {
  params: Promise<{ id: number }>;
}

export default async function ViewJobPage({ params }: PageProps) {
  const jobId = (await params).id;

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <ViewJobClient jobId={jobId} />
        </div>
      </div>
    </>
  );
}
