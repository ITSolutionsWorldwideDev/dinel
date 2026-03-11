// apps/web/components/ui/HeroVideo.tsx

"use client";

import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [videoSrc, setVideoSrc] = useState("/assets/home/day-banner.mp4");

  useEffect(() => {
    const netherlandsTime = new Date().toLocaleString("en-US", {
      timeZone: "Europe/Amsterdam",
      hour: "numeric",
      hour12: false,
    });

    const hour = parseInt(netherlandsTime);

    if (hour >= 6 && hour < 18) {
      setVideoSrc("/assets/home/day-banner.mp4");
    } else {
      setVideoSrc("/assets/home/night-banner.mp4");
    }
  }, []);


  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}

/* 
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
*/