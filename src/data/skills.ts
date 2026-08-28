// Skills Data - Updated from official CV

export type SkillGroup = {
  category: string;
  icon: string;
  color: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Design & Product",
    icon: "🎨",
    color: "pink",
    items: [
      "UI/UX Design",
      "Figma",
      "Framer",
      "Product Management",
      "User Research & UX Auditing",
      "Branding & Visual Identity",
      "Prototyping & Wireframing",
    ],
  },
  {
    category: "Development & AI",
    icon: "💻",
    color: "blue",
    items: [
      "React.js",
      "Next.js",
      "Claude API / Anthropic SDK",
      "Supabase",
      "GitHub",
      "HTML / CSS",
      "IoT & Offline-First Design",
      "No-Code (Framer, Lovable, v0)",
    ],
  },
  {
    category: "Data & Statistics",
    icon: "📊",
    color: "purple",
    items: [
      "Statistics",
      "Data Analysis",
      "Python (NumPy, Pandas)",
      "Matplotlib",
      "Data Visualization",
      "Exploratory Data Analysis",
    ],
  },
  {
    category: "Soft Skills & Leadership",
    icon: "🤝",
    color: "cyan",
    items: [
      "Strategic Communication",
      "Project Coordination",
      "Startup Operations",
      "Adaptability & Resilience",
      "Cross-functional Teamwork",
      "Stakeholder Engagement",
    ],
  },
  {
    category: "Geospatial & Tools",
    icon: "🗺️",
    color: "green",
    items: [
      "QGIS",
      "GIS Data & Mapping",
      "Spatial Data Visualization",
      "VS Code",
      "Windsurf",
      "Jupyter Notebook",
    ],
  },
];
