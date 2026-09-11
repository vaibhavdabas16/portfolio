import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";
import Effects from "@/components/Effects";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Effects />
        {children}
      </body>
    </html>
  );
}
