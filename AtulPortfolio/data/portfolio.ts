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

export type SkillItem = {
  name: string;
  topics: string[];
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  summary: string;
  skills: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Analysis",
    icon: Database,
    summary: "Raw data handling, exploratory analysis, and reporting logic.",
    skills: [
      {
        name: "Python",
        topics: [
          "Core Python: variables, loops, functions",
          "Writting Python scripts to automate document auto-submission workflows in ERPNext",
          "Data cleaning and transformation",
          "Feature engineering for analysis and ML"
        ]
      },
      {
        name: "Pandas & NumPy",
        topics: [
          "Data extraction and transformation",
          "Cleaning and structuring raw datasets",
          "GroupBy operations and aggregations",
          "Working with real-world messy data (Airbnb, stock market datasets)"
        ]
      },
      {
        name: "EDA",
        topics: [
          "Identifying trends, patterns, and business insights",
          "Data cleaning and feature engineering",
          "Data visualization for pattern discovery",
          "Time-series analysis"
        ]
      },
      {
        name: "Data Cleaning",
        topics: [
          "Handling missing and inconsistent data",
          "Standardizing formats across sources",
          "Ensuring accuracy and consistency for reporting"
        ]
      },
      {
        name: "SQL",
        topics: [
          "SQL basics and query structure",
          "Data life cycle and collection methods",
          "SELECT, WHERE, ORDER BY, GROUP BY",
          "Master Table Creation",
          "Joins and aggregations",
          "Microsoft SQL Server fundamentals",
          "Writing queries for data extraction and reporting in ERPNext"
        ]
      },
      {
        name: "Excel",
        topics: [
          "Data cleaning and organizing",
          "Formulas and functions for analysis",
          "Reporting and summary tables",
          "Data validation and structuring for analysis"
        ]
      },
      
    ]
  },
  {
    title: "Business Intelligence",
    icon: BarChart3,
    summary: "Dashboards that make performance, trends, and gaps visible.",
    skills: [
      {
        name: "Power BI",
        topics: [
          "Interactive dashboard design",
          "Data visualization for pricing and regional trends",
          "Department-wise performance monitoring dashboards"
        ]
      },
      {
        name: "DAX Basics",
        topics: [
          "DAX measures for complex KPIs and business requirements",
          "Calculated columns and measures"
        ]
      },
      {
        name: "KPI Dashboards",
        topics: [
          "KPI trackers and management reporting views",
          "Sales, procurement, and inventory KPI tracking"
        ]
      },
      {
        name: "Reporting",
        topics: [
          "Daily, weekly, monthly, quarterly, and annual reports",
          "Sales performance and operational efficiency reporting"
        ]
      },
      {
        name: "Data Storytelling",
        topics: [
          "Turning raw metrics into decision-ready narratives",
          "Business documentation and presentation decks"
        ]
      }
    ]
  },
  {
    title: "ERP / Business Systems",
    icon: ServerCog,
    summary: "Operational workflows, ERP reports, and process monitoring.",
    skills: [
      {
        name: "ERPNext",
        topics: [
          "Sales, Purchase, CRM, HR, Inventory, and Accounts modules",
          "Custom reports and print formats"
        ]
      },
      {
        name: "CRM",
        topics: [
          "Lead to Quotation to Sales Order tracking",
          "Customer and pipeline management workflows"
        ]
      },
      {
        name: "Workflow Management",
        topics: [
          "Approval workflows: Quotations, Sales Orders, Purchase Orders, Leave Applications"
        ]
      },
      {
        name: "Business Process Monitoring",
        topics: [
          "Planner compliance tracking",
          "Operational efficiency monitoring across departments"
        ]
      },
      {
        name: "Reports",
        topics: [
          "Daily, weekly, monthly, quarterly, and annual management reporting"
        ]
      }
    ]
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    summary: "Foundational ML workflows for prediction and evaluation.",
    skills: [
      {
        name: "Scikit-learn",
        topics: ["Building and training regression models"]
      },
      {
        name: "Regression Models",
        topics: [
          "Regression models for forecasting",
          "Time-series based prediction"
        ]
      },
      {
        name: "Feature Engineering",
        topics: [
          "Feature engineering and model-readiness thinking",
          "Preparing raw data for modeling"
        ]
      },
      {
        name: "Model Evaluation",
        topics: ["Evaluating trends for decision support"]
      }
    ]
  },
  {
    title: "Tools",
    icon: FileSpreadsheet,
    summary: "Analysis notebooks, charting, database, and live update tools.",
    skills: [
      {
        name: "Jupyter Notebook",
        topics: ["Interactive analysis and documentation of workflows"]
      },
      {
        name: "Matplotlib",
        topics: ["Visualizing trends and predictions"]
      },
      {
        name: "Microsoft SQL Server",
        topics: ["Query writing and data extraction for reporting"]
      },
      {
        name: "OpenCV",
        topics: [
          "Real-time detection using adaptive thresholding and median filtering",
          "Pixel analysis for high-accuracy detection",
          "Slot annotation tool via OpenCV GUI"
        ]
      },
      {
        name: "WebSocket",
        topics: ["Real-time live updates and instant alerts"]
      }
    ]
  }
];
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
  link?: string;
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
  { label: "Python", value: "Analytics", detail: "Pandas, NumPy, EDA" },
  { label: "SQL", value: "Querying", detail: "joins, reports, analysis" },
  { label: "Power BI", value: "Dashboards", detail: "KPIs and reporting" },
  { label: "ERPNext", value: "Ops Data", detail: "CRM, inventory, accounts" },
  { label: "Experience", value: "5 months", detail: "business reporting" }
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
    period: "July 2025 - August 2025",
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
      "Delivered a live monitoring flow for detecting, annotating, and broadcasting parking slot status.",
    link: "https://github.com/atulssng-07/PARKNEST-Smart-Parking-Management-System"
  },
  {
    title: "Live Sales & CRM Performance Dashboard",
    role: "ERP & CRM Executive",
    category: "BI",
    tech: ["ERPNext", "Frappe Framework", "REST API", "JavaScript", "Power BI"],
    description:
      "Built a real-time business dashboard on ERPNext/Frappe to track sales pipeline, revenue, and team performance for Dreamzcraft Infomatics, pulling live data through a custom API endpoint.",
    highlights: [
      "Custom Frappe API endpoint for live dashboard rendering",
      "Sales funnel tracking: Lead to Quotation to Sales Order",
      "Revenue overview and team performance monitoring",
      "Planner compliance tracking",
      "Real-time data refresh without manual reporting"
    ],
    outcome:
      "Gave leadership real-time visibility into sales and CRM performance, reducing dependency on manual daily/weekly reports.",
    link: "https://dreamzcraft.m.frappe.cloud/api/method/render_live_dashboard"
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
