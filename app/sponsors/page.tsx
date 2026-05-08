"use client";

import { SponsorSlider } from "@/components/sponsor-slider"
import { BecomeSponsorSection } from "@/components/become-sponsor-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import "@/lib/utils" // Import to ensure global sponsors is available

export default function SponsorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Parallax Hero Section */}
        <section className="py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-8"
          >
            <h1 className="text-5xl font-semibold leading-[1.1] tracking-[-0.05em] text-ink md:text-6xl lg:text-[80px] mb-6">Our Superstar Sponsors</h1>
            <p className="text-slate">
              Sponsors provide our hackathons with funding so that young developers who participate can receive
              awards, prizes, and workshops that can help them further develop their skills. Check out our 2024-2025
              sponsors!
            </p>
          </motion.div>
        </section>
        
        <ScrollReveal>
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <SponsorSlider sponsors={globalThis.sponsors} multiImage={false} />
            </div>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <BecomeSponsorSection />
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  )
}

