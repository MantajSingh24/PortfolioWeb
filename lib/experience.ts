export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  description?: string;
  fullDescription?: string[];
  logo?: string;
}

export interface EducationItem {
  degree: string;
  major: string;
  university: string;
  period: string;
  logo?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    title: "Research Assistant",
    organization: "Acadia University",
    location: "Wolfville, NS",
    period: "Oct. 2024 – Present",
    description: "Conducting research on YouTube channel analytics and data processing.",
    logo: "/acadia logo.jpeg",
    fullDescription: [
      "Automated repetitive research tasks using Python and R to increase data processing efficiency",
      "Analyzed data from 160+ YouTube channels to uncover content and engagement insights",
      "Collaborated with peers to solve complex analytical problems using data-driven approaches",
    ],
  },
  {
    id: "2",
    title: "Online Data Analyst (Part-Time)",
    organization: "TELUS International",
    location: "Remote",
    period: "Sep. 2025 – Jan. 2026",
    description: "Reviewing AI-generated entries and ratings to ensure quality and relevance.",
    logo: "/telus job.webp",
    fullDescription: [
      "Reviewed 150+ AI-generated entries and ratings per shift to ensure quality and relevance",
      "Verified that outputs aligned with user intent and internal content guidelines",
      "Flagged incorrect or outdated content to help improve overall system accuracy",
    ],
  },
  {
    id: "3",
    title: "Courtesy Desk Associate",
    organization: "Walmart Canada",
    location: "New Minas, NS",
    period: "May 2025 – Aug. 2025",
    description: "Assisting customers with returns, exchanges, pick-ups, and general inquiries.",
    logo: "/Walmart logo.jpej.avif",
    fullDescription: [
      "Assisted customers with returns, exchanges, pick-ups, and general inquiries while maintaining a positive experience",
      "Resolved complaints professionally and communicated clearly with other departments when needed",
      "Handled transactions accurately and supported front-end operations during peak hours",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "BASc",
    major: "Computer Science / Data Analytics",
    university: "Acadia University",
    period: "Expected Graduation: December 2026",
    logo: "/acadia logo.jpeg",
  },
  {
    degree: "Course",
    major: "Data Analytics and Modelling",
    university: "McMaster University",
    period: "Summer 2025",
    logo: "/Mcmaster logo.jpg",
  },
];
