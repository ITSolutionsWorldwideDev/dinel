// apps/admin/app/(admin)/candidates/page.tsx
import CandidatesListComponent from "@/components/candidates/candidatesList";
import { getServerSession } from "next-auth";
import { authOptions } from "@repo/auth";
import { getCurrentTenantByUserUuid } from "@/lib/tenant";
import { redirect } from "next/navigation";

export default async function CandidatesList() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.public_id) {
    redirect("/login");
  }

  const tenant = await getCurrentTenantByUserUuid(session.user.public_id);

  if (!tenant) {
    redirect("/settings");
  }

  return <CandidatesListComponent tenantId={tenant.id} />;
}


/* export default function CandidatesList() {
  return (
    <>
      <CandidatesListComponent />
    </>
  );
} */
