// ─────────────────────────────────────────────────────────────
// Every section of the site reads from this file. To update the
// site, edit here. Keep every number in it true and checkable.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Vaibhav Dabas",
  role: "CS & AI undergrad at Plaksha University, building LLM agent systems",
  tagline: "I build multi-step agents and ship them to real users.",
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
    "I am looking for a research internship from January 2027, remote, around 30 hours a week during term and full time from May to July 2027.",
  ],
  focus: [
    "LLM agents",
    "RAG",
    "Evaluation",
    "Structured outputs",
    "Human in the loop",
    "Computer vision",
  ],
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
    slug: "sec-risk-delta",
    name: "SEC 10-K Risk Factor Delta Agent",
    description:
      "A six-step agent, written without an agent framework, that diffs the Risk Factor sections of consecutive SEC 10-K filings and backs each change with news evidence. Typed Pydantic contracts between every step, source-labelled confidence on every claim, and graceful handling of EDGAR rate limits and single-filing companies.",
    tags: ["Python", "Pydantic", "Agents", "Tool use"],
    year: "2026",
    repo: "https://github.com/vaibhavdabas16/sec-risk-deltaagent",
    featured: true,
  },
  {
    slug: "aura",
    name: "AURA, Autonomous RAG for Financial Analysis",
    description:
      "A multi-agent RAG system over financial filings. It scored 42% on FinanceBench, 23 points above the baseline, and reached 56% once human review was pointed at the cases the system was confidently wrong about. An agents-as-tools configuration hit 92% on multi-hop questions.",
    tags: ["RAG", "Multi-agent", "Evaluation"],
    year: "2025",
    featured: true,
  },
  {
    slug: "marksheet-grading",
    name: "Automated Marksheet Grading System",
    description:
      "An end-to-end pipeline that reads handwritten exam sheets and grades them against instructor rubrics, replacing manual evaluation for batches of 120+ students. Local OCR with the Gemini API for subjective answers and code, sandboxed execution under 100ms per submission, and a TA review dashboard that gates every result behind human approval.",
    tags: ["OCR", "Gemini API", "Python"],
    year: "2026",
    repo: "https://github.com/vaibhavdabas16/Automated-Marksheet-Grading-System",
  },
  {
    slug: "tree-canopy",
    name: "TreeCanopySegmentor",
    description:
      "Tree canopy instance segmentation from satellite imagery for the Solafune challenge. Ranked 14th of 143+ teams at 0.42 weighted mAP. I benchmarked YOLOv8 through 12, Mask R-CNN, Detectron2, Mask2Former, SAM2, RF-DETR and UNet on a 150-image dataset spanning 10 to 80cm resolutions, and YOLOv11-M won on the speed, accuracy and small-data tradeoff.",
    tags: ["Instance segmentation", "Remote sensing", "YOLO"],
    year: "2025",
    repo: "https://github.com/vaibhavdabas16/TreeCanopySegmentor",
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
  },
  {
    slug: "drowsiness-detection",
    name: "Drowsiness Detection with Occlusion",
    description:
      "A lightweight drowsiness detection model built for the occlusion cases that clean-benchmark models quietly ignore: glasses, hands, partial faces, bad angles.",
    tags: ["Computer vision", "Robustness"],
    year: "2025",
    repo: "https://github.com/vaibhavdabas16/Drowsiness-Detection-with-Occlusion",
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
    role: "Technology Developer Intern",
    org: "Barclays, Pune",
    period: "Jun 2026 – Jul 2026",
    description:
      "Built a synthetic data generation pipeline in React and Python that removed the production-data dependency from application testing. Shipped an Angular feature-toggle framework and a .NET API to production on a platform serving around 5 million clients, adopted platform wide. Also found and fixed a route guard vulnerability on a live production app.",
    tags: ["React", "Python", "Angular", ".NET"],
  },
  {
    role: "Emergent Ventures Grantee",
    org: "Mercatus Center",
    period: "Jul 2025",
    description:
      "Awarded a $15,000 Emergent Ventures grant for project ideation and development.",
    tags: ["Grant"],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "languages",
    items: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL"],
  },
  {
    label: "ai systems",
    items: [
      "Multi-step agent design",
      "RAG",
      "Tool calling",
      "Structured outputs",
      "Evals",
      "Prompt iteration",
      "OCR",
      "Human in the loop",
      "Confidence labelling",
    ],
  },
  {
    label: "apis & frameworks",
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
    label: "ml",
    items: ["NumPy", "Pandas", "CNNs", "LSTMs", "YOLO", "Detectron2"],
  },
  {
    label: "web",
    items: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "MongoDB"],
  },
  { label: "tooling", items: ["Git", "Docker", "pytest", "Figma"] },
];

export type Highlight = { value: string; label: string; note: string };

export const highlights: Highlight[] = [
  {
    value: "$15,000",
    label: "Emergent Ventures grant",
    note: "Awarded July 2025 for project ideation and development.",
  },
  {
    value: "#14 / 143+",
    label: "Solafune segmentation challenge",
    note: "0.42 weighted mAP on tree canopy instance segmentation, roughly 0.02 off the top ten.",
  },
  {
    value: "+23 pts",
    label: "over the FinanceBench baseline",
    note: "AURA reached 42%, and 56% once human review was aimed at confidently wrong answers.",
  },
  {
    value: "~5M",
    label: "clients on the Barclays platform",
    note: "Shipped a feature-toggle framework and .NET API that were adopted platform wide.",
  },
  {
    value: "3rd",
    label: "Entrepreneurial Challenge Cup 2026",
    note: "Plaksha University.",
  },
  {
    value: "2nd",
    label: "Plaksha University hackathon",
    note: "Out of 100+ participants.",
  },
];
