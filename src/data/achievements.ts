// Achievements and Recognition Data - Verified accomplishments across innovation, technical presentations, open source, and academia

export type Achievement = {
  id: string;
  title: string;
  category: "Innovation & Startup" | "Technical Presentation" | "Open Source" | "Hackathon" | "Academic";
  organization: string;
  year: string;
  description: string;
  metric?: string;
  badge?: string;
};

export const achievements: Achievement[] = [
  {
    id: "ihatch-5",
    title: "Selected for iHatch Cohort 5 Incubation",
    category: "Innovation & Startup",
    organization: "NITDA & JICA (iHatch Accelerator)",
    year: "2025",
    description:
      "AgriSense IoT was selected for Cohort 5 of the prestigious iHatch incubation program, recognizing its offline-first IoT livestock environmental monitoring solution for Northern Nigeria.",
    metric: "Cohort 5 Finalist",
    badge: "Startup Accelerator",
  },
  {
    id: "build26-poster",
    title: "BUILD26 Technical Poster Presentation",
    category: "Technical Presentation",
    organization: "BUILD26 Conference",
    year: "2026",
    description:
      "Presented a technical engineering poster detailing resilient, low-connectivity system architectures and practical tech applications designed for African operational environments.",
    metric: "Technical Presenter",
    badge: "Engineering Showcase",
  },
  {
    id: "medtech-hackathon",
    title: "Global MedTech Hackathon Participant",
    category: "Hackathon",
    organization: "Global MedTech Initiative",
    year: "2025",
    description:
      "Competed in an international healthcare innovation hackathon, collaborating on technology-driven healthcare solutions addressing underserved regional communities.",
    metric: "Global Participant",
    badge: "Hackathon Innovator",
  },
  {
    id: "listingwriter-oss",
    title: "Open-Source Creator — ListingWriter",
    category: "Open Source",
    organization: "GitHub Community",
    year: "2026",
    description:
      "Designed, developed, and open-sourced ListingWriter — an AI-powered property marketing assistant created specifically for Nigerian real estate professionals.",
    metric: "Open Source",
    badge: "Public Tooling",
  },
  {
    id: "academic-excellence",
    title: "Dual Academic Focus: Computer Science & Statistics",
    category: "Academic",
    organization: "University of the People & Gombe State University",
    year: "Ongoing",
    description:
      "Pursuing a rigorous dual-discipline academic foundation in B.Sc. Computer Science (UoPeople) and B.Sc. Statistics (GSU), uniting theoretical software engineering with probabilistic modelling.",
    metric: "Dual Focus",
    badge: "Academic Rigor",
  },
];
