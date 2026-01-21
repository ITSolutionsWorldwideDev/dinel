// apps/admin/lib/extension-auth.ts
import jwt from "jsonwebtoken";

export function issueExtensionToken(userId: string, tenantId: string) {
  if (!process.env.EXTENSION_JWT_SECRET) {
    throw new Error("Missing EXTENSION_JWT_SECRET");
  }

  console.log("extension-auth loaded");

  return jwt.sign(
    {
      sub: userId,
      tenantId,
    },
    process.env.EXTENSION_JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}
