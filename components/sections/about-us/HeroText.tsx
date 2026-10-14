import React from "react";
import { Check } from "lucide-react";

const points = [
  "Our own crew on site, from steel framing to final paint",
  "Lighting planned with the ceiling, not added after",
  "Ducts, AC cassettes and sprinklers neatly integrated",
  "Clean handover, on schedule",
];

export default function HeroText() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
        About us
      </p>
      <h2 className="text-3xl font-medium sm:text-4xl">
        The details above your head matter.
      </h2>
      <p className="text-muted-foreground">
        Raconcal Ventures is an interior finishing team specialising in
        ceilings and architectural lighting. We take rooms from exposed services
        and bare slabs to calm, well-lit spaces, and we handle every step
        ourselves.
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
