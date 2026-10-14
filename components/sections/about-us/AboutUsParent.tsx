import React from "react";
import ImageSlider from "./ImageSlider";
import HeroText from "./HeroText";

export default function AboutUsParent() {
  return (
    <section id="about" className="scroll-mt-16 bg-secondary/60">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-2">
        <ImageSlider />
        <HeroText />
      </div>
    </section>
  );
}
