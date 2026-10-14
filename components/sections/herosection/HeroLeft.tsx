import React from "react";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { stats } from "@/lib/content";

export default function HeroLeft() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
        Interior finishing & decor
      </p>
      <h1 className="text-[2.5rem] leading-[1.1] font-medium sm:text-5xl lg:text-6xl">
        Ceilings and light that make a space{" "}
        <em className="font-normal">feel finished.</em>
      </h1>
      <p className="max-w-md text-base text-muted-foreground sm:text-lg">
        We design and build gypsum ceilings, cove and LED lighting, feature
        walls and glass partitions for homes and offices.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a href="#contact" className={buttonVariants({ size: "lg", className: "h-11 px-5" })}>
          Start your project <ArrowRight data-icon="inline-end" />
        </a>
        <a
          href="#projects"
          className={buttonVariants({ variant: "outline", size: "lg", className: "h-11 px-5" })}>
          See our work
        </a>
      </div>
      <dl className="grid grid-cols-3 gap-4 border-t pt-6">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="font-heading text-lg font-medium sm:text-xl">{stat.value}</dt>
            <dd className="text-xs text-muted-foreground sm:text-sm">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
