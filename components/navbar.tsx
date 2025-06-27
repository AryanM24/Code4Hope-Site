"use client";

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code, Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle theme mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled ? "backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="rounded-md" suppressHydrationWarning>
              <Image 
              src="https://docs.code4hope.net/img/black%20_logo_no_text.PNG" 
              alt="Code4Hope Logo" 
              width={24}
              height={24}
              className="h-5 w-auto md:h-8"
              priority
              unoptimized
              />
            </div>
            <span className="font-bold text-xl text-[#1F2937] dark:text-white">Code4Hope</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-[#1F2937] dark:text-gray-200"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-primary hover:bg-primary/80 text-primary-foreground">
              <Link href="https://hcb.hackclub.com/donations/start/code-4-hope">Donate</Link>
            </Button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#1F2937] dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#1F2937] dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-[#1F2937] dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black md:hidden z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white dark:bg-gray-900 shadow-xl md:hidden z-50 flex flex-col"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-[#1F2937] dark:text-gray-200"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-4 py-2">
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-base font-medium py-3 px-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                        pathname === link.href 
                          ? "text-primary font-semibold bg-gray-50 dark:bg-gray-800/60" 
                          : "text-[#1F2937] dark:text-gray-200"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
              
              <div className="p-4 border-t dark:border-gray-800">
                <Button 
                  asChild 
                  size="default" 
                  className="bg-primary hover:bg-primary/80 text-primary-foreground w-full"
                >
                  <Link href="https://hcb.hackclub.com/donations/start/code-4-hope" onClick={() => setIsMenuOpen(false)}>
                    Donate
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

