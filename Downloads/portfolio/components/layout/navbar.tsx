"use client"

import type { RefObject } from "react"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type NavbarProps = {
  activeSection: string
  scrollToSection: (ref: RefObject<HTMLElement>) => void
  sections: {
    id: string
    label: string
    ref: RefObject<HTMLElement>
  }[]
}

export default function Navbar({ activeSection, scrollToSection, sections }: NavbarProps) {
  // Get the home section ref (first section)
  const homeRef = sections.length > 0 ? sections[0].ref : null;

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container flex h-16 items-center justify-center">
        {/* Center both elements in a flex container */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => homeRef && scrollToSection(homeRef)}
            className="font-semibold text-xl tracking-tight hover:text-white/80 transition-colors duration-200"
          >
            Home
          </button>
          
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

