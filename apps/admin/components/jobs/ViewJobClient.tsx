// apps/admin/components/jobs/ViewJobClient.tsx

"use client";

import { useEffect, useState } from "react";
import { useToast } from "@repo/ui";
import { useRouter } from "next/navigation";

export default function ViewJobClient({ jobId }: { jobId: number }) {
  const { showToast } = useToast();
  const router = useRouter();

  const [jobData, setJobData] = useState<any>({
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

    // extra fields
    company_name: "",
    vacancy_id: "",
    vacancy_no: "",
    vacancy_information: "",
    intro_information: "",
    company_information: "",
    additional_information: "",
    requirements: "",
    work_city: "",
    work_full_address: "",
    work_postal_code: "",
    work_street: "",
    country_node: "",
    hours_per_week: null,
    fte: null,
    min_salary: null,
    max_salary: null,
    offer_information: "",
    deadline: null,
    closed_at: null,
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${jobId}`);
        const job = await res.json();

        setJobData({
          ...jobData,
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

          company_name: job.company_name,
          vacancy_id: job.vacancy_id,
          vacancy_no: job.vacancy_no,
          vacancy_information: job.vacancy_information,
          intro_information: job.intro_information,
          company_information: job.company_information,
          additional_information: job.additional_information,
          requirements: job.requirements,
          work_city: job.work_city,
          work_full_address: job.work_full_address,
          work_postal_code: job.work_postal_code,
          work_street: job.work_street,
          country_node: job.country_node,
          hours_per_week: job.hours_per_week,
          fte: job.fte,
          min_salary: job.min_salary,
          max_salary: job.max_salary,
          offer_information: job.offer_information,
          deadline: job.deadline,
          closed_at: job.closed_at,
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
      const { authUrl } = await res.json();
      window.location.href = authUrl;
      return;
    }
    await res.json();
    alert("Job published to LinkedIn");
  };

  return (
    <>
      <div className="page-header flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold">Job Details</h4>
      </div>

      <div className="card">
        <div className="card-header">View Job</div>
        <div className="card-body space-y-4">
          <div>
            <strong>Title:</strong> {jobData.title}
          </div>
          <div>
            <strong>Company:</strong> {jobData.company_name}
          </div>
          <div>
            <strong>Vacancy ID / No:</strong> {jobData.vacancy_id} /{" "}
            {jobData.vacancy_no}
          </div>
          <div>
            <strong>Department:</strong> {jobData.department}
          </div>
          <div>
            <strong>Location:</strong> {jobData.location}
          </div>
          <div>
            <strong>Work City:</strong> {jobData.work_city}
          </div>
          <div>
            <strong>Address:</strong> {jobData.work_full_address}
          </div>
          <div>
            <strong>Postal Code:</strong> {jobData.work_postal_code}
          </div>
          <div>
            <strong>Street:</strong> {jobData.work_street}
          </div>
          {/* <div><strong>Country:</strong> {jobData.country_node}</div> */}

          <div>
            <strong>Employment Type:</strong> {jobData.employment_type}
          </div>
          <div>
            <strong>Workplace Type:</strong> {jobData.workplace_type}
          </div>
          <div>
            <strong>Experience:</strong> {jobData.experience}
          </div>
          <div>
            <strong>Experience Level:</strong> {jobData.experience_level}
          </div>
          <div>
            <strong>Education:</strong> {jobData.education}
          </div>
          <div>
            <strong>Hours / Week:</strong> {jobData.hours_per_week}
          </div>
          {/* <div><strong>FTE:</strong> {jobData.fte}</div>
          <div><strong>Min / Max Salary:</strong> {jobData.min_salary} / {jobData.max_salary}</div> */}
          {/* <div><strong>Offer Info:</strong> {jobData.offer_information}</div> */}
          <div>
            <strong>Deadline:</strong> {jobData.deadline}
          </div>
          {/* <div>
            <strong>Closed At:</strong> {jobData.closed_at}
          </div> */}
          {/* <div><strong>Vacancy Information:</strong> {jobData.vacancy_information}</div> */}
          <div className="text-gray-600 pt-2">
            <label className="text-md font-semibold">
              <strong>Vacancy Information: </strong>
            </label>
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: jobData.vacancy_information || "",
              }}
            />
          </div>

          <div className="text-gray-600 pt-2">
            <label className="text-md font-semibold">
              <strong>Intro Information: </strong>
            </label>
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: jobData.intro_information || "",
              }}
            />
          </div>

          <div className="text-gray-600 pt-2">
            <label className="text-md font-semibold">
              <strong>Company Information: </strong>
            </label>
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: jobData.company_information || "",
              }}
            />
          </div>

          <div className="text-gray-600 pt-2">
            <label className="text-md font-semibold">
              <strong>Additional Information: </strong>
            </label>
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: jobData.additional_information || "",
              }}
            />
          </div>

          <div className="text-gray-600 pt-2">
            <label className="text-md font-semibold">
              <strong>Requirements: </strong>
            </label>
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: jobData.requirements || "",
              }}
            />
          </div>

          <div className="text-gray-600 pt-2">
            <label className="text-md font-semibold">
              <strong>Offer Information: </strong>
            </label>
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: jobData.offer_information || "",
              }}
            />
          </div>

          <div className="text-gray-600 pt-2">
            <label className="text-md font-semibold">
              <strong>Description: </strong>
            </label>
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: jobData.description || "" }}
            />
          </div>

          <div>
            <strong>Status:</strong> {jobData.status}
          </div>
          <div>
            <strong>Visibility:</strong> {jobData.visibility}
          </div>

          <div className="pt-4 border-t flex space-x-2">
            <button
              type="button"
              onClick={() => router.back()}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => router.push(`/jobs/${jobId}/edit`)}
              className="btn btn-secondary"
            >
              Edit
            </button>
            <button
              onClick={() => publishToLinkedIn(jobId)}
              className="btn btn-primary"
            >
              Publish to LinkedIn
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* "use client";

import { useEffect, useState } from "react";
import { useToast } from "@repo/ui";
import { useRouter } from "next/navigation";

export default function ViewJobClient({ jobId }: { jobId: number }) {
  const { showToast } = useToast();
  const router = useRouter();

  const [jobData, setJobData] = useState({
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
          experience: job.experience,
          education: job.education,
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
          <div className="space-y-4">
            <div className="text-gray-600">
              <label className="text-md font-semibold">
                <strong>Title: </strong>
              </label>
              <span>{jobData.title}</span>
            </div>

            <div className="text-gray-600">
              <label className="text-md font-semibold">
                <strong>Location: </strong>
              </label>
              <span>{jobData.location}</span>
            </div>

            <div className="text-gray-600">
              <label className="text-md font-semibold">
                <strong>Status: </strong>
              </label>
              <span>{jobData.status}</span>
            </div>

            <div className="text-gray-600">
              <label className="text-md font-semibold">
                <strong>Employment: </strong>
              </label>
              <span>{jobData.employment_type}</span>
            </div>

            <div className="text-gray-600">
              <label className="text-md font-semibold">
                <strong>Workplace: </strong>
              </label>
              <span>{jobData.workplace_type}</span>
            </div>

            <div className="text-gray-600">
              <label className="text-md font-semibold">
                <strong>Experience: </strong>
              </label>
              <span>{jobData.experience}</span>
            </div>

            <div className="text-gray-600">
              <label className="text-md font-semibold">
                <strong>Experience Level: </strong>
              </label>
              <span>{jobData.experience_level}</span>
            </div>

            <div className="text-gray-600">
              <label className="text-md font-semibold">
                <strong>Education: </strong>
              </label>
              <span>{jobData.education}</span>
            </div>

            <div className="pt-4 border-t">
              <label className="text-md font-semibold">
                <strong>Description: </strong>
              </label>
              <p className="whitespace-pre-wrap">{jobData.description}</p>
            </div>

            <div className="pt-4 border-t">

              <button
                type="button"
                onClick={() => router.back()}
                className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              >
                Cancel
              </button>
              
              <button
                type="button"
                onClick={() => router.push(`/jobs/${jobId}/edit`)}
                className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              >
                Edit
              </button>

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
 */
