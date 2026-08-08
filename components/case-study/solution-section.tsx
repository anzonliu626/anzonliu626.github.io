"use client"

import { motion } from "framer-motion"

interface FeatureBlockProps {
  title: string
  description: string
  imagePlaceholder?: string
  imagePosition?: "left" | "right"
  index: number
}

const blockVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function FeatureBlock({
  title,
  description,
  imagePlaceholder = "Insert feature screenshot or mockup",
  imagePosition = "left",
  index,
}: FeatureBlockProps) {
  const isImageLeft = imagePosition === "left"

  return (
    <motion.div
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.15 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        !isImageLeft ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Image */}
      <div className={!isImageLeft ? "lg:col-start-2" : ""}>
        <div className="relative">
        <div
          className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949]"
        />
        <div className="relative bg-muted border-[3px] border-foreground rounded-none aspect-video flex items-center justify-center">
            <p className="text-foreground/50 text-center px-8 font-medium">
              {imagePlaceholder}
            </p>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className={!isImageLeft ? "lg:col-start-1 lg:row-start-1" : ""}>
        <span
          className="text-xs font-bold uppercase tracking-wider"
          style={{ color: "var(--primary-color)" }}
        >
          Feature {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
          {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

interface SolutionSectionProps {
  sectionTitle?: string
  sectionSubtitle?: string
  features?: Array<{
    title: string
    description: string
    imagePlaceholder?: string
  }>
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function SolutionSection({
  sectionTitle = "The Solution",
  sectionSubtitle = "A purpose-driven redesign that unifies fragmented modules into a cohesive, task-centric experience. The new RAMS platform guides staff through critical workflows with clarity, reducing decision paralysis and enabling faster, more accurate business registrations.",
  features = [
    {
      title: "Unified Dashboard",
      description:
        "Replaced fragmented module access with a personalized task dashboard. Staff see priority-ordered business cards grouped by status, eliminating the need to navigate multiple menus. Color-coded urgency indicators and role-based task filtering ensure focus on high-impact work.",
      imagePlaceholder: "[PLACEHOLDER: SOLUTION_DASHBOARD_INTERFACE]",
    },
    {
      title: "Smart Registration Workflow",
      description:
        "Redesigned multi-step registration from 30+ fields presented simultaneously to a 4-screen progressive disclosure flow. Dynamic field requirements adapt based on user input. Clear visual hierarchy and error prevention strategies reduce user hesitation during critical data entry.",
      imagePlaceholder: "[PLACEHOLDER: SOLUTION_REGISTRATION_FLOW]",
    },
    {
      title: "Compliance Monitoring Hub",
      description:
        "New compliance dashboard provides real-time visibility into business status lifecycle. Simplified monitoring interface highlights critical updates through visual alerts and contextual notifications. Business owners receive proactive guidance on compliance deadlines.",
      imagePlaceholder: "[PLACEHOLDER: SOLUTION_COMPLIANCE_MONITORING]",
    },
    {
      title: "Design System Foundation",
      description:
        "Established comprehensive design system with reusable components, tokens, and patterns. Governance guidelines ensure consistency across all modules and future iterations. Standardized interactions reduce training requirements and support burden.",
      imagePlaceholder: "[PLACEHOLDER: SOLUTION_DESIGN_SYSTEM_LIBRARY]",
    },
  ],
}: SolutionSectionProps) {
  return (
    <section className="py-20 px-6 md:px-12 border-t-[3px] border-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-4"
            style={{ color: "var(--primary-color)" }}
          >
            {sectionTitle}
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl leading-relaxed">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Full-Width User Flow Grid */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949]" />
            <div className="relative bg-muted border-[3px] border-foreground rounded-none p-8">
              <h3
                className="text-sm font-bold uppercase tracking-wider mb-6"
                style={{ color: "var(--primary-color)" }}
              >
                User Flow Overview
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { num: 1, name: "Login & Dashboard" },
                  { num: 2, name: "Select Business" },
                  { num: 3, name: "Registration/Monitoring" },
                  { num: 4, name: "Complete & Confirm" },
                ].map((step) => (
                  <div
                    key={step.num}
                    className="bg-background border-[3px] border-foreground rounded-none p-4 text-center"
                  >
                    <div
                      className="w-10 h-10 mx-auto mb-3 flex items-center justify-center font-bold text-white"
                      style={{ backgroundColor: "var(--primary-color)" }}
                    >
                      {step.num}
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      {step.name}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-center text-foreground/50 mt-6 text-sm">
                Golden path: 4-step workflow replacing legacy 7+ module navigation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Alternating Feature Blocks */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              title={feature.title}
              description={feature.description}
              imagePlaceholder={feature.imagePlaceholder}
              imagePosition={index % 2 === 0 ? "left" : "right"}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
