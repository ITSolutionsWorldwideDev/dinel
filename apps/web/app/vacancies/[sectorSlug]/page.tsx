// apps/web/app/vacancies/[sectorSlug]/page.tsx

import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import VacanciesSideBar from "@/components/layout/job-page/VacanciesSideBar";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import JobCard from "@/components/ui/JobCard";
import Link from "next/link";
import UploadResumeCard from "@/components/layout/job-page/UploadResumeCard";

interface Props {
  params: Promise<{ sectorSlug: string }>;
  searchParams: Promise<{
    discipline?: string | string[];
    location?: string | string[];
    search?: string;
    page?: string;
  }>;
}

/* -----------------------------
   Fetch Jobs
------------------------------ */
async function fetchJobs(
  sectorSlug: string,
  resolvedSearchParams:
    | {
        discipline?: string | string[];
        location?: string | string[];
        search?: string;
        page?: string;
      }
    | undefined,
  page: number,
  limit: number,
) {
  const params = new URLSearchParams();

  // -----------------------------
  // Preserve filters safely
  // -----------------------------

  if (resolvedSearchParams?.search) {
    params.set("search", resolvedSearchParams.search);
  }

  if (resolvedSearchParams?.discipline) {
    const disciplines = Array.isArray(resolvedSearchParams.discipline)
      ? resolvedSearchParams.discipline
      : [resolvedSearchParams.discipline];

    disciplines.forEach((d) => params.append("discipline", d));
  }

  if (resolvedSearchParams?.location) {
    const locations = Array.isArray(resolvedSearchParams.location)
      ? resolvedSearchParams.location
      : [resolvedSearchParams.location];

    locations.forEach((l) => params.append("location", l));
  }

  // Required params
  params.set("sector", sectorSlug);
  params.set("page", String(page));
  params.set("limit", String(limit));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/jobs?${params.toString()}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json();
}

/* -----------------------------
   Fetch Filters
------------------------------ */

async function fetchFilters(sectorSlug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/jobs/filters?sector=${sectorSlug}`,
    { cache: "no-store" },
  );

  if (!res.ok) return { sectors: [], disciplines: [], locations: [] };
  return res.json();
}

/* =============================
   PAGE
============================= */
export default async function SectorVacanciesPage({
  params,
  searchParams,
}: Props) {
  const { sectorSlug } = await params;
  const resolvedSearchParams = await searchParams; // ✅ FIX

  const page = Number(resolvedSearchParams?.page || 1);
  const limit = 4;

  const jobsData = await fetchJobs(
    sectorSlug,
    resolvedSearchParams,
    page,
    limit,
  );

  const filters = await fetchFilters(sectorSlug);

  // console.log('filters === ',filters);

  const totalPages = jobsData.totalPages || 1;

  const middleIndex = Math.floor(jobsData.items.length / 2);
  const firstHalf = jobsData.items.slice(0, middleIndex);
  const secondHalf = jobsData.items.slice(middleIndex);

  // Preserve existing filters in pagination links
  const buildPageLink = (pageNumber: number) => {
    const params = new URLSearchParams();

    if (resolvedSearchParams?.search) {
      params.set("search", resolvedSearchParams.search);
    }

    if (resolvedSearchParams?.discipline) {
      const disciplines = Array.isArray(resolvedSearchParams.discipline)
        ? resolvedSearchParams.discipline
        : [resolvedSearchParams.discipline];

      disciplines.forEach((d) => params.append("discipline", d));
    }

    if (resolvedSearchParams?.location) {
      const locations = Array.isArray(resolvedSearchParams.location)
        ? resolvedSearchParams.location
        : [resolvedSearchParams.location];

      locations.forEach((l) => params.append("location", l));
    }

    params.set("page", String(pageNumber));

    return `?${params.toString()}`;
  };

  return (
    <>
      <HeaderWithCenterTextandBgImg
        heading1={sectorSlug.replace("-", " ")}
        heading2="Vacancies"
        image="/db9ab5042ee62e5a443b09a0ef071a0a4a7286c1.jpg"
      />

      <div className="container mx-auto flex gap-10 py-10">
        <VacanciesSideBar
          sectors={filters.sectors}
          disciplines={filters.disciplines}
          locations={filters.locations}
          currentFilters={searchParams}
        />

        <div className="flex-1">
          {jobsData.items.length === 0 ? (
            <p>No jobs found</p>
          ) : (
            <>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
              <div className="flex flex-col  gap-5 ">
                {firstHalf.map((job: any) => (
                  <JobCard
                    key={job.job_id}
                    job={job}
                    sectors={filters.sectors}
                  />
                ))}

                <UploadResumeCard />

                {secondHalf.map((job: any) => (
                  <JobCard
                    key={job.job_id}
                    job={job}
                    sectors={filters.sectors}
                  />
                ))}
              </div>

              {/* Pagination UI */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-10 flex-wrap">
                  {page > 1 && (
                    <Link
                      href={buildPageLink(page - 1)}
                      className="px-4 py-2 border rounded hover:bg-gray-100"
                    >
                      Prev
                    </Link>
                  )}

                  {Array.from({ length: totalPages }, (_, i) => {
                    const pageNumber = i + 1;
                    const isActive = pageNumber === page;

                    return (
                      <Link
                        key={pageNumber}
                        href={buildPageLink(pageNumber)}
                        className={`px-4 py-2 border rounded ${
                          isActive
                            ? "bg-[#FF6B35] text-white border-[#FF6B35]"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {pageNumber}
                      </Link>
                    );
                  })}

                  {page < totalPages && (
                    <Link
                      href={buildPageLink(page + 1)}
                      className="px-4 py-2 border rounded hover:bg-gray-100"
                    >
                      Next
                    </Link>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <DinelGroupBv />
    </>
  );
}

{
  /* 
                {jobsData.items.map((job: any, index: number) => (
                  <JobCard key={job.job_id} job={job} />
                ))} */
}
/* const jobData = [
    {
      id: 1,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/0dffbc652b8f354903ca7e53786e3bfe74ac1e18.jpg",
    },
    {
      id: 2,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 3,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/0dffbc652b8f354903ca7e53786e3bfe74ac1e18.jpg",
    },
    {
      id: 4,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 5,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/0dffbc652b8f354903ca7e53786e3bfe74ac1e18.jpg",
    },
    {
      id: 6,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 7,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 8,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 9,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 10,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 11,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 12,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 13,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 14,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
    {
      id: 15,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 16,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },


    {
      id: 17,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },


    {
      id: 18,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },


    {
      id: 19,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },


    {
      id: 20,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },


    {
      id: 21,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },


    {
      id: 22,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },

    {
      id: 23,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },


    {
      id: 24,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },


    {
      id: 25,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },


    {
      id: 26,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
     {
      id: 27,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
     {
      id: 28,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
     {
      id: 29,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
     {
      id: 30,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
     {
      id: 31,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
     {
      id: 32,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
     {
      id: 33,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
     {
      id: 34,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
     {
      id: 35,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
     {
      id: 36,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
     {
      id: 37,
      title: "Mechanical Construction Lead",
      discipline: "Stay up to date on the jobs you're interested in.",
      sector: "SET UP ALERT",
      location: "I AGREE TO THE TERMS AND CONDITIONS",
      image: "/2d5d6bb46a33c76277dafba5ed9471f0920aa6a8.jpg",
    },
  ]; */

{
  /* <div>
          <Paginations jobData={jobData} />
        </div> */
}
