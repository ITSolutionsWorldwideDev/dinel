// apps/web/lib/carerix/carerix-client.ts

import { getCarerixToken } from "./carerix-auth";

export async function carerixGraphQL<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const token = await getCarerixToken();

  const response = await fetch(process.env.CARERIX_GRAPHQL_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: "no-store",
  });

  const json = await response.json();

  if (json.errors) {
    console.error("FULL CARERIX ERROR:");
    console.error(JSON.stringify(json, null, 2));
    throw new Error(json.errors[0]?.message || "Carerix GraphQL error");
  }

  return json.data as T;
}
