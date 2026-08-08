"use client"

import { motion } from "framer-motion"
import { ImagePlaceholder } from "./image-placeholder"

interface Lesson {
  title: string
  description: string
}

interface RoadmapPhase {
  phase: string
  title: string
  description: string
  status: "completed" | "in-progress" | "planned"
}

interface ReflectionSectionProps {
  title?: string
  lessons?: Lesson[]
  roadmap?: RoadmapPhase[]
  placeholders?: {
    productRoadmap?: string
    workshopSnapshot?: string
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

const statusColors = {
  completed: "#2EA588",
  "in-progress": "#F59E0B",
  planned: "#6B7280",
}

export function ReflectionSection({
  title = "Reflection & Next Steps",
  lessons = [
    {
      title: "User Involvement is Critical",
      description: "Direct observation of frontline staff workflows revealed pain points that stakeholders didn't anticipate. Continuous user feedback validated design decisions and prevented costly downstream changes."
    },
    {
      title: "Simplicity Requires Discipline",
      description: "Removing features from legacy system was harder than adding new ones. Stakeholders had emotional attachments to existing workflows, requiring data-driven arguments and demonstrations to justify removal."
    },
    {
      title: "Design Systems Enable Scale",
      description: "Investing time in foundational component libraries and design tokens paid dividends. The design system accelerated handoff with engineering and reduced inconsistencies across the platform."
    },
    {
      title: "Iterative Validation Prevents Rework",
      description: "Rapid prototyping with interactive flows caught misunderstandings early. Multiple design iterations with users prevented shipping solutions that looked good but didn't solve actual problems."
    }
  ],
  roadmap = [
    {
      phase: "Phase 1",
      title: "Mobile-First Interface",
      description: "Optimizing RAMS for on-the-go frontline work on tablets and smartphones for field registration",
      status: "planned"
    },
    {
      phase: "Phase 2",
      title: "AI-Assisted Data Entry",
      description: "Implementing intelligent form pre-fill and document scanning to reduce manual data entry",
      status: "planned"
    },
    {
      phase: "Phase 3",
      title: "Advanced Analytics Dashboard",
      description: "Business intelligence tools for compliance insights and operational metrics tracking",
      status: "planned"
    }
  ],
  placeholders = {
    productRoadmap: "[PLACEHOLDER: REFLECTION_PRODUCT_ROADMAP_TIMELINE]",
    workshopSnapshot: "[PLACEHOLDER: REFLECTION_WORKSHOP_SESSION]",
  },
}: ReflectionSectionProps) {
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

        {/* Lessons Learned */}
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
            Key Lessons Learned
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessons.map((lesson, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949] transition-transform group-hover:translate-x-[4px] group-hover:translate-y-[4px]" />
                <div className="relative bg-background border-[3px] border-foreground rounded-none p-6 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 h-full">
                  <div
                    className="w-8 h-8 flex items-center justify-center font-bold text-white mb-4 text-sm"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-2">
                    {lesson.title}
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Roadmap */}
        {roadmap.length > 0 && (
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
              Future Product Roadmap
            </h3>
            <div className="relative">
              <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949]" />
              <div className="relative bg-muted border-[3px] border-foreground rounded-none p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {roadmap.map((phase, index) => (
                    <div
                      key={index}
                      className="bg-background border-[3px] border-foreground rounded-none p-5"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-xs font-bold uppercase px-2 py-1 text-white"
                          style={{ backgroundColor: statusColors[phase.status] }}
                        >
                          {phase.phase}
                        </span>
                        <span
                          className="text-xs font-medium uppercase"
                          style={{ color: statusColors[phase.status] }}
                        >
                          {phase.status === "completed"
                            ? "Completed"
                            : phase.status === "in-progress"
                            ? "In Progress"
                            : "Planned"}
                        </span>
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{phase.title}</h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Visual Materials */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <ImagePlaceholder
            name={placeholders.productRoadmap || "[PLACEHOLDER: REFLECTION_PRODUCT_ROADMAP_TIMELINE]"}
            height="md"
            caption="Fig. Future Product Roadmap - Strategic initiatives planned for RAMS platform expansion over next 18 months"
          />
          <ImagePlaceholder
            name={placeholders.workshopSnapshot || "[PLACEHOLDER: REFLECTION_WORKSHOP_SESSION]"}
            height="md"
            caption="Fig. Cross-Functional Workshop - Team alignment session identifying next-phase opportunities"
          />
        </motion.div>
      </div>
    </section>
  )
}
