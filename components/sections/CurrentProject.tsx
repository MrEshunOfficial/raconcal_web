"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Expand, Play, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { currentProject } from "@/lib/content";
import { CarouselArrows, useCarousel } from "./Carousel";
import { CornerFrame, RevealWords, rise, useInView } from "./Reveal";

const { gallery, videos } = currentProject;

function Intro() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const wordCount = currentProject.title.split(" ").length;
  const after = 200 + wordCount * 70;

  return (
    <div
      ref={ref}
      className="relative mb-10 grid gap-6 p-5 sm:mb-14 sm:gap-8 sm:p-8 lg:grid-cols-2 lg:items-end">
      <CornerFrame show={inView} color="bg-primary-foreground" />
      <div className="flex flex-col gap-4">
        <p {...rise(inView, 100)}>
          <span className="block text-xs font-medium tracking-[0.2em] uppercase opacity-70">
            Latest project · {currentProject.status}
          </span>
        </p>
        <h2 className="text-3xl font-medium sm:text-4xl">
          <RevealWords text={currentProject.title} show={inView} delay={200} />
        </h2>
        <p {...rise(inView, after)}>
          <span className="block opacity-70">{currentProject.summary}</span>
        </p>
      </div>
      <ul className="flex flex-wrap gap-2 lg:justify-end">
        {currentProject.scope.map((item, i) => (
          <li key={item} {...rise(inView, after + 100 + i * 80)}>
            <span className="block rounded-full border border-primary-foreground/20 px-3 py-1 text-sm">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Full-screen viewer: swipe, arrow keys or the edge arrows to move, Esc or the backdrop to close.
function Lightbox({ start, onClose }: { start: number; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const { index, goTo, next, back, swipe, slideClass, style } = useCarousel(
    gallery.length,
    { fadeOut: true },
  );

  useEffect(() => {
    goTo(start);
    dialog.current?.showModal();
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
    // Only on open: `start` is the photo that was clicked.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <dialog
      ref={dialog}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") back();
      }}
      aria-label="Project photos"
      className="group/carousel m-0 h-dvh overflow-hidden overscroll-contain max-h-none w-screen max-w-none bg-black p-0 text-white animate-in fade-in duration-300 backdrop:bg-black/60">
      <div
        className="pointer-events-none absolute inset-0 sm:inset-x-20 sm:inset-y-16"
        style={style}
        {...swipe}>
        {gallery.map((image, i) => (
          <div
            key={image.src}
            aria-hidden={i !== index}
            className={cn("absolute inset-0", slideClass(i))}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="pointer-events-auto object-contain"
            />
          </div>
        ))}
      </div>
      <CarouselArrows label="photo" onBack={back} onNext={next} />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-6">
        <p className="text-sm tabular-nums text-white/70">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(gallery.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          autoFocus
          aria-label="Close"
          onClick={() => dialog.current?.close()}
          className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
          <X className="size-5" />
        </button>
      </div>
      <p className="absolute inset-x-0 bottom-0 p-4 text-center text-sm text-white/70 sm:p-6">
        {gallery[index].alt}
      </p>
    </dialog>
  );
}

function Gallery() {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div
        ref={ref}
        className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 md:grid-rows-2">
        {gallery.slice(0, 5).map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`View photo: ${image.alt}`}
            style={{ transitionDelay: `${i * 90}ms` }}
            className={cn(
              "group relative overflow-hidden rounded-xl transition-[opacity,transform] duration-900 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:outline-none motion-reduce:transition-none",
              "ease-[cubic-bezier(0.22,1,0.36,1)]",
              i === 0
                ? "col-span-2 aspect-square md:row-span-2 md:aspect-auto"
                : "aspect-square",
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}>
            <Image
              src={image.src}
              alt=""
              fill
              sizes={
                i === 0
                  ? "(min-width: 768px) 50vw, 100vw"
                  : "(min-width: 768px) 25vw, 50vw"
              }
              className="scroll-parallax object-cover transition-[scale] duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
            <span className="absolute right-3 bottom-3 flex size-9 scale-75 items-center justify-center rounded-full bg-white/90 text-neutral-900 opacity-0 transition-[opacity,scale] duration-300 group-hover:scale-100 group-hover:opacity-100">
              <Expand className="size-4" />
            </span>
          </button>
        ))}
      </div>
      {open !== null && <Lightbox start={open} onClose={() => setOpen(null)} />}
    </>
  );
}

function formatTime(seconds: number) {
  const s = Math.floor(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

// Shows a frame of the video with a big play button; the browser controls appear once it plays.
function VideoCard({
  src,
  title,
  delay,
  show,
}: {
  src: string;
  title: string;
  delay: number;
  show: boolean;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);

  // Metadata may have loaded before hydration, when onLoadedMetadata wasn't attached yet.
  useEffect(() => {
    const v = video.current;
    if (v && v.readyState >= 1) setDuration(v.duration);
  }, []);

  function play() {
    setStarted(true);
    video.current?.play();
  }

  return (
    <figure {...rise(show, delay)}>
      <div className="group relative aspect-video overflow-hidden rounded-xl bg-black">
        <video
          ref={video}
          src={`${src}#t=0.5`}
          controls={started}
          preload="metadata"
          playsInline
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          className="size-full object-cover"
        />
        {!started && (
          <button
            type="button"
            onClick={play}
            aria-label={`Play ${title}`}
            className="absolute inset-0 flex flex-col justify-between bg-linear-to-t from-black/70 via-black/10 to-black/20 p-4 text-left text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-inset sm:p-5">
            <span className="self-end rounded-full bg-black/40 px-2.5 py-1 text-xs tabular-nums backdrop-blur">
              {duration ? formatTime(duration) : "Video"}
            </span>
            <span className="absolute top-1/2 left-1/2 flex size-16 -translate-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110 sm:size-20">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/30 animation-duration-[2s]" />
              <Play className="relative ml-1 size-6 fill-current sm:size-7" />
            </span>
            <span className="font-medium">{title}</span>
          </button>
        )}
      </div>
    </figure>
  );
}

function Videos() {
  const [ref, inView] = useInView<HTMLDivElement>(0.25);
  return (
    <div ref={ref} className="mt-2 grid gap-2 sm:mt-3 sm:gap-3 md:grid-cols-2">
      {videos.map((v, i) => (
        <VideoCard key={v.src} {...v} show={inView} delay={i * 150} />
      ))}
    </div>
  );
}

export default function CurrentProject() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Intro />
        <Gallery />
        <Videos />
      </div>
    </section>
  );
}
