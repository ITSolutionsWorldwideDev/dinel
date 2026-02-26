// apps/admin/components/jobs/EditJobClient.tsx

"use client";

import { useRouter } from "next/navigation";
import JobForm from "./JobForm";
import { useEffect, useState } from "react";
import { useToast } from "@repo/ui";

export default function EditJobClient({ jobId }: { jobId: number }) {
  const router = useRouter();
  const { showToast } = useToast();

  const [jobData, setJobData] = useState<any>({
    job_id: jobId,
    title: "",
    description: "",
    location: "",
    employment_type: "FULL_TIME",
    workplace_type: "ONSITE",
    department: "",
    experience_level: "MID",
    experience: "less_than_6_months",
    education: "secondary_education",
    visibility: "PUBLIC",
    status: "DRAFT",
    sector_id: "",
    discipline_id: "",
    work_city: "",
    work_full_address: "",
    work_postal_code: "",
    work_street: "",
    country_node: "",
    vacancy_information: "",
    hours_per_week: 0,
    deadline: "",
    closed_at: "",
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${jobId}`);
        if (!res.ok) throw new Error("Failed to fetch job");

        const job = await res.json();

        setJobData({
          job_id: jobId,
          title: job.title || "",
          description: job.description || "",
          location: job.location || "",
          employment_type: job.employment_type || "FULL_TIME",
          workplace_type: job.workplace_type || "ONSITE",
          department: job.department || "",
          experience_level: job.experience_level || "MID",
          experience: job.experience || "less_than_6_months",
          education: job.education || "secondary_education",
          visibility: job.visibility || "PUBLIC",
          status: job.status || "DRAFT",
          sector_id: job.sector_id || "",
          discipline_id: job.discipline_id || "",
          work_city: job.work_city || "",
          work_full_address: job.work_full_address || "",
          work_postal_code: job.work_postal_code || "",
          work_street: job.work_street || "",
          country_node: job.country_node || "",
          vacancy_information: job.vacancy_information || "",
          hours_per_week: job.hours_per_week || 0,
          deadline: job.deadline ? job.deadline.split("T")[0] : "",
          closed_at: job.closed_at ? job.closed_at.split("T")[0] : "",
        });
      } catch (err) {
        console.error(err);
        showToast("error", "Failed to load job");
      }
    };

    fetchJob();
  }, [jobId, showToast]);

  const submit = async (data: any) => {
    try {
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

      showToast("success", "Job updated successfully");
      router.push("/jobs");
    } catch (err) {
      console.error(err);
      showToast("error", "Failed to update job");
    }
  };

  // Show loading while jobData is empty
  if (!jobData.title) return <p>Loading...</p>;

  return (
    <JobForm
      mode="edit"
      initialData={jobData}
      onSubmit={submit}
    />
  );
}


/* "use client";

import { useRouter } from "next/navigation";
import JobForm from "./JobForm";
import { useEffect, useMemo, useState } from "react";
import { useToast } from "@repo/ui";

export default function EditJobClient({ jobId }: { jobId: number }) {
  const router = useRouter();
  const { showToast } = useToast();

  const [jobData, setJobData] = useState({
    job_id: jobId,
    title: "",
    description: "",
    location: "",
    employment_type: "FULL_TIME",
    workplace_type: "ONSITE",
    department: "",
    experience_level: "MID",    
    experience: "less_than_6_months",
    education: "secondary_education",
    visibility: "PUBLIC",
    status: "DRAFT",
    sector_id: "",
    discipline_id: "",
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${jobId}`);
        const job = await res.json();

        setJobData({
          job_id: jobId,
          title: job.title,
          description: job.description,
          location: job.location,
          employment_type: job.employment_type,
          workplace_type: job.workplace_type,
          department: job.department,
          experience_level: job.experience_level,          
          experience: job.experience,
          education: job.education,
          visibility: job.visibility,
          status: job.status,
          sector_id: job.sector_id,
          discipline_id: job.discipline_id,
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
        job_id: jobData.job_id,
        title: jobData.title,
        description: jobData.description,
        location: jobData.location,
        employment_type: jobData.employment_type,
        workplace_type: jobData.workplace_type,
        department: jobData.department,
        experience_level: jobData.experience_level,
        experience: jobData.experience,
        education: jobData.education,
        visibility: jobData.visibility,
        status: jobData.status,
        sector_id: jobData.sector_id,
        discipline_id: jobData.discipline_id,
      }}
      //   initialData={jobData}
      //   initialData={job}
      onSubmit={submit}
    />
  );
} */
