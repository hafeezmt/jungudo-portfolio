// Technical Skills Data - Cleanly categorized with verified proficiency levels

export type SkillLevel = "Advanced" | "Proficient" | "Familiar";

export type SkillItem = {
  name: string;
  level: SkillLevel;
  description: string;
};

export type SkillCategory = {
  id: string;
  category: string;
  iconName: "Code2" | "Wrench" | "Cpu";
  tagline: string;
  skills: SkillItem[];
  items?: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    iconName: "Code2",
    tagline: "Modern, responsive, and accessible interfaces built with typed frontend architecture.",
    skills: [
      { name: "HTML", level: "Advanced", description: "Semantic markup, SEO optimization, and web accessibility standards (WCAG)" },
      { name: "CSS", level: "Advanced", description: "Modern layouts, Flexbox, Grid, transitions, and CSS variables" },
      { name: "JavaScript", level: "Advanced", description: "Modern ES6+, asynchronous programming, DOM APIs, and event loops" },
      { name: "TypeScript", level: "Proficient", description: "Type safety, interfaces, union types, and compile-time verification" },
      { name: "React", level: "Advanced", description: "Component-driven architecture, custom hooks, and state management" },
      { name: "Next.js", level: "Advanced", description: "App Router, SSR, Server Components, and optimized routing" },
      { name: "Tailwind CSS", level: "Advanced", description: "Utility-first styling, design systems, and responsive layouts" },
    ],
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "tools",
    category: "Tools & Environment",
    iconName: "Wrench",
    tagline: "Professional development, version control, operating systems, and interface prototyping tooling.",
    skills: [
      { name: "Git", level: "Proficient", description: "Branching workflows, version tracking, cherry-picks, and release management" },
      { name: "GitHub", level: "Proficient", description: "Pull requests, code review, issues, and open-source collaboration" },
      { name: "Figma", level: "Proficient", description: "Wireframing, UI prototyping, design tokens, and developer handoff" },
      { name: "Linux", level: "Proficient", description: "Shell scripting, process management, POSIX environments, and CLI" },
      { name: "VS Code", level: "Advanced", description: "Primary IDE configured with type checking, linting, and AI tooling" },
    ],
    items: ["Git", "GitHub", "Figma", "Linux", "VS Code"],
  },
  {
    id: "ai-emerging",
    category: "AI & Emerging Technologies",
    iconName: "Cpu",
    tagline: "Harnessing foundation models, practical AI workflows, and hardware telemetry for African realities.",
    skills: [
      { name: "Artificial Intelligence", level: "Proficient", description: "AI problem formulation, model integration, and applied workflows" },
      { name: "LLM Experimentation", level: "Proficient", description: "Prompt engineering, Anthropic/OpenAI APIs, and agentic workflows" },
      { name: "AI-Powered Applications", level: "Proficient", description: "End-to-end applications powered by intelligent language models" },
      { name: "IoT Concepts", level: "Familiar", description: "Sensor telemetry, microcontroller logic (ESP32), and offline SMS alerts" },
    ],
    items: ["Artificial Intelligence", "LLM Experimentation", "AI-Powered Applications", "IoT Concepts"],
  },
];

// Alias for backwards compatibility if needed
export const skills = skillCategories;
