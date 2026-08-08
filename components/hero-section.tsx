"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileText, Briefcase } from "lucide-react"
import { AnimatedWaveBox } from "./animated-wave-box"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function HeroSection() {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const workSection = document.querySelector("#work")
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants} className="flex gap-3">
              <span className="inline-block px-4 py-2 text-sm font-black text-primary border-[3px] border-foreground bg-background rounded-full"
                style={{ boxShadow: "4px 4px 0px 0px var(--foreground)" }}
              >
                UI/UX Developer
              </span><span className="inline-block px-4 py-2 text-sm font-black text-primary border-[3px] border-foreground bg-background rounded-full"
                style={{ boxShadow: "4px 4px 0px 0px var(--foreground)" }}
              >
                Product Designer
              </span>
              <span className="inline-block px-4 py-2 text-sm font-black text-primary border-[3px] border-foreground bg-background rounded-full"
                style={{ boxShadow: "4px 4px 0px 0px var(--foreground)" }}
              >
                🇭🇰HONG KONG
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.1] tracking-tight text-balance"
            >
              Designing for
              <br />
              <span className="text-primary">impact</span>, Shipping with
              <br />
              <span className="text-primary">precision</span>.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              I’m a UI/UX Developer and Product Designer with a frontend engineering foundation. I bridge the gap between complex business logic and intuitive digital experiences, ensuring every pixel is designed to be built.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {/* Primary Button */}
              <motion.a
                href="#work"
                onClick={handleScrollToWork}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-black text-primary-foreground bg-primary border-[3px] border-foreground rounded-lg transition-all"
                style={{
                  boxShadow: "6px 6px 0px 0px var(--foreground)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "4px 4px 0px 0px var(--foreground)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "6px 6px 0px 0px var(--foreground)"
                }}
              >
                <Briefcase className="w-5 h-5" />
                View My Work
              </motion.a>

              {/* Secondary/Ghost Button */}
              <motion.a
                href="https://drive.google.com/file/d/1xO95Z_sDwWY1xGwtv2VOIpiMih1D--m5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-black text-foreground bg-transparent border-[3px] border-foreground rounded-lg transition-all hover:bg-foreground hover:text-background"
                style={{
                  boxShadow: "6px 6px 0px 0px var(--foreground)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "4px 4px 0px 0px var(--foreground)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "6px 6px 0px 0px var(--foreground)"
                }}
              >
                <FileText className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Box */}
          <div className="relative">
            <AnimatedWaveBox />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-sm font-black text-muted-foreground uppercase tracking-widest">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 border-[3px] border-foreground rounded-full bg-background"
            style={{ boxShadow: "3px 3px 0px 0px var(--foreground)" }}
          >
            <ArrowDown className="w-5 h-5 text-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
