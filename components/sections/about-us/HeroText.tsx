import React from "react";
import { Check } from "lucide-react";

const points = [
  "Our own crew on site, from steel framing to final paint",
  "Ceilings, walls, glazing and security handled by one team",
  "We supply the materials too, so one call covers the job",
  "Clean handover, on schedule",
];

export default function HeroText() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
        About us
      </p>
      <h2 className="text-3xl font-medium sm:text-4xl">
        One team. From bare walls to a secure, finished space.
      </h2>
      <p className="text-muted-foreground">
        Raconcal Ventures specializes in building maintenance, interior
        decoration, ceiling and cladding works, security installations, and
        building materials. From individual services to complete projects, our
        skilled team delivers quality workmanship, reliable service, and timely
        completion.
      </p>
      <ul className="grid gap-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent">
              <Check className="size-3" />
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
