export const PROJECT_CATEGORIES = [
  "All",
  "Enterprise & Operations",
  "Consumer & Mobile",
  "AI & Emerging Tech",
  "Systems & Platforms",
] as const

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]

export type Project = {
  slug: string
  number: string
  title: string
  tags: string[]
  primaryColor: string
  year: string
  description: string
  bannerImage?: string
  category?: ProjectCategory
}

export const projects: Project[] = [
  {
    slug: "pics",
    number: "09",
    title: "The Personnel Information Communal System",
    tags: ["App Redesign", "Web Redesign", "Design System", "UX Revamp"],
    primaryColor: "#1C4CD9",
    year: "2025",
    description:
      "A comprehensive HR platform redesign focused on streamlining personnel data management across departments.",
    bannerImage: "/images/pics/0_banner.png",
    category: "Systems & Platforms",
  },
  {
    slug: "archsd",
    number: "08",
    title: "ArchSD Sight Check System",
    tags: ["App Redesign", "Web Redesign", "Design System", "UX Design"],
    primaryColor: "#BE2026",
    year: "2024",
    description:
      "A field inspection and data visualization platform for architectural site checks with real-time reporting.",
    bannerImage: "/images/archsd/0_banner.png",
    category: "Enterprise & Operations",
  },
  {
    slug: "mox",
    number: "07",
    title: "Apex Bank HK: Redefining Digital Wealth & Cross-Border Investing for the Greater Bay Area",
    tags: ["Web design", "Design System", "UX Design"],
    primaryColor: "#21FFFB",
    year: "2023",
    description:
      "Apex Bank HK: Redefining Digital Wealth & Cross-Border Investing for the Greater Bay Area",
      bannerImage: "/images/mox/0_banner.png",
    category: "Consumer & Mobile",
  },
  {
    slug: "reo",
    number: "06",
    title: "REO Polling Day Check-In",
    tags: ["Web Design", "Design System", "UX Design"],
    primaryColor: "#BA55C9",
    year: "2023",
    description:
      "A digital check-in system for the Registration and Electoral Office to manage polling day operations efficiently.",
    bannerImage: "/images/reo/0_banner.png",
    category: "Enterprise & Operations",
  },
  {
    slug: "rams",
    number: "05",
    title: "Rehab Activities Management System",
    tags: ["Web Redesign", "Design System", "UX Design"],
    primaryColor: "#2EA588",
    year: "2023",
    description:
      "A rehabilitation management platform enabling therapists to schedule, track, and report patient activity programs.",
    bannerImage: "/images/rams/0_banner.png",
    category: "Systems & Platforms",
  },
  {
    slug: "mpfsmart",
    number: "02",
    title: "MPF Smart",
    tags: ["Web design", "Design System", "UX Design"],
    primaryColor: "#2ECF96",
    year: "2020",
    description:
      "A rehabilitation management platform enabling therapists to schedule, track, and report patient activity programs.",
      bannerImage: "/images/mpfsmart/0_banner.png",
    category: "Consumer & Mobile",
  },
  
]
