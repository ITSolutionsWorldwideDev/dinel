// apps/admin/lib/tenant.ts
import { runQuery } from "@acme/db";
import { pool } from "@acme/db";

export async function getCurrentTenantByUserUuid(userUuid: string) {
  const existing = await pool.query(
    `
    SELECT t.*
    FROM tenants t
    JOIN user_tenants ut ON ut.tenant_id = t.id
    WHERE ut.user_uuid = $1
    LIMIT 1
    `,
    [userUuid]
  );

  if (existing.rows.length) {
    return existing.rows[0];
  }

  // Create default tenant
  const tenantRes = await pool.query(
    `INSERT INTO tenants (name,slug) VALUES ($1,$2) RETURNING *`,
    ["Dinel","dinel"]
  );

  const tenant = tenantRes.rows[0];

  await pool.query(
    `
    INSERT INTO user_tenants (user_uuid, tenant_id, role)
    VALUES ($1, $2, 'owner')
    `,
    [userUuid, tenant.id]
  );

  return tenant;
}


/* export async function getCurrentTenantByUserUuid(userUuid: string) {
  const result = await runQuery(
    `
    SELECT t.id, t.name
    FROM tenants t
    JOIN user_tenants ut ON ut.tenant_id = t.id
    WHERE ut.user_uuid = $1
    LIMIT 1
    `,
    [userUuid]
  );

  return result.rows[0] ?? null;
} */

export async function getCurrentTenantByUser(userId: string) {
  const result = await runQuery(
    `
    SELECT t.id, t.name
    FROM tenants t
    JOIN user_tenants ut ON ut.tenant_id = t.id
    WHERE ut.user_uuid = $1
    LIMIT 1
    `,
    [userId]
  );

  return result.rows[0] || null;
}
