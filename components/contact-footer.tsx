"use client"

import { motion } from "framer-motion"
import { Mail, ArrowUpRight, MapPin, Phone, Linkedin, ExternalLink } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const details = [
  {
    label: "Email",
    value: "anzonliu626@gmail.com",
    href: "mailto:anzonliu626@gmail.com",
  },
  {
    label: "Phone",
    value: "+852 9342 0628",
    href: "tel:+85293420628",
  },
  {
    label: "Location",
    value: "Hong Kong",
    href: null,
  },
]

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anzon-liu-7b9b23143/",
    icon: Linkedin,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/anzonliu",
    icon: ExternalLink,
  },
]

export function ContactFooter() {
  return (
    <>
      {/* ── Contact Section ── */}
      <section
        id="contact"
        className="border-t-[3px] border-foreground px-6 py-24 md:py-32"
        style={{ backgroundColor: "#494949" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            {/* Left Column */}
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
                className="text-xs font-black uppercase tracking-widest"
                style={{ color: "#9ca3af" }}
              >
                Get in Touch
              </motion.p>

              {/* Headline */}
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-balance"
                style={{ color: "#F5EFE6" }}
              >
                {"Let's create something impactful together."}
              </motion.h2>

              {/* Subtext */}
              <motion.p
                variants={itemVariants}
                className="text-lg leading-relaxed max-w-md"
                style={{ color: "#d1d5db" }}
              >
                {"I'm always open to discussing new projects, design challenges, or opportunities to be part of your vision."}
              </motion.p>

              {/* Email CTA Button */}
              <motion.div variants={itemVariants}>
                <a
                  href="mailto:anzonliu626@gmail.com"
                  className="group inline-flex items-center gap-4 px-6 py-4 w-full border-[3px] rounded-lg font-black text-base transition-transform hover:-translate-y-1"
                  style={{
                    backgroundColor: "#F5EFE6",
                    color: "#494949",
                    borderColor: "#B44363",
                    boxShadow: "6px 6px 0px 0px #B44363",
                  }}
                >
                  <Mail size={20} className="shrink-0" />
                  <span className="flex-1 text-center tracking-wide">
                    anzonliu626@gmail.com
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-10 justify-center"
            >
              {details.map((item) => (
                <motion.div key={item.label} variants={itemVariants} className="flex flex-col gap-1">
                  <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#9ca3af" }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-xl font-black transition-opacity hover:opacity-70"
                      style={{ color: "#F5EFE6" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="flex items-center gap-2">
                      <MapPin size={16} style={{ color: "#B44363" }} />
                      <p className="text-xl font-black" style={{ color: "#F5EFE6" }}>
                        {item.value}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex flex-col gap-1">
                <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#9ca3af" }}>
                  Social
                </p>
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border-[3px] rounded-lg font-black text-sm transition-all hover:-translate-y-0.5"
                      style={{
                        color: "#F5EFE6",
                        borderColor: "#F5EFE6",
                        boxShadow: "4px 4px 0px 0px #F5EFE6",
                      }}
                    >
                      <social.icon size={14} />
                      {social.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="border-t-[3px] border-[#F5EFE6]/20 px-6 py-8"
        style={{ backgroundColor: "#3a3a3a" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-black tracking-wide" style={{ color: "#9ca3af" }}>
            &copy; {new Date().getFullYear()} Anzon Liu. All rights reserved.
          </p>
          <p className="text-sm font-black tracking-wide" style={{ color: "#9ca3af" }}>
            UX/UI Designer &mdash; Hong Kong
          </p>
        </div>
      </footer>
    </>
  )
}
