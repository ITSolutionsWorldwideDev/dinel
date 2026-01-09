// apps/admin/app/layout.tsx
import type { Metadata } from "next";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: "Dinel - Recruitment Platform Admin Dashboard Template",
  description:
    "Dinel is a powerful Bootstrap-based Recruitment Platform Admin Template designed for businesses, offering seamless invoicing, project tracking, and estimates.",
  keywords:
    "Recruitment Platform, admin dashboard, estimates, business management, responsive admin",
  icons: {
    icon: "favicon.png",
    shortcut: "favicon.png",
    apple: "favicon.png",
  },
};
