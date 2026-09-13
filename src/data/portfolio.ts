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
    "I'm a final-year Computer Science and AI student at Plaksha University. I build LLM systems that have to hold up outside a notebook: agents that plan and call tools, retrieval over messy documents, and evaluation that catches the model being wrong before a user does.",
    "What separates a demo from a system is everything at the edges. A rate limit halfway through a run. A parser that returns something almost right. A confident answer with nothing behind it. I design for those cases first, and I'd rather a system fail loudly than quietly return something wrong.",
  ],
  focus: [
    "LLM Agents",
    "RAG",
    "Evaluation",
    "Structured Outputs",
    "Human-in-the-loop",
    "Computer Vision",
  ],
  // The loop drawn in the hero: how I work, in the shape of an agent loop.
  loop: {
    label: "How I work",
    steps: [
      "Find a real problem",
      "Read the paper",
      "Build v0",
      "Test on real data",
      "Ship to users",
      "Fix what breaks",
    ],
    note: "Then back to the top. It's the same loop my agents run: plan, act, check, correct.",
  },
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
  /** Shown as a small badge next to the year, e.g. "In progress". */
  status?: string;
  /** Minimal stage diagram drawn from the description. Not a claim of its own. */
  pipeline?: string[];
};

export const projects: Project[] = [
  {
    slug: "travel-agent",
    name: "Multi-Agent Travel Planner",
    description:
      "Turns a free-form trip request into a day-by-day itinerary with real flights, hotels and routes. A LangGraph graph of specialised nodes: intake extracts constraints, discovery searches Google Places and a Pinecone vector index with an LLM filter for irrelevant results, an optimizer solves a vehicle-routing problem with time windows in Google OR-Tools so each day respects opening hours and travel times, and accommodation and transport nodes pull live offers from Amadeus and Google Routes. Three-layer Redis caching and a cost tracker keep API and LLM spend inside quota. FastAPI backend, React wizard frontend.",
    tags: ["LangGraph", "FastAPI", "OR-Tools", "React"],
    year: "2026",
    status: "In progress",
    featured: true,
    pipeline: ["Intent", "Discovery", "Route optimizer", "Hotels & flights", "Itinerary"],
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
