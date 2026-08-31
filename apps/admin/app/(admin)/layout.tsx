// apps/admin/app/(admin)/layout.tsx
"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
// ❌ Step 1: Footer import remove kar diya gaya hai kyunki yeh file missing hai
// import Footer from "@/components/footer"; 

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/login");
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return null;

  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <main>{children}</main>
      {/* ❌ Step 2: JSX se <Footer /> component remove kar diya hai */}
    </div>
  );
}