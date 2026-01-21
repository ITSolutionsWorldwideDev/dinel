// apps/admin/app/(admin)/jobs/[id]/matches/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import JobMatchesTable from "@/components/jobs/JobMatchesTable";

export type Match = {
  id: string;
  full_name: string;
  email: string;
  location: string;
  source: string;
  score: number;
  breakdown: {
    skills?: number;
    experience?: number;
    location?: number;
    education?: number;
  };
};

export default function JobMatchesPage() {
  const { id } = useParams();
  const router = useRouter();

  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchMatches() {
    setLoading(true);
    const res = await fetch(`/api/jobs/${id}/matches`);
    const data = await res.json();
    setMatches(data.items || []);
    setLoading(false);
  }

  async function recalculate() {
    await fetch(`/api/jobs/${id}/match`, { method: "POST" });
    fetchMatches();
  }

  useEffect(() => {
    fetchMatches();
  }, [id]);

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header flex justify-between">
          <div>
            <h4 className="text-lg font-semibold">Matched Candidates</h4>
            <p className="text-gray-500">
              Ranked candidates for this job
            </p>
          </div>

          <button
            onClick={recalculate}
            className="btn btn-primary"
          >
            Recalculate Matches
          </button>
        </div>

        <div className="card">
          <div className="card-body">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="w-full text-sm border">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2">Candidate</th>
                    <th>Match %</th>
                    <th>Breakdown</th>
                    <th>Source</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {matches.map((m) => (
                    <tr key={m.id} className="border-t">
                      <td className="p-2">
                        <div className="font-medium">
                          {m.full_name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {m.email}
                        </div>
                      </td>

                      <td className="font-bold text-green-600">
                        {m.score}%
                      </td>

                      <td>
                        <div className="flex gap-1 flex-wrap">
                          {Object.entries(m.breakdown || {}).map(
                            ([k, v]) => (
                              <span
                                key={k}
                                className="px-2 py-1 bg-gray-100 rounded text-xs"
                              >
                                {k}: {v}
                              </span>
                            )
                          )}
                        </div>
                      </td>

                      <td>
                        <span className="px-2 py-1 bg-blue-100 rounded text-xs">
                          {m.source}
                        </span>
                      </td>

                      <td>
                        <button
                          onClick={() =>
                            router.push(`/candidates/${m.id}`)
                          }
                          className="text-blue-600 text-sm"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
