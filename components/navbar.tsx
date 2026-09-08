"use client";

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Blogs", href: "https://blogs.code4hope.net/" },
  ]

  // Handle theme mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="z-50 w-full bg-canvas/95 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="rounded-md" suppressHydrationWarning>
              <Image 
              src="/c4h_logo1.png" 
              alt="Code4Hope Logo" 
              width={120}
              height={40}
              className="h-6 w-auto md:h-8"
              priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-1 text-sm font-medium transition-colors ${
                    isActive ? "text-brand-blue-700" : "text-charcoal hover:text-ink"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <Button asChild size="sm">
              <Link href="https://hcb.hackclub.com/donations/start/code-4-hope">Donate</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleMenu}
              className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-ink"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation - Rendered using Portal */}
      {mounted && isMenuOpen && createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black lg:hidden"
                style={{ zIndex: 9998 }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Sidebar */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.25 }}
                className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-canvas shadow-modal lg:hidden flex flex-col"
                style={{ zIndex: 9999 }}
              >
                <div className="flex justify-end p-4">
                  <button
                    onClick={toggleMenu}
                    className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-ink"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto px-4 py-2">
                  <nav className="flex flex-col space-y-1">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))

                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                            isActive
                              ? "bg-surface text-ink"
                              : "text-charcoal hover:bg-surface"
                          }`}
                        >
                          {link.name}
                        </Link>
                      )
                    })}
                  </nav>
                </div>
                
                <div className="border-t border-hairline p-4">
                  <Button 
                    asChild 
                    size="default" 
                    className="w-full"
                  >
                    <Link href="https://hcb.hackclub.com/donations/start/code-4-hope" onClick={() => setIsMenuOpen(false)}>
                      Donate
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  )
}
