export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "SQL", "JavaScript", "TypeScript", "R"],
  },
  {
    category: "Data Analytics & Science",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Jupyter Notebooks",
      "Data Visualization",
      "Statistical Analysis",
      "Machine Learning",
    ],
  },
  {
    category: "Databases & Data Tools",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Excel",
      "Power BI",
      "Tableau",
      "ETL Processes",
      "Data Warehousing",
    ],
  },
  {
    category: "Web Development",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Docker",
      "VS Code",
      "PyCharm",
      "Postman",
      "Jira",
    ],
  },
];

export const currentlyLearning: string[] = [
  "Advanced SQL",
  "Advanced Python",
  "AWS",
  "TensorFlow",
  "Deep Learning",
  "GraphQL",
];
