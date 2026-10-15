"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

// True once the element has scrolled into view; stays true after that.
export function useInView<T extends Element>(threshold = 0.4) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

// Fades and lifts its element into place once `show` turns true.
export function rise(show: boolean, delay: number) {
  return {
    style: { transitionDelay: `${delay}ms` },
    className: cn(
      "transition-[opacity,transform] duration-900 motion-reduce:transition-none",
      EASE,
      show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
    ),
  };
}

// Words rise one after another from behind a mask.
export function RevealWords({ text, show, delay = 0 }: { text: string; show: boolean; delay?: number }) {
  const words = text.split(" ");
  return (
    <span aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-1 align-bottom">
          <span
            style={{ transitionDelay: `${delay + i * 70}ms` }}
            className={cn(
              "inline-block transition-transform duration-900 motion-reduce:transition-none",
              EASE,
              show ? "translate-y-0" : "translate-y-full",
            )}>
            {word}
            {i < words.length - 1 && " "}
          </span>
        </span>
      ))}
    </span>
  );
}

// One arm of a corner bracket, drawn outward from the corner.
function Arm({ className, show, delay }: { className: string; show: boolean; delay: number }) {
  return (
    <span
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "absolute transition-transform duration-700 motion-reduce:transition-none",
        EASE,
        className,
        !show && "scale-0",
      )}
    />
  );
}

// Open square corners on the top left and bottom right of the parent (which must be relative).
export function CornerFrame({ show, color = "bg-foreground" }: { show: boolean; color?: string }) {
  return (
    <>
      <Arm show={show} delay={0} className={cn(color, "top-0 left-0 h-0.5 w-10 origin-left sm:w-14")} />
      <Arm show={show} delay={0} className={cn(color, "top-0 left-0 h-10 w-0.5 origin-top sm:h-14")} />
      <Arm show={show} delay={500} className={cn(color, "right-0 bottom-0 h-0.5 w-10 origin-right sm:w-14")} />
      <Arm show={show} delay={500} className={cn(color, "right-0 bottom-0 h-10 w-0.5 origin-bottom sm:h-14")} />
    </>
  );
}
