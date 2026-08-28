// Experience Data - Updated from official CV

export type ExperienceItem = {
  title: string;
  company?: string;
  companyUrl?: string;
  category: string;
  period: string;
  description: string;
  technologies?: string[];
  highlights?: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Founder & Product Lead",
    company: "WizzyAI",
    category: "Professional • Startup",
    period: "April 2026 – Present",
    description:
      "Conceived, built, and launched WizzyAI — an AI-powered learning companion for African children aged 5–15. Integrated six adaptive learning modes: Chat, Homework Help, Stories, Quiz, Curiosity, and Creative Writing.",
    technologies: ["React", "Supabase", "Claude API (Anthropic)", "UI/UX Design", "Lovable", "v0", "Windsurf"],
    highlights: [
      "Architected a freemium model targeting Nigerian school children.",
      "Designed brand identity, UX flows, and frontend interface; created full business plan and pitch materials for hackathons and incubators.",
      "Delivered a working prototype under resource constraints using AI-assisted no-code and low-code tools.",
    ],
  },
  {
    title: "Lead UI/UX Designer",
    company: "PropaBridge (Zippatek)",
    companyUrl: "https://propabridge.com",
    category: "Professional",
    period: "2025 – Present",
    description:
      "Led full product rebrand for PropaBridge — a verified property listings marketplace serving Abuja, Kaduna, and Minna.",
    technologies: ["Framer", "Figma", "UI/UX Design", "Framer CMS", "HTML/CSS", "GitHub", "QA Testing"],
    highlights: [
      "Redesigned navigation architecture, landing copy, and listing card components.",
      "Designed and delivered email HTML template, 'Verified' listing badge, and Realtor Affiliate Programme UX in Framer CMS.",
      "Produced formal QA documentation, managed GitHub PRs, and coordinated frontend tasks across cross-functional team.",
      "Conducted UX audits and contributed to digital strategy and partner onboarding.",
    ],
  },
  {
    title: "Co-Founder & Operations Lead",
    company: "AgriSense IoT",
    category: "Professional • Startup",
    period: "2025 – Present",
    description:
      "Co-founded an environmental monitoring startup for poultry and livestock farms in Northern Nigeria, designed to operate offline-first via SMS and siren alerts — no smartphone required.",
    technologies: ["IoT Systems", "Offline-First Design", "SMS Alerts", "Startup Operations", "Go-To-Market"],
    highlights: [
      "Selected for the competitive iHatch Cohort 5 incubation programme.",
      "Developed MVP roadmap, pitch deck, team structure, and demo video materials.",
      "Led operations, programme submissions, stakeholder communications, and website build strategy.",
    ],
  },
  {
    title: "Founder",
    company: "KBS Creation",
    category: "Entrepreneurship",
    period: "2023 – Present",
    description:
      "Founded and operate a gift and décor business serving individual and corporate clients in Gombe State, Nigeria.",
    technologies: ["Product Sourcing", "Customer Engagement", "Social Media Marketing", "Order Fulfilment"],
    highlights: [
      "Manage end-to-end operations including sourcing, marketing, and client order fulfillment.",
    ],
  },
];
