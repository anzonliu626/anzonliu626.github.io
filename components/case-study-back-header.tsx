"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

const NAV_LINKS = [
  { label: "Overview",    href: "#overview"    },
  { label: "Pain Points", href: "#pain-points" },
  { label: "Research",    href: "#research"    },
  { label: "Strategy",    href: "#strategy"    },
  { label: "Solutions",   href: "#solutions"   },
]

interface CaseStudyBackHeaderProps {
  accentColor?: string
}

export function CaseStudyBackHeader({ accentColor = "var(--primary)" }: CaseStudyBackHeaderProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-foreground"
      style={{ "--cs-accent": accentColor } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Back link */}
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider text-foreground transition-colors shrink-0"
          style={{ "--hover-color": accentColor } as React.CSSProperties}
          onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "")}
        >
          <span
            className="inline-flex items-center justify-center w-8 h-8 border-[3px] border-foreground rounded-lg transition-transform group-hover:-translate-x-1"
            style={{ boxShadow: "3px 3px 0px #494949" }}
          >
            <ArrowLeft className="w-4 h-4" />
          </span>
          Back
        </Link>

        {/* Section anchor links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Case study sections">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i + 0.2, duration: 0.35 }}
              className="relative px-3 py-1.5 text-sm font-bold text-foreground/70 transition-colors group"
              onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                style={{ backgroundColor: accentColor }}
              />
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
