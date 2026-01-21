// apps/admin/app/(admin)/applications/page.tsx
import ApplicationsListComponent from "@/components/applications/applicationsList";
import { getServerSession } from "next-auth";
import { authOptions } from "@repo/auth";
import { getCurrentTenantByUserUuid } from "@/lib/tenant";
import { redirect } from "next/navigation";

export default async function CategoryList() {

  const session = await getServerSession(authOptions);
  
    if (!session?.user?.public_id) {
      redirect("/login");
    }
  
    const tenant = await getCurrentTenantByUserUuid(session.user.public_id);
  
    if (!tenant) {
      redirect("/settings");
    }

  return (
    <>
      <ApplicationsListComponent tenantId={tenant.id} />
    </>
  );
}
