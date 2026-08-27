// Skills Data

export type SkillGroup = {
  category: string;
  icon: string;
  color: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Programming & Development",
    icon: "💻",
    color: "blue",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "SQL",
    ],
  },
  {
    category: "Data & Statistics",
    icon: "📊",
    color: "purple",
    items: [
      "Statistics",
      "Data Analysis",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Data Visualization",
      "Exploratory Data Analysis",
      "Probability",
    ],
  },
  {
    category: "Artificial Intelligence",
    icon: "🤖",
    color: "cyan",
    items: [
      "Generative AI",
      "AI Applications",
      "AI Chatbots",
      "Computer Vision Concepts",
      "AI-assisted Product Development",
      "AI Data Analysis",
    ],
  },
  {
    category: "Design",
    icon: "🎨",
    color: "pink",
    items: [
      "UI/UX Design",
      "Figma",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "User Research",
      "Interface Design",
    ],
  },
  {
    category: "Geospatial Technology",
    icon: "🗺️",
    color: "green",
    items: [
      "QGIS",
      "GIS",
      "Geospatial Data",
      "Mapping",
      "Spatial Visualization",
      "Location-based Technology",
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    color: "orange",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Microsoft Excel",
      "Jupyter Notebook",
    ],
  },
];
