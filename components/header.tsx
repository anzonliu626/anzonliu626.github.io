"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const hashLinks = [
  { label: "Work",       href: "#work"       },
  { label: "Experience", href: "#experience" },
  { label: "About",      href: "#about"      },
  { label: "Contact",    href: "#contact"    },
]

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome) return // let default navigation happen on non-home pages
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-[3px] border-foreground"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="/"
          className="text-xl font-bold text-foreground tracking-tight"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          AnzonLIU&apos;s Portfolio
        </motion.a>

        <nav className="flex items-center gap-1 md:gap-2">
          {/* Hash-scroll links (work on home; fall back to full URL on other pages) */}
          {hashLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) + 0.3, duration: 0.4 }}
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
