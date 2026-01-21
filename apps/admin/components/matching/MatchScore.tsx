// apps/admin/components/matching/MatchScore.tsx
export default function MatchScore({ score }: { score: number }) {
  const color =
    score >= 80
      ? "bg-green-500"
      : score >= 60
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="w-32">
      <div className="flex justify-between text-xs mb-1">
        <span>Score</span>
        <span className="font-medium">{score}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded">
        <div
          className={`h-2 rounded ${color}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
