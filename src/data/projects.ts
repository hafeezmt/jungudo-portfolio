// Projects Data

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
    id: "nomavault-ai",
    title: "NomaVault AI",
    category: "AgriTech • AI • IoT",
    tags: ["AgriTech", "AI", "IoT"],
    status: "In Development",
    shortDescription:
      "An offline-first agricultural IoT concept to reduce post-harvest crop losses through smart environmental monitoring.",
    description:
      "NomaVault AI is an offline-first agricultural technology concept designed to help reduce post-harvest crop losses, particularly in grain storage environments.",
    problem:
      "Farmers and grain storage operators can lose significant amounts of stored crops because of environmental conditions, pests, fungal growth, and delayed detection of problems.",
    solution:
      "NomaVault AI combines sensors, IoT hardware, AI/data analysis, and SMS-based alerts to monitor storage conditions and provide actionable warnings — even in areas with limited internet connectivity.",
    technologies: [
      "ESP32",
      "Temperature/Humidity Sensors",
      "CO₂ Sensing",
      "GSM Module",
      "Solar Power",
      "AI/Data Analysis",
      "Python",
    ],
    featured: true,
  },
  {
    id: "agrisense-iot",
    title: "AgriSense IoT",
    category: "AgriTech • IoT",
    tags: ["AgriTech", "IoT"],
    status: "Concept",
    shortDescription:
      "A livestock and poultry environment monitoring concept using IoT sensors to detect harmful conditions and trigger alerts.",
    description:
      "AgriSense IoT is an agricultural monitoring concept designed to help farmers monitor livestock and poultry environments using sensors and connected technology.",
    problem:
      "Poor environmental conditions such as excessive heat, humidity, and poor air quality can negatively affect livestock and poultry, leading to health problems and economic loss.",
    solution:
      "Use IoT sensors to continuously monitor environmental conditions (temperature, humidity, air quality) and provide farmers with useful, timely alerts.",
    technologies: [
      "IoT Sensors",
      "Temperature Monitoring",
      "Humidity Monitoring",
      "Air Quality Monitoring",
      "Data Analysis",
      "Alerts",
    ],
    featured: true,
  },
  {
    id: "ai-health-assistant",
    title: "AI Healthcare Assistant",
    category: "AI • Healthcare",
    tags: ["AI", "Healthcare"],
    status: "Concept",
    shortDescription:
      "An AI-powered conversational concept exploring how chatbots and data visualization can make health information more accessible.",
    description:
      "An AI-powered healthcare technology concept exploring how conversational AI and data visualization can help make health information and patient data easier to understand.",
    problem:
      "Health information can be difficult for ordinary people to access, interpret, and act on effectively.",
    solution:
      "A conversational AI interface combined with data visualization to help people understand health information more clearly.",
    technologies: [
      "AI Chatbot",
      "Conversational Interfaces",
      "Data Visualization",
      "Python",
      "NLP",
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
      "A digital waste management concept connecting residents with collection services and encouraging recycling through digital rewards.",
    description:
      "A digital waste-management concept designed to connect people with waste collection services and encourage better waste-management practices.",
    problem:
      "Inefficient waste collection, poor sorting habits, and limited access to recycling services contribute to environmental challenges in many communities.",
    solution:
      "A platform allowing users to REGISTER → REQUEST COLLECTION → SORT → EARN, creating incentives for better waste management.",
    technologies: ["Web App", "Digital Rewards", "Mobile-first Design", "Maps"],
    featured: true,
  },
  {
    id: "property-explorer",
    title: "Property Explorer",
    category: "PropTech • Geospatial",
    tags: ["PropTech", "Geospatial"],
    status: "Concept",
    shortDescription:
      "A geospatial property concept using GIS and mapping tools to visualize, search, and verify property locations.",
    description:
      "A concept exploring property mapping, GIS, and location-based search to help users visualize and verify property information.",
    problem:
      "Property verification and location-based search are challenging in areas with limited digital property records.",
    solution:
      "Using geospatial data and mapping tools to enhance property search and enable location-based verification concepts.",
    technologies: ["QGIS", "GIS", "Geospatial Data", "Map Visualization", "Location-based Search"],
    featured: false,
  },
  {
    id: "dreamlens-ai",
    title: "DreamLens AI",
    category: "AI • Computer Vision",
    tags: ["AI", "Computer Vision"],
    status: "Concept",
    shortDescription:
      "An offline-oriented AI camera assistant concept exploring computer vision and local models to help users understand visual information.",
    description:
      "An offline-oriented AI camera assistant concept exploring how computer vision and local AI models could help users understand objects and visual information without internet connectivity.",
    problem:
      "Accessing visual AI capabilities typically requires internet connectivity, which limits usefulness in low-connectivity environments.",
    solution:
      "Exploring how local, lightweight AI models could provide offline image understanding and voice interaction.",
    technologies: [
      "Computer Vision",
      "Offline AI",
      "Voice Interaction",
      "Local ML Models",
      "Accessibility",
    ],
    featured: false,
  },
];
