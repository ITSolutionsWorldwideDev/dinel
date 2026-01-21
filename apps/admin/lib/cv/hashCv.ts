// apps/admin/lib/cv/hashCv.ts
import crypto from "crypto";

export function hashCv(text: string) {
  return crypto
    .createHash("sha256")
    .update(text.trim().toLowerCase())
    .digest("hex");
}
