export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  category?: string;
  liveUrl?: string;
  notebookUrl?: string;
  codeUrl: string;
  status?: "in progress" | "completed";
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Vendor Performance Dashboard",
    description: "Power BI dashboard with PostgreSQL backend and Python ETL pipeline for analyzing vendor performance metrics.",
    image: "/vendor dashboard ss.png",
    stack: ["Python", "PostgreSQL", "Power BI", "SQLAlchemy", "Pandas"],
    category: "DATA SCIENCE",
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiODE3NjNhM2ItZTdiZS00NTUzLWI4NmItY2VmY2VmY2IyMTQ1IiwidCI6IjkxYjYwMzQ5LWFjNmItNDM1NS1hMTc1LWJmNzc5MDhmYmVjMiJ9",
    codeUrl: "https://github.com/MantajSingh24/VendorPerformance",
  },
  {
    id: "2",
    title: "Study Link / Student Portal",
    description: "A modern student portal built with React and Next.js for managing academic resources and connections.",
    image: "/StudyLink.png",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "Prisma", "PostgreSQL"],
    category: "WEB",
    codeUrl: "https://github.com/MantajSingh24/StudyLink",
  },
  {
    id: "3",
    title: "Event Management System",
    description: "A full-stack application for managing events with CRUD operations. Features include creating, reading, updating, and deleting events with a simple and intuitive UI.",
    image: "/Event Management System.png",
    stack: ["React", "React Router", "CSS", "Express.js", "Node.js", "MongoDB"],
    category: "WEB",
    codeUrl: "https://github.com/MantajSingh24/Event-Management-System",
  },
  {
    id: "4",
    title: "Key to the Kingdom",
    description: "An interactive game project featuring engaging gameplay mechanics and immersive user experience.",
    image: "/Key to kingdom pic.png",
    stack: ["Java", "Swing", "Multi-threading", "Event-driven Architecture", "Game Development"],
    category: "GAME",
    codeUrl: "https://github.com/MantajSingh24/Key-to-the-Kingdom",
  },
  {
    id: "5",
    title: "Gradient Boosting Regression Project",
    description: "Machine learning project implementing gradient boosting regression using scikit-learn for predictive modeling.",
    image: "/Gradient Boosting.png",
    stack: ["Python", "NumPy", "Pandas", "Scikit-Learn", "XGBoost", "Matplotlib"],
    category: "AI",
    notebookUrl: "https://colab.research.google.com/drive/1hMGoit3PpnCQmrxroTz1MnIErKzbqmXG?usp=sharing",
    codeUrl: "https://github.com/MantajSingh24/GradientBoosting",
  },
  {
    id: "6",
    title: "Data Dash",
    description: "A simple analytics dashboard for CSV and Excel files. Currently in development with features for file upload, auto-detect columns, sales analytics, customer insights, and interactive trend charts.",
    image: "/project-placeholder.jpg",
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    category: "DATA SCIENCE",
    codeUrl: "https://github.com/MantajSingh24/data-dash",
    status: "in progress",
  },
];

