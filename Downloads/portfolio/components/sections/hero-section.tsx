"use client"

import { forwardRef, type RefObject } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

type HeroSectionProps = {
  contactRef: RefObject<HTMLElement>
  scrollToSection: (ref: RefObject<HTMLElement>) => void
}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ contactRef, scrollToSection }, ref) => {
  return (
    <section ref={ref} id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-10">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto relative z-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative element */}
          <motion.div 
            className="absolute -z-10 rounded-full w-64 h-64 bg-white/5 blur-3xl"
            style={{ top: '-20%', left: '50%', transform: 'translateX(-50%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          
          <div className="space-y-6">
            <div>
              <motion.div
                className="inline-block px-4 py-1.5 mb-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ✨ Full Stack Developer
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Hi, I'm <span className="text-gradient">Aryan Mittal</span>
              </motion.h1>
              <motion.h2
                className="text-xl md:text-2xl font-medium text-white/70 mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Crafting digital experiences with code & creativity
              </motion.h2>
            </div>
            
            <motion.p
              className="text-lg text-white/70 mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I build exceptional and accessible digital experiences for the web. 
              Focused on creating clean, user-friendly interfaces with modern technologies.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                variant="default"
                className="rounded-full h-12 px-6 bg-white text-black hover:bg-white/90 hover:shadow-glow-white transition-all duration-300 text-base"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="rounded-full h-12 px-6 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-base"
              >
                <Link 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

HeroSection.displayName = "HeroSection"
export default HeroSection

