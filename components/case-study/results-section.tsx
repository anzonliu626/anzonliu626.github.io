"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Clock, Star } from "lucide-react"

interface ResultMetric {
  icon?: React.ReactNode
  value: string
  label: string
}

interface ResultsSectionProps {
  title?: string
  description?: string
  metrics?: ResultMetric[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function ResultsSection({
  title = "Results & Impact",
  description = "The redesigned RAMS platform delivered measurable improvements in user productivity, compliance accuracy, and operational efficiency. Post-launch metrics validate the effectiveness of the user-centered redesign approach.",
  metrics = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "+40%",
      label: "Faster registration completion",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "5,200+",
      label: "Businesses onboarded",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "-60%",
      label: "Error rate reduction",
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.8/5",
      label: "Staff satisfaction score",
    },
  ],
  testimonial = {
    quote:
      "The new RAMS interface has transformed how our team manages registrations. What used to take 20 minutes now takes 5. Our staff confidence has skyrocketed, and we're seeing dramatically fewer compliance errors.",
    author: "Sarah Mitchell",
    role: "Business Operations Manager",
  },
}: ResultsSectionProps) {
  return (
    <section className="py-20 px-6 md:px-12 border-t-[3px] border-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Results Highlight Box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Primary Color Background Box */}
          <motion.div
            variants={itemVariants}
            className="relative mb-16"
          >
            <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949]" />
            <div
              className="relative border-[3px] border-foreground rounded-none p-8 md:p-12"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/80">
                {title}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949] transition-transform group-hover:translate-x-[4px] group-hover:translate-y-[4px]" />
                <div className="relative bg-background border-[3px] border-foreground rounded-none p-6 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-4 text-white"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    {metric.icon}
                  </div>
                  <p
                    className="text-3xl md:text-4xl font-black mb-2"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {metric.value}
                  </p>
                  <p className="text-sm text-foreground/70">{metric.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949]" />
            <div className="relative bg-background border-[3px] border-foreground rounded-none p-8 md:p-12">
              <div
                className="w-16 h-1 mb-6"
                style={{ backgroundColor: "var(--primary-color)" }}
              />
              <blockquote className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: "var(--primary-color)" }}
                >
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
