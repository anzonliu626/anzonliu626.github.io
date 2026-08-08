"use client"

import { motion } from "framer-motion"

import Image from "next/image"

interface HeroSectionProps {
  title?: string
  executiveSummary?: string
  projectColor?: string
  bannerImage?: string
}

function isRealImage(src: string): boolean {
  if (!src) return false
  if (src.startsWith("[PLACEHOLDER")) return false
  return /\.(png|jpe?g|gif|webp|svg|avif)$/i.test(src)
}

export function HeroSection({
  title = "Project Title Placeholder",
  executiveSummary = "Executive summary placeholder text. A brief overview of the project impact, key achievements, and the value delivered to stakeholders.",
  projectColor = "#2EA588",
  bannerImage,
}: HeroSectionProps) {
  const showBanner = !!bannerImage
  const bannerIsReal = bannerImage ? isRealImage(bannerImage) : false
  return (
    <section
      className="pt-32 pb-20 px-6 md:px-12 border-b-[3px] border-foreground"
      style={{ "--primary-color": projectColor } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground">
            {title}
          </h1>

          {/* Banner Image — between title and summary */}
          {showBanner && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-10"
            >
              <div
                className="relative w-full overflow-hidden border-[3px] border-foreground rounded-lg"
                style={{ boxShadow: `8px 8px 0px 0px ${projectColor}` }}
              >
                {bannerIsReal ? (
                  <Image
                    src={bannerImage!}
                    alt={`${title} banner`}
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-[300px] md:h-[420px] bg-[#E8E2D9] flex items-center justify-center">
                    <span className="font-mono text-sm text-[#494949]/60 text-center px-6">
                      {bannerImage}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Executive Summary */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-4xl leading-relaxed">
            {executiveSummary}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
