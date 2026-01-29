// apps/web/app/blogs/page.tsx
import InLoop from "@/components/ui/InLoop";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import NavBar from "@/components/ui/NavBar";
import BlogsPage from "./BlogsPage";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    search?: string;
    category?: string;
  }>;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <>
      {/* <NavBar /> */}
      <HeaderWithCenterTextandBgImg
        heading1="Insights & Stories"
        description="Expert perspectives on technical recruitment, career growth, and industry trends"
        image="/assets/blogs/e875e3acada50c3f4f57d3941244b540e6b73a72.jpg"
      />
      <BlogsPage searchParams={resolvedSearchParams} />;
      

        <InLoop />
      <DinelGroupBv />
    </>
  );
}
