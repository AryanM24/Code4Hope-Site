"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import SponsorCarousel from "../components/sponsor-carousel";

// Section Components
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { EventsSection } from "@/components/home/EventsSection";
import { GallerySection } from "@/components/home/GallerySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Sponsors Section */}
      <ScrollReveal>
        <section id="sponsors" className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-4"
            >
              <h2 className="text-3xl font-bold mb-4 text-ink">Our Sponsors</h2>
              <p className="text-slate">
                We're grateful to partner with these amazing organizations who make our hackathons possible.
              </p>
            </motion.div>
            <SponsorCarousel />
          </div>
        </section>
      </ScrollReveal>

      {/* Events Section */}
      <EventsSection />

      {/* Photo Gallery Section */}
      <GallerySection />
      
      {/* <Footer /> */}
    </main>
  );
}
