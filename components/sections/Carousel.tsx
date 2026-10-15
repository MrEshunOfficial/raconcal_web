"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Index, previous index and direction for a looping carousel, plus swipe handlers.
// `fadeOut` makes the outgoing slide fade away too; use it when slides don't fill the frame.
export function useCarousel(count: number, { fadeOut = false } = {}) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [dir, setDir] = useState(1);
  const touchX = useRef<number | null>(null);

  const goTo = (target: number, direction?: number) => {
    const i = (target + count) % count;
    if (i === index) return;
    setDir(direction ?? (target > index ? 1 : -1));
    setPrev(index);
    setIndex(i);
  };
  const next = () => goTo(index + 1, 1);
  const back = () => goTo(index - 1, -1);

  const swipe = {
    onTouchStart: (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX),
    onTouchEnd: (e: React.TouchEvent) => {
      if (touchX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(dx) > 40) (dx < 0 ? next : back)();
      touchX.current = null;
    },
  };

  // Active slide animates in on top; the previous one stays opaque beneath it.
  const slideClass = (i: number) =>
    i === index
      ? "z-20 carousel-in"
      : i === prev
        ? fadeOut
          ? "z-10 carousel-fade-out"
          : "z-10 carousel-out"
        : "z-0 opacity-0";

  const style = { "--carousel-dir": dir } as React.CSSProperties;

  return { index, prev, goTo, next, back, swipe, slideClass, style };
}

// Prev/next buttons pinned to the left and right edges, vertically centred.
// On hover devices they slide in from the edges when the carousel is hovered; on touch screens they stay visible.
export function CarouselArrows({
  onBack,
  onNext,
  label,
}: {
  onBack: () => void;
  onNext: () => void;
  label: string;
}) {
  const button =
    "group/arrow absolute top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg shadow-black/25 backdrop-blur transition-[opacity,translate,scale,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110 hover:bg-white active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none motion-reduce:transition-none sm:size-12 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover/carousel:translate-x-0 [@media(hover:hover)]:group-hover/carousel:opacity-100 [@media(hover:hover)]:focus-visible:translate-x-0 [@media(hover:hover)]:focus-visible:opacity-100";
  const icon = "size-5 transition-transform duration-300 ease-out sm:size-6";

  return (
    <>
      <button
        type="button"
        aria-label={`Previous ${label}`}
        onClick={onBack}
        className={cn(button, "left-2 sm:left-5 lg:left-6 [@media(hover:hover)]:-translate-x-4")}>
        <ChevronLeft className={cn(icon, "group-hover/arrow:-translate-x-0.5")} />
      </button>
      <button
        type="button"
        aria-label={`Next ${label}`}
        onClick={onNext}
        className={cn(button, "right-2 sm:right-5 lg:right-6 [@media(hover:hover)]:translate-x-4")}>
        <ChevronRight className={cn(icon, "group-hover/arrow:translate-x-0.5")} />
      </button>
    </>
  );
}
