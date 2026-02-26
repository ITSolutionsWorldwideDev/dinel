// apps/web/lib/carerix/carerix-auth.ts

export let cachedToken: string | null = null;
export let tokenExpiry: number | null = null;

export async function getCarerixToken(): Promise<string> {
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  const response = await fetch(process.env.CARERIX_TOKEN_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.CARERIX_CLIENT_ID!,
      client_secret: process.env.CARERIX_CLIENT_SECRET!,
      scope: process.env.CARERIX_SCOPE!,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Carerix token");
  }

  const data = await response.json();

  cachedToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;

  return cachedToken!;
}
