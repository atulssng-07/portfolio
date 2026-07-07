import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const title = "Atul Kumar Singh | Data Analyst & BI Portfolio";
const description =
  "Portfolio of Atul Kumar Singh, a Data Analyst and Business Intelligence enthusiast skilled in SQL, Python, Power BI, Excel, ERPNext, reporting, and dashboards.";

export const metadata: Metadata = {
  metadataBase: new URL("https://atul-kumar-singh.vercel.app"),
  title,
  description,
  keywords: [
    "Atul Kumar Singh",
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Python",
    "ERPNext",
    "Data Engineer Fresher"
  ],
  authors: [{ name: "Atul Kumar Singh" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/atul-analytics-hero.png",
        width: 1536,
        height: 864,
        alt: "Premium analytics dashboard visual for Atul Kumar Singh portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/atul-analytics-hero.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111f"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
