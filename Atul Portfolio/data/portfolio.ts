import {
  BarChart3,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  ChartSpline,
  Database,
  FileSpreadsheet,
  GraduationCap,
  LineChart,
  MapPin,
  ServerCog,
  ShieldCheck
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  summary: string;
  skills: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  location?: string;
  period: string;
  type: "Current Role" | "Internship";
  bullets: string[];
};

export type ProjectCategory = "Analytics" | "BI" | "ML" | "Python";

export type Project = {
  title: string;
  role: string;
  category: ProjectCategory;
  tech: string[];
  description: string;
  highlights: string[];
  outcome: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  outcome: string;
  certificateImage: string;
  certificateUrl?: string;
};

export const profile = {
  name: "Atul Kumar Singh",
  role: "Data Analyst | BI & Reporting | Python | SQL | Power BI | ERPNext",
  headline: "Data Analyst & Business Intelligence Enthusiast",
  subheadline:
    "I transform raw business data into dashboards, insights, reports, and smarter operational decisions using SQL, Python, Power BI, Excel, and ERP systems.",
  location: "Dehradun, Uttarakhand",
  preferredLocation: "Gurugram / Delhi NCR, flexible across Pan India",
  education:
    "B.Tech in Computer Science & Engineering, Dev Bhoomi Uttarakhand University",
  graduationYear: "2026",
  cgpa: "7.5",
  email: "kratulsingh022@gmail.com",
  linkedin: "https://www.linkedin.com/in/atul-singh07/",
  github: "https://github.com/atulssng-07",
  resume: "/atul-kumar-singh-resume.pdf"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

export const heroKpis = [
  {
    label: "Experience",
    value: 5,
    suffix: " mo",
    detail: "ERP, CRM, and reporting"
  },
  {
    label: "Projects",
    value: 3,
    suffix: "+",
    detail: "Analytics, BI, ML, Python"
  }
];

export const heroMetrics = [
  { label: "SQL", value: "Querying", detail: "joins, reports, analysis" },
  { label: "Python", value: "Analytics", detail: "Pandas, NumPy, EDA" },
  { label: "Power BI", value: "Dashboards", detail: "KPIs and reporting" },
  { label: "ERPNext", value: "Ops Data", detail: "CRM, inventory, accounts" },
  { label: "Experience", value: "5 months", detail: "business reporting" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Analysis",
    icon: Database,
    summary: "Raw data handling, exploratory analysis, and reporting logic.",
    skills: ["SQL", "Excel", "Python", "Pandas", "NumPy", "EDA", "Data Cleaning"]
  },
  {
    title: "Business Intelligence",
    icon: BarChart3,
    summary: "Dashboards that make performance, trends, and gaps visible.",
    skills: [
      "Power BI",
      "DAX Basics",
      "KPI Dashboards",
      "Reporting",
      "Data Storytelling"
    ]
  },
  {
    title: "ERP / Business Systems",
    icon: ServerCog,
    summary: "Operational workflows, ERP reports, and process monitoring.",
    skills: [
      "ERPNext",
      "CRM",
      "Workflow Management",
      "Business Process Monitoring",
      "Reports"
    ]
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    summary: "Foundational ML workflows for prediction and evaluation.",
    skills: [
      "Scikit-learn",
      "Regression Models",
      "Feature Engineering",
      "Model Evaluation"
    ]
  },
  {
    title: "Tools",
    icon: FileSpreadsheet,
    summary: "Analysis notebooks, charting, database, and live update tools.",
    skills: [
      "Jupyter Notebook",
      "Matplotlib",
      "Microsoft SQL Server",
      "OpenCV",
      "WebSocket"
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    title: "ERP & CRM Executive",
    company: "Dreamzcraft Infomatics Pvt. Ltd.",
    location: "Dehradun",
    period: "February 2026 - Present",
    type: "Current Role",
    bullets: [
      "Supporting ERPNext modules including Sales, Purchase, CRM, HR, Inventory, and Accounts.",
      "Managing workflows for quotations, purchase orders, sales orders, and leave applications.",
      "Creating reports, print formats, dashboards, and KPI trackers for business operations.",
      "Working on Power BI dashboards for business performance monitoring.",
      "Preparing daily, weekly, monthly, quarterly, and annual reports."
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Clique InfoTech Pvt. Ltd.",
    period: "Internship",
    type: "Internship",
    bullets: [
      "Collected, cleaned, and analyzed data from multiple sources.",
      "Used SQL, Excel, Python, Pandas, NumPy, and Power BI for analysis workflows.",
      "Built dashboards and reports for performance tracking.",
      "Supported business reporting and insight generation."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Stock Market Trend Analysis & Prediction",
    role: "Data Analyst",
    category: "ML",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    description:
      "Analyzed historical stock market data and built regression-based ML models to identify trends and forecast stock price movement.",
    highlights: [
      "Data cleaning and feature engineering",
      "Time-series analysis",
      "Regression-based prediction",
      "Trend visualization"
    ],
    outcome:
      "Converted price history into trend visuals and prediction-ready features for decision support."
  },
  {
    title: "Airbnb NYC Listings - Data & Business Analysis",
    role: "Data Analyst",
    category: "BI",
    tech: ["Python", "Pandas", "NumPy", "Power BI", "Jupyter Notebook"],
    description:
      "Analyzed Airbnb listings to identify pricing trends, regional performance, and business insights through EDA and dashboarding.",
    highlights: [
      "Data cleaning",
      "Exploratory data analysis",
      "KPI analysis",
      "Power BI dashboards",
      "Business insight generation"
    ],
    outcome:
      "Built a clearer view of pricing behavior, location patterns, and market performance."
  },
  {
    title: "Vehicle Parking Slot Booking Management System",
    role: "Python Developer",
    category: "Python",
    tech: ["Python", "OpenCV", "WebSocket"],
    description:
      "Built a real-time parking slot detection and monitoring system using image processing and live update logic.",
    highlights: [
      "OpenCV-based detection",
      "Adaptive thresholding",
      "Median filtering",
      "Slot annotation tool",
      "WebSocket live updates"
    ],
    outcome:
      "Delivered a live monitoring flow for detecting, annotating, and broadcasting parking slot status."
  }
];

export const certifications: Certification[] = [
  {
    title: "Machine Learning: Exploratory Data Analysis",
    issuer: "IBM",
    date: "April 2026",
    outcome:
      "Strengthened EDA workflows, feature understanding, and model-readiness thinking for ML datasets.",
    certificateImage: "/certificates/ibm-eda.jpg",
    certificateUrl: ""
  },
  {
    title: "Foundations: Data, Data Everywhere",
    issuer: "Google",
    date: "December 2024",
    outcome:
      "Built a foundation in the analytics lifecycle, data-driven decision-making, and business problem framing.",
    certificateImage: "/certificates/Data-everywhere.jpg",
    certificateUrl: "https://drive.google.com/file/d/1WwW2gKDFbiqHJRd9D2e314OoBFg68ySe/view?usp=sharing"
  },
  {
    title: "Python Programming Language",
    issuer: "HCL GUVI",
    date: "March 2024",
    outcome:
      "Practiced Python fundamentals for scripting, problem solving, and data analysis workflows.",
    certificateImage: "/certificates/GuviCertification - python.png",
    certificateUrl: "https://drive.google.com/file/d/1eARn4qxS3uTP_yWZuXQMtUWtUqp-_bxk/view?usp=sharing"
  },
  {
    title: "SQL Server for Data Analysis",
    issuer: "Alison",
    date: "09/04/26",
    outcome:
      "Strengthened EDA workflows, feature understanding, and model-readiness thinking for ML datasets.",
    certificateImage: "/certificates/sql_ceritificate.jpg",
    certificateUrl: "https://drive.google.com/file/d/1ZVhZq3pE9O1NM9GvBCa-APQvJB824F94/view?usp=sharing"
  },

];

export const education = {
  icon: GraduationCap,
  school: "Dev Bhoomi Uttarakhand University",
  degree: "B.Tech in Computer Science & Engineering",
  graduationYear: "2026",
  cgpa: "7.5"
};

export const contactCards = [
  {
    label: "Location",
    value: profile.location,
    icon: MapPin
  },
  {
    label: "Preferred Work Location",
    value: "Gurugram / Delhi NCR / Pan India",
    icon: BriefcaseBusiness
  },
  {
    label: "Resume",
    value: "Download PDF resume",
    icon: ShieldCheck
  }
];

export const proofPoints = [
  {
    label: "Reporting Cadence",
    value: "Daily to annual",
    icon: ChartSpline
  },
  {
    label: "Business Systems",
    value: "ERPNext + CRM",
    icon: Boxes
  },
  {
    label: "Dashboard Focus",
    value: "KPI monitoring",
    icon: LineChart
  }
];
