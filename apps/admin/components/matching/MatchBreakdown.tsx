// apps/admin/components/matching/MatchBreakdown.tsx
export default function MatchBreakdown({
  breakdown,
}: {
  breakdown: Record<string, number> | null;
}) {
  if (!breakdown || Object.keys(breakdown).length === 0) {
    return <span className="text-xs text-gray-400">—</span>;
  }
  return (
    <div className="flex flex-wrap gap-1 space-y-1 text-xs">
      {Object.entries(breakdown).map(([key, value]) => (
        <div key={key} className="flex justify-between gap-2  px-2 py-1 rounded text-xs">
          <span className="capitalize text-gray-600">
            {key.replace("_", " ")}
          </span>
          <span className="font-medium">{value}</span>
        </div>
      ))}
    </div>
  );
}
