"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";

// Floating quote buttons: they slide in once the hero is behind you and step aside
// when the contact section (which has the same buttons) comes into view.
export default function QuickContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const contact = document.getElementById("contact");
      const pastHero = window.scrollY > window.innerHeight * 0.7;
      const atContact = !!contact && contact.getBoundingClientRect().top < window.innerHeight * 0.85;
      setShow(pastHero && !atContact);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const motion = cn(
    "transition-[opacity,translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
    show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
  );

  return (
    <>
      {/* Phones: a bar along the bottom with a call button and the WhatsApp quote. */}
      <div
        aria-hidden={!show}
        className={cn("fixed inset-x-3 bottom-3 z-40 flex gap-2 md:hidden", motion)}>
        <a
          href={`tel:${site.phones[0].replace(/\s/g, "")}`}
          tabIndex={show ? 0 : -1}
          aria-label={`Call ${site.phones[0]}`}
          className="flex size-12 shrink-0 items-center justify-center rounded-full border bg-background/90 shadow-lg shadow-foreground/10 backdrop-blur">
          <Phone className="size-5" />
        </a>
        <a
          href={site.whatsappQuote}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-primary-foreground/20 bg-primary font-medium text-primary-foreground shadow-lg shadow-foreground/20">
          <MessageCircle className="size-5" />
          Get a free quote
        </a>
      </div>

      {/* Larger screens: a WhatsApp button in the corner whose label opens on hover. */}
      <a
        href={site.whatsappQuote}
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden={!show}
        tabIndex={show ? 0 : -1}
        className={cn(
          "group fixed right-6 bottom-6 z-40 hidden h-14 items-center rounded-full border border-primary-foreground/20 bg-primary pr-4 pl-4 text-primary-foreground shadow-xl shadow-foreground/20 md:flex",
          motion,
        )}>
        <span className="relative flex size-6 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-accent/40 [animation-duration:2.5s]" />
          <MessageCircle className="relative size-6" />
        </span>
        <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr]">
          <span className="overflow-hidden whitespace-nowrap">
            <span className="block pl-2 font-medium">Get a free quote</span>
          </span>
        </span>
      </a>
    </>
  );
}
