// apps/admin/components/media/FeaturedImageUpload.tsx
"use client";

import { useState } from "react";
import MediaPickerModal from "./MediaPickerModal";
import { Button } from "@repo/ui";

export default function FeaturedImagePicker({
  imageUrl,
  onChange,
}: {
  imageUrl?: string;
  onChange: (mediaId: number, url: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2">
      {imageUrl && (
        <img
          src={imageUrl}
          className="h-40 w-full object-cover rounded"
          alt="Featured"
        />
      )}

      <Button onClick={() => setOpen(true)}>
        {imageUrl ? "Change Image" : "Select Image"}
      </Button>

      <MediaPickerModal
        open={open}
        onClose={() => setOpen(false)}
        onSelect={(media) => onChange(media.media_id, media.file_url)}
      />
    </div>
  );
}

/* "use client";

import { UploadButton } from "@uploadthing/react";
import type { MediaRouter } from "@/app/api/uploadthing/core";
import { useToast } from "@repo/ui";

export default function FeaturedImageUpload({
  onUpload,
}: {
  onUpload: (mediaId: number, url: string) => void;
}) {
  const { showToast } = useToast();
  return (
    <UploadButton<MediaRouter, "imageUploader">
      endpoint="imageUploader"
      className="rounded border border-dashed border-gray-400 px-6 py-3 hover:border-primary "
      onClientUploadComplete={(res) => {
        const file = res?.[0];
        if (file) {
          onUpload(file.serverData.mediaId, file.url);
          showToast("success", "Upload complete");
        }
      }}
      onUploadError={(err) => {
        showToast("error", err.message);
      }}
    />
  );
} */
