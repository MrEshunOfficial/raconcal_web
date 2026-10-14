import React from "react";
import Image from "next/image";
import { currentProject } from "@/lib/content";

export default function CurrentProject() {
  const [feature, ...rest] = currentProject.gallery;

  return (
    <section id="projects" className="scroll-mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-8 grid gap-6 sm:mb-12 sm:gap-8 lg:grid-cols-2 lg:items-end">
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase opacity-70">
              <span className="size-2 animate-pulse rounded-full bg-accent" />
              Current project · {currentProject.status}
            </p>
            <h2 className="text-3xl font-medium sm:text-4xl">{currentProject.title}</h2>
            <p className="opacity-70">{currentProject.summary}</p>
          </div>
          <ul className="flex flex-wrap gap-2 lg:justify-end">
            {currentProject.scope.map((item) => (
              <li
                key={item}
                className="rounded-full border border-primary-foreground/20 px-3 py-1 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 md:grid-rows-2">
          <div className="relative col-span-2 aspect-square overflow-hidden rounded-xl md:row-span-2 md:aspect-auto">
            <Image
              src={feature.src}
              alt={feature.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          {rest.slice(0, 4).map((image) => (
            <div key={image.src} className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:mt-12 md:grid-cols-2">
          {currentProject.videos.map((video) => (
            <figure key={video.src} className="flex flex-col gap-2">
              <video
                src={video.src}
                controls
                preload="metadata"
                playsInline
                className="aspect-video w-full rounded-xl bg-black object-cover"
              />
              <figcaption className="text-sm opacity-70">{video.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
