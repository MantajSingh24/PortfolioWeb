export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  category?: string;
  liveUrl?: string;
  codeUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Vendor Performance Dashboard",
    description: "Power BI dashboard with PostgreSQL backend and Python ETL pipeline for analyzing vendor performance metrics.",
    image: "/vendor dashboard ss.png",
    stack: ["Power BI", "PostgreSQL", "Python", "Pandas", "ETL"],
    category: "DATA SCIENCE",
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiODE3NjNhM2ItZTdiZS00NTUzLWI4NmItY2VmY2VmY2IyMTQ1IiwidCI6IjkxYjYwMzQ5LWFjNmItNDM1NS1hMTc1LWJmNzc5MDhmYmVjMiJ9",
    codeUrl: "https://github.com/MantajSingh24/VendorPerformance",
  },
  {
    id: "2",
    title: "Study Link / Student Portal",
    description: "A modern student portal built with React and Next.js for managing academic resources and connections.",
    image: "/StudyLink.png",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "WEB",
    codeUrl: "https://github.com/MantajSingh24/StudyLink",
  },
  {
    id: "3",
    title: "Event Management System",
    description: "A full-stack application for managing events with CRUD operations. Features include creating, reading, updating, and deleting events with a simple and intuitive UI.",
    image: "/Event Management System.png",
    stack: ["React", "Express.js", "Node.js", "MongoDB", "React Router", "CSS"],
    category: "WEB",
    codeUrl: "https://github.com/MantajSingh24/Event-Management-System",
  },
  {
    id: "4",
    title: "Key to the Kingdom",
    description: "An interactive game project featuring engaging gameplay mechanics and immersive user experience.",
    image: "/Key to kingdom pic.png",
    stack: ["Game Development", "JavaScript", "HTML5", "CSS"],
    category: "GAME",
    codeUrl: "https://github.com/MantajSingh24/Key-to-the-Kingdom",
  },
  {
    id: "5",
    title: "Gradient Boosting Regression Project",
    description: "Machine learning project implementing gradient boosting regression using scikit-learn for predictive modeling.",
    image: "/Gradient Boosting.png",
    stack: ["Python", "scikit-learn", "Machine Learning", "Data Science"],
    category: "AI",
    codeUrl: "https://github.com/MantajSingh24/GradientBoosting",
  },
];

