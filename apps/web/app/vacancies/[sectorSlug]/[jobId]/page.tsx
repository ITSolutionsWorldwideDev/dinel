// /apps/web/app/vacancies/[sectorSlug]/[jobId]/page.tsx

import InfrastructureJobDetail from "@/components/layout/InfrastructureJobDetail";

interface Props {
  params: { sectorSlug: string; jobId: string };
}

async function fetchJob(jobId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/public/jobs/${jobId}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function JobPage({ params }: Props) {
  const job = await fetchJob(params.jobId);
  if (!job) return <p>Job not found</p>;

  return <InfrastructureJobDetail job={job} />;
}
