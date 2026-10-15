"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BellRing,
  Building2,
  Cctv,
  Fence,
  Fingerprint,
  Layers,
  Lightbulb,
  PanelsTopLeft,
  Sparkles,
  Zap,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { securityServices, services, supplies } from "@/lib/content";
import { CornerFrame, RevealWords, rise, useInView } from "./Reveal";

const icons = {
  layers: Layers,
  lightbulb: Lightbulb,
  sparkles: Sparkles,
  panels: PanelsTopLeft,
  building: Building2,
  cctv: Cctv,
  zap: Zap,
  fingerprint: Fingerprint,
  bell: BellRing,
  gate: Fence,
};

const groups = [
  {
    id: "interiors",
    label: "Interiors",
    count: services.length,
    blurb: "Ceilings, walls, glazing and lighting for homes and offices.",
  },
  {
    id: "security",
    label: "Security",
    count: securityServices.length,
    blurb: "Protect your property and control who comes in.",
  },
  {
    id: "supplies",
    label: "Supplies",
    count: supplies.length,
    blurb: "Need materials for your own builder? We sell them too.",
  },
] as const;

type GroupId = (typeof groups)[number]["id"];

function Interiors() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {services.map((service, i) => {
        const Icon = icons[service.icon];
        return (
          <article
            key={service.title}
            className={cn(
              "scroll-reveal group overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-xl hover:shadow-foreground/5",
              i === 0 && "lg:row-span-2 lg:flex lg:flex-col",
            )}>
            <div
              className={cn(
                "relative aspect-4/3 overflow-hidden",
                i === 0 && "lg:aspect-auto lg:flex-1",
              )}>
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-1 p-5">
              <div className="flex items-center gap-2">
                <Icon className="size-4 text-muted-foreground" />
                <h3 className="text-lg font-medium">{service.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{service.summary}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function Security() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
      {securityServices.map((service) => {
        const Icon = icons[service.icon];
        return (
          <article
            key={service.title}
            className="scroll-reveal flex flex-col gap-6 rounded-2xl bg-secondary p-5">
            <span className="flex size-11 items-center justify-center rounded-full bg-background">
              <Icon className="size-5" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-medium">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.summary}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function Supplies() {
  return (
    <div className="scroll-reveal flex flex-col gap-6 rounded-2xl border p-5 sm:p-8 md:flex-row md:items-center md:justify-between">
      <ul className="flex flex-wrap gap-2">
        {supplies.map((item) => (
          <li key={item} className="rounded-full border bg-card px-4 py-2 text-sm">
            {item}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={buttonVariants({
          variant: "outline",
          size: "lg",
          className: "group h-11 shrink-0 px-5",
        })}>
        Ask for a price
        <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

const HEADING = "We finish it, secure it and supply it.";
// Heading words rise into place one after another, framed by two corner
// brackets (top left, bottom right) that draw themselves in.
function Intro() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const wordCount = HEADING.split(" ").length;

  return (
    <div
      ref={ref}
      className="relative mb-12 flex flex-col gap-4 p-5 sm:mb-16 sm:p-8 md:flex-row md:items-end md:justify-between">
      <CornerFrame show={inView} />
      <div className="flex flex-col gap-4">
        <p {...rise(inView, 100)}>
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            What we do
          </span>
        </p>
        <h2 className="max-w-lg text-3xl font-medium sm:text-4xl">
          <RevealWords text={HEADING} show={inView} delay={200} />
        </h2>
      </div>
      <p {...rise(inView, 200 + wordCount * 70)}>
        <span className="block max-w-sm text-muted-foreground">
          Interior finishing, security installations and building materials.
          Pick a single service or hand us the whole job.
        </span>
      </p>
    </div>
  );
}

const panels: Record<GroupId, () => React.JSX.Element> = {
  interiors: Interiors,
  security: Security,
  supplies: Supplies,
};

export default function OurServices() {
  const [active, setActive] = useState<GroupId>("interiors");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = groups.find((g) => g.id === active)!;
  const Panel = panels[active];

  // Arrow keys move between tabs, as in a native tab list.
  function onKeyDown(e: React.KeyboardEvent, i: number) {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    const target =
      step !== undefined
        ? (i + step + groups.length) % groups.length
        : e.key === "Home"
          ? 0
          : e.key === "End"
            ? groups.length - 1
            : null;
    if (target === null) return;
    e.preventDefault();
    setActive(groups[target].id);
    tabs.current[target]?.focus();
  }

  return (
    <section
      id="services"
      className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-20">
      <Intro />

      <div className="relative mb-6 sm:mb-8">
        <div
          role="tablist"
          aria-label="Service groups"
          className="flex gap-6 border-b sm:gap-10">
          {groups.map((group, i) => {
            const selected = group.id === active;
            return (
              <button
                key={group.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${group.id}`}
                aria-selected={selected}
                aria-controls={`panel-${group.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(group.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  "relative -mb-px flex items-baseline gap-1.5 pb-3 text-lg font-medium transition-colors sm:text-xl",
                  selected
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}>
                {group.label}
                <span className="text-xs text-muted-foreground tabular-nums">
                  {String(group.count).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-0.5 origin-left rounded-full bg-foreground transition-transform duration-300",
                    selected ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            );
          })}
        </div>
        <p
          key={active}
          className="mt-4 text-sm text-muted-foreground animate-in fade-in duration-500 md:absolute md:right-0 md:bottom-3 md:mt-0">
          {current.blurb}
        </p>
      </div>

      <div
        key={active}
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="animate-in fade-in slide-in-from-bottom-2 duration-500 motion-reduce:animate-none">
        <Panel />
      </div>
    </section>
  );
}
