const IMG = "/images/raconcal_images";
const VID = "/images/raconcal_videos";

export const site = {
  name: "Raconcal Ventures",
  slogan: "Build in styles.",
  tagline: "Interiors, security & building supplies.",
  phones: ["+233 24 759 1129", "+233 27 612 2088"],
  email: "raconcalventures@gmail.com",
  location: "Kotoku, Medie, off Nsawam Road, Accra",
  postal: "P.O. Box LT 314, Lartebiokorshie, Accra",
  whatsapp: "https://wa.me/233247591129",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "5+", label: "Years" },
  { value: "100+", label: "Projects" },
  { value: "13", label: "Services" },
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
    title: "Ceilings & Partitions",
    description:
      "Gypsum, POP, plaster board and acoustic ceilings, plus partition walls, built on steel frames with seamless joints.",
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
    title: "Wall Cladding & Feature Walls",
    description:
      "Cement board and decorative cladding, wallpaper and back-lit feature walls, inside and out.",
    image: `${IMG}/feature-wall-oval-niches.jpg`,
  },
  {
    icon: "panels",
    title: "Aluminium Glazing",
    description:
      "Aluminium-framed windows, doors and glass partitions that keep spaces bright and open.",
    image: `${IMG}/glass-partition-wall.jpg`,
  },
  {
    icon: "building",
    title: "Office & Home Fit-outs",
    description:
      "From bare shell to move-in ready: ceilings, lighting, partitions, curtains and finishes under one team.",
    image: `${IMG}/office-cove-ceiling-window-view.jpg`,
  },
] as const;

export const securityServices = [
  {
    icon: "cctv",
    title: "CCTV Installation",
    description: "Cameras and recording set up so you can watch your property from your phone.",
  },
  {
    icon: "zap",
    title: "Electric Fencing",
    description: "Perimeter fencing that deters intruders before they reach the wall.",
  },
  {
    icon: "fingerprint",
    title: "Access Control",
    description: "Card, code and fingerprint entry for offices, gates and restricted rooms.",
  },
  {
    icon: "bell",
    title: "Video Doorbells",
    description: "See and speak to whoever is at the door, wherever you are.",
  },
  {
    icon: "gate",
    title: "Gate Automation",
    description: "Motorised sliding and swing gates you open with a remote.",
  },
] as const;

export const supplies = [
  "Ceiling boards & accessories",
  "Wall cladding boards",
  "Wallpaper",
  "Curtains",
  "Building materials",
];

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
