import React from "react";
import HeroRight from "./herosection/HeroRight";
import { HeroIntro, HeroMeta } from "./herosection/HeroLeft";

// Phones: intro, slider, then figures. Desktop: intro and figures on the left, slider spanning the right.
export default function HeroParent() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 pt-8 pb-14 sm:gap-12 sm:px-6 sm:py-16 md:py-24 lg:grid-cols-2 lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-12 lg:gap-y-10">
      <div className="lg:col-start-1 lg:row-start-2">
        <HeroIntro />
      </div>
      <div className="lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:self-center">
        <HeroRight />
      </div>
      <div className="lg:col-start-1 lg:row-start-3">
        <HeroMeta />
      </div>
    </section>
  );
}
