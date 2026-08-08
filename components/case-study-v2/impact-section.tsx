"use client"

import { motion } from "framer-motion"
import { ImagePlaceholder } from "./image-placeholder"

interface ImpactSectionProps {
  title?: string
  chartPlaceholder?: string
  quote?: string
  quoteAuthor?: string
  quoteRole?: string
}

export function ImpactSection({
  title = "Impact & Next Steps",
  chartPlaceholder = "[PLACEHOLDER: IMPACT_METRICS_CHART]",
  quote = "Quote placeholder. A testimonial from a stakeholder or user that validates the success and impact of the design work.",
  quoteAuthor = "Stakeholder Name",
  quoteRole = "Role, Organization",
}: ImpactSectionProps) {
  return (
    <section className="py-20 px-6 md:px-12 border-b-[3px] border-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-foreground mb-12"
        >
          {title}
        </motion.h2>

        {/* Large Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <ImagePlaceholder name={chartPlaceholder} height="lg" />
        </motion.div>

        {/* Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="relative border-[3px] border-foreground rounded-lg p-8 md:p-12"
            style={{
              backgroundColor: "var(--primary-color)",
              boxShadow: "8px 8px 0px 0px #494949",
            }}
          >
            {/* Quote Mark */}
            <span className="absolute top-4 left-6 text-6xl font-serif text-white/30">
              &ldquo;
            </span>

            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-6 pl-8">
                {quote}
              </p>
              <footer className="pl-8">
                <cite className="not-italic">
                  <span className="block text-lg font-black text-white">
                    {quoteAuthor}
                  </span>
                  <span className="block text-sm text-white/80">
                    {quoteRole}
                  </span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
