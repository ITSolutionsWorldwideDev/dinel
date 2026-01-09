// apps/admin/components/jobs/EditJobClient.tsx

"use client";

import { useRouter } from "next/navigation";
import JobForm from "./JobForm";
import { useEffect, useMemo, useState } from "react";
import { useToast } from "@repo/ui";

export default function EditJobClient({ jobId }: { jobId: number }) {
  const router = useRouter();
  const { showToast } = useToast();

  const [jobData, setJobData] = useState({
    id: jobId,
    title: "",
    description: "",
    location: "",
    employment_type: "FULL_TIME",
    workplace_type: "ONSITE",
    department: "",
    experience_level: "MID",
    visibility: "PUBLIC",
    status: "DRAFT",
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${jobId}`);
        const job = await res.json();

        setJobData({
          id: jobId,
          title: job.title,
          description: job.description,
          location: job.location,
          employment_type: job.employment_type,
          workplace_type: job.workplace_type,
          department: job.department,
          experience_level: job.experience_level,
          visibility: job.visibility,
          status: job.status,
        });
      } catch {
        showToast("error", "Failed to load job");
      }
    };

    fetchJob();
  }, [jobId]);

  const submit = async (data: any) => {
    const res = await fetch(`/api/jobs/${jobId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to update job");
    }

    router.push("/jobs");
  };

  if (!jobData.title) return <p>Loading...</p>;

  return (
    <JobForm
      mode="edit"
      initialData={{
        id: jobData.id,
        title: jobData.title,
        description: jobData.description,
        location: jobData.location,
        employment_type: jobData.employment_type,
        workplace_type: jobData.workplace_type,
        department: jobData.department,
        experience_level: jobData.experience_level,
        visibility: jobData.visibility,
        status: jobData.status,
      }}
      //   initialData={jobData}
      //   initialData={job}
      onSubmit={submit}
    />
  );
}
