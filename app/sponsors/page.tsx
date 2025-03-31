"use client";

import { SponsorSlider } from "@/components/sponsor-slider"
import { BecomeSponsorSection } from "@/components/become-sponsor-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

export default function SponsorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Parallax Hero Section */}
        <section className="py-16 bg-background dark:bg-[#262626]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">Our Superstar Sponsors</h1>
            <p className="text-muted-foreground">
              Sponsors provide our hackathons with funding so that young developers who participate can receive
              awards, prizes, and workshops that can help them further develop their skills. Check out our 2024-2025
              sponsors!
            </p>
          </motion.div>
        </section>
        
        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <SponsorSlider sponsors={sponsors} multiImage={false} />
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="py-12 md:py-16 lg:py-20 bg-muted dark:bg-[#262626]">
            <div className="container mx-auto px-4">
              <BecomeSponsorSection />
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  )
}

