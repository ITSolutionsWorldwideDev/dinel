"use client";

import { usePathname } from "next/navigation";
import DeskstopNavigationMenu from "@/components/layout/navbar/DeskstopNavigationMenu";
import Footer from "@/components/layout/footer";

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check agar current page coming-soon hai
  const isComingSoon = pathname?.includes("/coming-soon");

  return (
    <>
      {!isComingSoon && <DeskstopNavigationMenu />}
      {children}
      {!isComingSoon && <Footer />}
    </>
  );
}