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
    description: "Versatile programming across multiple languages and frameworks",
    skills: [
      { name: "Python", proficiency: 85 },
      { name: "Java", proficiency: 70 },
      { name: "JavaScript", proficiency: 75 },
      { name: "TypeScript", proficiency: 70 },
      { name: "C", proficiency: 65 },
      { name: "R", proficiency: 60 },
    ],
  },
  {
    category: "Web Development",
    icon: "🌐",
    description: "Building modern web applications and user interfaces",
    skills: [
      { name: "React", proficiency: 75 },
      { name: "Next.js", proficiency: 80 },
      { name: "Node.js", proficiency: 70 },
      { name: "Express.js", proficiency: 70 },
      { name: "HTML/CSS", proficiency: 80 },
      { name: "Tailwind CSS", proficiency: 85 },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "🧠",
    description: "Advanced AI systems, prompt engineering, and ML model development",
    skills: [
      { name: "Machine Learning", proficiency: 75 },
      { name: "Pandas", proficiency: 80 },
      { name: "Scikit-learn", proficiency: 70 },
      { name: "Data Science", proficiency: 80 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    description: "Cloud infrastructure, automation, and deployment strategies",
    skills: [
      { name: "Git/GitHub", proficiency: 85 },
      { name: "Docker", proficiency: 60 },
      { name: "Vercel", proficiency: 75 },
      { name: "Automation Scripts", proficiency: 70 },
    ],
  },
  {
    category: "Data Engineering",
    icon: "🗄️",
    description: "ETL pipelines, data visualization, and large-scale data processing",
    skills: [
      { name: "SQL", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 75 },
      { name: "ETL Processes", proficiency: 75 },
      { name: "Power BI", proficiency: 80 },
      { name: "Data Visualization", proficiency: 85 },
      { name: "Data Warehousing", proficiency: 70 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "⚡",
    description: "Development tools, platforms, and productivity software",
    skills: [
      { name: "VS Code", proficiency: 90 },
      { name: "Jupyter Lab/Notebook", proficiency: 85 },
      { name: "Excel", proficiency: 80 },
      { name: "Tableau", proficiency: 70 },
      { name: "MongoDB", proficiency: 75 },
    ],
  },
];
