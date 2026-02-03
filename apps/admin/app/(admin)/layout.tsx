// apps/admin/app/(dashboard)/layout.tsx
"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import "../layout.css";
import { ToastProvider, useToast } from "@repo/ui";
import { SessionActivity } from "../providers/session-activity";
// import "../globals.css";

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  // const { status } = useSession();
  const { data: session, status } = useSession();
  const router = useRouter();
  const { showToast } = useToast();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.expired) {
      showToast("danger", "Session expired. Please login again.");

      signOut({
        callbackUrl: "/login",
      });
    }
  }, [status, session, showToast]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return null;

  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

// ----------------------------
// Provider wrapper
// ----------------------------
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <SessionActivity />
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </ToastProvider>
  );
}
/* export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const router = useRouter();

  // Protect all admin pages
  useEffect(() => {
    if (status === "unauthenticated") router.replace("/login");
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return null;

  return (
    <ToastProvider>
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        <main>{children}</main>
        <Footer />
      </div>
    </ToastProvider>
  );
} */
