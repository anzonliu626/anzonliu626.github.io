"use client"

interface ImagePlaceholderProps {
  name: string
  height?: "sm" | "md" | "lg" | "xl"
  caption?: string
  className?: string
}

const heightMap = {
  sm: "h-[200px]",
  md: "h-[300px]",
  lg: "h-[400px]",
  xl: "h-[500px]",
}

export function ImagePlaceholder({
  name,
  height = "md",
  caption,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div className={className}>
      <div className="relative">
        {/* Hard Shadow */}
        <div
          className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-[#494949]"
        />
        {/* Main Container */}
        <div
          className={`relative bg-[#E8E2D9] border-[3px] border-[#494949] rounded-none ${heightMap[height]} flex items-center justify-center p-6`}
        >
          <p className="font-mono text-sm md:text-base text-[#494949]/70 text-center leading-relaxed">
            [PLACEHOLDER: {name}]
          </p>
        </div>
      </div>
      {caption && (
        <p className="mt-3 text-sm text-foreground/60 italic">{caption}</p>
      )}
    </div>
  )
}
