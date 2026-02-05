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
    category: "Programming Languages",
    icon: "</>",
    description: "Core languages for software development and data analysis",
    skills: [
      { name: "Python", proficiency: 85 },
      { name: "Java", proficiency: 70 },
      { name: "JavaScript", proficiency: 75 },
      { name: "R", proficiency: 60 },
    ],
  },
  {
    category: "Web Development",
    icon: "🌐",
    description: "Building web applications and version control",
    skills: [
      { name: "React", proficiency: 75 },
      { name: "Node.js", proficiency: 70 },
      { name: "HTML/CSS", proficiency: 80 },
      { name: "Git/GitHub", proficiency: 85 },
    ],
  },
  {
    category: "Data Analytics",
    icon: "📊",
    description: "Data analysis, visualization, and machine learning",
    skills: [
      { name: "SQL", proficiency: 80 },
      { name: "Pandas", proficiency: 80 },
      { name: "Scikit-learn", proficiency: 70 },
      { name: "Power BI", proficiency: 80 },
    ],
  },
  {
    category: "Tools",
    icon: "⚡",
    description: "Development and productivity tools",
    skills: [
      { name: "Excel", proficiency: 80 },
      { name: "Jupyter Notebook", proficiency: 85 },
      { name: "MongoDB", proficiency: 75 },
    ],
  },
];
