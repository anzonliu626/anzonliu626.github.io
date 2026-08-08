"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

interface ImagePlaceholderProps {
  name: string
  height?: "sm" | "md" | "lg"
  caption?: string
}

const heightMap = {
  sm: "h-[200px]",
  md: "h-[300px]",
  lg: "h-[400px]",
}

/** Returns true when `name` looks like a real image path rather than a placeholder token. */
function isRealImage(name: string): boolean {
  if (!name) return false
  if (name.startsWith("[PLACEHOLDER")) return false
  return /\.(png|jpe?g|gif|webp|svg|avif)$/i.test(name)
}

export function ImagePlaceholder({
  name,
  height = "md",
  caption,
}: ImagePlaceholderProps) {
  const real = isRealImage(name)
  const [naturalSize, setNaturalSize] = useState<{ w: number; h: number } | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight })
  }, [])

  // Compute aspect-ratio padding for real images once dimensions are known.
  // Falls back to fixed height until the image loads.
  const containerStyle: React.CSSProperties =
    real && naturalSize
      ? { aspectRatio: `${naturalSize.w} / ${naturalSize.h}` }
      : {}

  const containerHeight =
    real && naturalSize ? "" : heightMap[height]

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`relative border-[3px] border-[#494949] rounded-lg ${containerHeight} overflow-hidden ${real ? "cursor-zoom-in" : ""}`}
          style={{
            boxShadow: "8px 8px 0px 0px #494949",
            ...containerStyle,
          }}
          onClick={real ? () => setModalOpen(true) : undefined}
        >
          {real ? (
            <Image
              src={name}
              alt={caption ?? "Project image"}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              onLoad={handleLoad}
            />
          ) : (
            <div
              className="w-full h-full bg-[#E8E2D9] flex items-center justify-center p-6 cursor-default"
            >
              <span className="font-mono text-sm md:text-base text-[#494949]/70 text-center px-4">
                {name}
              </span>
            </div>
          )}
        </div>

        {caption && (
          <p className="mt-3 text-sm text-foreground/60 italic">{caption}</p>
        )}
      </motion.div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {modalOpen && real && (
          <motion.div
            key="lightbox-backdrop"
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setModalOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 bg-background border-[3px] border-foreground rounded-lg transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "4px 4px 0px 0px #494949" }}
              onClick={(e) => { e.stopPropagation(); setModalOpen(false) }}
              aria-label="Close preview"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Image container */}
            <motion.div
              key="lightbox-image"
              className="relative z-10 w-full max-w-5xl max-h-[90vh]"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative border-[3px] border-[#494949] rounded-lg overflow-hidden bg-background"
                style={{
                  boxShadow: "8px 8px 0px 0px #494949",
                  aspectRatio: naturalSize ? `${naturalSize.w} / ${naturalSize.h}` : "16 / 9",
                  maxHeight: "85vh",
                }}
              >
                <Image
                  src={name}
                  alt={caption ?? "Project image — full size"}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
              {caption && (
                <p className="mt-3 text-sm text-white/70 italic text-center">{caption}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
