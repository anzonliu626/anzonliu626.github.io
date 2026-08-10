"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const arrowControls = useAnimation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        style={{ "--project-color": project.primaryColor } as React.CSSProperties}
        className="group relative flex flex-col h-full border-[3px] border-foreground rounded-2xl bg-background overflow-hidden transition-all duration-200"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "4px 4px 0px 0px var(--foreground)"
          e.currentTarget.style.transform = "translate(-2px, -2px)"
          arrowControls.start({ rotate: 45 })
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "8px 8px 0px 0px var(--foreground)"
          e.currentTarget.style.transform = "translate(0px, 0px)"
          arrowControls.start({ rotate: 0 })
        }}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = "4px 4px 0px 0px var(--foreground)"
          arrowControls.start({ rotate: 45 })
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = "8px 8px 0px 0px var(--foreground)"
          arrowControls.start({ rotate: 0 })
        }}
      >
        {/* Banner image — full width, shown when available */}
        {project.bannerImage ? (
          <div className="relative w-full aspect-[16/7] overflow-hidden border-b-[3px] border-foreground flex-shrink-0">
            <Image
              src={project.bannerImage}
              alt={`${project.title} preview`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            />
            {/* Project color overlay tint on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{ backgroundColor: project.primaryColor }}
              aria-hidden="true"
            />
          </div>
        ) : (
          /* Fallback color band when no banner */
          <div
            className="h-2 w-full flex-shrink-0"
            style={{ backgroundColor: project.primaryColor }}
            aria-hidden="true"
          />
        )}

        {/* Card body */}
        <div className="flex flex-col flex-1 p-3 sm:p-6 gap-2 sm:gap-4">
          {/* Project number + arrow */}
          <div className="flex items-start justify-between">
            <span
              className="text-[10px] sm:text-xs font-mono font-semibold tracking-widest px-1.5 sm:px-2 py-0.5 sm:py-1 border-[2px] border-foreground rounded-md"
              style={{ color: project.primaryColor }}
            >
              PROJ {project.number}
            </span>
            <motion.span
              animate={arrowControls}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center border-[2px] border-foreground rounded-lg bg-background"
              style={{ boxShadow: "3px 3px 0px 0px var(--foreground)" }}
              aria-hidden="true"
            >
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground" />
            </motion.span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-xl font-black text-foreground leading-snug min-h-[2.5rem] sm:min-h-[3.5rem] line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed min-h-[4.5rem] line-clamp-3">
            {project.description}
          </p>

          {/* Tags + Year */}
          <div className="flex flex-col gap-2 sm:gap-3 pt-2 border-t-[2px] border-foreground/20">
            <div className="flex flex-wrap gap-1.5 sm:gap-2 min-h-[1.5rem] sm:min-h-[3.75rem] content-start">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 border-[2px] border-foreground rounded-full text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">{project.year}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
