// apps/admin/lib/cv/findDuplicate.ts
import { pool } from "@acme/db";

export async function findDuplicateCandidate(
  tenantId: string,
  email?: string | null,
  phone?: string | null,
  cvHash?: string | null
) {
  const result = await pool.query(
    `
    SELECT *
    FROM candidates
    WHERE tenant_id = $1
      AND (
        email = COALESCE($2, email)
        OR phone = COALESCE($3, phone)
        OR cv_hash = COALESCE($4, cv_hash)
      )
    LIMIT 1
    `,
    [
      tenantId,
      email ?? null,
      phone ?? null,
      cvHash ?? null
    ]
  );

  return result.rows[0] ?? null;
}