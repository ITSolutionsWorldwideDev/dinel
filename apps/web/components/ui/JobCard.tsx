// apps/web/components/ui/JobCard.tsx

import Link from "next/link";
import { MapPin, Briefcase, Clock } from "lucide-react";

interface Props {
  job: any;
}

export default function JobCard({ job }: Props) {
  return (
    <div className="border rounded-lg shadow-sm p-6 hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
      <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {job.location}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase size={14} />
          {job.employment_type}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {job.experience_level}
        </span>
      </div>
      <Link
        href={`/vacancies/${job.sector_slug}/${job.job_id}`}
        className="text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
