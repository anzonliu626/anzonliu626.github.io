"use client"

import { motion } from "framer-motion"
import { ImagePlaceholder } from "./image-placeholder"

interface Insight {
  title: string
  description: string
}

interface ResearchSectionProps {
  title?: string
  subtitle?: string
  introduction?: string
  insights?: Insight[]
  placeholders?: {
    journeyMap?: string
    affinityDiagram?: string
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

export function ResearchSection({
  title = "Research & Insights",
  subtitle = "Understanding frontline staff workflows and operational barriers",
  introduction = "I conducted comprehensive user research through semi-structured interviews with 18 frontline staff members, observing their daily workflows and pain points. Stakeholder workshops with department heads and compliance officers revealed critical business requirements. User journey mapping and affinity analysis synthesized findings into actionable personas and mental models.",
  insights = [
    {
      title: "Workflow Fragmentation",
      description: "Staff navigate 7+ disconnected interfaces daily, switching context every 4-5 minutes. Information silos between registration and monitoring modules create compliance gaps."
    },
    {
      title: "Error Recovery Friction",
      description: "Mistakes in registration require 15-20 minute recovery procedures. Users lack clear feedback on error severity, creating anxiety during critical transactions."
    },
    {
      title: "Information Overload",
      description: "Dense forms with 30+ fields presented simultaneously overwhelm users. Progressive disclosure and intelligent field grouping could reduce cognitive load."
    }
  ],
  placeholders = {
    journeyMap: "RESEARCH_USER_JOURNEY_MAP",
    affinityDiagram: "RESEARCH_AFFINITY_DIAGRAM",
  },
}: ResearchSectionProps) {
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
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl leading-relaxed mb-6">
            {subtitle}
          </p>
          <p className="text-foreground/70 leading-relaxed text-lg max-w-4xl">
            {introduction}
          </p>
        </motion.div>

        {/* Insights Grid */}
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
            Core User Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949] transition-transform group-hover:translate-x-[4px] group-hover:translate-y-[4px]" />
                <div className="relative bg-background border-[3px] border-foreground rounded-none p-6 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 h-full">
                  <div
                    className="w-10 h-10 flex items-center justify-center font-bold text-white mb-4"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{insight.title}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
            name={placeholders.journeyMap || "RESEARCH_USER_JOURNEY_MAP"}
            height="lg"
            caption="Fig. User Journey Map - Highlighting emotional peaks during workflow obstacles and manual error recovery"
          />
          <ImagePlaceholder
            name={placeholders.affinityDiagram || "RESEARCH_AFFINITY_DIAGRAM"}
            height="lg"
            caption="Fig. Research Affinity Diagram - Synthesized insights from 18 frontline staff interviews grouped by workflow pain points"
          />
        </motion.div>
      </div>
    </section>
  )
}
