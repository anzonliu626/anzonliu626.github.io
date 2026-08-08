"use client"

import { motion } from "framer-motion"

interface ContextProblemProps {
  contextTitle?: string
  contextText?: string
  problemTitle?: string
  problemText?: string
  imagePlaceholder?: string
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export function ContextProblem({
  contextTitle = "Context",
  contextText = "RAMS (Registration And Monitoring System) is a critical government platform used by frontline staff to register small and medium enterprises (SMEs) and monitor their compliance throughout their operational lifecycle. The system handles complex workflows across multiple departments and stakeholder groups, with thousands of daily transactions. Prior to redesign, the interface was fragmented, outdated, and posed significant barriers to efficient service delivery.",
  problemTitle = "The Problem",
  problemText = "The legacy system exhibited severe usability challenges that directly impacted user productivity and satisfaction. Staff experienced confusion navigating complex hierarchies, error recovery required multiple steps, and critical business workflows were obscured behind outdated interface patterns. The fragmented design system created inconsistency across modules, leading to higher training costs and operational errors. These pain points ultimately delayed business registration processes and frustrated both frontline staff and service users.",
  imagePlaceholder = "[PLACEHOLDER: AS_IS_SYSTEM_SCREENSHOT]",
}: ContextProblemProps) {
  return (
    <section className="py-20 px-6 md:px-12 border-t-[3px] border-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text Content */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Context */}
            <div className="mb-12">
              <h2
                className="text-sm font-bold uppercase tracking-wider mb-4"
                style={{ color: "var(--primary-color)" }}
              >
                {contextTitle}
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {contextText}
              </p>
            </div>

            {/* Problem */}
            <div>
              <h2
                className="text-sm font-bold uppercase tracking-wider mb-4"
                style={{ color: "var(--primary-color)" }}
              >
                {problemTitle}
              </h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {problemText}
              </p>

              {/* Problem Highlights */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <span
                    className="w-3 h-3 mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  />
                  <p className="text-foreground/70">
                    Complex navigation paths caused user confusion and extended task completion times
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span
                    className="w-3 h-3 mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  />
                  <p className="text-foreground/70">
                    Inconsistent design patterns across modules increased learning curve for staff
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span
                    className="w-3 h-3 mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  />
                  <p className="text-foreground/70">
                    Fragmented workflow hindered business registration accuracy and compliance tracking
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image with Hard Shadow */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              {/* Hard Shadow Container */}
              <div
                className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949]"
              />
              <div className="relative bg-muted border-[3px] border-foreground rounded-none aspect-[4/3] flex items-center justify-center">
                <p className="text-foreground/50 text-center px-8 font-medium">
                  {imagePlaceholder}
                </p>
              </div>
            </div>

            {/* Image Caption */}
            <p className="mt-4 text-sm text-foreground/60 italic">
              Fig 1. Legacy RAMS interface displaying the fragmented design patterns and outdated interaction model
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
