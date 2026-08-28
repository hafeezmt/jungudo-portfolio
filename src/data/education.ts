// Education Data - Updated from official CV

export type Education = {
  institution: string;
  degree: string;
  field: string;
  period: string;
  status: string;
  description?: string;
  coursework?: string[];
};

export const education: Education[] = [
  {
    institution: "University of the People (UoPeople)",
    degree: "Bachelor of Science",
    field: "Computer Science",
    period: "2024 – Present",
    status: "Currently Enrolled (Online)",
    description:
      "Studying software development, systems thinking, computer science fundamentals, and data structures.",
    coursework: ["Programming Fundamentals", "Introduction to Computer Science", "Systems Thinking", "Data Structures"],
  },
  {
    institution: "Gombe State University",
    degree: "Bachelor of Science",
    field: "Statistics",
    period: "Currently Enrolled",
    status: "Currently Enrolled",
    description:
      "Developing strong quantitative foundations in statistical methodology, probability theory, data analysis, and mathematical problem solving.",
    coursework: ["Statistical Inference", "Probability Theory", "Data Analysis", "Applied Statistics"],
  },
];
