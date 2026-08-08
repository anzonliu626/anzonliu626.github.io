"use client"

import { motion } from "framer-motion"
import { ImagePlaceholder } from "./image-placeholder"

interface StrategyCard {
  title: string
  description: string
}

interface StrategyIdeationSectionProps {
  title?: string
  subtitle?: string
  highlightText?: string
  cards?: StrategyCard[]
  userFlowSubtitle?: string
  beforeUserFlowImage?: string
  afterUserFlowImage?: string
  iaImage?: string
}

export function StrategyIdeationSection({
  title = "Strategy & Ideation",
  subtitle = "Translating research insights into actionable design principles and information architecture.",
  highlightText = "How Might We simplify complex clinical workflows into a seamless, one-handed tablet experience that keeps therapists focused on patients — not paperwork?",
  cards = [
    {
      title: "Design Principle #1",
      description: "Placeholder description for the first design principle or strategic pillar.",
    },
    {
      title: "Design Principle #2",
      description: "Placeholder description for the second design principle or strategic pillar.",
    },
    {
      title: "Design Principle #3",
      description: "Placeholder description for the third design principle or strategic pillar.",
    },
  ],
  userFlowSubtitle = "Placeholder subtitle — describe the journey from the fragmented legacy flow to the streamlined redesigned flow and what changed.",
  beforeUserFlowImage = "[PLACEHOLDER: BEFORE_USER_FLOW]",
  afterUserFlowImage = "[PLACEHOLDER: AFTER_USER_FLOW]",
  iaImage = "[PLACEHOLDER: INFORMATION_ARCHITECTURE]",
}: StrategyIdeationSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="strategy" className="py-20 px-6 md:px-12 border-b-[3px] border-foreground scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-foreground mb-3"
        >
          {title}
        </motion.h2>

        {/* Section Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 mb-12"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Highlight Design Text (HMW Statement) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <div
            className="border-[3px] border-foreground rounded-lg p-8 md:p-12"
            style={{
              backgroundColor: "var(--primary-color)",
              boxShadow: "8px 8px 0px 0px #494949",
            }}
          >
            <p className="text-xs font-black uppercase tracking-widest text-white/70 mb-4">
              How Might We
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-relaxed">
              {highlightText}
            </p>
          </div>
        </motion.div>

        {/* Core Design Principles Header */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-black text-foreground mb-8"
        >
          Core Design Principles
        </motion.h3>

        {/* 3 Strategy Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className="bg-background border-[3px] border-foreground rounded-lg p-6 h-full transition-transform group-hover:-translate-y-1"
                style={{ boxShadow: "8px 8px 0px 0px #494949" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center font-black text-white mb-4 rounded-lg"
                  style={{ backgroundColor: "var(--primary-color)" }}
                >
                  {idx + 1}
                </div>
                <h4 className="text-lg font-black text-foreground mb-3">
                  {card.title}
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* User Flow Section Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3">
            Optimizing the User Flow
          </h3>
          <p className="text-lg text-foreground/70">
            {userFlowSubtitle}
          </p>
        </motion.div>

        {/* User Flow Comparison (Before & After) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12 mb-12"
        >
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground/60 mb-4">
              Before — Legacy User Flow
            </h4>
            <ImagePlaceholder name={beforeUserFlowImage} height="lg" />
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground/60 mb-4">
              After — Redesigned User Flow
            </h4>
            <ImagePlaceholder name={afterUserFlowImage} height="lg" />
          </div>
        </motion.div>

        {/* Information Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-sm font-black uppercase tracking-widest text-foreground/60 mb-4">
            Information Architecture
          </h4>
          <ImagePlaceholder name={iaImage} height="lg" />
        </motion.div>
      </div>
    </section>
  )
}
