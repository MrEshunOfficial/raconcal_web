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
  // Opens the chat with a starter message, so asking for a quote takes one tap.
  whatsappQuote: `https://wa.me/233247591129?text=${encodeURIComponent(
    "Hello Raconcal Ventures, I'd like a quote for ",
  )}`,
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

// Tall photos only: the About banner shows each one full-height beside the text.
export const aboutImages = [
  { src: `${IMG}/ceiling-tiered-cove-pendant.jpg`, alt: "Tiered cove ceiling with a pendant light" },
  { src: `${IMG}/office-stepped-ceiling-02.jpg`, alt: "Stepped office ceiling with warm cove light and spotlights" },
  { src: `${IMG}/corridor-linear-led-glass.jpg`, alt: "Corridor with linear LED ceiling lights and a glass door" },
  { src: `${IMG}/office-cove-ceiling-downlights.jpg`, alt: "Finished tray ceiling with warm cove light and downlights" },
  { src: `${IMG}/office-cove-ceiling-spotlights-02.jpg`, alt: "Office ceiling with cove lighting and spotlights by the window" },
];

export const services = [
  {
    icon: "layers",
    title: "Ceilings & Partitions",
    summary: "Gypsum, POP and acoustic ceilings, plus partition walls.",
    description:
      "Gypsum, POP, plaster board and acoustic ceilings, plus partition walls, built on steel frames with seamless joints.",
    image: `${IMG}/office-stepped-ceiling-01.jpg`,
  },
  {
    icon: "lightbulb",
    title: "Cove & LED Lighting",
    summary: "Cove strips, linear lines, downlights and spotlights.",
    description:
      "Warm cove strips, recessed linear lines, downlights and spotlights designed together with the ceiling.",
    image: `${IMG}/corridor-linear-led-downlights.jpg`,
  },
  {
    icon: "sparkles",
    title: "Wall Cladding & Feature Walls",
    summary: "Cladding, wallpaper and back-lit feature walls.",
    description:
      "Cement board and decorative cladding, wallpaper and back-lit feature walls, inside and out.",
    image: `${IMG}/feature-wall-oval-niches.jpg`,
  },
  {
    icon: "panels",
    title: "Aluminium Glazing",
    summary: "Framed windows, doors and glass partitions.",
    description:
      "Aluminium-framed windows, doors and glass partitions that keep spaces bright and open.",
    image: `${IMG}/glass-partition-wall.jpg`,
  },
  {
    icon: "building",
    title: "Office & Home Fit-outs",
    summary: "From bare shell to move-in ready, under one team.",
    description:
      "From bare shell to move-in ready: ceilings, lighting, partitions, curtains and finishes under one team.",
    image: `${IMG}/office-cove-ceiling-window-view.jpg`,
  },
] as const;

export const securityServices = [
  {
    icon: "cctv",
    title: "CCTV Installation",
    summary: "Watch your property live from your phone.",
    description: "Cameras and recording set up so you can watch your property from your phone.",
  },
  {
    icon: "zap",
    title: "Electric Fencing",
    summary: "Stops intruders before they reach the wall.",
    description: "Perimeter fencing that deters intruders before they reach the wall.",
  },
  {
    icon: "fingerprint",
    title: "Access Control",
    summary: "Card, code and fingerprint entry.",
    description: "Card, code and fingerprint entry for offices, gates and restricted rooms.",
  },
  {
    icon: "bell",
    title: "Video Doorbells",
    summary: "See and speak to visitors from anywhere.",
    description: "See and speak to whoever is at the door, wherever you are.",
  },
  {
    icon: "gate",
    title: "Gate Automation",
    summary: "Sliding and swing gates on a remote.",
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
  // From the June 2026 invoice. Client name and prices are kept off the site.
  title: "Home maintenance & cladding",
  status: "June 2026",
  summary:
    "Maintenance work on a home in the Airport area of Accra: new 6mm Shera cement board cladding, and the ceiling joints of the pool house and car port treated so they stay clean and crack-free.",
  scope: [
    "6mm Shera cement board cladding",
    "Pool house ceiling joints",
    "Car port ceiling joints",
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
