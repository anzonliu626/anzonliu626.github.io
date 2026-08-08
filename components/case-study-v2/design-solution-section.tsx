"use client"

import { motion } from "framer-motion"
import { ImagePlaceholder } from "./image-placeholder"

interface Feature {
  title: string
  /** Primary "what" text shown prominently */
  practice: string
  /** Supporting "why" rationale shown in a smaller note below */
  rationale?: string
  /** Legacy fallback — maps to practice if practice is absent */
  description?: string
  imagePlaceholder: string
  isReversed?: boolean
}

interface DesignSolutionSectionProps {
  title?: string
  subtitle?: string
  features?: Feature[]
  accessibilityTitle?: string
  accessibilityText?: string
  fullWidthImage?: string
}

export function DesignSolutionSection({
  title = "Design Solution",
  subtitle = "",
  features = [
    {
      title: "Feature #1",
      practice: "Feature description placeholder. Explain how this specific design solution addresses the user needs identified during research.",
      imagePlaceholder: "[PLACEHOLDER: FEATURE_1_MOCKUP]",
    },
    {
      title: "Feature #2",
      practice: "Feature description placeholder. Detail the design decisions and rationale behind this feature implementation.",
      imagePlaceholder: "[PLACEHOLDER: FEATURE_2_MOCKUP]",
      isReversed: true,
    },
    {
      title: "Feature #3",
      practice: "Feature description placeholder. Highlight the innovative approaches and user benefits of this solution.",
      imagePlaceholder: "[PLACEHOLDER: FEATURE_3_MOCKUP]",
    },
  ],
  accessibilityTitle = "Defensive Design & System Accessibility",
  accessibilityText = "",
  fullWidthImage = "[PLACEHOLDER: DESIGN_SYSTEM_OVERVIEW]",
}: DesignSolutionSectionProps) {
  return (
    <section id="solutions" className="py-20 px-6 md:px-12 border-b-[3px] border-foreground scroll-mt-16">
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
            className="text-lg md:text-xl text-foreground/70 mb-16"
          >
            {subtitle}
          </motion.p>
        )}

        {!subtitle && (
          <div className="mb-16" />
        )}

        {/* Alternating Feature Layouts */}
        <div className="space-y-20 mb-20">
          {features.map((feature, idx) => {
            const reversed = feature.isReversed ?? false

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div className={reversed ? "lg:order-2" : "lg:order-1"}>
                  <ImagePlaceholder name={feature.imagePlaceholder} height="md" />
                </div>

                {/* Text Content */}
                <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                  <span
                    className="inline-block text-xs font-black uppercase tracking-widest mb-4 px-3 py-1 border-[3px] border-foreground"
                    style={{
                      backgroundColor: "var(--primary-color)",
                      color: "white",
                    }}
                  >
                    Feature {idx + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                    {feature.practice ?? feature.description}
                  </p>
                  {feature.rationale && (
                    <div
                      className="border-l-4 pl-4 mt-4"
                      style={{ borderColor: "var(--primary-color)" }}
                    >
                      <p className="text-sm text-foreground/60 leading-relaxed italic">
                        <span className="font-bold not-italic text-foreground/80">Design Rationale: </span>
                        {feature.rationale}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Accessibility Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
            {accessibilityTitle}
          </h3>
          {accessibilityText && (
            <p className="text-lg text-foreground/70 leading-relaxed max-w-4xl">
              {accessibilityText}
            </p>
          )}
        </motion.div>

        {/* Full Width Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-sm font-black uppercase tracking-widest text-foreground/60 mb-4">
            Design System Overview
          </h4>
          <ImagePlaceholder name={fullWidthImage} height="lg" />
        </motion.div>
      </div>
    </section>
  )
}
