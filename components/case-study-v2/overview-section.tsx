"use client"

import { motion } from "framer-motion"

interface MetricCard {
  value: string
  label: string
  bgColor?: string
  textColor?: string
}

interface OverviewSectionProps {
  introduction?: string
  coreMessage?: string
  overviewCards?: { title: string; description: string }[]
  metrics?: MetricCard[]
}

export function OverviewSection({
  introduction = "Brief introduction placeholder. Describe the project context, your role, and the overall objective in 2-3 sentences.",
  coreMessage = "Core message placeholder. This is the key takeaway or value proposition that summarizes what this project achieved and why it matters.",
  overviewCards = [
    { title: "Role", description: "Lead Product Designer" },
    { title: "Timeline", description: "8 months (2024-2025)" },
    { title: "Team", description: "3 Designers, 5 Engineers" },
    { title: "Tools", description: "Figma, FigJam, Jira" },
  ],
  metrics = [
    { value: "+40%", label: "Efficiency Improvement", bgColor: "#2EA588", textColor: "#FFFFFF" },
    { value: "5,200+", label: "Users Impacted", bgColor: "#F5D547", textColor: "#494949" },
    { value: "-60%", label: "Error Reduction", bgColor: "#B44363", textColor: "#FFFFFF" },
  ],
}: OverviewSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="overview" className="py-20 px-6 md:px-12 border-b-[3px] border-foreground scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-foreground mb-6"
        >
          Overview
        </motion.h2>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-4xl">
            {introduction}
          </p>
        </motion.div>

        {/* 2-Column Layout: Core Message + 4 Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {/* Left: Core Message */}
          <motion.div variants={itemVariants} className="flex items-center">
            <div
              className="relative w-full h-full min-h-[280px] border-[3px] border-foreground rounded-lg p-8 flex items-center"
              style={{
                backgroundColor: "var(--primary-color)",
                boxShadow: "8px 8px 0px 0px #494949",
              }}
            >
              <p className="text-xl md:text-2xl font-black text-white leading-relaxed">
                {coreMessage}
              </p>
            </div>
          </motion.div>

          {/* Right: 4 Vertical Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {overviewCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative"
              >
                <div
                  className="bg-background border-[3px] border-foreground rounded-lg p-5 h-full"
                  style={{ boxShadow: "8px 8px 0px 0px #494949" }}
                >
                  <h4 className="text-xs font-black uppercase tracking-wider text-foreground/60 mb-2">
                    {card.title}
                  </h4>
                  <p className="text-base font-semibold text-foreground">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Key Metrics - 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-black uppercase tracking-widest text-foreground/60 mb-6">
            Key Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative"
              >
                <div
                  className="border-[3px] border-foreground rounded-lg p-8 md:p-10 text-center transition-transform group-hover:-translate-y-1 min-h-[200px] flex flex-col items-center justify-center"
                  style={{ 
                    backgroundColor: metric.bgColor || "var(--primary-color)",
                    boxShadow: "8px 8px 0px 0px #494949" 
                  }}
                >
                  <p
                    className="text-5xl md:text-6xl lg:text-7xl font-black mb-3"
                    style={{ color: metric.textColor || "#FFFFFF" }}
                  >
                    {metric.value}
                  </p>
                  <p 
                    className="text-sm md:text-base font-black uppercase tracking-wide"
                    style={{ color: metric.textColor || "#FFFFFF", opacity: 0.9 }}
                  >
                    {metric.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
