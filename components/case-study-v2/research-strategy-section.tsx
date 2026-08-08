"use client"

import { motion } from "framer-motion"
import { ImagePlaceholder } from "./image-placeholder"

interface ResearchStrategySectionProps {
  title?: string
  subtitle?: string
  insights?: { title: string; description: string }[]
  userFlowImage?: string
  iaImage?: string
}

export function ResearchStrategySection({
  title = "Research & Strategy",
  subtitle = "",
  insights = [
    {
      title: "Insight #1",
      description: "Key insight placeholder. Describe a critical finding from user research that informed the design direction.",
    },
    {
      title: "Insight #2",
      description: "Key insight placeholder. Another important discovery from stakeholder interviews or data analysis.",
    },
    {
      title: "Insight #3",
      description: "Key insight placeholder. A third significant observation that shaped the solution strategy.",
    },
  ],
  userFlowImage = "[PLACEHOLDER: USER_FLOW_DIAGRAM]",
  iaImage = "[PLACEHOLDER: INFORMATION_ARCHITECTURE]",
}: ResearchStrategySectionProps) {
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
    <section id="research" className="py-20 px-6 md:px-12 border-b-[3px] border-foreground scroll-mt-16">
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

        {/* 3 Key Insights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {insights.map((insight, idx) => (
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
                  {insight.title}
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Width Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground/60 mb-4">
              User Journey Map
            </h4>
            <ImagePlaceholder name={userFlowImage} height="lg" />
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground/60 mb-4">
              Affinity Diagram
            </h4>
            <ImagePlaceholder name={iaImage} height="lg" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
