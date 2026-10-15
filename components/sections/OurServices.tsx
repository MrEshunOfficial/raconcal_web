import React from "react";
import Image from "next/image";
import {
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

function GroupHeading({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-2 border-t pt-6 sm:mb-8 md:flex-row md:items-baseline md:justify-between md:gap-8">
      <h3 className="text-2xl font-medium">
        <span className="mr-3 text-sm text-muted-foreground tabular-nums">{index}</span>
        {title}
      </h3>
      <p className="max-w-sm text-sm text-muted-foreground">{children}</p>
    </div>
  );
}

export default function OurServices() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-6 pb-14 sm:px-6 sm:pb-20">
      <div className="mb-10 flex flex-col gap-4 sm:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            What we do
          </p>
          <h2 className="max-w-lg text-3xl font-medium sm:text-4xl">
            We finish it, secure it and supply it.
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Interior finishing, security installations and building materials. Pick a single service or hand us the whole job.
        </p>
      </div>

      <GroupHeading index="01" title="Interior finishing">
        Ceilings, walls, glazing and lighting for homes and offices.
      </GroupHeading>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <article
              key={service.title}
              className={cn(
                "group overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-xl hover:shadow-foreground/5",
                i === 0 && "lg:row-span-2 lg:flex lg:flex-col"
              )}>
              <div className={cn("relative aspect-4/3 overflow-hidden", i === 0 && "lg:aspect-auto lg:flex-1")}>
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-muted-foreground" />
                  <h4 className="text-lg font-medium">{service.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-14 sm:mt-20">
        <GroupHeading index="02" title="Security & automation">
          Protect your property and control who comes in.
        </GroupHeading>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          {securityServices.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article key={service.title} className="flex flex-col gap-4 rounded-2xl bg-secondary p-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-background">
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-2">
                  <h4 className="font-medium">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-14 sm:mt-20">
        <GroupHeading index="03" title="Building supplies">
          Need materials for your own builder? We sell them too.
        </GroupHeading>
        <div className="flex flex-col gap-6 rounded-2xl border p-5 sm:p-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-2">
            {supplies.map((item) => (
              <li key={item} className="rounded-full border bg-card px-4 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={buttonVariants({ variant: "outline", size: "lg", className: "h-11 shrink-0 px-5" })}>
            Ask for a price
          </a>
        </div>
      </div>
    </section>
  );
}
