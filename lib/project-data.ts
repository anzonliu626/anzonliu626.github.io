export interface MetricData {
  value: string
  label: string
  desc?: string
  bgColor: string
  textColor?: string
}

export interface PainPoint {
  title: string
  content: string
}

export interface Insight {
  title: string
  description: string
}

export interface SolutionFeature {
  title: string
  practice: string
  rationale: string
  imagePlaceholder: string
  isReversed?: boolean
  customBg?: string
}

export interface Testimonial {
  text: string
  author: string
  title: string
}

export interface Lesson {
  title: string
  description: string
}

export interface RoadmapItem {
  phase: string
  title: string
  description: string
  status: "completed" | "in-progress" | "planned"
}

export interface StrategyCard {
  title: string
  description: string
}

export interface ProjectData {
  meta: {
    title: string
    role: string
    team: string
    timeline: string
    tools: string
    primaryColor: string
    tags: string[]
  }
  hero: {
    headline: string
    executiveSummary: string
    bannerImage?: string
  }
  overview: {
    introduction: string
    coreMessage: string
  }
  metrics: MetricData[]
  problem: {
    title: string
    subtitle: string
    painPoints: PainPoint[]
    fullWidthImagePlaceholder: string
    contextImagePlaceholder: string
  }
  research: {
    title: string
    subtitle: string
    insights: Insight[]
    userFlowPlaceholder: string
    iaPlaceholder: string
  }
  strategy: {
    title: string
    subtitle: string
    highlightText: string
    cards: StrategyCard[]
    userFlowSubtitle: string
    beforeUserFlowPlaceholder: string
    afterUserFlowPlaceholder: string
    iaPlaceholder: string
  }
  solutions: {
    title: string
    subtitle: string
    features: SolutionFeature[]
    accessibilityTitle?: string
    accessibilityText?: string
    fullWidthImagePlaceholder: string
  }
  impact: {
    title: string
    metricsDesc: string
    chartPlaceholder: string
    testimonial: Testimonial
  }
  reflection: {
    lessons: Lesson[]
    roadmap: RoadmapItem[]
  }
}

export const ALL_PROJECTS_DATA: Record<string, ProjectData> = {
  rams: {
    meta: {
      title: "Rehab Activities Management System (RAMS)",
      role: "Lead UI/UX Designer — End-to-end UX Strategy, Information Architecture, Component System Design, Usability Testing",
      team: "1 Product Manager, 1 Full-Stack Engineer, and multiple Hospital Authority Medical Consultants",
      timeline: "3 Months",
      tools: "Figma, FigJam, Notion",
      primaryColor: "#2EA588",
      tags: ["Web Redesign", "Design System", "UX Design"],
    },

    hero: {
      headline: "Rehab Activities Management System (RAMS)",
      executiveSummary:
        "RAMS is an enterprise tablet and web ecosystem built for the Hong Kong Hospital Authority. It digitizes and automates the chaotic, paper-heavy rehabilitation workflows in Geriatric Day Hospitals—streamlining clinical documentation, safeguarding patient safety, and maximizing equipment throughput.",
        bannerImage: "/images/rams/0_banner.png",
    },

    overview: {
      introduction:
        "In public health infrastructure, efficiency equals safety. Geriatric Day Hospitals (such as Yan Chai and Tuen Mun Hospitals) manage hundreds of elderly patients daily, each requiring highly personalized, multi-stage physical and occupational therapy regimens.",
      coreMessage:
        "A secure, tablet-optimized web application that allows therapists to instantly retrieve patient profiles via QR code, track real-time vital signs, and intelligently manage shared therapy equipment lines.",
    },

    metrics: [
      {
        value: "+28%",
        label: "Operational Throughput",
        desc: "More patients processed per therapist per shift after rollout",
        bgColor: "#2EA588",
        textColor: "#FFFFFF",
      },
      {
        value: "0%",
        label: "Clinical Safety Index",
        desc: "Zero missed critical patient alerts recorded in the first 6 months post-launch",
        bgColor: "#F5D547",
        textColor: "#494949",
      },
      {
        value: "-45%",
        label: "Administrative Overhead",
        desc: "Reduction in time therapists spent on manual paperwork and cross-referencing",
        bgColor: "#B44363",
        textColor: "#FFFFFF",
      },
    ],

    problem: {
      title: "The Core Challenge & Pain Points",
      subtitle:
        "Prior to RAMS, geriatric rehabilitation relied heavily on laminated paper routing sheets and manual whiteboard scheduling. This created a high-stress environment plagued by cognitive overload.",
      painPoints: [
        {
          title: "The Business & Operational Pain Point",
          content:
            "Public hospitals face critical patient-to-staff ratios. Manual tracking meant that shared equipment (e.g., parallel bars, specialized resistance machines) experienced massive bottlenecks. Highly paid physical therapists spent up to 30% of their shifts dealing with administrative overhead, waiting for equipment, or manually cross-referencing paper records with the central electronic health record (eHR) database.",
        },
        {
          title: "The User Pain Points",
          content:
            "Therapists & Nurses: Constantly shifting between patients while carrying paper files. High risk of missing critical, patient-specific medical alerts (e.g., \"Do not exceed 130bpm heart rate\").\n\nVulnerable Elderly Patients: Long, physically exhausting waiting periods between therapy sessions due to uncoordinated equipment distribution.",
        },
      ],
      fullWidthImagePlaceholder: "/images/rams/1_as_is_diagram_v5.png",
      contextImagePlaceholder: "/images/rams/2_problem_image.jpg",
    },

    research: {
      title: "Research & Insights",
      subtitle:
        "Through contextual inquiry, time-and-motion studies, and stakeholder interviews, three critical insights emerged that would shape every subsequent design decision.",
      insights: [
        {
          title: "The Context-Switching Blindspot",
          description:
            "Therapists rarely have both hands free. They hold tablets while physically supporting elderly patients. Complex multi-click menus fail instantly in this environment.",
        },
        {
          title: "The Static Data Trap",
          description:
            "Vital signs fluctuate during exercise. Checking a patient's vitals on an isolated monitor while their training history lives on a separate piece of paper creates dangerous situational blindness.",
        },
        {
          title: "The Shared Asset Race",
          description:
            "Therapists were making decisions based on visual guesswork—guessing which machine would open up next, leading to crowded therapy floors and idle equipment.",
        },
      ],
      userFlowPlaceholder: "/images/rams/3_USER_FLOW_DIAGRAM.png",
      iaPlaceholder: "/images/rams/4_Affinity_Diagram.png",
    },

    strategy: {
      title: "Strategy & Ideation",
      subtitle:
        "Translating research insights into actionable design principles and a radically simplified information architecture.",
      highlightText:
        "Simplify complex clinical workflows into a seamless, one-handed tablet experience that keeps therapists focused on patients — not paperwork?",
      cards: [
        {
          title: "One-Scan, Zero-Search",
          description:
            "Every interaction begins with a single QR scan. No login flows, no patient search screens. The patient wristband is the key to their entire digital profile.",
        },
        {
          title: "Glanceable Safety-First UI",
          description:
            "Critical alerts (heart rate limits, fall risk) are rendered as persistent, high-contrast banners that cannot be scrolled away or dismissed accidentally.",
        },
        {
          title: "Context-Aware Resource Priority:",
          description:
            "System layouts must adapt based on real-time room dynamics, highlighting what is needed next over historical data.",
        },
      ],
      userFlowSubtitle:
        "Instead of requiring a clinician to manually look up records through a complex search form, I restructured the entire architectural flow around a single, physical trigger: The Patient QR Code Scan.",
      beforeUserFlowPlaceholder: "/images/rams/5_BEFORE_USER_FLOW.png",
      afterUserFlowPlaceholder: "/images/rams/6_AFTER_USER_FLOW.png",
      iaPlaceholder: "/images/rams/7_STRATEGY_INFORMATION_ARCHITECTURE.png",
    },

    solutions: {
      title: "Iterative Design & Solutions",
      subtitle:
        "I designed the interface around modern tablet and web paradigms, optimizing tap zones for single-handed use or rapid workflows.",
      features: [
        {
          title: "The Quick-Scan Micro-Dashboard",
          practice:
            "Once a therapist scans a patient's appointment card QR code, the screen populates an immutable, high-contrast summary block containing the current prescription, crucial medical precautions (e.g., fall risks), and live vital feeds.",
          rationale:
            "This removes the necessity for manual database lookups, lowering the cognitive load from a multi-step search query to a simple physical action",
          imagePlaceholder: "/images/rams/8_FEATURE_1.png",
          isReversed: false,
        },
        {
          title: "Color-Coded Progress Matrix",
          practice:
            "I implemented a semantic, color-coded task matrix that visually maps out completed, active, and pending therapy goals.",
          rationale:
            "In early wireframes, I used standard text labels for status. Usability testing revealed clinicians missed these labels while multi-tasking. Switching to high-contrast, universally understood semantic color tokens entirely eliminated duplicated treatments during the testing phase.",
          imagePlaceholder: "/images/rams/8_FEATURE_2.png",
          isReversed: true,
        },
        {
          title: "Dynamic Predictive Queue Management",
          practice:
            "The system aggregates data across all active patients and lists shared equipment statuses. Patients with high-priority tracking needs or those closest to finishing their current set are dynamically bumped to the top of the queue list.",
          rationale:
            "This shifted the clinic floor model from reactive scheduling to proactive resource routing, dramatically cutting idle times.",
          imagePlaceholder: "/images/rams/8_FEATURE_3.png",
          isReversed: false,
        },
      ],
      accessibilityTitle: "Defensive Design & System Accessibility",
      accessibilityText:
        "Because this application operates on a fast-paced medical floor, touch targets were intentionally upscaled to a minimum of 56x56px to accommodate split-second actions and variable screen viewing angles. Color contrasts were validated against WCAG 2.1 AA compliance thresholds, ensuring legibility under harsh, fluorescent hospital lighting conditions.",
      fullWidthImagePlaceholder: "/images/rams/9_Design_system.png",
    },

    impact: {
      title: "Impact & Next Steps",
      metricsDesc:
        "Six months post-launch across two pilot hospitals (Yan Chai and Tuen Mun), RAMS demonstrably improved both operational efficiency and clinical safety outcomes.",
      chartPlaceholder: "/images/rams/9_Design_system.png",
      testimonial: {
        text: "Before RAMS, I was a paper-shuffler who happened to do physiotherapy. Now I spend almost all of my time on what I was trained for — helping patients recover. The equipment queue feature alone saves me from walking the floor a dozen times a day.",
        author: "Senior Physiotherapist",
        title: "Yan Chai Hospital, Hong Kong Hospital Authority",
      },
    },

    reflection: {
      lessons: [
        {
          title: "Clinical Context Demands Deep Observation",
          description:
            "No amount of stakeholder interviews could have surfaced the safety-alert hierarchy problem. It only became visible by standing in the ward during a peak session. For high-stakes environments, contextual inquiry is non-negotiable.",
        },
        {
          title: "Design for Interruption, Not Ideal Flow",
          description:
            "Hospital workers are perpetually interrupted. Every UI pattern had to be designed to be resumable and forgiving mid-task — a constraint that fundamentally shaped the information architecture away from deep wizard flows towards flat, stateful screens.",
        },
        {
          title: "Negotiate Scope with Data, Not Opinion",
          description:
            "When the product team pushed to include a shift-handover module in the v1 scope, the time-and-motion data gave us the leverage to defer it. Data-backed prioritization is a designer's most underused tool.",
        },
      ],
      roadmap: [
        {
          phase: "Phase 2",
          title: "Predictive Equipment Scheduling",
          description:
            "Use historical session-length data to predict when equipment will become available and pre-assign it to queued patients automatically.",
          status: "planned",
        },
        {
          phase: "Phase 3",
          title: "Cross-Ward Patient Transfer Module",
          description:
            "Enable seamless handoff of patient care plans and session history when patients transfer between wards or hospitals within the HA network.",
          status: "planned",
        },
        {
          phase: "Phase 4",
          title: "Outcome Analytics Dashboard",
          description:
            "Aggregate anonymized recovery milestone data to surface trends that inform evidence-based therapy protocol improvements at the department level.",
          status: "planned",
        },
      ],
    },
  },
  reo: {
    meta: {
      title: "REO Polling Day Check-In",
      role: "UI/UX Designer (End-to-End UX Strategy, Information Architecture, Interaction Design, and Prototyping).",
      team: "2 Designers, 1 Product Manager, 1 Analysis Developer, 1 Backend Developer",
      timeline: "3 Months",
      tools: "Figma, FigJam, Adobe XD",
      primaryColor: "#BA55C9",
      tags: ["Web Design", "Design System", "UX Design"],
    },

    hero: {
      headline: "REO Polling Day Check-In",
      executiveSummary:
        "The REO Polling Day Check-In is an enterprise web application designed to orchestrate the complex logistics, shift-tracking, and performance evaluation of thousands of short-term electoral staff. By introducing location-bound QR workflows, smart exception handling, and bulk-action management tools, we transformed a heavily manual, error-prone administrative burden into a secure, automated ecosystem—reducing check-in times by 80% and drastically accelerating payroll processing.",
        bannerImage: "/images/reo/0_banner.png",
    },

    overview: {
      introduction:
        "Managing a temporary workforce during a high-stakes, time-sensitive event requires flawless operational design. Our goal was to modernize the electoral workforce infrastructure.",
      coreMessage:
        "Empowering electoral staff with frictionless, location-aware check-ins while equipping Presiding Officers with a powerful command center for real-time workforce and payroll management.",
    },

    metrics: [
      {
        value: "+100%",
        label: "Elimination",
        desc: "no more of manual payroll calculation delays",
        bgColor: "#2EA588",
        textColor: "#FFFFFF",
      },
      {
        value: "0%",
        label: "Data loss",
        desc: "Zero data loss in staff performance tracking for future electoral cycles",
        bgColor: "#F5D547",
        textColor: "#494949",
      },
      {
        value: "-80%",
        label: "Administrative Overhead",
        desc: "Reduction in staff check-in/out processing time",
        bgColor: "#B44363",
        textColor: "#FFFFFF",
      },
    ],

    problem: {
      title: "The Core Challenge & Pain Points",
      subtitle:
        "Before this digital transformation, managing polling station staff was a logistical and financial bottleneck heavily reliant on paper trails.",
      painPoints: [
        {
          title: "The Business & Operational Pain Point",
          content:
            "The electoral workforce consists entirely of ad-hoc, short-term hires. Calculating salaries based on wildly varying shift schedules, unpredictable overtime (OT), and localized lateness reasons required an immense, manual data-entry effort post-election, leading to severe payroll delays.",
        },
        {
          title: "The User Pain Points",
          content:
            "Station managers were overwhelmed. Between overseeing the election process, they had to manually record attendance, investigate discrepancies, process station transfers on the fly, and evaluate staff conduct for future rehiring—all using clipboards.",
        },
                {
          title: "Project Goals",
          content:
            "1. Automate timesheet generation to directly feed backend payroll calculations \n 2. Enforce physical location verification for attendance. \n 3. Empower localized management to handle edge cases (OT/lateness) immediately at the station level.",
        },
      ],
      fullWidthImagePlaceholder: "/images/reo/1_as_is_diagram.png",
      contextImagePlaceholder: "/images/reo/2_problem_image.jpg",
    },

    research: {
      title: "Research & Insights",
      subtitle:
        "To build an application that survives the pressure of Polling Day, we had to deeply understand the behavioral dynamics of the station floor.",
      insights: [
        {
          title: "The 'Exception-Only' Friction Principle",
          description:
            "We discovered that 90% of staff arrive exactly on time. Forcing everyone to fill out manual timestamps was redundant. Insight: The system should only introduce friction (asking for reasons) when the scan time deviates from the official roster.",
        },
        {
          title: "The Need for Physical Verification",
          description:
            "Simple username/password logins could lead to 'buddy punching' (checking in for a friend). Insight: Generating a unique, dynamic QR code specific to the physical polling station ensures the staff member is actually on-site.",
        },
        {
          title: "Officer Cognitive Overload",
          description:
            "Presiding Officers do not have the time to click into individual profiles to approve shifts. Insight: Management tools must be built around 'Bulk Actions' and high-density data scanning.",
        },
      ],
      userFlowPlaceholder: "/images/reo/3_User_Journey_Map.png",
      iaPlaceholder: "/images/reo/4_Affinity_Diagram.png",
    },

    strategy: {
      title: "Strategy & Ideation",
      subtitle:
        "Based on our insights, we framed our challenge",
      highlightText:
        "How Might We automate precise shift tracking for a massive, temporary workforce while giving local managers the tools to override and evaluate edge cases in real-time?",
      cards: [
        {
          title: "Context-Aware Automation",
          description:
            "The system should do the heavy math",
        },
        {
          title: "Graceful Exception Handling",
          description:
            "Make handling lateness, OT, and station transfers seamless, not punitive.",
        },
        {
          title: "Command-Level Efficiency",
          description:
            "Optimize the Officer dashboard for bulk processing and rapid data scanning.",
        },
      ],
      userFlowSubtitle:
        "We split the IA into two distinct ecosystem branches based on role-based access control (RBAC), ensuring general staff never saw the complex management tools.",
      beforeUserFlowPlaceholder: "/images/reo/5_BEFORE_USER_FLOW.png",
      afterUserFlowPlaceholder: "/images/reo/6_AFTER_USER_FLOW.png",
      iaPlaceholder: "/images/reo/7_STRATEGY_INFORMATION_ARCHITECTURE.png",
    },

    solutions: {
      title: "Iterative Design & Solutions",
      subtitle:
        "Our design bridged the gap between front-line usability and complex backend payroll logic.",
      features: [
        {
          title: "Location-Bound Smart Check-In",
          practice:
            "To use this feature, the system displays a secure, rotating QR code at each physical station. Staff open their personal accounts on their mobile phones and scan the code. The system instantly captures the scan time, verifies the employee's identity, and matches the station's location tag against the employee's scheduled shift.",
          rationale:
            "This setup stops time fraud like 'buddy punching' because staff must be physically present at the station to check in. It also cuts down on paperwork for managers by automatically comparing scans to the roster to catch late arrivals. Finally, it makes payroll highly accurate because it records exact work hours with digital timestamps instead of manual logs.",
          imagePlaceholder: "/images/reo/8_FEATURE_1.png",
          isReversed: false,
        },
        {
          title: "Conditional 'Exception' Forms",
          practice:
            "When a worker scans the QR code at the correct rostered time, the system lets them check in with just a single click. However, if the scan shows they are late or working overtime, a small window instantly slides up from the bottom of their screen. The worker must type the reason for the time difference into this form right away before they can finish checking in or out.",
          rationale:
            "This feature saves managers from wasting time chasing down workers later to ask why they were late or stayed extra hours. By popping up the form immediately, the system catches the reasons while the event is still fresh in the worker's mind. It also keeps all attendance notes organized in one digital spot, which makes it easy for supervisors to review and approve hours later.",
          imagePlaceholder: "/images/reo/8_FEATURE_2.png",
          isReversed: true,
        },
        {
          title: "The Presiding Officer Command Center",
          practice:
            "Officers have access to the 'Maintain Claimant Record' dashboard. They can view the live status of all station staff, bulk-approve valid records, and input specific OT duties.",
          rationale:
            "During early wireframe testing, Officers complained about the time it took to evaluate staff for future hiring. We pivoted from a complex review form to a quick-toggle system ('Recommended for future appointments') integrated directly into the bulk-approval data table.",
          imagePlaceholder: "/images/reo/8_FEATURE_3.png",
          isReversed: false,
        },
        {
          title: "Quick-Transfer Protocol",
          practice:
            "When plans change unexpectedly, an officer can tap a staff member's profile on their screen and select the 'Quick Transfer' option to move them to a new station immediately. The system instantly updates the worker's digital assignment on the fly, allowing them to scan the QR code at their new location without any delay. At the same time, the system automatically adjusts the background tracking to log the exact minute the swap happened.",
          rationale:
            "This protocol allows management to handle sudden changes during unpredictable events without breaking the automated payroll system. By instantly updating assignments on the fly, it ensures that staff hours and location data stay perfectly accurate on the backend. This saves officers from having to fix errors or sort out messy time logs by hand after a busy shift ends.",
          imagePlaceholder: "/images/reo/8_FEATURE_4.png",
          isReversed: true,
        },
      ],
      accessibilityTitle: "Defensive Design & System Accessibility",
      accessibilityText:
        "Because this application operates on a fast-paced medical floor, touch targets were intentionally upscaled to a minimum of 56x56px to accommodate split-second actions and variable screen viewing angles. Color contrasts were validated against WCAG 2.1 AA compliance thresholds, ensuring legibility under harsh, fluorescent hospital lighting conditions.",
      fullWidthImagePlaceholder: "/images/reo/9_Design_system.png",
    },

    impact: {
      title: "Impact & Next Steps",
      metricsDesc:
        "To support a high-stakes, fast-paced election day environment, the web application features an upscaled touch target design of at least 56x56px. This ensures polling station staff can execute rapid, error-free check-ins and check-outs under pressure. Visual elements and contrast levels were strictly validated against WCAG 2.1 AA compliance thresholds. This guarantees optimal legibility for senior officers managing records under the mixed and unpredictable lighting of various public voting venues.",
      chartPlaceholder: "/images/reo/9_Design_system.png",
      testimonial: {
        text: "For the first time, I could actually manage my station's operations instead of acting as a paper-pusher for HR.",
        author: "Senior Presiding Officer.",
        title: "Registration and Electoral Office",
      },
    },

    reflection: {
      lessons: [
        {
          title: "Clinical Context Demands Deep Observation",
          description:
            "No amount of stakeholder interviews could have surfaced the safety-alert hierarchy problem. It only became visible by standing in the ward during a peak session. For high-stakes environments, contextual inquiry is non-negotiable.",
        },
        {
          title: "Design for Interruption, Not Ideal Flow",
          description:
            "Hospital workers are perpetually interrupted. Every UI pattern had to be designed to be resumable and forgiving mid-task — a constraint that fundamentally shaped the information architecture away from deep wizard flows towards flat, stateful screens.",
        },
        {
          title: "Negotiate Scope with Data, Not Opinion",
          description:
            "When the product team pushed to include a shift-handover module in the v1 scope, the time-and-motion data gave us the leverage to defer it. Data-backed prioritization is a designer's most underused tool.",
        },
      ],
      roadmap: [
        {
          phase: "Phase 2",
          title: "Predictive Equipment Scheduling",
          description:
            "Use historical session-length data to predict when equipment will become available and pre-assign it to queued patients automatically.",
          status: "planned",
        },
        {
          phase: "Phase 3",
          title: "Cross-Ward Patient Transfer Module",
          description:
            "Enable seamless handoff of patient care plans and session history when patients transfer between wards or hospitals within the HA network.",
          status: "planned",
        },
        {
          phase: "Phase 4",
          title: "Outcome Analytics Dashboard",
          description:
            "Aggregate anonymized recovery milestone data to surface trends that inform evidence-based therapy protocol improvements at the department level.",
          status: "planned",
        },
      ],
    },
  },
  archsd: {
    meta: {
      title: "ArchSD Sight Check System",
      role: "Lead UI/UX Designer. I spearheaded the product discovery, UX strategy, and information architecture, managing 1 support designer while collaborating tightly with a highly complex matrixed team",
      team: "1 Business Analyst, 3 Product Managers, and 2 System Analysts split across Web and Mobile domains",
      timeline: "12 Months",
      tools: "Figma, FigJam,Confluence, Jira",
      primaryColor: "#BE2026",
      tags: ["App Redesign", "Web Redesign", "Design System", "UX Design"],
    },

    hero: {
      headline: "ArchSD Sight Check System",
      executiveSummary:
        "The ArchSD Sight Check System is an enterprise-grade, multi-platform ecosystem (Mobile & Web) designed for the Hong Kong Architectural Services Department. The project completely modernizes and digitalizes high-overhead, mission-critical paper inspection processes across civil construction sites. By introducing interactive wall chart drawing, front-end validation engines, and automated multi-tiered approval routing, the platform slashes document turnaround time, drives administrative human error to near 0%, and turns days of manual auditing into a frictionless, seconds-long search query.",
        bannerImage: "/images/archsd/0_banner.png",
    },

    overview: {
      introduction:
        "In large-scale public infrastructure, operational latency doesn't just cost money—it stalls public safety. Managing compliance, safety, and quality checks across thousands of active construction zones requires flawless coordination among highly diverse user archetypes, ranging from on-site general laborers to senior government auditors.",
      coreMessage:
        "Collapsing multi-tiered government paperwork and field logistics into an intuitive, ruggedized mobile tool and powerful desktop dashboard—ensuring absolute compliance, zero data loss, and real-time site oversight.",
    },

    metrics: [
      {
        value: "+100%",
        label: "Elimination",
        desc: "no more of manual payroll calculation delays",
        bgColor: "#2EA588",
        textColor: "#FFFFFF",
      },
      {
        value: "0%",
        label: "Data loss",
        desc: "Zero data loss in staff performance tracking for future electoral cycles",
        bgColor: "#F5D547",
        textColor: "#494949",
      },
      {
        value: "-80%",
        label: "Administrative Overhead",
        desc: "Reduction in staff check-in/out processing time",
        bgColor: "#B44363",
        textColor: "#FFFFFF",
      },
    ],

    problem: {
      title: "The Core Challenge & Pain Points",
      subtitle:
        "Before this digital transformation, managing polling station staff was a logistical and financial bottleneck heavily reliant on paper trails.",
      painPoints: [
        {
          title: "The Business & Operational Pain Point",
          content:
            "The electoral workforce consists entirely of ad-hoc, short-term hires. Calculating salaries based on wildly varying shift schedules, unpredictable overtime (OT), and localized lateness reasons required an immense, manual data-entry effort post-election, leading to severe payroll delays.",
        },
        {
          title: "The User Pain Points",
          content:
            "Station managers were overwhelmed. Between overseeing the election process, they had to manually record attendance, investigate discrepancies, process station transfers on the fly, and evaluate staff conduct for future rehiring—all using clipboards.",
        },
                {
          title: "Project Goals",
          content:
            "1. Automate timesheet generation to directly feed backend payroll calculations \n 2. Enforce physical location verification for attendance. \n 3. Empower localized management to handle edge cases (OT/lateness) immediately at the station level.",
        },
      ],
      fullWidthImagePlaceholder: "/images/archsd/1_as_is_diagram.png",
      contextImagePlaceholder: "/images/archsd/2_problem_image.png",
    },

    research: {
      title: "Research & Insights",
      subtitle:
        "To build an interface capable of surviving the rugged conditions of a construction site while satisfying the strict regulatory standards of a government department, our product discovery phase had to be incredibly thorough. We conducted contextual inquiries, site shadowing, and deep-dive user interviews.",
      insights: [
        {
          title: "The Asymmetric Tech-Literacy Gap",
          description:
            "The user base represents a massive cognitive split. General laborers and site foremen require large touch targets, minimal typing, and highly deterministic interactions (e.g., binary choices, photo capture). Conversely, ArchSD managers and Business Analysts require high-density, multi-column information grids to oversee massive data streams on desktop.",
        },
        {
          title: "	The 'Contextual Blindness' of Static Records",
          description:
            "Paper wall charts and progress logs are instantly outdated the moment a change occurs on-site. Field teams lacked a 'living document' capability to dynamically visual progress overlays directly on site drawings.",
        },
        {
          title: "The Approvals Stagnation Effect",
          description:
            "Most inspections ground to a halt not because the work was substandard, but because the next approver in line was traveling or away from their desk, unaware a document was pending.",
        },
      ],
      userFlowPlaceholder: "/images/archsd/3_User_Journey_Map.png",
      iaPlaceholder: "/images/archsd/4_Affinity_Diagram.png",
    },

    strategy: {
      title: "Strategy & Ideation",
      subtitle:
        "We structured our high-level product strategy by forming a precise definition of the core challenge:",
      highlightText:
        "create a resilient, unified digital ecosystem that scales down to a foolproof mobile tool for highly mobile site workers, while scaling up to a high-density compliance engine for government inspectors?",
      cards: [
        {
          title: "Programmatic Guardrails (Defensive Design)",
          description:
            "Prevent human administrative slip-ups at the earliest possible vector through real-time front-end validation, smart formatting defaults, and dynamic mandatory inputs.",
        },
        {
          title: "Visual-First Progress Tracking",
          description:
            "Replace text-heavy logs with spatial and interactive visual representations—such as digital wall charts—to instantly communicate site status.",
        },
        {
          title: "Role-Based Information Density",
          description:
            "Tailor information presentation dynamically based on the active role and device context—keeping mobile lean and desktop robust.",
        },
      ],
      userFlowSubtitle:
        "We split the IA into two distinct ecosystem branches based on role-based access control (RBAC), ensuring general staff never saw the complex management tools.",
      beforeUserFlowPlaceholder: "/images/archsd/5_BEFORE_USER_FLOW.png",
      afterUserFlowPlaceholder: "/images/archsd/6_AFTER_USER_FLOW.png",
      iaPlaceholder: "/images/archsd/7_STRATEGY_INFORMATION_ARCHITECTURE.png",
    },

    solutions: {
      title: "Iterative Design & Solutions",
      subtitle:
        "Our design architecture treats digital forms not as static pages, but as dynamic, modular data blocks that fluidly adjust between creation, field data gathering, and final approval phases.",
      features: [
        {
          title: "The Interactive Wall Chart Drawing Interface",
          practice:
            "We designed a spatial touch interface that transforms technical wall chart drawings into clickable, zoning maps. Users can tap a specific section of a wall drawing on mobile to immediately view its inspection status or directly launch a context-linked form (e.g., an ITAP or a Request for Inspection).",
          rationale:
            "This ties abstract paperwork directly to physical site geography, eliminating spatial confusion and manual data pairing.",
          imagePlaceholder: "/images/archsd/8_FEATURE_1.png",
          isReversed: false,
        },
        {
          title: "High-Velocity Form Digitalization & Form Template Creator",
          practice:
            "For desktop users, we built a flexible, component-based Form Template Creator that allows administrative staff to spin up complex compliance forms using standardized, accessible inputs (pre-defined multiple-choice sets, numeric fields with strict formatting bounds, mandatory photo/file attachment triggers).",
          rationale:
            "Our initial mobile prototype utilized standard text input fields for field workers to type out comments and site conditions. During on-site testing, we observed that foremen completely bypassed typing due to physical constraints, glare, and time pressure, resulting in empty, non-compliant records. We rapidly pivoted our approach in the high-fidelity iteration: we eliminated open-ended text entry as the primary option, replacing it with predictive choice pills, smart auto-fill fields (pulling location and subcontractor records from backend contractor databases), and a mandatory voice-to-text / photo attachment flow. This choice dropped field form-completion friction significantly while driving empty data fields down to absolute zero.",
          imagePlaceholder: "/images/archsd/8_FEATURE_2.png",
          isReversed: true,
        },
        {
          title: "Bulk Action Multi-Tier Approval Flow",
          practice:
            "For ArchSD staff managing massive document backlogs, the desktop app introduces a unified approval table featuring quick-scan summary cards, robust data filters, and an accessible bulk-approval action bar.",
          rationale:
            "",
          imagePlaceholder: "/images/archsd/8_FEATURE_3.png",
          isReversed: false,
        },
      ],
      accessibilityTitle: "Defensive Design & System Accessibility",
      accessibilityText:
        "A refined, high-visibility interface using color-coded state pills. ‘Compliant’ is represented by a solid green pill with a checkmark, while ’on-Compliant; features a high-alert red pill with a warning icon, immediately visible even under direct sunlight.",
      fullWidthImagePlaceholder: "/images/archsd/9_Design_system.png",
    },

    impact: {
      title: "Impact & Next Steps",
      metricsDesc:
        "The successful delivery of the ArchSD Sight Check System successfully proved that strategic UX interventions can dramatically modernize legacy government infrastructure operations.",
      chartPlaceholder: "/images/archsd/10_Design_system.png",
      testimonial: {
        text: "For the first time, I could actually manage my station's operations instead of acting as a paper-pusher for HR.",
        author: "Senior Presiding Officer.",
        title: "Registration and Electoral Office",
      },
    },

    reflection: {
      lessons: [
        {
          title: "Key Takeaways on Cross-Functional Alignment",
          description:
            "No amount of stakeholder interviews could have surfaced the safety-alert hierarchy problem. It only became visible by standing in the ward during a peak session. For high-stakes environments, contextual inquiry is non-negotiable.",
        },
        {
          title: "Design for Interruption, Not Ideal Flow",
          description:
            "Hospital workers are perpetually interrupted. Every UI pattern had to be designed to be resumable and forgiving mid-task — a constraint that fundamentally shaped the information architecture away from deep wizard flows towards flat, stateful screens.",
        },
        {
          title: "Negotiate Scope with Data, Not Opinion",
          description:
            "When the product team pushed to include a shift-handover module in the v1 scope, the time-and-motion data gave us the leverage to defer it. Data-backed prioritization is a designer's most underused tool.",
        },
      ],
      roadmap: [
        {
          phase: "Phase 2",
          title: "Predictive Equipment Scheduling",
          description:
            "Use historical session-length data to predict when equipment will become available and pre-assign it to queued patients automatically.",
          status: "planned",
        },
        {
          phase: "Phase 3",
          title: "Cross-Ward Patient Transfer Module",
          description:
            "Enable seamless handoff of patient care plans and session history when patients transfer between wards or hospitals within the HA network.",
          status: "planned",
        },
        {
          phase: "Phase 4",
          title: "Outcome Analytics Dashboard",
          description:
            "Aggregate anonymized recovery milestone data to surface trends that inform evidence-based therapy protocol improvements at the department level.",
          status: "planned",
        },
      ],
    },
  },
  pics: {
    meta: {
      title: "PICS III (Personnel Information Communal System)",
      role: "Product Designer (Led UX strategy, modular information architecture, accessible component design, and end-to-end interface execution within a team of 3 designers).",
      team: "Collaborated seamlessly within a high-impact enterprise pod: 3 Product Managers, 3 Business Analysts, 1 Project Coordinator, a 5-member AI Team, 1 Mobile Solution Architect, and a 4-member Data Analysis Team.",
      timeline: "13 Months and More",
      tools: "Figma, FigJam,Confluence, Miro",
      primaryColor: "#1C4CD9",
      tags: ["App/Web Revamp", "Design System", "UX Design", "Workshop"],
    },

    hero: {
      headline: "PICS III (Personnel Information Communal System)",
      executiveSummary:
        "PICS III is a comprehensive, enterprise-grade digital transformation of the legacy Human Resource Management System (HRMS) serving thousands of active and retired personnel. The project completely overhauled a severely outdated, security-compromised architecture crippled by the deprecation of Adobe Flash. By engineering an accessible multi-modular portal featuring digitalized workflows, an intelligent conversational AI layer, and unified compliance engines, the design unlocked HK$5.2 Million in annual realizable savings and over HK$30.5 Million in annual notional efficiency gains.",
      bannerImage: "/images/pics/0_banner.png",
    },

    overview: {
      introduction:
        "In massive public organizations, legacy software directly caps operational velocity. PICS III was commissioned to completely modernize a mission-critical platform, ensuring total compliance while radically improving user autonomy.",
      coreMessage:
        "Consolidating fragmented, policy-heavy legacy workflows into an intuitive, high-accessibility self-service ecosystem that empowers cross-generational personnel while eliminating millions in administrative overhead.",
    },

    metrics: [
      {
        value: "+100%",
        label: "Elimination",
        desc: "no more of manual payroll calculation delays",
        bgColor: "#2EA588",
        textColor: "#FFFFFF",
      },
      {
        value: "0%",
        label: "Data loss",
        desc: "Zero data loss in staff performance tracking for future electoral cycles",
        bgColor: "#F5D547",
        textColor: "#494949",
      },
      {
        value: "-80%",
        label: "Administrative Overhead",
        desc: "Reduction in staff check-in/out processing time",
        bgColor: "#B44363",
        textColor: "#FFFFFF",
      },
    ],

    problem: {
      title: "The Core Challenge & Pain Points",
      subtitle:
        "The legacy system (PICS II) was a ticking technical and operational clock. Built on technologies dependent on Adobe Flash, the system suffered from severe security vulnerabilities and accessibility failures following the global deprecation of Flash.",
      painPoints: [
        {
          title: "The Institutional & Business Bottleneck",
          content:
            "The organization was bleeding capital on specialized maintenance fees to keep the fragile infrastructure alive. Furthermore, core HR processes—ranging from complex Quartering Allocations to Applications for Acceptance of Advantages—relied heavily on physical paper forms. This created an astronomical printing overhead and a slow data-entry pipeline for HR administrators.",
        },
        {
          title: "The User Friction Points",
          content:
            "Active Staff:Experienced intense cognitive fatigue. Applying for promotions, registering for psychology courses, or updating Personal Beneficiary Information required navigating disconnected, jargon-heavy multi-step screens with zero contextual help. \n Retired Staff: Were virtually locked out of the system due to the outdated UI patterns, forcing them to rely heavily on phone hotlines to check basic leave balances, seek welfare options, or book Hotel / Holiday Homes. This completely overwhelmed the internal support staff.",
        },
        {
          title: "Strategic Design Objectives",
          content:
            "1. Total Feature Parity & Modernization: Migrate and elevate over a dozen core HR functions into a singular, responsive platform. \n 2. Defensive, Compliant UX: Design smart form-wizards that prevent invalid entries before submission, mitigating legal risks in high-stakes actions like beneficiary allocation and advantage acceptance. \n 3. Automate Customer Support: Integrate an AI chatbot capable of accurately answering dense policy questions instantly, freeing up human staff for complex casework.",
        },
      ],
      fullWidthImagePlaceholder: "/images/pics/1_as_is_diagram.png",
      contextImagePlaceholder: "/images/pics/2_problem_image.png",
    },

    research: {
      title: "Research & Insights",
      subtitle:
        "To redesign an ecosystem this vast, our design team partnered with the 3 Business Analysts and the 4-member Data Analysis Team to run a comprehensive mixed-methods research initiative. We audited historical hotline logs (quantitative) and conducted 22 deeply contextual user interviews with both active and retired personnel (qualitative).",
      insights: [
        {
          title: "The Generational Usability Divide",
          description:
            "Active personnel prioritize rapid, high-density data management (e.g., managing reports or processing promotions). Conversely, retired personnel require high accessibility, clear visual hierarchies, and explicit reassurance.",
        },
        {
          title: "The Compliance Anxiety Loop",
          description:
            "Functions like the Application for Acceptance of Advantages and Central Fund / Family Protection Fund updates carry strict regulatory weight. Users routinely abandoned digital attempts and called hotlines because the policy text was too intimidating. They feared making an error that could impact their legal standing or benefits.",
        },
      ],
      userFlowPlaceholder: "/images/pics/3_User_Journey_Map.png",
      iaPlaceholder: "/images/pics/4_Affinity_Diagram.png",
    },

    strategy: {
      title: "Strategy & Ideation",
      subtitle:
        "We structured our overall design direction around a central challenge:",
      highlightText:
        "Synthesize an incredibly dense, regulatory-heavy legacy HR infrastructure into an accessible, intelligent, and highly unified portal that reduces support overhead and satisfies users across all age brackets?",
      cards: [
        {
          title: "Radical Consolidation",
          description:
            "Radical ConsolidationUnify all 12+ fragmented applications (from Leave and Welfare to Quarters and Psychology Courses) under a unified global design language and a single relational database view.",
        },
        {
          title: "Conversational Cushioning (AI-First)",
          description:
            "Position the AI chatbot not just as an FAQ search bar, but as a contextual companion capable of guiding users through complex application policies right inside the form workspace.",
        },
        {
          title: "Accessible Component Architecture",
          description:
            "Implement atomic design tokens that strictly adhere to WCAG 2.1 AA standards, ensuring bulletproof legibility under any viewing condition.",
        },
      ],
      userFlowSubtitle:
        "//",
      beforeUserFlowPlaceholder: "/images/pics/5_BEFORE_USER_FLOW.png",
      afterUserFlowPlaceholder: "/images/pics/6_AFTER_USER_FLOW.png",
      iaPlaceholder: "/images/pics/7_STRATEGY_INFORMATION_ARCHITECTURE.png",
    },

    solutions: {
      title: "Iterative Design & Solutions",
      subtitle:
        "The core of PICS III is built around simplifying dense information entry and offloading administrative pressure.",
      features: [
        {
          title: "The Intelligent Form Wizard (Eradicating the Paper Trail)",
          practice:
            "We transformed complex regulatory procedures, such as the Application for Acceptance of Advantages and Quartering Allocation, into step-by-step interactive wizards.",
          rationale:
            "By utilizing conditional logic, the form filters out non-applicable fields in real-time. For instance, when a retired staff member applies for Hotel / Holiday Homes, the system automatically pulls their eligible welfare bracket, eliminating manual verification steps.",
          imagePlaceholder: "/images/pics/8_FEATURE_1.png",
          isReversed: false,
        },
        {
          title: "Contextual AI Chatbot Integration",
          practice:
            "Developed alongside our 5-member AI team, the integrated chatbot lives natively within complex modules.",
          rationale:
            " If a user is confused by a question regarding the Personal Beneficiary Information of the Central Fund, they don't need to quit the application or call a hotline. Clicking [Ask AI] opens a docked panel that scans the user’s active step and provides clear, simplified regulatory context instantly.",
          imagePlaceholder: "/images/pics/8_FEATURE_2.png",
          isReversed: true,
        },
      ],
      accessibilityTitle: "The Usability Testing Failure & Iteration Story",
      accessibilityText:
        "During our first round of usability testing on the Leave Application & Balance Check module, we designed a dense, highly efficient dashboard layout inspired by modern consumer web apps. While active staff found it quick, retired staff suffered massive visual fatigue. They struggled to locate historical balance statements, causing a high task-failure rate of 42% for users over 60.",
      fullWidthImagePlaceholder: "/images/pics/9_Design_system.png",
    },

    impact: {
      title: "Impact & Next Steps",
      metricsDesc:
        "The successful delivery of the ArchSD Sight Check System successfully proved that strategic UX interventions can dramatically modernize legacy government infrastructure operations.",
      chartPlaceholder: "/images/archsd/10_Design_system.png",
      testimonial: {
        text: "For the first time, I could actually manage my station's operations instead of acting as a paper-pusher for HR.",
        author: "Senior Presiding Officer.",
        title: "Registration and Electoral Office",
      },
    },

    reflection: {
      lessons: [
        {
          title: "Key Takeaways on Cross-Functional Alignment",
          description:
            "No amount of stakeholder interviews could have surfaced the safety-alert hierarchy problem. It only became visible by standing in the ward during a peak session. For high-stakes environments, contextual inquiry is non-negotiable.",
        },
        {
          title: "Design for Interruption, Not Ideal Flow",
          description:
            "Hospital workers are perpetually interrupted. Every UI pattern had to be designed to be resumable and forgiving mid-task — a constraint that fundamentally shaped the information architecture away from deep wizard flows towards flat, stateful screens.",
        },
        {
          title: "Negotiate Scope with Data, Not Opinion",
          description:
            "When the product team pushed to include a shift-handover module in the v1 scope, the time-and-motion data gave us the leverage to defer it. Data-backed prioritization is a designer's most underused tool.",
        },
      ],
      roadmap: [
        {
          phase: "Phase 2",
          title: "Predictive Equipment Scheduling",
          description:
            "Use historical session-length data to predict when equipment will become available and pre-assign it to queued patients automatically.",
          status: "planned",
        },
        {
          phase: "Phase 3",
          title: "Cross-Ward Patient Transfer Module",
          description:
            "Enable seamless handoff of patient care plans and session history when patients transfer between wards or hospitals within the HA network.",
          status: "planned",
        },
        {
          phase: "Phase 4",
          title: "Outcome Analytics Dashboard",
          description:
            "Aggregate anonymized recovery milestone data to surface trends that inform evidence-based therapy protocol improvements at the department level.",
          status: "planned",
        },
      ],
    },
  },
  mpfsmart: {
    meta: {
      title: "MPF Smart: Demystifying Retirement Investing for Hong Kongers with AI-Driven Insights",
      role: "Lead UI/UX Designer (End-to-End Product Design, UX Research, Information Architecture, Interaction Design, Design System)",
      team: "1 Product Owner, 1 Lead UI/UX Designer (Me), 4 Full-Stack & Machine Learning Engineers",
      timeline: "1 year",
      tools: "Figma, Miro, Maze, Claude/ChatGPT (UX Writing & Prompting), ProtoPie",
      primaryColor: "#2ECF96",
      tags: ["App/Web Revamp", "Design System", "UX Design", "Workshop"],
    },

    hero: {
      headline: "MPF Smart",
      executiveSummary:
        "Hong Kong’s Mandatory Provident Fund (MPF) system manages over HK$1.1 Trillion in assets, yet the average working citizen actively manages their portfolio less than once a year. MPF Smart is an AI-powered financial management mobile application designed to bridge the gap between complex market analytics and everyday retail investors. By translating big data market trends into actionable, 1-tap portfolio recommendations, MPF Smart turns a passive, confusing obligation into an engaging, high-yield financial habit.",
      bannerImage: "/images/mpfsmart/0_banner.png",
    },

    overview: {
      introduction:
        "In Hong Kong, employees are legally required to contribute 5% of their monthly salary into an MPF scheme. However, the system suffers from severe Cognitive Overload and Action Paralysis.",
      coreMessage:
        "Consolidating fragmented, policy-heavy legacy workflows into an intuitive, high-accessibility self-service ecosystem that empowers cross-generational personnel while eliminating millions in administrative overhead.",
    },

    metrics: [
      {
        value: "84.2%",
        label: "User Confidence Rate",
        desc: "in AI prediction accuracy (Surpassing our >80% target benchmark)",
        bgColor: "#2EA588",
        textColor: "#FFFFFF",
      },
      {
        value: "3.8x",
        label: "Increase",
        desc: "in active monthly portfolio reviews (vs. the industry average of <1x/year)",
        bgColor: "#F5D547",
        textColor: "#494949",
      },
      {
        value: "65%",
        label: "Reduction in Decision Friction",
        desc: "(Average time to understand and rebalance funds dropped from 15 minutes to under 45 seconds)",
        bgColor: "#B44363",
        textColor: "#FFFFFF",
      },
    ],

    problem: {
      title: "The Core Challenge & Pain Points",
      subtitle:
        "In Hong Kong, employees are legally required to contribute 5% of their monthly salary into an MPF scheme. However, the system suffers from severe Cognitive Overload and Action Paralysis.",
      painPoints: [
        {
          title: "The User Pain Point",
          content:
            "Investment literacy is low. Non-expert citizens face obscure terms like 'Global Equity Series B Constituent Fund' and complex percentage allocation tables. Out of fear of making a wrong financial move, they default to passive 'Set & Regret' strategies, losing thousands in potential compounding returns over decades.",
        },
        {
          title: "The Business Pain Point",
          content:
            "Traditional financial institutions fail to engage retail users. Disengaged users lead to low platform retention, high customer support inquiry volumes, and missed opportunities to offer value-added wealth products.",
        },
        {
          title: "The Core Challenge",
          content:
            "How do we present high-level AI/Big Data algorithmic predictions (risk scores, provider rankings, timing signals) in a way that feels transparent, trustworthy, and actionable—without overwhelming the user or feeling like a opaque \"black box\"?",
        },
      ],
      fullWidthImagePlaceholder: "/images/mpfsmart/1_as_is_diagram.png",
      contextImagePlaceholder: "/images/mpfsmart/2_problem_image.png",
    },

    research: {
      title: "Research & Insights",
      subtitle:
        "We conducted a mixed-method study with Hong Kong working professionals across various income brackets ($n=210$ quantitative survey respondents, 14 qualitative 1-on-1 interview participants aged 24–54).",
      insights: [
        {
          title: "The 'Black-Box' Rejection",
          description:
            "Users do not trust total automation with their retirement savings. When presented with early concepts of automated trading, 76% of users hesitated: 'I don't want an AI secretly changing my life savings without explaining WHY.' Users want an intelligent co-pilot, not an invisible driver.",
        },
        {
          title: "Contextual Headlines > Technical Metrics",
          description:
            "Sharpe ratios, alpha scores, and volatility indices mean nothing to everyday workers. However, connecting recommendations to localized market context—such as 'Hong Kong Tech Stock Bounce Boosts Sector Index'—instantly validates why a fund recommendation is being made.",
        },
                {
          title: "The Missing Feedback Loop (Historical Amnesia)",
          description:
            "Users rarely remember their past fund switches. Without a clear transaction ledger tracking past buy/sell performance, users cannot tell if their previous decisions actually made or lost money, preventing them from learning over time.",
        },
      ],
      userFlowPlaceholder: "/images/mpfsmart/3_User_Journey_Map.png",
      iaPlaceholder: "/images/mpfsmart/4_Affinity_Diagram.png",
    },

    strategy: {
      title: "Strategy & Ideation",
      subtitle:
        "We structured our overall design direction around a central challenge:",
      highlightText:
        "transform complex AI algorithmic predictions into clear, bite-sized visual diagnostics so that non-expert Hong Kong workers can confidently optimize their MPF in under one minute?",
      cards: [
        {
          title: "Explainable Intelligence",
          description:
            "Every AI prediction must include an inline human-readable 'Why Engine' (analyzing timing, provider rank, risk, and expected return).",
        },
        {
          title: "Micro-Learning at Point of Action",
          description:
            "Educate users contextually during decision-making rather than forcing them to read external financial blogs.",
        },
        {
          title: "Frictionless Control",
          description:
            "Streamline multi-page fund allocation forms into intuitive, visual allocation comparison cards with explicit user authorization.",
        },
      ],
      userFlowSubtitle:
        "",
      beforeUserFlowPlaceholder: "/images/mpfsmart/5_BEFORE_USER_FLOW.png",
      afterUserFlowPlaceholder: "/images/mpfsmart/6_AFTER_USER_FLOW.png",
      iaPlaceholder: "/images/mpfsmart/7_STRATEGY_INFORMATION_ARCHITECTURE.png",
    },

    solutions: {
      title: "Iterative Design & Solutions",
      subtitle:
        "Side-by-side design evolution cards showing the transition from the failed Low-Fi 'Auto-Pilot Toggle' screen to the high-converting High-Fi 'Co-Pilot Recommendation' card.",
      features: [
        {
          title: "AI Fund Health & Diagnostic Report",
          practice:
            "A visual scorecard breaking down portfolio status into 5 digestible pillars: Market Potential, Timing Signals, Provider Rank, Risk Level, and Expected Return.",
          rationale:
            "Translates multi-page financial PDF prospectuses into an instant 0–100 Health Score, providing clarity at a glance.",
          imagePlaceholder: "/images/mpfsmart/8_FEATURE_1.png",
          isReversed: false,
        },
        {
          title: "Contextual Market Intelligence & News Feed",
          practice:
            "A localized financial news stream directly linked to the user's specific fund holdings.",
          rationale:
            "Helps users build an intuitive connection between macroeconomic events and their personal MPF balance, flattening the investment learning curve over time.",
          imagePlaceholder: "/images/mpfsmart/8_FEATURE_2.png",
          isReversed: true,
        },
        {
          title: "Explanatory Buy/Sell Rebalancing Engine & Ledger",
          practice:
            "A side-by-side Current Allocation vs. Proposed AI Allocation comparison card with projected growth trajectory curves and a historical record of all past buy/sell transactions.",
          rationale:
            "Figma wireframe snippets overlaid with virtual sticky notes showing real usability testing feedback (e.g., 'I want to see how this provider ranks against others before I click switch' ➔ Leading to the addition of Provider Rank badges).",
          imagePlaceholder: "/images/mpfsmart/8_FEATURE_3.png",
          isReversed: false,
        },
      ],
      accessibilityTitle: "The Usability Testing Failure & Iteration Story",
      accessibilityText:
        "During our first round of usability testing on the Leave Application & Balance Check module, we designed a dense, highly efficient dashboard layout inspired by modern consumer web apps. While active staff found it quick, retired staff sufA mini design system UI sheet displaying dynamic score rings, transaction ledger rows, financial pill tags, dark-mode color tokens, and localized typography scales.fered massive visual fatigue. They struggled to locate historical balance statements, causing a high task-failure rate of 42% for users over 60.",
      fullWidthImagePlaceholder: "/images/mpfsmart/9_Design_system.png",
    },

    impact: {
      title: "Impact & Next Steps",
      metricsDesc:
        "The high-fidelity MPF Smart prototype underwent rigorous evaluative testing with a beta group of 150 Hong Kong working professionals across a 4-week trial period.",
      chartPlaceholder: "/images/archsd/10_Design_system.png",
      testimonial: {
        text: "For the first time, I could actually manage my station's operations instead of acting as a paper-pusher for HR.",
        author: "Senior Presiding Officer.",
        title: "Registration and Electoral Office",
      },
    },

    reflection: {
      lessons: [
        {
          title: "Key Takeaways on Cross-Functional Alignment",
          description:
            "No amount of stakeholder interviews could have surfaced the safety-alert hierarchy problem. It only became visible by standing in the ward during a peak session. For high-stakes environments, contextual inquiry is non-negotiable.",
        },
        {
          title: "Design for Interruption, Not Ideal Flow",
          description:
            "Hospital workers are perpetually interrupted. Every UI pattern had to be designed to be resumable and forgiving mid-task — a constraint that fundamentally shaped the information architecture away from deep wizard flows towards flat, stateful screens.",
        },
        {
          title: "Negotiate Scope with Data, Not Opinion",
          description:
            "When the product team pushed to include a shift-handover module in the v1 scope, the time-and-motion data gave us the leverage to defer it. Data-backed prioritization is a designer's most underused tool.",
        },
      ],
      roadmap: [
        {
          phase: "Phase 2",
          title: "Predictive Equipment Scheduling",
          description:
            "Use historical session-length data to predict when equipment will become available and pre-assign it to queued patients automatically.",
          status: "planned",
        },
        {
          phase: "Phase 3",
          title: "Cross-Ward Patient Transfer Module",
          description:
            "Enable seamless handoff of patient care plans and session history when patients transfer between wards or hospitals within the HA network.",
          status: "planned",
        },
        {
          phase: "Phase 4",
          title: "Outcome Analytics Dashboard",
          description:
            "Aggregate anonymized recovery milestone data to surface trends that inform evidence-based therapy protocol improvements at the department level.",
          status: "planned",
        },
      ],
    },
  },
  mox: {
    meta: {
      title: "Apex Bank HK: Redefining Digital Wealth & Cross-Border Investing for the Greater Bay Area",
      role: "UI/UX Product Designer (Design System Architect)",
      team: "UI/UX Designers (including me),Risk & Compliance Lead, Frontend Engineering Lead",
      timeline: "16 Weeks (Discovery, Research, Design System, UX Strategy, to High-Fidelity Handoff)",
      tools: "Figma, ProtoPie, Maze, Miro, Storybook (Design System Sync)",
      primaryColor: "#21FFFB",
      tags: ["App/Web Revamp", "Design System", "UX Design", "Workshop"],
    },

    hero: {
      headline: "MOX Bank",
      executiveSummary:
        "Under the Hong Kong Monetary Authority’s (HKMA) strategic guidelines for Open Banking (IADS) and cross-border financial integration, Apex Bank Hong Kong set out to modernize its mobile banking ecosystem. The core objective: capture the Emerging Affluent demographic (ages 25–40) in Hong Kong and cross-border investors under the expanded Cross-boundary Wealth Management Connect 2.0 (GBA) scheme.As the one of the UI/UX Product Designer, I join a dedicated team of 4 designers in co-orchestration with an internal Banking stake holder, Risk & Compliance officers, and the Frontend Engineering Lead. Over a 16-week engagement, we transformed a legacy, friction-heavy banking portal into an AI-powered, accessible, and trilingual wealth management platform.",
      bannerImage: "/images/mox/0_banner.png",
    },

    overview: {
      introduction:
        "Apex Bank HK: Bridging complex GBA cross-border compliance with intuitive, AI-driven wealth management.",
      coreMessage:
        "Consolidating fragmented, policy-heavy legacy workflows into an intuitive, high-accessibility self-service ecosystem that empowers cross-generational personnel while eliminating millions in administrative overhead.",
    },

    metrics: [
      {
        value: "+28.4%",
        label: "First-Time Investment Activation",
        desc: "Exceeding the +25% target within 30 days",
        bgColor: "#2EA588",
        textColor: "#FFFFFF",
      },
      {
        value: "-68%",
        label: "Reduction in Onboarding Time",
        desc: "GBA Cross-Border e-KYC dropped from 12 minutes to 3.8 minutes",
        bgColor: "#F5D547",
        textColor: "#494949",
      },
      {
        value: "100%",
        label: "HKMA & WCAG 2.1 AA Compliance",
        desc: "verified across Light/Dark modes and trilingual views",
        bgColor: "#B44363",
        textColor: "#FFFFFF",
      },
    ],

    problem: {
      title: "The Core Challenge & Pain Points",
      subtitle:
        "While the GBA Wealth Management Connect 2.0 scheme opened massive market potential across Hong Kong and Shenzhen, Apex Bank’s existing infrastructure suffered from significant structural friction.",
      painPoints: [
        {
          title: "The User Pain Point",
          content:
            "Intimidated by dense, wall-of-text financial prospectuses and legacy tabular portfolio views. He lacks time to read 30-page market reports to rebalance his portfolio.Also, constrained by fragmented identity verification across Shenzhen and Hong Kong jurisdictions, unclear foreign exchange (FX) fee structures, and interfaces lacking tailored language support.",
        },
        {
          title: "The Business Pain Point",
          content:
            "High customer acquisition costs were wasted as 68% of users dropped off during cross-border e-KYC onboarding, and 54% abandoned their first mutual fund purchase attempt due to decision paralysis. Additionally, low accessibility scores damaged the bank's brand equity, leaving the app sitting at a 3.4/5.0 rating",
        },
        {
          title: "The Core Challenge",
          content:
            "How might we build a frictionless, HKMA-compliant wealth experience that balances strict regulatory identity checks (Shenzhen-Hong Kong Cross-Boundary Data Validation Platform) with a clean, consumer-grade user experience?",
        },
      ],
      fullWidthImagePlaceholder: "/images/mox/1_as_is_diagram.png",
      contextImagePlaceholder: "/images/mox/2_problem_image.png",
    },

    research: {
      title: "Research & Insights",
      subtitle:
        "To bridge regulatory boundaries with human behavior, we executed a mixed-methods research study across Hong Kong and Guangdong province ($n=340$ quantitative survey respondents; 18 qualitative deep-dive interviews with local and cross-border investors).",
      insights: [
        {
          title: "Regulatory Friction Creates Security Paranoia When Unexplained",
          description:
            "Cross-border investors did not mind completing identity checks; they minded unclear progress indicators. When presented with cross-border data validation requests without context, 72% feared their personal data was unsecure. Clear microcopy explaining HKMA/Shenzhen regulatory compliance increased trust instantly.",
        },
        {
          title: "Tabular Data Causes Decision Fatigue",
          description:
            "Traditional bank statements resemble accounting ledgers. Emerging affluent users ($25–40$) ignored numbers in grid tables but responded immediately to visual goal progress bars and risk-adjusted AI allocation cards.",
        },
                {
          title: "Accessibility & Microcopy as Trust Vectors",
          description:
            "In cross-border fintech, switching between Traditional Chinese, Simplified Chinese, and English is not just a language setting—it is a comfort indicator. Incorrect financial terminology in local dialects led to immediate session termination.",
        },
      ],
      userFlowPlaceholder: "/images/mox/3_User_Journey_Map.png",
      iaPlaceholder: "/images/mox/4_Affinity_Diagram.png",
    },

    strategy: {
      title: "Strategy & Ideation",
      subtitle:
        "we streamline cross-border identity validation into a transparent, sub-4-minute trust-building journey? and replace intimidating tabular portfolio views with intelligent, actionable wealth nudges tailored to individual risk appetites?",
      highlightText:
        "transform complex AI algorithmic predictions into clear, bite-sized visual diagnostics so that non-expert Hong Kong workers can confidently optimize their MPF in under one minute?",
      cards: [
        {
          title: "Explainable AI & Actionable Nudges",
          description:
            "Never display financial data without an accompanying \"Next Best Action\" micro-card.",
        },
        {
          title: "Seamless Regional Localization",
          description:
            "Support native Trilingual switching (Traditional/Simplified Chinese & English) across all financial components dynamically.",
        },
        {
          title: "WCAG 2.1 AA Universal Design",
          description:
            "Design for strict high contrast (min 4.5:1), dynamic font scaling for silver-hair users, and clear tap target boundaries from day one.",
        },
      ],
      userFlowSubtitle:
        "",
      beforeUserFlowPlaceholder: "/images/mox/5_BEFORE_USER_FLOW.png",
      afterUserFlowPlaceholder: "/images/mox/6_AFTER_USER_FLOW.png",
      iaPlaceholder: "/images/mox/7_STRATEGY_INFORMATION_ARCHITECTURE.png",
    },

    solutions: {
      title: "Iterative Design & Solutions",
      subtitle:
        "In early wireframes, we attempted to combine technical market charts, FX calculators, and asset breakdowns into a single high-density dashboard. Usability testing via Maze revealed that 65% of users felt anxious and overwhelmed, mistaking wealth management for complex day-trading.",
      features: [
        {
          title: "\"SmartWealth AI\" Dynamic Dashboard",
          practice:
            "Replaced static accounting tables with modular, bite-sized portfolio cards featuring Market Nudges, Goal Progress Indicators, and Interactive AI Asset Allocation Rings.",
          rationale:
            "Reduces cognitive friction by prioritizing actionable insights over raw data points, directly impacting first-time product discovery.",
          imagePlaceholder: "/images/mox/8_FEATURE_1.png",
          isReversed: false,
        },
        {
          title: "Frictionless Cross-Border e-KYC Flow",
          practice:
            "Integrated a progressive identity verification stepper synchronized with the Shenzhen-Hong Kong Cross-Boundary Data Validation Platform.",
          rationale:
            "Real-time feedback loops and clear regulatory trust badges eliminated \"black-box\" anxiety, allowing users to complete cross-border validation seamlessly.",
          imagePlaceholder: "/images/mox/8_FEATURE_2.png",
          isReversed: true,
        },
        {
          title: "HKMA-Compliant \"Apex Grid 2.0 \" Design System",
          practice:
            "Built a robust Figma tokenized design system engineered for WCAG 2.1 AA accessibility (min 4.5:1 color contrast, dynamic font scaling, and trilingual copy tokens).",
          rationale:"",
          imagePlaceholder: "/images/mox/8_FEATURE_3.png",
          isReversed: false,
        },
      ],
      accessibilityTitle: "The Usability Testing Failure & Iteration Story",
      accessibilityText:
        "A design system library sheet featuring dark/light color tokens, trilingual string variables, WCAG-compliant dynamic typography scales, and accessible form input fields.",
      fullWidthImagePlaceholder: "/images/mox/9_Design_system.png",
    },

    impact: {
      title: "Impact & Next Steps",
      metricsDesc:
        "The high-fidelity MPF Smart prototype underwent rigorous evaluative testing with a beta group of 150 Hong Kong working professionals across a 4-week trial period.",
      chartPlaceholder: "/images/archsd/10_Design_system.png",
      testimonial: {
        text: "For the first time, I could actually manage my station's operations instead of acting as a paper-pusher for HR.",
        author: "Senior Presiding Officer.",
        title: "Registration and Electoral Office",
      },
    },

    reflection: {
      lessons: [
        {
          title: "Key Takeaways on Cross-Functional Alignment",
          description:
            "No amount of stakeholder interviews could have surfaced the safety-alert hierarchy problem. It only became visible by standing in the ward during a peak session. For high-stakes environments, contextual inquiry is non-negotiable.",
        },
        {
          title: "Design for Interruption, Not Ideal Flow",
          description:
            "Hospital workers are perpetually interrupted. Every UI pattern had to be designed to be resumable and forgiving mid-task — a constraint that fundamentally shaped the information architecture away from deep wizard flows towards flat, stateful screens.",
        },
        {
          title: "Negotiate Scope with Data, Not Opinion",
          description:
            "When the product team pushed to include a shift-handover module in the v1 scope, the time-and-motion data gave us the leverage to defer it. Data-backed prioritization is a designer's most underused tool.",
        },
      ],
      roadmap: [
        {
          phase: "Phase 2",
          title: "Predictive Equipment Scheduling",
          description:
            "Use historical session-length data to predict when equipment will become available and pre-assign it to queued patients automatically.",
          status: "planned",
        },
        {
          phase: "Phase 3",
          title: "Cross-Ward Patient Transfer Module",
          description:
            "Enable seamless handoff of patient care plans and session history when patients transfer between wards or hospitals within the HA network.",
          status: "planned",
        },
        {
          phase: "Phase 4",
          title: "Outcome Analytics Dashboard",
          description:
            "Aggregate anonymized recovery milestone data to surface trends that inform evidence-based therapy protocol improvements at the department level.",
          status: "planned",
        },
      ],
    },
  },
}

