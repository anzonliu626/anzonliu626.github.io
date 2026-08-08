"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { Project } from "@/lib/projects"

interface CaseStudyFooterProps {
  nextProject?: Project | null
  prevProject?: Project | null
}

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function CaseStudyFooter({ nextProject, prevProject }: CaseStudyFooterProps) {
  return (
    <section className="py-16 px-6 md:px-12 border-t-[3px] border-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Previous Project */}
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-4"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center border-[3px] border-foreground rounded-lg transition-all group-hover:-translate-x-1"
                  style={{ backgroundColor: "var(--primary-color)" }}
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                    Previous
                  </p>
                  <p className="font-bold text-foreground group-hover:text-[var(--primary-color)] transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* Back to Work */}
            <Link
              href="/projects"
              className="text-sm font-bold uppercase tracking-wider text-foreground/60 hover:text-[var(--primary-color)] transition-colors"
            >
              View All Work
            </Link>

            {/* Next Project */}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-4 text-right"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                    Next
                  </p>
                  <p className="font-bold text-foreground group-hover:text-[var(--primary-color)] transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <div
                  className="w-12 h-12 flex items-center justify-center border-[3px] border-foreground rounded-lg transition-all group-hover:translate-x-1"
                  style={{ backgroundColor: "var(--primary-color)" }}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
