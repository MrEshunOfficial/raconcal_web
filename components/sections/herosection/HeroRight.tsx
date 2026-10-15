"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/content";
import { useCarousel } from "../Carousel";

const SLIDE_MS = 5500;
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function HeroRight() {
  const count = services.length;
  const { index, prev, goTo, next, swipe, slideClass, style } =
    useCarousel(count);
  const [paused, setPaused] = useState(false);
  const upcoming = (index + 1) % count;
  // The card's previous image stays underneath while the new one fades in.
  const previousUpcoming = prev === null ? null : (prev + 1) % count;

  return (
    <div
      className="relative w-full"
      style={style}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}>
      <div
        className="group/carousel relative h-[92svh] max-h-225 min-h-150 overflow-hidden bg-neutral-900 lg:aspect-4/5 lg:h-auto lg:max-h-none lg:min-h-0 lg:rounded-2xl lg:shadow-2xl lg:shadow-foreground/10"
        aria-roledescription="carousel"
        aria-label="Our services"
        {...swipe}>
        {services.map((service, i) => {
          const active = i === index;
          return (
            <div
              key={service.title}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${service.title}`}
              aria-hidden={!active}
              className={cn("absolute inset-0", slideClass(i))}>
              <Image
                src={service.image}
                alt=""
                fill
                preload={i === 0}
                loading={i === 0 ? undefined : "eager"}
                sizes="(min-width: 1024px) 560px, 100vw"
                className={cn(
                  "object-cover transition-transform ease-out motion-reduce:transition-none",
                  active
                    ? "scale-100 duration-6000"
                    : "scale-105 duration-1000",
                )}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-black/30 lg:from-black/85 lg:via-black/50 lg:to-transparent" />
              <p
                className={cn(
                  "absolute top-6 right-4 left-4 truncate text-xs font-medium tracking-[0.2em] text-white/80 uppercase transition-[opacity,transform] duration-700 sm:left-6 lg:hidden",
                  EASE,
                  active
                    ? "translate-y-0 opacity-100 delay-300"
                    : "-translate-y-2 opacity-0",
                )}>
                <span className="tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mx-2 text-white/40">/</span>
                {service.title}
              </p>
              <div className="absolute inset-x-0 bottom-0 hidden flex-col gap-3 p-8 pb-60 text-white lg:flex">
                {[
                  <p
                    key="n"
                    className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase tabular-nums">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(count).padStart(2, "0")}
                  </p>,
                  <p
                    key="t"
                    className="font-heading text-4xl font-medium tracking-tight">
                    {service.title}
                  </p>,
                  <p key="d" className="max-w-sm text-base text-white/80">
                    {service.description}
                  </p>,
                ].map((el, j) => (
                  <div
                    key={j}
                    style={{
                      transitionDelay: active ? `${300 + j * 120}ms` : "0ms",
                    }}
                    className={cn(
                      "transition-[opacity,transform] duration-700 motion-reduce:transition-none",
                      EASE,
                      active
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0",
                    )}>
                    {el}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="invisible absolute right-8 bottom-6 left-44 z-30 flex gap-1.5 lg:visible">
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
                  onAnimationEnd={() => i === index && next()}
                  className={cn(
                    "absolute inset-0 origin-left rounded-full bg-white motion-reduce:animate-none",
                    i < index ? "scale-x-100" : "scale-x-0",
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
        onClick={next}
        aria-label={`Next: ${services[upcoming].title}`}
        className="group absolute -bottom-8 -left-10 z-20 hidden w-48 overflow-hidden rounded-xl border-4 border-background bg-neutral-900 text-left shadow-xl lg:block">
        <div className="relative aspect-4/5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={cn(
                "absolute inset-0",
                i === upcoming
                  ? "z-10 carousel-in"
                  : i === previousUpcoming
                    ? "z-0"
                    : "z-0 opacity-0",
              )}>
              <Image
                src={service.image}
                alt=""
                fill
                loading="eager"
                sizes="192px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
          <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 p-3 text-white">
            <p className="text-[10px] font-medium tracking-[0.2em] text-white/70 uppercase">
              Next
            </p>
            <p className="flex items-center gap-1 text-sm font-medium leading-tight">
              {services[upcoming].title}
              <ArrowRight className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
