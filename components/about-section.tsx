"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "5+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction Rate" },
]

const skills = [
  {
    number: "01",
    title: "UX Strategy",
    description:
      "Converting business goals into user-centered solutions that improve product performance.",
  },
  {
    number: "02",
    title: "UI Design",
    description:
      "Creating visually compelling interfaces that balance aesthetics with usability.",
  },
  {
    number: "03",
    title: "Prototyping",
    description:
      "Building interactive prototypes to validate ideas and test with real users.",
  },
  {
    number: "04",
    title: "Design Systems",
    description:
      "Developing scalable component libraries for consistent product experiences.",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-background border-t-[3px] border-foreground px-6 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* ── Left Column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8"
          >
            {/* Label */}
            <motion.p
              variants={itemVariants}
              className="text-xs font-black uppercase tracking-widest text-foreground/60"
            >
              About
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-balance"
              style={{ color: "#B44363" }}
            >
              SIMPLIFYING THE COMPLEX
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 leading-relaxed max-w-lg"
            >
              I&apos;m a UX/UI Designer with expertise in multimedia design and
              frontend development. I create digital experiences that solve real
              problems while delivering measurable business impact.
            </motion.p>

            {/* Stats grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-[3px] border-foreground rounded-lg p-4 bg-background"
                  style={{ boxShadow: "4px 4px 0px 0px #494949" }}
                >
                  <p
                    className="text-3xl font-black leading-none mb-1"
                    style={{ color: "#B44363" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.number}
                variants={itemVariants}
                className={`flex gap-6 py-6 ${
                  idx < skills.length - 1
                    ? "border-b-[3px] border-foreground"
                    : ""
                }`}
              >
                {/* Number */}
                <span className="font-mono text-sm font-black text-foreground/40 shrink-0 pt-0.5">
                  {skill.number}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-black text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
