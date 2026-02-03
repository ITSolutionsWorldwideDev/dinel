// apps/admin/app/page.tsx
import { getAdminSession } from "@repo/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAdminSession();

  if (!session) redirect("/login");

  redirect("/dashboard");
}
