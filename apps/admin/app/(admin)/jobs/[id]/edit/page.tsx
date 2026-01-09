// apps/admin/app/(admin)/jobs/[id]/edit/page.tsx

import EditJobClient from "@/components/jobs/EditJobClient";

interface PageProps {
  params: Promise<{ id: number }>;
}

export default async function EditJobPage({ params }: PageProps) {
  const jobId = (await params).id;

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <EditJobClient jobId={jobId} />
        </div>
      </div>
    </>
  );

  //   return <EditJobClient job={job} />;
}
