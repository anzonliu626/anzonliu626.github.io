"use client"

import { useEffect, useState } from "react"

/**
 * Scroll-spy hook. Given a list of section ids, returns the id of the section
 * currently in view so navigation links can reflect the user's position.
 */
export function useActiveSection(sectionIds: string[], enabled = true) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) return

    const getElements = () =>
      sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)

    const computeActive = () => {
      const elements = getElements()
      if (elements.length === 0) return

      // Offset for the fixed header (~64-72px) plus a little breathing room.
      const marker = 120

      // Empty by default: if the user is in a section that has no matching nav
      // link (e.g. the hero above the first tracked section), nothing is active.
      let current = ""
      for (const el of elements) {
        if (el.getBoundingClientRect().top - marker <= 0) {
          current = el.id
        }
      }

      // If we've scrolled to the very bottom, highlight the last section.
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      if (scrolledToBottom) {
        current = elements[elements.length - 1].id
      }

      setActiveId(current)
    }

    computeActive()
    window.addEventListener("scroll", computeActive, { passive: true })
    window.addEventListener("resize", computeActive)

    return () => {
      window.removeEventListener("scroll", computeActive)
      window.removeEventListener("resize", computeActive)
    }
  }, [sectionIds, enabled])

  return activeId
}
