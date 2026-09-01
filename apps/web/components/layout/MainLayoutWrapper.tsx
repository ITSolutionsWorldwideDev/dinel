"use client";

import DeskstopNavigationMenu from "@/components/layout/navbar/DeskstopNavigationMenu";
import Footer from "@/components/layout/footer";

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DeskstopNavigationMenu />
      {children}
      <Footer />
    </>
  );
}