"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import ImageCarousel from "@/components/heroimagescarousel";

export function AboutSection() {
  return (
    <ScrollReveal>
      <section id="about" className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            {/* Intentionally empty container from original code */}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-ink leading-tight">
                  Empowering students to create technology <span className="text-primary">with purpose</span>
                </h3>
                <p className="text-slate text-lg leading-relaxed mb-6">
                  Code4Hope is a not-for-profit organization dedicated to empowering students to leverage technology for social good. Our mission is to unite technology and creativity to drive social change, fostering a global community of young innovators addressing real-world challenges.
                </p>
                <p className="text-slate text-lg leading-relaxed">
                  Through our regular hackathons, we create opportunities for students to develop their skills while making a meaningful impact for charitable causes. We believe in the power of young minds to shape a better future through code.
                </p>
              </div>

              <motion.div
                className="pt-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  className="bg-primary hover:bg-primary text-white"
                  onClick={() => window.open("/about", "_self")}
                >
                  Learn more about our journey
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden md:block lg:col-span-5 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-0 rounded-xl bg-transparent shadow-none flex justify-center items-center h-full">
                <div className="w-full max-w-md">
                  <ImageCarousel />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
