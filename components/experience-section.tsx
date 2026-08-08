"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/experience"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
}

export function ExperienceSection() {
  return (
    <section 
      id="experience" 
      className="min-h-screen py-20 md:py-32 px-6 bg-background border-t-[3px] border-foreground"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <span className="text-xs font-black uppercase tracking-widest text-foreground/60 mb-3 block">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Vertical Timeline Line - Desktop only */}
          <div className="hidden md:block absolute left-[200px] lg:left-[240px] top-0 bottom-0 w-[3px] bg-foreground" />

          {/* Experience Items */}
          <div className="flex flex-col gap-8 md:gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                className="relative flex flex-col md:flex-row md:gap-8 lg:gap-12"
              >
                {/* Left Side - Year & Role (Desktop) */}
                <div className="md:w-[200px] lg:w-[240px] flex-shrink-0 mb-4 md:mb-0">
                  {/* Mobile: Horizontal layout */}
                  <div className="md:text-right md:pr-8">
                    <span className="inline-block px-3 py-1 bg-foreground text-background font-mono text-sm font-black mb-2 rounded-full">
                      {exp.period}
                    </span>
                    <p className="text-lg md:text-xl font-black text-foreground">
                      {exp.role}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot - Desktop only */}
                <div className="hidden md:flex absolute left-[200px] lg:left-[240px] top-2 -translate-x-1/2 w-4 h-4 bg-primary border-[3px] border-foreground z-10 rounded-full" />

                {/* Right Side - Card */}
                <div className="flex-1 md:pl-8">
                  <div 
                    className="relative bg-background border-[3px] border-foreground rounded-lg p-6 md:p-8"
                    style={{
                      boxShadow: "8px 8px 0px 0px #494949",
                    }}
                  >
                    {/* Company Name */}
                    <h3 className="text-xl md:text-2xl font-black text-primary mb-4">
                      {exp.company}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <li 
                          key={bulletIndex}
                          className="flex gap-3 text-foreground/90 leading-relaxed"
                        >
                          <span className="flex-shrink-0 w-2 h-2 mt-2 bg-primary rounded-full" />
                          <span className="text-sm md:text-base">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline End Cap */}
          <div className="hidden md:block absolute left-[200px] lg:left-[240px] -bottom-4 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
