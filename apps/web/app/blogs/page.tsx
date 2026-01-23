import AirticleCard from "@/components/layout/blogs/AirticleCard";
import BlogCards from "@/components/layout/blogs/BlogCard";
import InLoop from "@/components/layout/blogs/InLoop";
import SearchBar from "@/components/layout/blogs/SearchBar";
import DinelGroupBv from "@/components/ui/DinelGroupBv";
import HeaderWithCenterTextandBgImg from "@/components/ui/HeaderWithCenterTextandBgImg";
import NavBar from "@/components/ui/NavBar";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <HeaderWithCenterTextandBgImg
        heading1="Insights & Stories"
        description="Expert perspectives on technical recruitment, career growth, and industry trends"
        image="/assets/blogs/979194d0a724928fcf4293d251f622f12ca61d92 (4).jpg"
      />
      <SearchBar />

      <AirticleCard />
      <BlogCards />
      <InLoop />
      <DinelGroupBv />
    </div>
  );
};

export default page;
