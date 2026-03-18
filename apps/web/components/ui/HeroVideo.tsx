// apps/web/components/ui/HeroVideo.tsx

"use client";

import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const netherlandsTime = new Date().toLocaleString("en-US", {
      timeZone: "Europe/Amsterdam",
      hour: "numeric",
      hour12: false,
    });

    const hour = parseInt(netherlandsTime);
    console.log(hour);
    if (hour > 6 && hour < 18) {
      setVideoSrc("/assets/home/Day Video (2).mp4");
      // console.log("inside");
    } else {
      setVideoSrc("/assets/home/Night Video.mp4");
      // console.log("inside else");
    }
  }, []);

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0   w-full h-full object-cover "
    >
      {videoSrc && <source src={videoSrc} type="video/mp4" />}
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
