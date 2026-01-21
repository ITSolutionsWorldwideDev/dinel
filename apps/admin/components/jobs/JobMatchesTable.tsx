// apps/admin/components/jobs/JobMatchesTable.tsx
"use client";

import { useRouter } from "next/navigation";
import Table from "@/core/common/pagination/datatable";
import MatchScore from "../matching/MatchScore";
import MatchBreakdown from "../matching/MatchBreakdown";

type Match = {
  candidate_id: string;
  full_name: string;
  email: string;
  score: number;
  breakdown: Record<string, number>;
};

export default function JobMatchesTable({
  matches,
}: {
  matches: Match[];
}) {
  const router = useRouter();
   if (!matches.length) {
    return (
      <p className="text-center text-gray-500 py-6">
        No matches found
      </p>
    );
  }

  const columns = [
    {
      title: "Candidate",
      render: (_: any, r: Match) => (
        <button
          onClick={() =>
            router.push(`/candidates/${r.candidate_id}`)
          }
          className="text-blue-600 font-medium hover:underline"
        >
          {r.full_name}
        </button>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Match Score",
      render: (_: any, r: Match) => (
        <MatchScore score={r.score} />
      ),
    },
    {
      title: "Why matched?",
      render: (_: any, r: Match) => (
        <MatchBreakdown breakdown={r.breakdown} />
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={matches}
      rowKey="candidate_id"
    />
  );
}
