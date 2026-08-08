"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { projects, PROJECT_CATEGORIES, type ProjectCategory } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { ContactFooter } from "@/components/contact-footer"

const PAGE_SIZE = 8

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")
  const [page, setPage] = useState(1)

  const sorted = [...projects].sort((a, b) => Number(b.year) - Number(a.year))

  const filtered =
    activeCategory === "All"
      ? sorted
      : sorted.filter((p) => p.category === activeCategory)

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const start = (page - 1) * PAGE_SIZE
  const visible = filtered.slice(start, start + PAGE_SIZE)

  const handleCategoryChange = (cat: ProjectCategory) => {
    setActiveCategory(cat)
    setPage(1)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-[3px] border-foreground"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider text-foreground transition-colors hover:text-primary"
          >
            <span
              className="inline-flex items-center justify-center w-8 h-8 border-[3px] border-foreground rounded-lg transition-transform group-hover:-translate-x-1"
              style={{ boxShadow: "3px 3px 0px #494949" }}
            >
              <ArrowLeft className="w-4 h-4" />
            </span>
            Back to Home
          </Link>
        </div>
      </motion.header>

      <main className="pt-16">
        <section className="px-6 py-24 border-t-[3px] border-foreground">
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs font-black uppercase tracking-widest text-foreground/60">
                  case study
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-tight text-balance">
                  Under the
                  <br />
                  <span className="text-primary">Hood</span>
                </h2>
              </div>

              {/* Count badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span
                  className="inline-block px-5 py-2.5 text-sm font-black text-foreground border-[3px] border-foreground rounded-full bg-background"
                  style={{ boxShadow: "4px 4px 0px 0px var(--foreground)" }}
                >
                  {filtered.length} case {filtered.length === 1 ? "study" : "studies"}
                </span>
              </motion.div>
            </motion.div>

            {/* Category filter bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-wrap gap-2 mb-12"
              role="tablist"
              aria-label="Filter projects by category"
            >
              {PROJECT_CATEGORIES.map((cat) => {
                const isActive = cat === activeCategory
                const count =
                  cat === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length

                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleCategoryChange(cat)}
                    className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-bold border-[3px] border-foreground rounded-full transition-all duration-200 hover:-translate-y-0.5"
                    style={
                      isActive
                        ? {
                            backgroundColor: "var(--foreground)",
                            color: "var(--background)",
                            boxShadow: "4px 4px 0px 0px var(--primary)",
                          }
                        : {
                            backgroundColor: "var(--background)",
                            color: "var(--foreground)",
                            boxShadow: "4px 4px 0px 0px var(--foreground)",
                          }
                    }
                  >
                    {cat}
                    <span
                      className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-black"
                      style={
                        isActive
                          ? { backgroundColor: "var(--primary)", color: "var(--background)" }
                          : { backgroundColor: "var(--foreground)", color: "var(--background)" }
                      }
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </motion.div>

            {/* Project grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + page}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
              >
                {visible.length > 0 ? (
                  visible.map((project, index) => (
                    <div key={project.slug} className="min-h-[500px]">
                      <ProjectCard project={project} index={index} />
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-24 gap-4">
                    <p className="text-2xl font-black text-foreground/40">No projects yet</p>
                    <p className="text-sm font-medium text-foreground/30">
                      Projects in this category will appear here once added.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center justify-center gap-3 mt-16"
              >
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  aria-label="Previous page"
                  className="inline-flex items-center justify-center w-10 h-10 border-[3px] border-foreground rounded-lg bg-background font-black transition-all hover:-translate-y-0.5 disabled:opacity-30 disabled:pointer-events-none"
                  style={{ boxShadow: "3px 3px 0px 0px var(--foreground)" }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    aria-label={`Go to page ${n}`}
                    aria-current={n === page ? "page" : undefined}
                    className="inline-flex items-center justify-center w-10 h-10 border-[3px] border-foreground rounded-lg font-black text-sm transition-all hover:-translate-y-0.5"
                    style={
                      n === page
                        ? {
                            backgroundColor: "var(--foreground)",
                            color: "var(--background)",
                            boxShadow: "3px 3px 0px 0px var(--primary)",
                          }
                        : { boxShadow: "3px 3px 0px 0px var(--foreground)" }
                    }
                  >
                    {n}
                  </button>
                ))}

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  aria-label="Next page"
                  className="inline-flex items-center justify-center w-10 h-10 border-[3px] border-foreground rounded-lg bg-background font-black transition-all hover:-translate-y-0.5 disabled:opacity-30 disabled:pointer-events-none"
                  style={{ boxShadow: "3px 3px 0px 0px var(--foreground)" }}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

          </div>
        </section>

        <ContactFooter />
      </main>
    </div>
  )
}
