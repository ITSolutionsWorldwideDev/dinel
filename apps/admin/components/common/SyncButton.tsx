// components/common/SyncButton.tsx
"use client";

import { useState } from "react";
import { RefreshCw } from "react-feather";
import { useToast } from "@repo/ui";

export default function SyncButton({
  label,
  endpoint,
  onDone,
}: {
  label: string;
  endpoint: string;
  onDone?: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  async function sync() {
    setLoading(true);
    try {
      const res = await fetch(endpoint, { method: "POST" });
      const data = await res.json();

      if (!res.ok) throw new Error();

      showToast(
        "success",
        `${label} synced (${data.created} new, ${data.updated} updated)`
      );

      onDone?.();
    } catch (e) {
      showToast("error", `Failed to sync ${label}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={sync}
      disabled={loading}
      className="btn btn-outline flex gap-2 items-center"
    >
      <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
      {loading ? "Syncing..." : `Sync ${label}`}
    </button>
  );
}
