"use client"

import { useRef, useState, useEffect } from "react"
import { useActiveSection } from "@/hooks/use-active-section"
import { motion, AnimatePresence } from "framer-motion"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import ScrollProgress from "@/components/ui/scroll-progress"
import ScrollToTop from "@/components/ui/scroll-to-top"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ResumeSection from "@/components/sections/resume-section"
import PortfolioSection from "@/components/sections/portfolio-section"
import ContactSection from "@/components/sections/contact-section"

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Create refs for each section
  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const resumeRef = useRef<HTMLElement>(null)
  const portfolioRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Get active section and scroll handler
  const { activeSection, scrollToSection } = useActiveSection({
    sections: [
      { id: "home", ref: homeRef },
      { id: "about", ref: aboutRef },
      { id: "resume", ref: resumeRef },
      { id: "portfolio", ref: portfolioRef },
      { id: "contact", ref: contactRef },
    ],
  })
  
  // Add a loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div 
          className="portfolio-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="navbar-container">
            <div className="content-container">
              <Navbar
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                sections={[
                  { id: "home", label: "Home", ref: homeRef },
                  { id: "about", label: "About", ref: aboutRef },
                  { id: "resume", label: "Resume", ref: resumeRef },
                  { id: "portfolio", label: "Portfolio", ref: portfolioRef },
                  { id: "contact", label: "Contact", ref: contactRef },
                ]}
              />
            </div>
          </div>
          
          <ScrollProgress />
          <ScrollToTop />

          <main>
            <motion.section 
              className="section hero-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="content-container">
                <HeroSection ref={homeRef} contactRef={contactRef} scrollToSection={scrollToSection} />
              </div>
            </motion.section>
            
            <motion.section 
              className="section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="content-container">
                <AboutSection ref={aboutRef} />
              </div>
            </motion.section>
            
            <motion.section 
              className="section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="content-container">
                <ResumeSection ref={resumeRef} />
              </div>
            </motion.section>
            
            <motion.section 
              className="section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="content-container">
                <PortfolioSection ref={portfolioRef} />
              </div>
            </motion.section>
            
            <motion.section 
              className="section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="content-container">
                <ContactSection ref={contactRef} />
              </div>
            </motion.section>
          </main>

          <footer className="footer">
            <div className="content-container">
              <Footer />
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

