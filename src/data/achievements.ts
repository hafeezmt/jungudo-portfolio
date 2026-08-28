// Achievements Data - Updated from official CV

export type Achievement = {
  title: string;
  organization: string;
  year?: string;
  credentialUrl?: string;
  category: "AI" | "Data" | "Design" | "GIS" | "Development" | "Entrepreneurship" | "Community";
  description: string;
};

export const achievements: Achievement[] = [
  {
    title: "Selected for iHatch Cohort 5 Incubation",
    organization: "iHatch Accelerator",
    year: "2025",
    category: "Entrepreneurship",
    description:
      "Selected for the competitive iHatch Cohort 5 incubation programme for AgriSense IoT — one of Nigeria's premier agri-tech accelerator initiatives.",
  },
  {
    title: "Solo Founder — WizzyAI Launch",
    organization: "WizzyAI",
    year: "2026",
    category: "AI",
    description:
      "Conceived, built, and launched a functional AI-powered children's educational platform integrating 6 adaptive learning modes with zero institutional funding.",
  },
  {
    title: "Full Product Rebrand Lead — PropaBridge",
    organization: "PropaBridge (Zippatek)",
    year: "2025",
    category: "Design",
    description:
      "Successfully led the full product rebrand and UI/UX design architecture for VC-backed Nigerian real estate marketplace serving Abuja, Kaduna, and Minna.",
  },
];
