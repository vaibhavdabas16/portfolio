// ─────────────────────────────────────────────────────────────
// Edit this file with your real information. Nothing else in
// the app needs to change — every page reads from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Jordan Rao",
  role: "ML Engineer & Full-Stack Developer",
  tagline: "I build things that see, learn, and ship.",
  location: "Delhi, India",
  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/yourhandle" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourhandle" },
    { label: "Twitter", url: "https://twitter.com/yourhandle" },
  ],
  about: [
    "I'm a computer science student who spends most of my time somewhere between a robotics lab and a keyboard shortcut. I care about systems that work reliably, not just demos that work once.",
    "Most of what I build sits at the intersection of computer vision, applied ML, and interfaces people actually want to use. When I'm not doing that, I'm probably breaking something on purpose to understand how it works.",
  ],
  focus: ["Computer Vision", "Applied ML", "Robotics (ROS)", "Full-Stack Web"],
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "shortlist",
    name: "Shortlist",
    description:
      "An AI-enabled interview coach that runs DSA and HR mock interviews, scores responses in real time, and adapts follow-up questions to your answers.",
    tags: ["Next.js", "MediaPipe", "OpenAI"],
    year: "2025",
    link: "#",
    repo: "#",
    featured: true,
  },
  {
    slug: "nautilus",
    name: "Nautilus",
    description:
      "An autonomous underwater robot built for SAUVC 2025, capable of vision-guided navigation, object manipulation, and a set of intelligent underwater tasks.",
    tags: ["ROS", "Machine Learning", "C++"],
    year: "2025",
    repo: "#",
    featured: true,
  },
  {
    slug: "surakshak",
    name: "Surakshak",
    description:
      "An automated, low-cost security system for resource-constrained institutes — real-time detection and alerting on commodity hardware.",
    tags: ["Django", "YOLO", "OpenCV"],
    year: "2024",
    repo: "#",
  },
  {
    slug: "camouflage-detection",
    name: "Camouflage Detection",
    description:
      "A deep learning framework for synthesizing training images that strengthen an existing camouflage-detection model against edge cases.",
    tags: ["PyTorch", "Computer Vision"],
    year: "2024",
    repo: "#",
  },
  {
    slug: "leapdraw",
    name: "LEAPDraw",
    description:
      "A drawing game that pits a human against an AI in a live guessing contest, built as a spin on Google's Quick, Draw! with real-time inference over sockets.",
    tags: ["Next.js", "WebSockets", "PyTorch"],
    year: "2024",
    link: "#",
    repo: "#",
  },
  {
    slug: "deception-detection",
    name: "Deception Detection",
    description:
      "A multimodal ML framework for deception detection, fusing signals from computer vision, audio prosody, and text into a single confidence score.",
    tags: ["CV", "PyTorch", "NLP"],
    year: "2024",
    repo: "#",
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
  tags?: string[];
};

export const experience: Experience[] = [
  {
    role: "ML Engineer Intern",
    org: "Example Robotics Co.",
    period: "May 2025 — Aug 2025",
    description:
      "Built and shipped a perception pipeline for real-time object tracking, cutting inference latency by 40% and taking the model from notebook to production.",
    tags: ["PyTorch", "ONNX", "ROS"],
  },
  {
    role: "Full-Stack Developer",
    org: "Campus Product Studio",
    period: "Jan 2025 — Apr 2025",
    description:
      "Led a team of four to design and ship a student-facing web platform used by 2,000+ users, from data model to deploy.",
    tags: ["Next.js", "PostgreSQL"],
  },
  {
    role: "Research Assistant",
    org: "University CV Lab",
    period: "Aug 2024 — Dec 2024",
    description:
      "Contributed to a published framework for low-resource camouflage detection, focused on synthetic data generation and evaluation.",
    tags: ["Computer Vision", "Python"],
  },
];
