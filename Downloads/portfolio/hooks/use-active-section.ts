"use client"

import { useState, useEffect, RefObject } from "react"

type Section = {
  id: string
  ref: RefObject<HTMLElement>
}

export function useActiveSection({ sections }: { sections: Section[] }) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "")

  // Scrolls to the specified element
  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      // Add an offset to account for the sticky navbar
      const navbarHeight = 64 // Adjust based on your navbar height
      const topPosition = ref.current.offsetTop - navbarHeight
      
      window.scrollTo({
        top: topPosition,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    // Check which section is in view
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for better UX

      // Check each section from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (!section.ref.current) continue

        const offsetTop = section.ref.current.offsetTop
        const offsetHeight = section.ref.current.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id)
          return
        }
      }

      // If we're at the very top, activate the first section
      if (window.scrollY < 100 && sections.length > 0) {
        setActiveSection(sections[0].id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount to set initial state
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sections])

  return { activeSection, scrollToSection }
}

