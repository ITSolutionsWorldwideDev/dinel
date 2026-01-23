// apps/web/components/common/Pagination.tsx

import Link from "next/link";

interface Props {
  page: number;
  totalPages: number;
  basePath: string;
  query?: Record<string, string | number | undefined>;
}

export default function Pagination({
  page,
  totalPages,
  basePath,
  query = {},
}: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-12">
      {Array.from({ length: totalPages }).map((_, i) => {
        const pageNum = i + 1;

        const params = new URLSearchParams({
          ...Object.fromEntries(
            Object.entries(query).filter(([, v]) => v !== undefined)
          ),
          page: pageNum.toString(),
        });

        return (
          <Link
            key={pageNum}
            href={`${basePath}?${params.toString()}`}
            className={`px-4 py-2 rounded-md border text-sm font-medium ${
              page === pageNum
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {pageNum}
          </Link>
        );
      })}
    </div>
  );
}
