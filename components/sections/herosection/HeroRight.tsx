import React from "react";
import Image from "next/image";
import { heroImages } from "@/lib/content";

export default function HeroRight() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl sm:aspect-[4/5] shadow-foreground/10">
        <Image
          src={heroImages.main.src}
          alt={heroImages.main.alt}
          fill
          preload
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute -bottom-8 -left-4 hidden w-40 overflow-hidden rounded-xl border-4 border-background shadow-xl sm:block lg:-left-10 lg:w-48">
        <div className="relative aspect-[4/5]">
          <Image
            src={heroImages.accent.src}
            alt={heroImages.accent.alt}
            fill
            sizes="192px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
