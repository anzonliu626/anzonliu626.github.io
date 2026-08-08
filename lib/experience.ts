export interface ExperienceItem {
  id: number
  period: string
  role: string
  company: string
  bullets: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    period: "May 2025 – Present",
    role: "UI/UX Designer & Product Lead",
    company: "Freelance / Contractor",
    bullets: [
      "End-to-End AI SaaS Product Delivery: Acted as the sole Product & Design Lead for a cutting-edge AI-powered School-Based Teaching Management System, overseeing client requirement gathering, user research, wireframing, UI execution, and QA.",
      "Architected the information architecture and complex screen flows for school-scale business logic, identifying edge cases and streamlining the user journey to optimize digital satisfaction within the study landscape.",
      "Built low-to-high fidelity interactive prototypes in Figma to rapidly validate functionalities with users, applying continuous iteration based on qualitative usability feedback and competitive analysis.",
      "Embedded deeply into Agile product squads, facilitating cross-functional workshops to ensure a shared vision between technical teams, product owners, and business units.",
    ],
  },
  {
    id: 2,
    period: "2023 - 2025",
    role: "UX/UI Designer",
    company: "Automated System Limited",
    bullets: [
      "Spearheaded the UX transformation for a complex, enterprise-scale government SaaS platform (ArchSD), transforming abstract structural requirements into intuitive wireframes and interactive prototypes.",
      "Established and maintained design system governance, creating centralized digital design systems and reusable UI component libraries to define typographic hierarchies and visual patterns across platforms.",
      "Served as the voice of the customer, performing comprehensive user research to understand pain points and translate findings into data-driven design solutions.",
      "Liaised directly with project managers and engineers for developer handoff, actively participating in stakeholder presentations to align design strategies with overarching business requirements.",
    ],
  },
  {
    id: 3,
    period: "2021 - 2022",
    role: "Mobile Developer",
    company: "Cherrypicks Limited",
    bullets: [
      "Acted as a critical bridge between design and engineering teams, enforcing quality gatekeeping and reviewing User Acceptance Testing (UAT) to guarantee design intent matched the final production code.",
      "Implemented frontend and backend solutions across mobile and web platforms, leveraging a deep understanding of HTML5, CSS3, JavaScript and VR/AR to ensure the technical feasibility of complex UI designs.",
    ],
  },
  {
    id: 4,
    period: "2020 - 2021",
    role: "Multimedia Designer",
    company: "FQC Investment System Limited",
    bullets: [
      "Drove aesthetic optimization and brand building by producing high-quality visual assets and interactive animations (Motion Graphics) across all digital platforms.",
      "Served as an early advocate for the user, conducting foundational user research to understand user motivations and translating these insights into intuitive UI designs.",
      "Directed user testing sessions to evaluate the effectiveness of design solutions, applying continuous iteration to digital features based on qualitative usability feedback.",
    ],
  },
]
