// apps/web/app/(auth)/signup/page.tsx

import ClientProviders from "@/components/ClientProviders";
import SignUpComponent from "@/components/account/signup";

export default function SignupPage() {
  return (
    <ClientProviders>
      <SignUpComponent />
    </ClientProviders>
  );
}