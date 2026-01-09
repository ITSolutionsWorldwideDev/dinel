// apps/admin/components/jobs/ViewJobClient.tsx
"use client";

import { useEffect, useState } from "react";
import { useToast } from "@repo/ui";

export default function ViewJobClient({ jobId }: { jobId: number }) {
  const { showToast } = useToast();

  const [jobData, setJobData] = useState({
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

  const publishToLinkedIn = async (jobId: number) => {
    const res = await fetch(`/api/linkedin/publish?jobId=${jobId}`);

    if (res.status === 401) {
      // Not authenticated with LinkedIn → redirect
      const { authUrl } = await res.json();
      window.location.href = authUrl;
      return;
    }

    const data = await res.json();
    alert("Job published to LinkedIn");
  };

  return (
    <>
      <div className="page-header flex justify-between items-center mb-4">
        <div>
          <h4 className="text-lg font-semibold">Jobs</h4>
        </div>
      </div>
      <div className="card">
        <div className="card-header flex justify-between items-center">
          View Job
        </div>

        <div className="card-body">
          <div className="max-w-3xl space-y-4">
            <div className="text-gray-600">
              <label className="text-xl font-semibold">
                <strong>Title: </strong>
              </label>
              <span>{jobData.title}</span>
            </div>

            <div className="text-gray-600">
              <label className="text-xl font-semibold">
                <strong>Location: </strong>
              </label>
              <span>{jobData.location}</span>
            </div>

            <div className="text-gray-600">
              <label className="text-xl font-semibold">
                <strong>Status: </strong>
              </label>
              <span>{jobData.status}</span>
            </div>

            <div className="text-gray-600">
              <label className="text-xl font-semibold">
                <strong>Employment: </strong>
              </label>
              <span>{jobData.employment_type}</span>
            </div>

            <div className="text-gray-600">
              <label className="text-xl font-semibold">
                <strong>Workplace: </strong>
              </label>
              <span>{jobData.workplace_type}</span>
            </div>

            <div className="text-gray-600">
              <label className="text-xl font-semibold">
                <strong>Experience: </strong>
              </label>
              <span>{jobData.experience_level}</span>
            </div>

            <div className="pt-4 border-t">
              <label className="text-xl font-semibold">
                <strong>Description: </strong>
              </label>
              <p className="whitespace-pre-wrap">{jobData.description}</p>
            </div>

            <div className="pt-4 border-t">
              <button
                onClick={() => publishToLinkedIn(jobId)}
                className="px-4 py-2 bg-blue-700 text-white rounded"
              >
                Publish to LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
