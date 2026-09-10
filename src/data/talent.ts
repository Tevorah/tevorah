export type TalentTier = "junior" | "junior-plus" | "mid" | "senior" | "ai-specialist";

export interface TalentProfile {
  id: string;
  name: string;
  role: string;
  location: string;
  experience: number;
  skills: string[];
  scores: {
    technical: number;
    aiFluency: number;
    communication: number;
  };
  availabilityWeeks: number;
  pricePerMonth: number;
  tier: TalentTier;
  avatar: string;
  specialisms: string[];
}

export const talentProfiles: TalentProfile[] = [
  {
    id: "akeel-k",
    name: "Akeel K.",
    role: "AI Full-Stack Engineer",
    location: "Colombo, Sri Lanka",
    experience: 3,
    skills: ["React", "Next.js", "Python", "FastAPI", "AWS", "OpenAI"],
    scores: { technical: 88, aiFluency: 92, communication: 90 },
    availabilityWeeks: 2,
    pricePerMonth: 2000,
    tier: "mid",
    avatar: "AK",
    specialisms: ["AI Integration", "API Design"],
  },
  {
    id: "priya-s",
    name: "Priya S.",
    role: "Senior Backend Engineer",
    location: "Colombo, Sri Lanka",
    experience: 6,
    skills: ["Ruby on Rails", "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL"],
    scores: { technical: 93, aiFluency: 79, communication: 88 },
    availabilityWeeks: 3,
    pricePerMonth: 4500,
    tier: "senior",
    avatar: "PS",
    specialisms: ["System Architecture", "API Design"],
  },
  {
    id: "ravindu-p",
    name: "Ravindu P.",
    role: "AI/ML Engineer",
    location: "Kandy, Sri Lanka",
    experience: 4,
    skills: ["Python", "PyTorch", "LangChain", "FastAPI", "Pinecone", "OpenAI"],
    scores: { technical: 91, aiFluency: 96, communication: 85 },
    availabilityWeeks: 1,
    pricePerMonth: 4200,
    tier: "ai-specialist",
    avatar: "RP",
    specialisms: ["LLM Applications", "RAG Systems"],
  },
  {
    id: "tharushi-w",
    name: "Tharushi W.",
    role: "Full-Stack Engineer",
    location: "Galle, Sri Lanka",
    experience: 2,
    skills: ["React", "TypeScript", "Node.js", "Supabase", "Tailwind CSS"],
    scores: { technical: 82, aiFluency: 84, communication: 91 },
    availabilityWeeks: 2,
    pricePerMonth: 1500,
    tier: "junior-plus",
    avatar: "TW",
    specialisms: ["Frontend", "Product Engineering"],
  },
  {
    id: "dinesh-r",
    name: "Dinesh R.",
    role: "DevOps / Platform Engineer",
    location: "Colombo, Sri Lanka",
    experience: 5,
    skills: ["Kubernetes", "Terraform", "AWS", "GCP", "CI/CD", "Python"],
    scores: { technical: 90, aiFluency: 81, communication: 86 },
    availabilityWeeks: 3,
    pricePerMonth: 4500,
    tier: "senior",
    avatar: "DR",
    specialisms: ["Platform Engineering", "Cloud Infrastructure"],
  },
  {
    id: "nadeesha-a",
    name: "Nadeesha A.",
    role: "Frontend Engineer",
    location: "Colombo, Sri Lanka",
    experience: 1,
    skills: ["React", "Vue.js", "TypeScript", "CSS", "Figma"],
    scores: { technical: 78, aiFluency: 76, communication: 89 },
    availabilityWeeks: 2,
    pricePerMonth: 1200,
    tier: "junior",
    avatar: "NA",
    specialisms: ["UI Engineering", "Design Systems"],
  },
  {
    id: "kasun-f",
    name: "Kasun F.",
    role: "Data Engineer",
    location: "Colombo, Sri Lanka",
    experience: 4,
    skills: ["Python", "dbt", "Snowflake", "Airflow", "SQL", "Spark"],
    scores: { technical: 89, aiFluency: 87, communication: 83 },
    availabilityWeeks: 2,
    pricePerMonth: 4000,
    tier: "ai-specialist",
    avatar: "KF",
    specialisms: ["Data Pipelines", "Analytics Engineering"],
  },
  {
    id: "ishara-m",
    name: "Ishara M.",
    role: "Mobile Engineer",
    location: "Colombo, Sri Lanka",
    experience: 3,
    skills: ["React Native", "Expo", "TypeScript", "Firebase", "Swift"],
    scores: { technical: 86, aiFluency: 80, communication: 88 },
    availabilityWeeks: 4,
    pricePerMonth: 1800,
    tier: "mid",
    avatar: "IM",
    specialisms: ["iOS/Android", "Cross-Platform Apps"],
  },
];

export const tierLabels: Record<TalentTier, string> = {
  junior: "Junior",
  "junior-plus": "Junior+",
  mid: "Mid",
  senior: "Senior",
  "ai-specialist": "AI Specialist",
};

export const roleCategories = [
  "All Roles",
  "Full-Stack",
  "Frontend",
  "Backend",
  "AI / ML",
  "DevOps",
  "Mobile",
  "Data",
];
