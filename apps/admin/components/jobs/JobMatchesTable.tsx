// apps/admin/components/jobs/JobMatchesTable.tsx
"use client";

import { useRouter } from "next/navigation";
// import Table from "@/core/common/pagination/datatable";
import MatchScore from "@/components/matching/MatchScore";
import MatchBreakdown from "@/components/matching/MatchBreakdown";

type Match = {
  id: string;
  full_name: string;
  email: string;
  source: string;
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

  return (
    <table className="w-full text-sm border rounded">
      <thead className="bg-gray-50 text-left">
        <tr>
          <th className="p-3">Candidate</th>
          <th className="p-3">Match</th>
          <th className="p-3">Breakdown</th>
          <th className="p-3">Source</th>
          <th className="p-3"></th>
        </tr>
      </thead>

      <tbody>
        {matches.map((m) => (
          <tr key={m.id} className="border-t hover:bg-gray-50">
            {/* Candidate */}
            <td className="p-3">
              <div className="font-medium">{m.full_name}</div>
              <div className="text-xs text-gray-500">
                {m.email}
              </div>
            </td>

            {/* Match score */}
            <td className="p-3">
              <MatchScore score={m.score} />
            </td>

            {/* Breakdown */}
            <td className="p-3">
              <MatchBreakdown breakdown={m.breakdown} />
            </td>

            {/* Source */}
            <td className="p-3">
              <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-700">
                {m.source}
              </span>
            </td>

            {/* Action */}
            <td className="p-3">
              <button
                onClick={() =>
                  router.push(`/candidates/${m.id}`)
                }
                className="text-blue-600 text-sm hover:underline"
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    );

  /* const columns = [
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
  ); */
}
