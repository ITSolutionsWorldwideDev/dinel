import React from "react";

import OurApproachHero from "@/components/layout/our-approach/OurApproachHero";
import OurApproachThinking from "@/components/layout/our-approach/OurApproachThinking";
import OurApproachWork from "@/components/layout/our-approach/OurApproachWork";
import OurApproachLines from "@/components/layout/our-approach/OurApproachLines";
import OurApproachCTA from "@/components/layout/our-approach/OurApproachCTA";

export default function OurApproachPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-12 py-12">
      <OurApproachHero />

      <OurApproachThinking />

      <OurApproachWork />

      <OurApproachLines />

      <OurApproachCTA />
    </main>
  );
}