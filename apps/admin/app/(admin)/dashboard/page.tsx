// apps/admin/app/dashboard/page.tsx
"use client";

import { all_routes } from "@/data/all_routes";
import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import SalesWidgets from "@/components/dashboard/SalesWidgets";
import RevenueWidgets from "@/components/dashboard/RevenueWidgets";
// import SalesPurchaseOverview from "@/components/dashboard/SalesPurchaseOverview";
// import ProductsSection from "@/components/dashboard/ProductsSection";
// import SalesAndTransactions from "@/components/dashboard/SalesAndTransactions";
// import DashboardSideWidgets from "@/components/dashboard/DashboardSideWidgets";

import { TbCalendar, TbChevronUp } from "react-icons/tb";

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
            <h1 className="mb-1 custome-heading">Super Admin</h1>
          </div>

          {/* Welcome Wrap */}
          <div className="welcome-wrap mb-6">
            <div className=" d-flex align-items-center justify-content-between flex-wrap">
              <div className="mb-3">
                <h2 className="mb-1 text-white">Welcome Back, Dineller</h2>
                <p className="text-light">
                  14 New Companies Subscribed Today !!!
                </p>
              </div>
              <div className="d-flex align-items-center flex-wrap mb-1">
                <Link href="#" className="btn btn-dark btn-md me-2 mb-2">
                  Companies
                </Link>
                <Link href="#" className="btn btn-light btn-md mb-2">
                  All Packages
                </Link>
              </div>
            </div>
            <div className="welcome-bg">
              <img
                src="assets/img/bg/welcome-bg-02.svg"
                alt="img"
                className="welcome-bg-01"
              />
              <img
                src="assets/img/bg/welcome-bg-03.svg"
                alt="img"
                className="welcome-bg-02"
              />
              <img
                src="assets/img/bg/welcome-bg-01.svg"
                alt="img"
                className="welcome-bg-03"
              />
            </div>
          </div>
          {/* /Welcome Wrap */}
        </div>

        {/* ---------------- DASHBOARD SECTIONS ---------------- */}
        <SalesWidgets />
        <RevenueWidgets />
        {/* <SalesPurchaseOverview /> */}

        {/* <ProductsSection
          route={{
            lowstock: route.lowstock,
          }}
        />

        <SalesAndTransactions />

        <DashboardSideWidgets route={route} /> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 ">
          {/* World Map */}
          <div className="card flex-fill">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Business by Countries</h5>
            </div>
            <div className="card-body">
              <div id="sales_db_world_map" style={{ height: "265px" }}>
                <iframe
                  src="https://www.google.com/maps/embed"
                  style={{ border: "0", height: "265px", width: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="contact-map"
                />
              </div>
              <p className="sales-range">
                <span className="text-success">
                  <TbChevronUp className="feather-16" />
                  48%&nbsp;
                </span>
                increase compare to last week
              </p>
            </div>
          </div>
          {/* /World Map */}
        </div>
      </div>
    </div>
  );
}
