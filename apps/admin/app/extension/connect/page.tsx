// apps/admin/app/extension/connect/page.tsx
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@repo/auth";

import { issueExtensionToken } from "../../../lib/extension-auth";
import { getCurrentTenantByUserUuid } from "../../../lib/tenant";

export default async function ConnectExtensionPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login");
  }

  const userId = session.user.id;
  const userUuid = session.user?.public_id;
  const userEmail = session.user.email;

  if (!userUuid) {
    redirect("/settings");
  }

  const tenant = await getCurrentTenantByUserUuid(userUuid);

  if (!tenant) {
    redirect("/settings");
  }

  const token = issueExtensionToken(userUuid, tenant.id);

  return (
    <html>
      <body>
        <p>Connecting extension… You can close this tab.</p>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                if (!window.chrome?.runtime) {
                  alert("Chrome extension is not installed.");
                  return;
                }

                chrome.runtime.sendMessage(
                  "${process.env.NEXT_PUBLIC_CHROME_EXTENSION_ID}",
                  {
                    type: "PAIR_EXTENSION",
                    token: "${token}",
                    tenantId: "${tenant.id}",
                    user: {
                      id: "${userId}",
                      email: "${userEmail}"
                    }
                  },
                  function () {
                    window.close();
                  }
                );
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
