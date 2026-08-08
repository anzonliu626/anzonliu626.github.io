"use client"

import { motion } from "framer-motion"
import { ImagePlaceholder } from "./image-placeholder"

interface PainPoint {
  title: string
  content: string
}

interface ProblemSectionProps {
  title?: string
  subtitle?: string
  fullWidthImage?: string
  painPoints?: PainPoint[]
  problemImage?: string
}

export function ProblemSection({
  title = "The Problem",
  subtitle = "Problem context placeholder. Brief description of the situation before the solution was implemented.",
  fullWidthImage = "[PLACEHOLDER: PROBLEM_HERO_IMAGE]",
  painPoints = [
    {
      title: "Business Pain Point",
      content: "Business pain point description placeholder.",
    },
    {
      title: "User Pain Point",
      content: "User pain point description placeholder.",
    },
  ],
  problemImage = "[PLACEHOLDER: PROBLEM_CONTEXT_IMAGE]",
}: ProblemSectionProps) {
  return (
    <section id="pain-points" className="py-20 px-6 md:px-12 border-b-[3px] border-foreground scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-foreground mb-6"
        >
          {title}
        </motion.h2>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-foreground/80 leading-relaxed mb-12 max-w-4xl"
        >
          {subtitle}
        </motion.p>

        {/* Full Width Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <ImagePlaceholder name={fullWidthImage} height="lg" />
        </motion.div>

        {/* 2-Column Layout: Pain Points Left, Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left: Pain Points */}
          <div className="space-y-8">
            {painPoints.map((painPoint, idx) => (
              <div key={idx}>
                <h3
                  className="text-xl font-black mb-4"
                  style={{ color: "var(--primary-color)" }}
                >
                  {painPoint.title}
                </h3>
                <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-line">
                  {painPoint.content}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div>
            <ImagePlaceholder name={problemImage} height="lg" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
