// Education Data

export type Education = {
  institution: string;
  degree: string;
  field: string;
  status: string; // e.g. "Currently Enrolled"
  logo?: string;
  description?: string;
};

export const education: Education[] = [
  {
    institution: "Gombe State University",
    degree: "Bachelor's Degree",
    field: "Statistics",
    status: "Currently Enrolled",
    description:
      "Developing a strong foundation in statistics, probability, data analysis, quantitative thinking, and mathematical problem solving.",
  },
  {
    institution: "University of the People",
    degree: "Associate Degree",
    field: "Computer Science",
    status: "Currently Enrolled",
    description:
      "Expanding technical knowledge in computer science, programming, software development, and computational thinking.",
  },
];
