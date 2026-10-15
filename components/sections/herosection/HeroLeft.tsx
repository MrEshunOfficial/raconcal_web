import React from "react";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { site, stats } from "@/lib/content";

const rise = (step: number) => ({ animationDelay: `${step * 120}ms` });

// Name, headline, description and actions.
export function HeroIntro() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
      <p className="hero-rise text-xs font-medium tracking-[0.2em] text-white/70 uppercase lg:text-muted-foreground" style={rise(0)}>
        {site.name}
      </p>
      <h1 className="hero-rise text-[2.125rem] leading-[1.15] font-medium text-white sm:text-[2.75rem] lg:text-foreground" style={rise(1)}>
        <span className="sm:whitespace-nowrap">Your Space, Elevated,</span>
        <br />
        Beyond{" "}
        <span className="relative inline-block">
          <em className="font-normal">Ordinary.</em>
          <svg
            viewBox="0 0 200 20"
            preserveAspectRatio="none"
            aria-hidden
            className="absolute -bottom-1.5 left-0 h-2.5 w-full text-accent">
            <path
              d="M3 14 C 45 4, 110 3, 197 9"
              pathLength={1}
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              className="hero-draw"
            />
          </svg>
        </span>
      </h1>
      <p className="hero-rise max-w-sm text-base text-white/80 sm:text-lg lg:text-muted-foreground" style={rise(2)}>
        Interior finishing, security installations and building materials for homes and offices across Accra,
        all from one trusted team.
      </p>
      <div className="hero-rise hidden items-center gap-6 lg:flex" style={rise(3)}>
        <a href="#contact" className={buttonVariants({ size: "lg", className: "h-11 px-5" })}>
          Start your project <ArrowRight data-icon="inline-end" />
        </a>
        <a href="#services" className="text-sm font-medium underline-offset-4 hover:underline">
          Our services
        </a>
      </div>
    </div>
  );
}

// Figures and contact line. Sits under the slider on phones, under the intro on desktop.
export function HeroMeta() {
  const phone = site.phones[0];

  return (
    <div className="hero-rise flex flex-col gap-4 border-t border-white/20 pt-5 lg:gap-5 lg:border-border lg:pt-6" style={rise(4)}>
      <dl className="flex gap-10 sm:gap-14">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-0.5">
            <dt className="order-2 text-[11px] tracking-[0.15em] text-white/60 uppercase lg:text-xs lg:text-muted-foreground">{stat.label}</dt>
            <dd className="font-heading text-2xl font-medium text-white lg:text-3xl lg:text-foreground">{stat.value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75 lg:gap-x-8 lg:gap-y-3 lg:text-muted-foreground">
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="pointer-events-auto flex items-center gap-2 transition-colors hover:text-white lg:hover:text-foreground">
          <Phone className="size-4" />
          {phone}
        </a>
        <span className="flex items-center gap-2">
          <MapPin className="size-4" />
          Kotoku, Medie · Accra
        </span>
      </div>
    </div>
  );
}
