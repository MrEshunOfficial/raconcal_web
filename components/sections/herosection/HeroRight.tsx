"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/content";

const SLIDE_MS = 5500;
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function HeroRight() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = services.length;
  const next = (index + 1) % count;

  const goTo = (i: number) => {
    if (i === index) return;
    setPrev(index);
    setIndex((i + count) % count);
  };

  return (
    <div
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}>
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-foreground/10 sm:aspect-[4/5]"
        aria-roledescription="carousel"
        aria-label="Our services"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
          touchX.current = null;
        }}>
        {services.map((service, i) => {
          const active = i === index;
          return (
            <div
              key={service.title}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${service.title}`}
              aria-hidden={!active}
              className={cn(
                "absolute inset-0 transition-[opacity,transform] duration-1000 motion-reduce:transition-none",
                EASE,
                active
                  ? "z-10 translate-x-0 opacity-100"
                  : i === prev
                    ? "-translate-x-[12%] opacity-0"
                    : "translate-x-[12%] opacity-0"
              )}>
              <Image
                src={service.image}
                alt=""
                fill
                preload={i === 0}
                sizes="(min-width: 1024px) 560px, 100vw"
                className={cn(
                  "object-cover transition-transform ease-out motion-reduce:transition-none",
                  active ? "scale-100 duration-[6000ms]" : "scale-110 duration-1000"
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent sm:via-black/50" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 pb-9 text-white sm:gap-3 sm:p-8 sm:pb-52 lg:pb-60">
                {[
                  <p key="n" className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase tabular-nums">
                    {String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                  </p>,
                  <p key="t" className="font-heading text-2xl font-medium tracking-tight sm:text-4xl">
                    {service.title}
                  </p>,
                  <p key="d" className="max-w-sm text-sm text-white/80 sm:text-base">
                    {service.description}
                  </p>,
                ].map((el, j) => (
                  <div
                    key={j}
                    style={{ transitionDelay: active ? `${300 + j * 120}ms` : "0ms" }}
                    className={cn(
                      "transition-[opacity,transform] duration-700 motion-reduce:transition-none",
                      EASE,
                      active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    )}>
                    {el}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="absolute inset-x-5 bottom-4 z-20 flex gap-1.5 sm:right-8 sm:bottom-6 sm:left-44">
          {services.map((service, i) => (
            <button
              key={service.title}
              type="button"
              aria-label={`Show ${service.title}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className="group relative h-4 flex-1">
              <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 overflow-hidden rounded-full bg-white/30 transition-colors group-hover:bg-white/50">
                <span
                  key={i === index ? `active-${index}` : "idle"}
                  onAnimationEnd={() => i === index && goTo(index + 1)}
                  className={cn(
                    "absolute inset-0 origin-left rounded-full bg-white motion-reduce:animate-none",
                    i < index ? "scale-x-100" : "scale-x-0"
                  )}
                  style={
                    i === index
                      ? {
                          animation: `hero-progress ${SLIDE_MS}ms linear forwards`,
                          animationPlayState: paused ? "paused" : "running",
                        }
                      : undefined
                  }
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(next)}
        aria-label={`Next: ${services[next].title}`}
        className="group absolute -bottom-8 -left-4 z-20 hidden w-40 overflow-hidden rounded-xl border-4 border-background bg-muted text-left shadow-xl sm:block lg:-left-10 lg:w-48">
        <div className="relative aspect-[4/5]">
          {services.map((service, i) => (
            <Image
              key={service.title}
              src={service.image}
              alt=""
              fill
              sizes="192px"
              className={cn(
                "object-cover transition-[opacity,transform] duration-1000 group-hover:scale-105",
                EASE,
                i === next ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-3 text-white">
            <p className="text-[10px] font-medium tracking-[0.2em] text-white/70 uppercase">Next</p>
            <p className="flex items-center gap-1 text-sm font-medium leading-tight">
              {services[next].title}
              <ArrowRight className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
