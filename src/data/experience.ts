// Experience and Leadership Data - Verified timeline of startup ventures, hackathons, presentations, and community leadership

export type ExperienceItem = {
  role: string;
  organization: string;
  location?: string;
  organizationUrl?: string;
  category: "Startup & Venture" | "Technical Presentation" | "Hackathon & Innovation" | "Community & Leadership" | "Product Engineering";
  period: string;
  summary: string;
  details: string[];
  skills: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "Co-Founder & Operations Lead",
    organization: "AgriSense IoT",
    location: "Nigeria",
    category: "Startup & Venture",
    period: "2025 – Present",
    summary:
      "Co-founded an offline-first smart agriculture startup building low-cost environmental monitoring systems for livestock and poultry farmers in Northern Nigeria.",
    details: [
      "Selected for the competitive iHatch Cohort 5 incubation programme run by NITDA and JICA.",
      "Spearheaded operational roadmap, stakeholder communications, and go-to-market strategy for low-connectivity rural environments.",
      "Architected product requirement specifications for hardware prototype combining local sirens with GSM SMS gateways.",
      "Coordinated pilot testing frameworks to address poultry heat-stress mortality in Northern Nigerian farms.",
    ],
    skills: ["IoT Telemetry", "Offline-First Systems", "GSM Gateways", "Startup Operations", "Product Roadmap"],
  },
  {
    role: "Presenter & Technical Contributor",
    organization: "BUILD26",
    location: "Nigeria",
    category: "Technical Presentation",
    period: "2026",
    summary:
      "Delivered a peer-reviewed poster presentation highlighting engineering concepts and technological frameworks addressing pressing African infrastructural challenges.",
    details: [
      "Authored and showcased a technical poster presentation on accessible, low-bandwidth digital solutions for regional impact.",
      "Engaged with engineers, researchers, and technology leaders on adapting modern software paradigms to emerging market constraints.",
      "Demonstrated how localized hardware-software hybrid systems can solve urgent agricultural and societal problems.",
    ],
    skills: ["Technical Presentation", "Research Communication", "Systems Design", "Technology for Africa"],
  },
  {
    role: "Hackathon Participant & Innovator",
    organization: "Global MedTech Hackathon",
    location: "Virtual / International",
    category: "Hackathon & Innovation",
    period: "2025",
    summary:
      "Participated in an intensive global healthcare technology hackathon, collaborating on digital health solutions and medical technology concepts.",
    details: [
      "Collaborated in a fast-paced multidisciplinary team to ideate, prototype, and pitch digital health interventions.",
      "Contributed product design thinking, user flow architecture, and rapid prototyping under strict time constraints.",
      "Analyzed health delivery bottlenecks in underserved regions to formulate practical, scalable technological remedies.",
    ],
    skills: ["Rapid Prototyping", "MedTech UX", "Cross-Disciplinary Teamwork", "Hackathon Ideation"],
  },
  {
    role: "Community Member & Active Participant",
    organization: "Google Developer Groups (GDG)",
    location: "Nigeria",
    category: "Community & Leadership",
    period: "2024 – Present",
    summary:
      "Active participant in Google Developer Group technical sessions, developer meetups, open workshops, and peer developer mentorship.",
    details: [
      "Participate regularly in developer meetups, DevFest sessions, and hands-on technical workshops exploring Google technologies, web standards, and cloud tools.",
      "Engage with regional developer communities in Northern Nigeria to share open-source practices and modern software workflows.",
      "Collaborate with fellow student engineers on collaborative coding challenges and tech ecosystem initiatives.",
    ],
    skills: ["Developer Ecosystem", "Community Building", "Peer Learning", "Open Source"],
  },
  {
    role: "Lead UI/UX Designer & Frontend QA",
    organization: "PropaBridge (Zippatek)",
    organizationUrl: "https://propabridge.com",
    location: "Abuja / Kaduna / Minna, Nigeria",
    category: "Product Engineering",
    period: "2025 – Present",
    summary:
      "Led full design system revamp and verified marketplace experience for a property technology platform digitizing real estate in Northern Nigeria.",
    details: [
      "Designed full component system, navigation hierarchy, and anti-fraud 'Verified' listing workflows in Framer CMS.",
      "Engineered Realtor Affiliate Programme UX, increasing trusted agent onboarding across Abuja and Kaduna.",
      "Established quality assurance documentation and managed GitHub pull request reviews with cross-functional engineers.",
    ],
    skills: ["Design Systems", "Framer CMS", "Figma", "HTML/CSS", "GitHub Workflow", "QA Testing"],
  },
  {
    role: "Founder & Lead Developer",
    organization: "WizzyAI",
    location: "Nigeria",
    category: "Startup & Venture",
    period: "2026",
    summary:
      "Conceived, prototyped, and launched an AI-powered conversational learning companion tailored for African children ages 5–15.",
    details: [
      "Architected adaptive learning modes combining homework guidance, cultural storytelling, quizzes, and open exploration.",
      "Integrated Anthropic Claude API with custom safety guardrails and localized pedagogical prompts.",
      "Constructed working interactive prototype with React, Supabase, and responsive web styling under lean resource constraints.",
    ],
    skills: ["React", "Claude API", "Supabase", "Conversational AI", "Pedagogical UX"],
  },
  {
    role: "Founder",
    organization: "KBS Creation",
    location: "Gombe State, Nigeria",
    category: "Startup & Venture",
    period: "2023 – Present",
    summary:
      "Founded and manage a gift & décor enterprise in Gombe State, gaining deep entrepreneurial grounding in end-to-end commerce operations.",
    details: [
      "Direct end-to-end client engagement, localized digital marketing, material sourcing, and fulfillment logistics.",
      "Built resilient operational skills managing supplier relationships and custom client deliverables.",
    ],
    skills: ["Entrepreneurship", "Operations Management", "Customer Engagement", "Logistics"],
  },
];
