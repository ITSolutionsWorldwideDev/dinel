// apps/admin/lib/carerix/carerix-auth.ts

export async function getCarerixToken(): Promise<string> {
    
  let cachedToken: string | null = null;
  let tokenExpiry: number | null = null;

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
  tokenExpiry = Date.now() + (data.expires_in - 60) * 1000; // refresh 1 min early

  return cachedToken!;
}
