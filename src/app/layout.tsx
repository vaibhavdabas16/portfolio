import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";
import Effects from "@/components/Effects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = `${profile.name} — CS & AI undergrad building LLM agents`;
const description =
  "Final-year CS & AI student at Plaksha University. I build multi-step LLM agents, RAG systems and evaluation pipelines, and ship them to real users.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vaibhavdabas.vercel.app"),
  title,
  description,
  keywords: [
    "Vaibhav Dabas",
    "LLM agents",
    "RAG",
    "Plaksha University",
    "AI research internship",
    "machine learning engineer",
  ],
  authors: [{ name: profile.name, url: profile.socials[0]?.url }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Effects />
        {children}
      </body>
    </html>
  );
}
