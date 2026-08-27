// Achievements & Certifications Data
// Only add verified certificates, programs, and achievements.
// Do NOT invent credentials, organizations, or dates.

export type Achievement = {
  title: string;
  organization: string;
  year?: string;
  credentialUrl?: string;
  category: "AI" | "Data" | "Design" | "GIS" | "Development" | "Entrepreneurship" | "Community";
  description?: string;
};

// Add your verified achievements here when available.
export const achievements: Achievement[] = [
  // Example placeholder (remove when real data is added):
  // {
  //   title: "Certificate Name",
  //   organization: "Organization Name",
  //   year: "2024",
  //   category: "AI",
  //   credentialUrl: "https://...",
  // },
];
