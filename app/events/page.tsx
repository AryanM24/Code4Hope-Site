"use client";

import { EventSlider } from "@/components/event-slider"
import { JoinSection } from "@/components/join-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import impactX from "@/public/ImpactX (1).png"
import c4h2025 from "@/public/c4h2025.png"
import { ArrowRight } from "lucide-react"

const events = [
  {
    name: "Code4Hope 2025",
    description: "Code4Hope 2025 is our first in-person-only hackathon, uniting high school innovators to tackle real-world challenges in sustainability, health, education, and finance.",
    logo: c4h2025,
    devpostLink: "#",
  },
  {
    name: "ImpactX'25",
    description:
      "Projects for a better world by solving real-world problems—whether they be health, wellness, and education—where your ideas today shape a brighter, more sustainable tomorrow.",
    logo: impactX,
    devpostLink: "#",
  },
  {
    name: "ImpactX'24",
    description:
      "Hosted in December of 2024, ImpactX was C4H's debut hackathon, with over 130+ participants and 25k+ in prizes",
    logo: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/071/021/datas/medium_square.png?height=400&width=400",
    devpostLink: "#",
  },
]

export default function EventsPage() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">Events</h1>
            <p className="text-muted-foreground">
              Here is where you can find info about our previous events!
            </p>
          </motion.div>
        </section>

        <ScrollReveal>
          <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <EventSlider events={events} />
            </div>
          </section>
        </ScrollReveal>

        
      </main>
    </div>
  )
}

