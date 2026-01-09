// apps/admin/components/jobs/CreateJobClient.tsx
"use client";

import { useRouter } from "next/navigation";
import JobForm from "./JobForm";

export default function CreateJobClient() {
  const router = useRouter();

  const submit = async (data: any) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to create job");
    }

    router.push("/jobs");
  };

  return (
    <JobForm
      mode="create"
      initialData={{
        title: "",
        description: "",
        location: "",
        employment_type: "FULL_TIME",
        workplace_type: "ONSITE",
        department: "",
        experience_level: "MID",
        visibility: "PUBLIC",
        status: "DRAFT",
      }}
      onSubmit={submit}
    />
  );
}
