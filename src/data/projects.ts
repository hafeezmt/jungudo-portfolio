// Projects Data - Updated from official CV

export type ProjectStatus = "Built" | "Prototype" | "Concept" | "In Development";

export type Project = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  status: ProjectStatus;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  image?: string;
  github?: string;
  liveDemo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "wizzyai",
    title: "WizzyAI",
    category: "AI • EdTech • Social Impact",
    tags: ["AI", "EdTech", "Social Impact"],
    status: "Prototype",
    shortDescription:
      "An AI-powered learning companion for African children aged 5–15 featuring 6 adaptive learning modes.",
    description:
      "Conceived and built WizzyAI as a solo founder — an AI-powered learning companion for children in Africa integrating six adaptive learning modes: Chat, Homework Help, Stories, Quiz, Curiosity, and Creative Writing.",
    problem:
      "Children across Africa often lack personalized, engaging, and context-aware educational support adapted to local learning needs.",
    solution:
      "Architected a freemium app powered by the Claude (Anthropic) API, React, and Supabase to deliver adaptive, interactive learning experiences across six specialized learning modes.",
    technologies: [
      "React",
      "Claude API (Anthropic)",
      "Supabase",
      "UI/UX Design",
      "Lovable",
      "v0",
      "Windsurf",
    ],
    featured: true,
  },
  {
    id: "propabridge",
    title: "PropaBridge",
    category: "PropTech • Real Estate • UI/UX",
    tags: ["PropTech", "UI/UX"],
    status: "Built",
    shortDescription:
      "A verification-first Nigerian real estate marketplace serving Abuja, Kaduna, and Minna.",
    description:
      "Led full product rebrand and UI/UX design for PropaBridge (Zippatek), a verified real estate platform protecting home buyers and renters from fake listings.",
    problem:
      "Real estate in Nigeria suffers from fake listings, fraud, inspection fee extortion, and lack of transparency.",
    solution:
      "Designed navigation architecture, listing cards, Realtor Affiliate Programme UX, 'Verified' badge system, and Framer CMS components to build a trusted property platform.",
    technologies: ["Framer", "Figma", "UI/UX Design", "Framer CMS", "HTML/CSS", "GitHub QA"],
    liveDemo: "https://propabridge.com",
    featured: true,
  },
  {
    id: "agrisense-iot",
    title: "AgriSense IoT",
    category: "AgriTech • IoT • Offline-First",
    tags: ["AgriTech", "IoT"],
    status: "In Development",
    shortDescription:
      "An offline-first farm environmental monitoring startup for Northern Nigeria. Selected for iHatch Cohort 5.",
    description:
      "Co-founded AgriSense IoT to monitor livestock and poultry environments operating offline-first via SMS and siren-based alerts — requiring no smartphone.",
    problem:
      "Extreme heat, humidity, and poor air quality harm poultry and livestock in Northern Nigeria, where farmers often lack smartphones or internet connectivity.",
    solution:
      "Built sensor-based monitoring that triggers immediate localized siren and SMS alerts directly to farmers' basic feature phones.",
    technologies: [
      "IoT Sensors",
      "Offline-First Architecture",
      "SMS Gateway",
      "Siren Alerts",
      "Hardware Prototype",
    ],
    featured: true,
  },
  {
    id: "nomavault-ai",
    title: "NomaVault AI",
    category: "AgriTech • AI • IoT",
    tags: ["AgriTech", "AI", "IoT"],
    status: "In Development",
    shortDescription:
      "An offline-first grain storage monitoring solution designed to reduce post-harvest crop losses.",
    description:
      "NomaVault AI combines IoT sensors, CO₂ sensing, solar power, and offline SMS alerts to protect stored grains from temperature spikes, pests, and fungal decay.",
    problem:
      "Grain storage operators in rural Africa lose massive crop volumes post-harvest due to undetected moisture and temperature shifts.",
    solution:
      "ESP32-driven multi-sensor nodes with solar power and GSM connectivity to deliver real-time environmental warnings.",
    technologies: [
      "ESP32",
      "Sensors (Temp/Humidity/CO₂)",
      "GSM Module",
      "Solar Power",
      "AI Data Analysis",
    ],
    featured: false,
  },
  {
    id: "trashgo",
    title: "TrashGo",
    category: "CleanTech • Social Impact",
    tags: ["CleanTech", "Social Impact"],
    status: "Concept",
    shortDescription:
      "A digital waste management concept connecting communities with recycling services through digital rewards.",
    description:
      "Designed a platform allowing users to REGISTER → REQUEST COLLECTION → SORT → EARN, creating financial incentives for sustainable waste practices.",
    problem:
      "Inefficient municipal waste collection and lack of recycling incentives lead to environmental degradation.",
    solution:
      "A user-friendly digital marketplace connecting waste collectors with households, offering digital tokens for sorted recyclable materials.",
    technologies: ["Web App", "UI/UX Design", "Digital Rewards", "Maps"],
    featured: false,
  },
  {
    id: "property-explorer",
    title: "Property Explorer",
    category: "PropTech • Geospatial",
    tags: ["PropTech", "Geospatial"],
    status: "Concept",
    shortDescription:
      "Geospatial property mapping using GIS and QGIS tools to visualize and verify spatial property data.",
    description:
      "Explored QGIS mapping and location-based data to verify property boundaries and visualize spatial real estate information.",
    problem:
      "Inaccurate boundary mapping and difficult property verification in regional African property markets.",
    solution:
      "Integrated GIS spatial layers with map visualization tools for accurate location verification.",
    technologies: ["QGIS", "GIS", "Geospatial Data", "Spatial Mapping"],
    featured: false,
  },
];
