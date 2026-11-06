// Projects Data - Real projects with verified repositories & live links

export type ProjectStatus = "Built" | "Prototype" | "In Development" | "Concept";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  domain: string;
  tags: string[];
  status: ProjectStatus;
  headline: string;
  description: string;
  architectureHighlights: string[];
  problem: string;
  solution: string;
  technologies: string[];
  image?: string;
  github?: string;
  liveDemo?: string;
  featured: boolean;
  layoutVariant: "flagship" | "split" | "compact";
};

export const projects: Project[] = [
  {
    id: "agrisense-iot",
    title: "AgriSense IoT",
    subtitle: "Affordable smart infrastructure for real-time livestock environmental monitoring in Nigeria",
    category: "AgriTech • IoT • Offline-First",
    domain: "Smart Agriculture",
    tags: ["IoT", "Hardware", "AgriTech", "Offline-First", "SMS Gateway"],
    status: "In Development",
    headline: "Affordable smart infrastructure for real-time livestock environmental monitoring in Nigeria.",
    description:
      "AgriSense IoT is an offline-first environmental monitoring platform engineered specifically for livestock and poultry farmers in Northern Nigeria. It deploys localized sensors that detect dangerous temperature and humidity fluctuations, immediately triggering physical siren alarms and GSM-based SMS alerts directly to farmers' basic feature phones without requiring internet access or smartphones.",
    architectureHighlights: [
      "Offline-first architecture operating completely independent of internet connectivity",
      "Localized hardware siren and GSM SMS gateway for instant farmer alerts",
      "Selected for the prestigious, highly competitive iHatch Cohort 5 incubation programme",
      "Engineered to dramatically reduce heat-stress mortality rates in poultry farms",
    ],
    problem:
      "Extreme heat waves, poor ventilation, and humidity spikes in Northern Nigeria regularly cause severe mortality in poultry and livestock. Rural farmers typically lack smartphone access, reliable electricity, or consistent internet connectivity.",
    solution:
      "Engineered an offline-first sensor node with localized siren triggers and a cellular SMS dispatcher that sends critical threshold notifications directly to basic 2G handsets.",
    technologies: [
      "IoT Sensors",
      "Microcontroller Telemetry",
      "GSM / SMS Gateway",
      "Offline-First Systems",
      "Hardware Prototype",
    ],
    featured: true,
    layoutVariant: "flagship",
  },
  {
    id: "listingwriter",
    title: "ListingWriter",
    subtitle: "Open-source AI-powered property marketing assistant for Nigerian real estate agents",
    category: "AI • PropTech • Open Source",
    domain: "Applied AI",
    tags: ["AI", "Open Source", "LLM", "PropTech", "TypeScript", "Next.js"],
    status: "Built",
    headline: "An open-source AI-powered property marketing assistant designed for Nigerian real estate agents.",
    description:
      "ListingWriter is an open-source tool crafted to help Nigerian real estate professionals instantly turn raw property specs into persuasive, culturally resonant property descriptions for WhatsApp broadcasts, Instagram posts, and property marketplaces.",
    architectureHighlights: [
      "Open-source codebase on GitHub with clean developer documentation",
      "Tailored prompt templates calibrated specifically for Nigerian property terminology and buyer expectations",
      "Multi-channel output formatting (WhatsApp status, long-form listing, social media highlights)",
      "Zero-friction client interface built with TypeScript and modern frontend practices",
    ],
    problem:
      "Independent real estate agents in Nigeria spend hours manually drafting marketing blurbs, often struggling to present properties compellingly or adapt tone across WhatsApp and social channels.",
    solution:
      "Created an open-source AI assistant that ingests key amenities and neighborhood details to generate high-converting, professional listings in seconds.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Anthropic / OpenAI API",
      "Prompt Engineering",
    ],
    github: "https://github.com/hafeezmt/listingwriter",
    featured: true,
    layoutVariant: "split",
  },
  {
    id: "wizzyai",
    title: "WizzyAI",
    subtitle: "AI-powered learning companion concept designed to support African children",
    category: "AI • EdTech • Social Impact",
    domain: "Educational AI",
    tags: ["AI", "EdTech", "React", "Supabase", "Claude API"],
    status: "Prototype",
    headline: "An AI-powered learning companion concept designed to support African children.",
    description:
      "WizzyAI is an educational companion conceived to give African children ages 5–15 personalized, culturally grounded learning assistance. It incorporates six distinct adaptive modes: Homework Assistance, Interactive Storytelling, Curiosity Explorations, Skill Quizzes, Chat, and Creative Writing.",
    architectureHighlights: [
      "6 specialized learning modes adapted to curriculum and developmental milestones",
      "Integration with Claude (Anthropic) API for safe, child-appropriate educational dialogue",
      "Freemium architecture designed to scale across diverse socioeconomic backgrounds",
      "High-contrast, playful interface crafted for accessibility and low cognitive friction",
    ],
    problem:
      "Children across many African communities face high pupil-to-teacher ratios and lack access to individualized, patient tutoring adapted to their regional context.",
    solution:
      "Designed and prototyped an interactive, conversational learning companion that demystifies STEM and literacy concepts through engaging, culturally relevant storytelling.",
    technologies: [
      "React",
      "Claude API (Anthropic)",
      "Supabase",
      "Tailwind CSS",
      "Conversational UX",
    ],
    featured: true,
    layoutVariant: "split",
  },
  {
    id: "propabridge",
    title: "PropaBridge",
    subtitle: "Real-estate technology platform focused on digitizing Nigeria's property sector",
    category: "PropTech • Marketplace • Systems Design",
    domain: "Property Tech",
    tags: ["PropTech", "Marketplace", "Design Systems", "Framer", "QA Testing"],
    status: "Built",
    headline: "A real-estate technology platform focused on digitizing Nigeria's property sector.",
    description:
      "PropaBridge (by Zippatek) is a verified property marketplace operating across Abuja, Kaduna, and Minna. As Lead UI/UX Designer and Frontend Contributor, I spearheaded the comprehensive platform rebrand, user flows, 'Verified' badge authenticity mechanism, and Realtor Affiliate UX.",
    architectureHighlights: [
      "Complete design system and component architecture in Framer and Figma",
      "Realtor Affiliate Programme UX enabling verified agent onboarding and commission tracking",
      "Engineered structured QA documentation, GitHub PR reviews, and frontend component delivery",
      "Anti-fraud UX patterns reducing speculative listings and inspection fee fraud",
    ],
    problem:
      "The Nigerian property market suffers from chronic trust deficits, rampant duplicate listings, hidden agent fees, and unsafe offline payment processes.",
    solution:
      "Built a verification-first digital experience that verifies listings before display and standardizes communication between landlords, certified agents, and home seekers.",
    technologies: [
      "Figma",
      "Framer CMS",
      "HTML/CSS",
      "JavaScript",
      "GitHub QA Workflow",
    ],
    liveDemo: "https://propabridge.com",
    featured: true,
    layoutVariant: "flagship",
  },
  {
    id: "nomavault-ai",
    title: "NomaVault AI",
    subtitle: "AI and IoT-driven environmental monitoring concept for post-harvest grain preservation",
    category: "AgriTech • AI • IoT",
    domain: "Grain Preservation",
    tags: ["IoT", "AI", "ESP32", "Grain Storage", "Solar Powered"],
    status: "Concept",
    headline: "An AI and IoT-driven environmental monitoring concept.",
    description:
      "NomaVault AI is a solar-powered environmental monitoring concept designed to protect stored grains from post-harvest deterioration. By embedding CO2, humidity, and temperature sensors directly into silos and storage facilities, the system uses anomaly detection algorithms to predict mould outbreaks and insect infestation weeks before visible spoilage.",
    architectureHighlights: [
      "Multi-parameter telemetry combining CO2 sensing, temperature, and relative humidity",
      "Predictive anomaly detection alerting operators prior to widespread contamination",
      "Solar-powered battery backup designed for unreliable rural grid conditions",
      "Offline SMS alert integration mirroring AgriSense IoT proven communications model",
    ],
    problem:
      "African smallholders lose up to 30% of harvested grain to undetectable moisture buildup, mould, and weevil proliferation inside storage silos.",
    solution:
      "Architected a continuous multi-sensor node that translates micro-climate shifts into predictive early-warning signals dispatched via cellular networks.",
    technologies: [
      "ESP32",
      "CO2 & Temp Sensors",
      "GSM Telemetry",
      "Solar Power Circuitry",
      "Predictive Analytics",
    ],
    featured: true,
    layoutVariant: "compact",
  },
  {
    id: "tilawa-daily",
    title: "Tilawa Daily",
    subtitle: "Real-time WebRTC audio rooms and 5-Hizb daily reading platform for Quran recitation circles",
    category: "WebRTC • Real-Time Systems • EdTech",
    domain: "Real-Time Audio",
    tags: ["WebRTC", "Next.js", "React", "Tailwind CSS", "Real-Time Audio"],
    status: "Built",
    headline: "Real-time WebRTC audio platform and daily schedule app for virtual Quran recitation Halaqahs.",
    description:
      "Tilawa Daily enables virtual community recitation circles across geographical boundaries with low-latency WebRTC voice rooms, a live queue system for participants, interactive Mushaf navigation, and a coordinated 5-Hizb daily reading schedule.",
    architectureHighlights: [
      "Low-latency WebRTC peer connections with audio spectrum visualization",
      "Synchronized real-time reciter queue management",
      "Interactive digital Mushaf text viewer synced with recitation sessions",
      "Deployed and fully operational on Vercel with responsive desktop and mobile views",
    ],
    problem:
      "Coordinating daily recitation circles across distributed groups required juggling multiple disparate apps for audio calling, text reading, and queue organization.",
    solution:
      "Engineered an all-in-one web application uniting peer-to-peer audio, queuing algorithms, and reading schedules in a single lightweight interface.",
    technologies: [
      "Next.js",
      "React",
      "WebRTC",
      "Tailwind CSS",
      "Vercel",
    ],
    image: "/images/projects/tilawa-daily.png",
    liveDemo: "https://tilawa-daily.vercel.app",
    featured: true,
    layoutVariant: "split",
  },
];
