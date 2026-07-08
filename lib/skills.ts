export interface Skill {
  name: string;
  proficiency: number; // 0-100 (kept for potential future use, but not displayed)
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    icon: "</>",
    description: "Languages for software development and data analysis",
    skills: [
      { name: "Python", proficiency: 85 },
      { name: "SQL", proficiency: 80 },
      { name: "Java", proficiency: 70 },
    ],
  },
  {
    category: "Business Applications",
    icon: "📋",
    description: "Tools for reporting, documentation, and operational workflows",
    skills: [
      { name: "Excel", proficiency: 85 },
      { name: "SharePoint", proficiency: 75 },
      { name: "Power BI", proficiency: 80 },
    ],
  },
  {
    category: "Data Analytics",
    icon: "📊",
    description: "Analysis, visualization, databases, and machine learning",
    skills: [
      { name: "Pandas", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 75 },
      { name: "Tableau", proficiency: 70 },
      { name: "Scikit-learn", proficiency: 70 },
    ],
  },
  {
    category: "Tools",
    icon: "⚡",
    description: "Development and productivity tools",
    skills: [
      { name: "Git/GitHub", proficiency: 85 },
      { name: "Jupyter Notebook", proficiency: 85 },
      { name: "VS Code", proficiency: 90 },
    ],
  },
];
