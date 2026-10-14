"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { processSlides } from "@/lib/content";

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const count = processSlides.length;
  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
        {processSlides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className={cn(
              "object-cover transition-opacity duration-500",
              i === index ? "opacity-100" : "opacity-0"
            )}
            aria-hidden={i !== index}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-white">
          <p aria-live="polite" className="text-xs sm:text-sm">
            <span className="mr-2 tabular-nums opacity-70">
              {String(index + 1).padStart(2, "0")}/{String(count).padStart(2, "0")}
            </span>
            {processSlides[index].caption}
          </p>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon-lg"
              aria-label="Previous photo"
              onClick={() => go(-1)}>
              <ChevronLeft />
            </Button>
            <Button
              variant="secondary"
              size="icon-lg"
              aria-label="Next photo"
              onClick={() => go(1)}>
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {processSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show photo ${i + 1}: ${slide.caption}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors",
              i === index ? "bg-foreground" : "bg-foreground/15 hover:bg-foreground/30"
            )}
          />
        ))}
      </div>
    </div>
  );
}
