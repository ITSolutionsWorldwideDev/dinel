// apps\admin\app\(admin)\jobs\create\page.tsx

import CreateJobClient from "@/components/jobs/CreateJobClient";

export default function CreateJobPage() {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <CreateJobClient />;
        </div>
      </div>
    </>
  );
}
