// apps/web/app/blogs/page.tsx
import InLoop from "@/components/layout/blogs/InLoop";
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
        image="/assets/blogs/979194d0a724928fcf4293d251f622f12ca61d92 (4).jpg"
      />
      <BlogsPage searchParams={resolvedSearchParams} />;
      <InLoop />
      <DinelGroupBv />
    </>
  );
}
