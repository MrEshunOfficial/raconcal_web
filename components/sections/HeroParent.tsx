import React from "react";
import HeroRight from "./herosection/HeroRight";
import { HeroIntro, HeroMeta } from "./herosection/HeroLeft";

// Phones/tablets: full-bleed slider with the intro and figures overlaid.
// Desktop: intro and figures on the left, slider spanning the right.
export default function HeroParent() {
  return (
    <section className="mx-auto grid max-w-6xl px-4 sm:px-6 lg:grid-cols-2 lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-12 lg:gap-y-10 lg:pt-24 lg:pb-14">
      <div className="col-start-1 row-start-1 -mx-4 sm:-mx-6 lg:col-start-2 lg:row-span-4 lg:mx-0 lg:self-center">
        <HeroRight />
      </div>
      {/* Overlay wrapper on small screens; dissolves into the grid on desktop. */}
      <div className="pointer-events-none z-20 col-start-1 row-start-1 flex flex-col gap-7 self-end pb-8 sm:pb-12 lg:contents">
        <div className="lg:pointer-events-auto lg:col-start-1 lg:row-start-2">
          <HeroIntro />
        </div>
        <div className="lg:pointer-events-auto lg:col-start-1 lg:row-start-3">
          <HeroMeta />
        </div>
      </div>
    </section>
  );
}
