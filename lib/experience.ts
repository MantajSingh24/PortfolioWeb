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
    title: "Online Data Analyst",
    organization: "Telus",
    location: "Remote",
    period: "2024 - Present",
    description: "Analyzing data and providing insights to support business decisions.",
    logo: "/telus job.webp",
    fullDescription: [
      "Analyzing large datasets to identify trends, patterns, and business insights",
      "Creating data visualizations and reports for stakeholders",
      "Using SQL, Python, and data analytics tools to process and analyze data",
      "Collaborating with cross-functional teams to support data-driven decision making",
      "Developing and maintaining data pipelines and ETL processes",
      "Presenting findings and recommendations to management",
    ],
  },
  {
    id: "2",
    title: "Research Assistant – YouTube Data Analytics",
    organization: "Acadia University",
    location: "Wolfville, NS",
    period: "2024 - Present",
    description: "Conducting research on YouTube channel analytics and data processing.",
    logo: "/acadia logo.jpeg",
    fullDescription: [
      "Conducting research on YouTube channel analytics and data processing using Python and data analysis tools",
      "Collecting and analyzing large datasets from YouTube API to identify trends and patterns",
      "Collaborating with Prof. Ryan Stack on research projects and data-driven insights",
      "Developing data processing pipelines and visualization dashboards",
      "Documenting research findings and contributing to academic publications",
    ],
  },
  {
    id: "3",
    title: "Customer Service Associate",
    organization: "Walmart",
    location: "Wolfville, NS",
    period: "2023 - Present",
    description: "Providing exceptional customer service and managing operations.",
    logo: "/Walmart logo.jpej.avif",
    fullDescription: [
      "Providing exceptional customer service and managing daily store operations",
      "Assisting customers with inquiries, product recommendations, and problem resolution",
      "Maintaining store inventory and ensuring product availability",
      "Processing transactions and handling cash management",
      "Collaborating with team members to ensure smooth store operations",
      "Achieving high customer satisfaction ratings through attentive service",
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
    degree: "Certificate",
    major: "Data Analytics and Modelling",
    university: "McMaster University",
    period: "Summer 2025",
    logo: "/Mcmaster logo.jpg",
  },
];
