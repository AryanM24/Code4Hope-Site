"use client"

import { EventSlider } from "@/components/event-slider"
import { JoinSection } from "@/components/join-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

const events = [
  {
    name: "Code4Hope 2025",
    description: "Innovate. Impact. Inspire. Coming Soon.",
    logo: "/placeholder.svg?height=400&width=400",
    devpostLink: "#",
  },
  {
    name: "ImpactX'24",
    description:
      "Hosted in December of 2024, ImpactX was C4H's debut hackathon, with over 130+ participants and 25k+ in prizes",
    logo: "/placeholder.svg?height=400&width=400",
    devpostLink: "#",
  },
  {
    name: "ImpactX'24",
    description:
      "Hosted in December of 2024, ImpactX was C4H's debut hackathon, with over 130+ participants and 25k+ in prizes",
    logo: "/placeholder.svg?height=400&width=400",
    devpostLink: "#",
  },
]

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Parallax Hero Section */}
        <section className="py-16 bg-[#F9FAFB] dark:bg-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1F2937] dark:text-white">Events</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Here is where you can find info about our previous events!
            </p>
          </motion.div>
        </section>

        <ScrollReveal>
          <section className="w-full py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <EventSlider events={events} />
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  )
}

