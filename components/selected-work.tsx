"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"

const MAX_VISIBLE = 4

export function SelectedWork() {
  const featuredProjects = [...projects]
    .sort((a, b) => Number(b.year) - Number(a.year))
    .slice(0, MAX_VISIBLE)

  return (
    <section
      id="work"
      className="px-6 py-24 border-t-[3px] border-foreground"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-foreground/60">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-tight text-balance">
              Projects that
              <br />
              <span className="text-primary">matter</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/projects"
              aria-label={`View all ${projects.length} case studies`}
              className="group relative inline-flex items-center justify-center overflow-hidden px-5 py-2.5 text-sm font-black text-foreground border-[3px] border-foreground rounded-full bg-background transition-colors duration-300 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{ boxShadow: "4px 4px 0px 0px var(--foreground)" }}
            >
              {/* Water wave fill */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[calc(100%+0.875rem)] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
              >
                <span className="absolute inset-x-0 bottom-0 top-3.5 bg-primary" />
                <svg
                  viewBox="0 0 1200 40"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  className="absolute left-0 top-0 h-3.5 w-[200%] text-primary animate-[wave-x_2s_linear_infinite]"
                >
                  <path d="M0,24 C100,4 200,44 300,24 C400,4 500,44 600,24 C700,4 800,44 900,24 C1000,4 1100,44 1200,24 L1200,40 L0,40 Z" />
                </svg>
              </span>

              {/* Label swap */}
              <span className="relative flex items-center justify-center">
                <span className="transition-all duration-300 group-hover:-translate-y-3 group-hover:opacity-0">
                  {projects.length} case studies
                </span>
                <span className="absolute inset-0 flex items-center justify-center gap-1.5 whitespace-nowrap translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View all
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Project grid */}
        <div
          id="work-grid"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 scroll-mt-28"
        >
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              className="min-h-[500px]"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
