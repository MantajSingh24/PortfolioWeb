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
    title: "Summer Admin Intern — Healthcare & Auto Claims",
    organization: "Aviva Canada",
    location: "Dartmouth, NS",
    period: "May 2026 – Present",
    description:
      "Supporting Healthcare and Auto Claims teams with claims records, documentation, and operational data.",
    fullDescription: [
      "Support Healthcare and Auto Claims teams by maintaining accurate claims records, validating documentation, and assisting with day-to-day operational processes",
      "Communicate with law firms, medical clinics, and police services across Atlantic Canada to obtain documentation and support ongoing claims investigations",
      "Prepare, organize, and maintain operational data using Microsoft Excel, SharePoint, and ClaimCentre while ensuring data accuracy and completeness",
      "Review claim documentation, update case files, and collaborate with claims adjusters and cross-functional stakeholders to ensure timely claim processing",
      "Quickly adapted to new corporate systems, business workflows, and documentation processes in a fast-paced environment",
    ],
  },
  {
    id: "2",
    title: "Research Assistant",
    organization: "Acadia University",
    location: "Wolfville, NS",
    period: "Oct. 2024 – Present",
    description: "Research support under Prof. Ryan Stack on YouTube analytics and data processing.",
    logo: "/acadia logo.jpeg",
    fullDescription: [
      "Developed Python automation tools that streamlined research workflows and improved data collection efficiency",
      "Collected, cleaned, validated, and analyzed datasets from more than 160 YouTube channels using structured ETL processes",
      "Prepared reports and statistical summaries to support research findings and project decision-making",
    ],
  },
  {
    id: "3",
    title: "Online Data Analyst (Part-Time)",
    organization: "TELUS International",
    location: "Remote",
    period: "Sep. 2025 – Jan. 2026",
    description: "Reviewed and validated AI-generated data entries for quality and accuracy.",
    logo: "/telus job.webp",
    fullDescription: [
      "Reviewed and validated more than 150 data records per shift while maintaining high standards of quality and accuracy",
      "Applied quality assurance guidelines to evaluate data consistency and document findings",
      "Worked independently while consistently meeting productivity and accuracy expectations in a remote environment",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science",
    major: "Data Analytics",
    university: "Acadia University",
    period: "Expected Graduation: March 2027",
    logo: "/acadia logo.jpeg",
  },
  {
    degree: "Certification",
    major: "Data Modelling & Analysis",
    university: "McMaster University Continuing Education",
    period: "Summer 2025 (A+)",
    logo: "/Mcmaster logo.jpg",
  },
];
