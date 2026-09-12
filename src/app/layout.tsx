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
    // suppressHydrationWarning: the theme script below sets data-theme
    // before React hydrates, so the attribute differs from server markup.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // Resolve theme before first paint: stored choice, else system.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var l=s?s==="light":matchMedia("(prefers-color-scheme: light)").matches;document.documentElement.dataset.theme=l?"light":"dark"}catch(e){}})();`,
          }}
        />
        <meta name="theme-color" content="#0a0a0b" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Effects />
        {children}
      </body>
    </html>
  );
}
