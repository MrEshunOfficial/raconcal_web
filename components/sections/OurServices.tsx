import React from "react";
import Image from "next/image";
import { Building2, Layers, Lightbulb, PanelsTopLeft, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/content";

const icons = {
  layers: Layers,
  lightbulb: Lightbulb,
  sparkles: Sparkles,
  panels: PanelsTopLeft,
  building: Building2,
};

export default function OurServices() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mb-8 flex sm:mb-12 flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            What we do
          </p>
          <h2 className="max-w-lg text-3xl font-medium sm:text-4xl">
            Everything a ceiling and its light need.
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Pick a single service or hand us the whole space. Either way, one
          team owns the finish.
        </p>
      </div>
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
              <div className={cn("relative aspect-[4/3] overflow-hidden", i === 0 && "lg:aspect-auto lg:flex-1")}>
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
                  <h3 className="text-lg font-medium">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
