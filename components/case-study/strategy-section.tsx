"use client"

import { motion } from "framer-motion"
import { ImagePlaceholder } from "./image-placeholder"

interface DesignPrinciple {
  title: string
  description: string
}

interface StrategySectionProps {
  title?: string
  hmwStatement?: string
  principles?: DesignPrinciple[]
  iaDescription?: string
  goldenPath?: string[]
  placeholders?: {
    userFlowComparison?: string
    informationArchitecture?: string
  }
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function StrategySection({
  title = "Strategy & Ideation",
  hmwStatement = "How Might We simplify complex government workflows into a clear, streamlined user experience that accelerates business registration while reducing compliance errors?",
  principles = [
    {
      title: "Clarity Over Complexity",
      description: "Strip away non-essential elements and present only critical information at each step. Use progressive disclosure to manage cognitive load."
    },
    {
      title: "Guided Workflows",
      description: "Replace exploration with clear task-driven navigation. Each screen has a single primary action, reducing user decision paralysis."
    },
    {
      title: "Error Prevention",
      description: "Implement smart validation, clear field requirements, and immediate feedback. Prevent errors before they occur rather than complex recovery flows."
    }
  ],
  iaDescription = "I restructured the 7-module sprawl into a unified, role-based dashboard with flat 2-level navigation. The new architecture groups related tasks into purpose-driven workflows, eliminating context switching. A prominent 'Dashboard' landing page displays personalized task cards prioritized by urgency and role requirements. All critical workflows now require maximum 4 screens, reducing cognitive overhead.",
  goldenPath = ["Login", "Dashboard (task list)", "Registration Form (multi-step)", "Review & Submit", "Confirmation"],
  placeholders = {
    userFlowComparison: "STRATEGY_USER_FLOW_BEFORE_AFTER",
    informationArchitecture: "STRATEGY_INFORMATION_ARCHITECTURE",
  },
}: StrategySectionProps) {
  return (
    <section className="py-20 px-6 md:px-12 border-t-[3px] border-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-4"
            style={{ color: "var(--primary-color)" }}
          >
            {title}
          </h2>
        </motion.div>

        {/* How Might We Statement */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949]" />
            <div
              className="relative border-[3px] border-foreground rounded-none p-8 md:p-12"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-white/70 mb-4 block">
                Design Challenge
              </span>
              <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold leading-relaxed">
                {hmwStatement}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Design Principles */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h3
            className="text-sm font-bold uppercase tracking-wider mb-6"
            style={{ color: "var(--primary-color)" }}
          >
            Core Design Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949] transition-transform group-hover:translate-x-[4px] group-hover:translate-y-[4px]" />
                <div className="relative bg-background border-[3px] border-foreground rounded-none p-6 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 h-full">
                  <div
                    className="inline-block px-3 py-1 text-xs font-bold uppercase text-white mb-4"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    Principle {index + 1}
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Information Architecture */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h3
            className="text-sm font-bold uppercase tracking-wider mb-4"
            style={{ color: "var(--primary-color)" }}
          >
            Information Architecture Redesign
          </h3>
          <p className="text-foreground/70 leading-relaxed text-lg mb-8 max-w-4xl">
            {iaDescription}
          </p>

          {/* Golden Path Flow */}
          {goldenPath.length > 0 && (
            <div className="relative mb-12">
              <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949]" />
              <div className="relative bg-muted border-[3px] border-foreground rounded-none p-6 md:p-8">
                <span
                  className="text-xs font-bold uppercase tracking-wider mb-6 block"
                  style={{ color: "var(--primary-color)" }}
                >
                  Golden Experience Path
                </span>
                <div className="flex flex-wrap items-center gap-2 md:gap-4">
                  {goldenPath.map((step, index) => (
                    <div key={index} className="flex items-center gap-2 md:gap-4">
                      <div className="bg-background border-[3px] border-foreground rounded-none px-4 py-2 text-sm font-medium text-foreground">
                        {step}
                      </div>
                      {index < goldenPath.length - 1 && (
                        <span className="text-2xl font-bold text-foreground/50">
                          &rarr;
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Visual Materials */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <ImagePlaceholder
            name={placeholders.userFlowComparison || "STRATEGY_USER_FLOW_BEFORE_AFTER"}
            height="lg"
            caption="Fig. User Flow Comparison - Legacy maze-like navigation vs. streamlined linear task completion path"
          />
          <ImagePlaceholder
            name={placeholders.informationArchitecture || "STRATEGY_INFORMATION_ARCHITECTURE"}
            height="lg"
            caption="Fig. Information Architecture - Flat 2-level structure with role-based task grouping eliminates context switching"
          />
        </motion.div>
      </div>
    </section>
  )
}
