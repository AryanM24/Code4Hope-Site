"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export function HeroSection() {
  return (
    <ScrollReveal>
      <section className="relative w-full overflow-hidden py-32 md:py-48 lg:py-64">
        {/* Background Image restored */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Students coding together"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute left-[-8rem] top-16 h-80 w-80 rounded-full bg-brand-blue-200/70 blur-3xl" />
        <div className="absolute right-[-10rem] top-8 h-96 w-96 rounded-full bg-brand-coral/10 blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto flex max-w-5xl flex-col items-center space-y-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl font-bold leading-[1.1] tracking-[-0.05em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:text-7xl lg:text-[80px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Code4Hope
            </motion.h1>
            <motion.p
              className="mx-auto max-w-[760px] pt-2 text-lg font-medium leading-8 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              A not-for-profit organization that hosts hackathons throughout the year, empowering students to innovate and make an impact for charitable causes.
            </motion.p>
            <motion.div
              className="flex flex-col items-center gap-3 pt-4 sm:flex-row sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-2 sm:mb-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" onClick={() => window.open("/about", "_self")}>
                  Learn More
                </Button>
              </motion.div>
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="secondary" size="lg" className="bg-white/90 hover:bg-white text-brand-blue-900 border-none shadow-lg" onClick={() => window.open("/events", "_self")}>
                  Get Involved
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}
