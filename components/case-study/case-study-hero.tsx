"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/lib/projects"

interface CaseStudyHeroProps {
  project: Project
  valueProposition?: string
  role?: string
  duration?: string
  tools?: string[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function CaseStudyHero({
  project,
  valueProposition = "Transforming complex government workflows into an intuitive, accessible digital experience for frontline staff managing business registrations and operational protocols.",
  role = "Lead Product Designer & UX Strategist",
  duration = "8 months (2024-2025)",
  tools = ["Figma", "Adobe XD", "FigJam", "Notion", "Jira"],
}: CaseStudyHeroProps) {
  return (
    <section className="min-h-[80vh] pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants}>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-[var(--primary-color)] transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back to Work</span>
            </Link>
          </motion.div>

          {/* Project Number & Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className="text-sm font-bold px-3 py-1 border-[3px] border-foreground rounded-none"
              style={{ backgroundColor: "var(--primary-color)", color: "#F5EFE6" }}
            >
              Project {project.number}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2 py-1 bg-muted border-[3px] border-foreground rounded-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] mb-6 max-w-4xl"
          >
            {project.title}
          </motion.h1>

          {/* Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mb-12 leading-relaxed"
          >
            {valueProposition}
          </motion.p>

          {/* Project Overview Cards */}
          <motion.div variants={itemVariants}>
            <h2
              className="text-sm font-bold uppercase tracking-wider mb-6"
              style={{ color: "var(--primary-color)" }}
            >
              Project Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Role */}
              <div className="bg-background border-[3px] border-foreground rounded-none p-6 shadow-[8px_8px_0px_#494949]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-2">
                  Role
                </h3>
                <p className="text-lg font-bold text-foreground">{role}</p>
              </div>

              {/* Duration */}
              <div className="bg-background border-[3px] border-foreground rounded-none p-6 shadow-[8px_8px_0px_#494949]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-2">
                  Duration
                </h3>
                <p className="text-lg font-bold text-foreground">{duration}</p>
              </div>

              {/* Tools */}
              <div className="bg-background border-[3px] border-foreground rounded-none p-6 shadow-[8px_8px_0px_#494949]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-2">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm font-medium px-2 py-0.5 border-[3px] rounded-none"
                      style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
