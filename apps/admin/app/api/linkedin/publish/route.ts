// apps/admin/app/api/linkedin/publish/route.ts
import { NextRequest, NextResponse } from "next/server";
import { pool } from "@acme/db";

export async function GET(req: NextRequest) {
  const jobId = Number(req.nextUrl.searchParams.get("jobId"));

  const { rows } = await pool.query(
    `
    SELECT * FROM job_integrations
    WHERE provider = 'LINKEDIN'
    ORDER BY created_at DESC
    LIMIT 1
    `
  );

  if (!rows.length) {
    // Not connected → redirect to auth
    const authUrl = `/api/linkedin/auth`;
    return NextResponse.json({ authUrl }, { status: 401 });
  }

  const token = rows[0].access_token;

  // Fetch job
  const jobRes = await pool.query(
    "SELECT * FROM jobs WHERE id = $1",
    [jobId]
  );

  const job = jobRes.rows[0];

  // Publish as LinkedIn post (UGC API example)
  const publishRes = await fetch(
    "https://api.linkedin.com/v2/ugcPosts",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: `urn:li:person:${process.env.LINKEDIN_PERSON_URN}`,
        lifecycleState: "PUBLISHED",
        specificContent: {
          "com.linkedin.ugc.ShareContent": {
            shareCommentary: {
              text: `${job.title}\n\n${job.description}`,
            },
            shareMediaCategory: "NONE",
          },
        },
        visibility: {
          "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
        },
      }),
    }
  );

  const result = await publishRes.json();

  await pool.query(
    `
    UPDATE job_integrations
    SET status = 'PUBLISHED', external_id = $1
    WHERE provider = 'LINKEDIN'
    `,
    [result.id]
  );

  return NextResponse.json({ success: true });
}
