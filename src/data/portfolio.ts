// ─────────────────────────────────────────────────────────────
// Every section of the site reads from this file. To update the
// site, edit here. Keep every number in it true and checkable.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Vaibhav Dabas",
  role: "CS & AI undergrad at Plaksha University, building LLM agent systems",
  eyebrow: "CS + AI · Plaksha University",
  headline: "Building AI systems that actually work.",
  summary:
    "CS & AI undergraduate building multi-step LLM agents, RAG systems, evaluation pipelines, and human-in-the-loop AI systems.",
  tagline: "I build multi-step agents and ship them to real users.",
  availability: "Open to contributing and building things that work",
  location: "Mohali, India",
  email: "vaibhav16dabas@gmail.com",
  resumeUrl: "",
  socials: [
    { label: "GitHub", url: "https://github.com/vaibhavdabas16" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vaibhav-dabas-5a5572275/",
    },
  ],
  about: [
    "I am in my final year of a BTech in Computer Science and AI at Plaksha University. Most of what I build is multi-step LLM agents: systems that plan, call tools, carry typed state between steps, and fail loudly instead of quietly returning something wrong.",
    "The parts I care about are the ones that usually get skipped. Rate limits and partial data. Malformed intermediate output. Answers the model is confident about and wrong about. What a human reviewer actually sees when the system is unsure. I have put this kind of work in front of real users, not just demos.",
  ],
  focus: [
    "LLM Agents",
    "RAG",
    "Evaluation",
    "Structured Outputs",
    "Human-in-the-loop",
    "Computer Vision",
  ],
  // The agent pipeline drawn in the hero.
  pipeline: ["Input", "Planner", "Tools", "Retrieval", "Evaluation", "Output"],
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
  /** Minimal stage diagram drawn from the description. Not a claim of its own. */
  pipeline?: string[];
};

export const projects: Project[] = [
  {
    slug: "sec-risk-delta",
    name: "SEC 10-K Risk Factor Delta Agent",
    description:
      "A six-step agent, written without an agent framework, that diffs the Risk Factor sections of consecutive SEC 10-K filings and backs each change with news evidence. Typed Pydantic contracts between every step, source-labelled confidence on every claim, and graceful handling of EDGAR rate limits and single-filing companies.",
    tags: ["Python", "Pydantic", "Agents", "Tool use"],
    year: "2026",
    repo: "https://github.com/vaibhavdabas16/sec-risk-deltaagent",
    featured: true,
    pipeline: ["10-K", "Extraction", "Diff", "Evidence", "Confidence"],
  },
  {
    slug: "aura",
    name: "AURA, Autonomous RAG for Financial Analysis",
    description:
      "A multi-agent RAG system over financial filings. It scored 42% on FinanceBench, 23 points above the baseline, and reached 56% once human review was pointed at the cases the system was confidently wrong about. An agents-as-tools configuration hit 92% on multi-hop questions.",
    tags: ["RAG", "Multi-agent", "Evaluation"],
    year: "2025",
    featured: true,
    pipeline: ["Query", "Retrieval", "Agents", "Evaluation", "Human review"],
  },
  {
    slug: "tree-canopy",
    name: "TreeCanopySegmentor",
    description:
      "Tree canopy instance segmentation from satellite imagery for the Solafune challenge. Ranked 14th of 143+ teams at 0.42 weighted mAP. I benchmarked YOLOv8 through 12, Mask R-CNN, Detectron2, Mask2Former, SAM2, RF-DETR and UNet on a 150-image dataset spanning 10 to 80cm resolutions, and YOLOv11-M won on the speed, accuracy and small-data tradeoff.",
    tags: ["Instance segmentation", "Remote sensing", "YOLO"],
    year: "2025",
    repo: "https://github.com/vaibhavdabas16/TreeCanopySegmentor",
    pipeline: ["Satellite image", "Segmentation", "Prediction"],
  },
  {
    slug: "tweet-ai",
    name: "Tweet-AI",
    description:
      "An AI tweet refinement product built on Next.js, Prisma and PostgreSQL. 50+ active users in the first month, a 35% lift in engagement and 45% ten-day retention, all of it driven by iterating on prompts against live user feedback rather than offline guesses.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    year: "2025",
    link: "https://tweet-ai-vaibhav.vercel.app/",
    repo: "https://github.com/vaibhavdabas16/tweet-ai",
    pipeline: ["Draft", "Refine", "User feedback", "Prompt iteration"],
  },
  {
    slug: "drowsiness-detection",
    name: "Drowsiness Detection with Occlusion",
    description:
      "A lightweight drowsiness detection model built for the occlusion cases that clean-benchmark models quietly ignore: glasses, hands, partial faces, bad angles.",
    tags: ["Computer vision", "Robustness"],
    year: "2025",
    repo: "https://github.com/vaibhavdabas16/Drowsiness-Detection-with-Occlusion",
    pipeline: ["Frame", "Occlusion handling", "Detection"],
  },
];

export type ExperienceKind = "work" | "research" | "competition";

export type Experience = {
  kind: ExperienceKind;
  role: string;
  org: string;
  period: string;
  description: string;
  /** Short facts already present in the description, surfaced as callouts. */
  metrics?: string[];
  tags?: string[];
};

export const experienceKinds: { kind: ExperienceKind; label: string }[] = [
  { kind: "work", label: "Professional Experience" },
  { kind: "research", label: "Research / Grants" },
  { kind: "competition", label: "Competitions" },
];

export const experience: Experience[] = [
  {
    kind: "work",
    role: "Technology Developer Intern",
    org: "Barclays · Pune",
    period: "Jun – Jul 2026",
    description:
      "Built a synthetic data generation pipeline in React and Python that removed the production-data dependency from application testing. Shipped an Angular feature-toggle framework and a .NET API to production on a platform serving around 5 million clients, adopted platform wide. Also found and fixed a route guard vulnerability on a live production app.",
    metrics: [
      "~5M clients",
      "Production deployment",
      "Feature-toggle framework",
      "Route guard vulnerability fixed",
    ],
    tags: ["React", "Python", "Angular", ".NET"],
  },
  {
    kind: "research",
    role: "Emergent Ventures Grantee",
    org: "Mercatus Center",
    period: "Jul 2025",
    description:
      "Awarded a $15,000 Emergent Ventures grant for project ideation and development.",
    metrics: ["$15,000 grant"],
  },
  {
    kind: "competition",
    role: "Rank #14 of 143+ teams",
    org: "Solafune Tree Canopy Instance Segmentation Challenge",
    period: "Dec 2025",
    description:
      "0.42 weighted mAP on tree canopy instance segmentation from satellite imagery, roughly 0.02 off the top ten.",
  },
  {
    kind: "competition",
    role: "3rd place",
    org: "Entrepreneurial Challenge Cup · Plaksha University",
    period: "2026",
    description: "Third place in the 2026 Entrepreneurial Challenge Cup.",
  },
  {
    kind: "competition",
    role: "2nd place",
    org: "Plaksha University hackathon",
    period: "",
    description: "Second place out of 100+ participants.",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "AI Systems",
    items: [
      "Multi-step agents",
      "RAG",
      "Tool calling",
      "Structured outputs",
      "Evals",
      "Prompt iteration",
      "OCR",
      "Human-in-the-loop",
      "Confidence labelling",
    ],
  },
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL"],
  },
  {
    label: "Frameworks & APIs",
    items: [
      "OpenAI API",
      "Gemini API",
      "LangChain",
      "LangGraph",
      "Pydantic",
      "Tavily",
    ],
  },
  {
    label: "ML",
    items: ["NumPy", "Pandas", "CNNs", "LSTMs", "YOLO", "Detectron2"],
  },
  {
    label: "Web",
    items: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "MongoDB"],
  },
  { label: "Tooling", items: ["Git", "Docker", "pytest", "Figma"] },
];

export type Highlight = { value: string; label: string; note: string };

export const highlights: Highlight[] = [
  {
    value: "$15K",
    label: "Emergent Ventures Grant",
    note: "Awarded July 2025 for project ideation and development.",
  },
  {
    value: "#14",
    label: "of 143+ teams",
    note: "Solafune tree canopy segmentation, 0.42 weighted mAP.",
  },
  {
    value: "+23 pts",
    label: "FinanceBench improvement",
    note: "AURA scored 42% on FinanceBench, 23 points above baseline; 56% with human review.",
  },
  {
    value: "~5M",
    label: "clients on platform",
    note: "Barclays feature-toggle framework and .NET API, adopted platform wide.",
  },
  {
    value: "3rd",
    label: "Entrepreneurial Challenge Cup",
    note: "Plaksha University, 2026.",
  },
  {
    value: "2nd",
    label: "Plaksha hackathon",
    note: "Out of 100+ participants.",
  },
];
