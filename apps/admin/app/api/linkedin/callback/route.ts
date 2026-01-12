// apps/admin/app/api/linkedin/callback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  // Exchange code for token
  const tokenRes = await fetch(
    "https://www.linkedin.com/oauth/v2/accessToken",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.LINKEDIN_REDIRECT_URI!,
        client_id: process.env.LINKEDIN_CLIENT_ID!,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET!,
      }),
    }
  );

  const token = await tokenRes.json();

  // Store token (per admin or company)
  await pool.query(
    `
    INSERT INTO job_integrations (provider, access_token, expires_at, status)
    VALUES ('LINKEDIN', $1, NOW() + INTERVAL '60 days', 'CONNECTED')
    `,
    [token.access_token]
  );

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_APP_URL}/jobs`
  );
}
