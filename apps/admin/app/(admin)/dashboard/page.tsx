// apps/admin/app/dashboard/page.tsx
"use client";

import { all_routes } from "@/data/all_routes";
import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import SalesWidgets from "@/components/dashboard/SalesWidgets";
import RevenueWidgets from "@/components/dashboard/RevenueWidgets";
import SalesPurchaseOverview from "@/components/dashboard/SalesPurchaseOverview";
import ProductsSection from "@/components/dashboard/ProductsSection";
import SalesAndTransactions from "@/components/dashboard/SalesAndTransactions";
import DashboardSideWidgets from "@/components/dashboard/DashboardSideWidgets";

import { TbCalendar } from "react-icons/tb";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return null;

  const route = all_routes;

  return (
    <div className="page-wrapper">
      <div className="content">

        {/* ---------------- HEADER SECTION ---------------- */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-2">
          <div className="mb-3">
            <h1 className="mb-1 custome-heading">Welcome, Admin</h1>
          </div>

          {/* Date Range Calendar */}
          <div className="input-icon-start position-relative mb-3">
            <span className="input-icon-addon fs-16 text-gray-9">
              <TbCalendar />
            </span>
          </div>
        </div>

        {/* ---------------- DASHBOARD SECTIONS ---------------- */}
        <SalesWidgets />
        <RevenueWidgets />
        <SalesPurchaseOverview />

        {/* <ProductsSection
          route={{
            lowstock: route.lowstock,
          }}
        />

        <SalesAndTransactions />

        <DashboardSideWidgets route={route} /> */}
      </div>
    </div>
  );
}

