"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { aboutImages } from "@/lib/content";
import { CarouselArrows, useCarousel } from "../Carousel";

export default function AboutUsParent() {
  const { index, swipe, slideClass, style, next, back } = useCarousel(aboutImages.length);

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-14 sm:px-6 sm:py-20">
      <div
        className="group/carousel relative flex min-h-[600px] items-end overflow-hidden rounded-2xl bg-neutral-900 sm:min-h-[560px] sm:rounded-3xl lg:aspect-video lg:min-h-0"
        style={style}
        aria-roledescription="carousel"
        aria-label="Our work on site"
        {...swipe}>
        {aboutImages.map((image, i) => (
          <div
            key={image.src}
            aria-roledescription="slide"
            aria-hidden={i !== index}
            className={cn("absolute inset-0", slideClass(i))}>
            {/* Blurred fill behind, so the whole photo can show without cropping. */}
            <Image
              src={image.src}
              alt=""
              fill
              loading="eager"
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="scale-110 object-cover blur-2xl brightness-75"
            />
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="eager"
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-contain object-top lg:object-right"
            />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/50 to-black/10 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/45 lg:to-transparent" />
        <CarouselArrows label="photo" onBack={back} onNext={next} />
        <div className="pointer-events-none relative z-20 flex max-w-xl flex-col gap-4 px-14 pt-6 pb-8 text-white sm:px-20 sm:py-10 lg:py-14 lg:pr-14 lg:pl-24">
          <p className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase">About us</p>
          <h2 className="text-3xl font-medium sm:text-4xl">One team. From bare walls to a secure, finished space.</h2>
          <p className="text-white/80">
            Raconcal Ventures is a building finishing company based in Accra. Our own crew handles every stage, from
            the first steel frame to the final handover, so the quality you see is the quality we control.
          </p>
        </div>
      </div>
    </section>
  );
}
