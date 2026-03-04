// apps/web/app/(auth)/login/page.tsx
import SigninComponent from "@/components/account/signin";
import ClientProviders from "@/components/ClientProviders";

export default function LoginPage() {
  return (
    <ClientProviders>
      <SigninComponent />
      {/* <div>fasdfh</div> */}
    </ClientProviders>
  );
}