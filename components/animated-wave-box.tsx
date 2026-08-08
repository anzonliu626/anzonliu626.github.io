"use client"

import { motion } from "framer-motion"

interface WaveLineProps {
  delay: number
  amplitude: number
  frequency: number
}

function WaveLine({ delay, amplitude, frequency }: WaveLineProps) {
  return (
    <motion.div
      className="w-full h-[3px] bg-foreground rounded-full"
      animate={{
        scaleX: [1, 1.1, 1, 0.9, 1],
        x: [0, amplitude, 0, -amplitude, 0],
      }}
      transition={{
        duration: frequency,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  )
}

export function AnimatedWaveBox() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full h-[400px] md:h-[500px] rounded-3xl border-[3px] border-foreground bg-background overflow-hidden flex flex-col items-center justify-center gap-16 p-12"
      style={{
        boxShadow: "8px 8px 0px 0px var(--foreground)",
      }}
    >
      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4 w-4 h-4 border-[3px] border-primary rounded-full" />
      <div className="absolute top-4 right-4 w-4 h-4 bg-primary rounded-full" />
      <div className="absolute bottom-4 left-4 w-4 h-4 bg-primary rounded-full" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-[3px] border-primary rounded-full" />

      {/* Animated wave lines */}
      <div className="w-full max-w-[280px] flex flex-col gap-12">
        <WaveLine delay={0} amplitude={15} frequency={4} />
        <WaveLine delay={0.5} amplitude={20} frequency={5} />
        <WaveLine delay={1} amplitude={12} frequency={3.5} />
      </div>

      {/* Geometric decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-40 h-40 border-[3px] border-foreground/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -left-10 w-24 h-24 border-[3px] border-primary/30 rounded-full"
      />
    </motion.div>
  )
}
