// apps/admin/components/media/MediaPickerModal.tsx
"use client";

import { useEffect, useState } from "react";
import { UploadButton } from "@uploadthing/react";
import type { MediaRouter } from "@/app/api/uploadthing/core";
import { Button } from "@repo/ui";

interface MediaItem {
  media_id: number;
  file_url: string;
  file_name: string;
  file_type: string;
}

export default function MediaPickerModal({
  open,
  onClose,
  onSelect,
}: {
  open: boolean;
  onClose: () => void;
  onSelect: (media: MediaItem) => void;
}) {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMedia = async () => {
    setLoading(true);
    const res = await fetch("/api/media");
    const data = await res.json();
    setMedia(data);
    setLoading(false);
  };

  useEffect(() => {
    if (open) fetchMedia();
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-1/2 items-center max-w-4xl p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Select Media</h3>
          <button onClick={onClose} className="text-gray-500">
            ✕
          </button>
        </div>

        {/* Upload */}
        <div className="mb-4">
          <UploadButton<MediaRouter, "imageUploader">
            endpoint="imageUploader"
            onClientUploadComplete={() => fetchMedia()}
          />
        </div>

        {/* Grid */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[60vh] overflow-auto">
            {media.map((item) => (
              <button
                key={item.media_id}
                onClick={() => {
                  onSelect(item);
                  onClose();
                }}
                className="border rounded hover:ring-2 ring-primary"
              >
                <img
                  src={item.file_url}
                  alt={item.file_name}
                  className="aspect-square object-cover rounded"
                />
              </button>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-4 text-right">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
