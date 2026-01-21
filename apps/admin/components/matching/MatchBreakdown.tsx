// apps/admin/components/matching/MatchBreakdown.tsx
export default function MatchBreakdown({
  breakdown,
}: {
  breakdown: Record<string, number>;
}) {
  return (
    <div className="space-y-1 text-xs">
      {Object.entries(breakdown).map(([key, value]) => (
        <div
          key={key}
          className="flex justify-between gap-2"
        >
          <span className="capitalize text-gray-600">
            {key.replace("_", " ")}
          </span>
          <span className="font-medium">{value}</span>
        </div>
      ))}
    </div>
  );
}
