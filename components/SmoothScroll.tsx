"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Eased, inertial page scrolling. In-page links glide to their section (honouring scroll-margin),
// and it pauses on its own while something locks the page (overflow: hidden), like the photo viewer.
// Skipped entirely for people who ask for reduced motion.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: true, autoToggle: true, lerp: 0.09 });
    return () => lenis.destroy();
  }, []);
  return null;
}
