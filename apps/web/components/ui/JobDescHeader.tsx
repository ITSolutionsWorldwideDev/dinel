import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import Link from "next/link";
import { FaqHeaderSection } from "./FaqHeaderSection";
import { Send } from "lucide-react";

import { ArrowLeft, MapPin, Briefcase, Clock, Calendar } from "lucide-react";
import ApplyNowBtn from "../layout/job-application-form/ApplyNowBtn";

interface JobDescHeader {
  category: string;
  postedTime: string;
  title: string;
  location: string;
  experience: string;
  jobType: string;
}

export default function JobDescHeader({
  category,
  postedTime,
  title,
  location,
  experience,
  jobType,
}: JobDescHeader) {
  return (
    <section className="relative w-full h-auto \ block overflow-hidden p-5">
      {/* Background Image */}
      <Image
        src="/assets/home/dc3a9870370aac2ce5a74f925281e910465b64aa (1).png" // put image in /public/hero.jpg
        alt="Industry Bridge"
        fill
        priority
        className="object-cover absolute inset-0 w-full h-full  "
      />
      <NavBar />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 " />

      {/* Content */}

      <div className="relative z-10  mx-auto p-6 text-white mt-10 ">
        {/* Back link */}
        <Link
          href="/vacancies"
          className="flex items-center gap-2  mb-6 opacity-90 hover:opacity-100"
        >
          <ArrowLeft size={16} />
          Back to all vacancies
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl text-sm">
            <Briefcase size={16} />
            {category}
          </span>

          <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl text-sm">
            <Calendar size={16} />
            Posted {postedTime} days ago
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">{title}</h1>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-6 text-sm mb-8">
          <span className="flex items-center gap-2">
            <MapPin size={16} />
            {location}
          </span>

          <span className="flex items-center gap-2">
            <Briefcase size={16} />
            {jobType}
          </span>

          <span className="flex items-center gap-2">
            <Clock size={16} />
            {experience}
          </span>
        </div>

        {/* Button */}
        {/* <div className="w-full mt-10"> */}
          <ApplyNowBtn title={title} />
        {/* </div> */}
      </div>
      {/* </div> */}
      <div className="absolute top-1/3 lg:top-1/4 right-0 z-30">
        <FaqHeaderSection />
      </div>
      {/* </div> */}
    </section>
  );
}
