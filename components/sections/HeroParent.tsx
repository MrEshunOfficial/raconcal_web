import React from "react";
import HeroRight from "./herosection/HeroRight";
import HeroLeft from "./herosection/HeroLeft";

export default function HeroParent() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 sm:gap-12 sm:px-6 sm:py-16 md:py-24 lg:grid-cols-2">
      <HeroLeft />
      <HeroRight />
    </section>
  );
}
