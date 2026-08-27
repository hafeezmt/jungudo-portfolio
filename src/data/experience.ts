// Experience Data

export type ExperienceItem = {
  title: string;
  category: string;
  period: string;
  description: string;
  technologies?: string[];
};

// Only verified experience is listed here.
// Add real experience items as they become available.
export const experience: ExperienceItem[] = [
  {
    title: "AI & Data Science Exploration",
    category: "Technology & AI",
    period: "Ongoing",
    description:
      "Actively learning and experimenting with machine learning concepts, data analysis using Python (NumPy, Pandas, Matplotlib), and exploring generative AI applications through personal projects.",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Generative AI"],
  },
  {
    title: "Software & Web Development",
    category: "Technology & AI",
    period: "Ongoing",
    description:
      "Building responsive web applications and interactive UIs using React, Next.js, TypeScript, and Tailwind CSS as part of personal learning and project development.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Geospatial & GIS Practice",
    category: "Geospatial",
    period: "Ongoing",
    description:
      "Working with QGIS to process and visualize spatial data, exploring property mapping concepts, and learning how location-based technology can solve real-world problems.",
    technologies: ["QGIS", "GIS", "Spatial Data", "Mapping"],
  },
  {
    title: "AgriTech Concept Development",
    category: "Innovation",
    period: "Ongoing",
    description:
      "Designing and prototyping IoT-based agricultural monitoring solutions, including NomaVault AI and AgriSense IoT, to address post-harvest losses and livestock monitoring challenges.",
    technologies: ["ESP32", "IoT Sensors", "GSM", "Data Analysis"],
  },
];
