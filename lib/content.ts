const IMG = "/images/raconcal_images";
const VID = "/images/raconcal_videos";

// TODO: replace placeholder contact details with the real ones.
export const site = {
  name: "Raconcal Ventures",
  tagline: "Ceilings, lighting & interiors, finished with care.",
  phone: "+000 000 000 000",
  email: "hello@raconcal.com",
  location: "Your city, Country",
  whatsapp: "https://wa.me/000000000000",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const heroImages = {
  main: {
    src: `${IMG}/corridor-linear-led-glass.jpg`,
    alt: "Office corridor with recessed linear LED lines and glass partitions",
  },
  accent: {
    src: `${IMG}/feature-wall-oval-niches.jpg`,
    alt: "Feature wall with three back-lit oval niches",
  },
};

export const stats = [
  { value: "Gypsum", label: "& POP ceilings" },
  { value: "LED", label: "cove & linear lighting" },
  { value: "Turnkey", label: "office fit-outs" },
];

export const processSlides = [
  {
    src: `${IMG}/process-ceiling-framing.jpg`,
    alt: "Team fixing gypsum boards to the ceiling frame on scaffolding",
    caption: "Framing & boarding",
  },
  {
    src: `${IMG}/process-ceiling-opening.jpg`,
    alt: "Ceiling opening left for ducting and services",
    caption: "Services coordinated in the ceiling void",
  },
  {
    src: `${IMG}/process-ceiling-boarding.jpg`,
    alt: "Drop ceiling being boarded around the steel grid",
    caption: "Levels and coves set out",
  },
  {
    src: `${IMG}/office-cove-ceiling-downlights.jpg`,
    alt: "Finished tray ceiling with warm cove light and downlights",
    caption: "The finished result",
  },
];

export const services = [
  {
    icon: "layers",
    title: "Gypsum & POP Ceilings",
    description:
      "Tray, stepped and drop ceilings built on steel frames, with clean shadow gaps and seamless joints.",
    image: `${IMG}/office-stepped-ceiling-01.jpg`,
  },
  {
    icon: "lightbulb",
    title: "Cove & LED Lighting",
    description:
      "Warm cove strips, recessed linear lines, downlights and spotlights designed together with the ceiling.",
    image: `${IMG}/corridor-linear-led-downlights.jpg`,
  },
  {
    icon: "sparkles",
    title: "Feature Walls",
    description:
      "Back-lit niches and sculpted wall details that give a room its signature moment.",
    image: `${IMG}/feature-wall-oval-niches.jpg`,
  },
  {
    icon: "panels",
    title: "Glass Partitions",
    description:
      "Framed glass walls and doors that divide offices while keeping them bright and open.",
    image: `${IMG}/glass-partition-wall.jpg`,
  },
  {
    icon: "building",
    title: "Office Fit-outs",
    description:
      "From bare shell to move-in ready: ceilings, lighting, partitions and finishes under one team.",
    image: `${IMG}/office-cove-ceiling-window-view.jpg`,
  },
] as const;

export const currentProject = {
  title: "High-rise office fit-out",
  status: "Nearing completion",
  summary:
    "A full ceiling and lighting package across open offices, meeting rooms and corridors: tray ceilings with warm cove light, triple-head spotlights, recessed linear LED corridors and glass-partitioned offices.",
  scope: [
    "Gypsum tray & stepped ceilings",
    "Cove, linear & spot lighting",
    "AC cassette & services integration",
    "Glass partition walls",
  ],
  gallery: [
    {
      src: `${IMG}/office-cove-ceiling-window-view.jpg`,
      alt: "Open office with cove-lit tray ceiling and floor-to-ceiling windows",
    },
    {
      src: `${IMG}/corridor-linear-led-entrance.jpg`,
      alt: "Corridor with recessed linear LED lines leading to the exit",
    },
    {
      src: `${IMG}/office-cove-ceiling-spotlights.jpg`,
      alt: "Tray ceiling with triple-head spotlights and cove lighting",
    },
    {
      src: `${IMG}/office-cove-ceiling-pendant.jpg`,
      alt: "Stepped cove ceiling with a linear pendant light",
    },
    {
      src: `${IMG}/glass-partition-wall.jpg`,
      alt: "Row of framed glass office partitions",
    },
    {
      src: `${IMG}/office-cove-ceiling-spotlights-02.jpg`,
      alt: "Cove ceiling with spotlights above a tall window",
    },
  ],
  videos: [
    { src: `${VID}/project-walkthrough-01.mp4`, title: "Walkthrough 1" },
    { src: `${VID}/project-walkthrough-02.mp4`, title: "Walkthrough 2" },
  ],
};
