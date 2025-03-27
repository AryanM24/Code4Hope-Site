"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

const sponsors = [
  { name: "Sponsor 1", logo: "/placeholder.svg", tier: "platinum" },
  { name: "Sponsor 2", logo: "/placeholder.svg", tier: "gold" },
  { name: "Sponsor 3", logo: "/placeholder.svg", tier: "gold" },
  { name: "Sponsor 4", logo: "/placeholder.svg", tier: "silver" },
  { name: "Sponsor 5", logo: "/placeholder.svg", tier: "silver" },
  { name: "Sponsor 6", logo: "/placeholder.svg", tier: "silver" },
  { name: "Sponsor 7", logo: "/placeholder.svg", tier: "bronze" },
  { name: "Sponsor 8", logo: "/placeholder.svg", tier: "bronze" },
]

const SponsorCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef)
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [0, -1000],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      })
    } else {
      controls.stop()
    }
  }, [isInView, controls])

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <div className="py-8">
        <motion.div 
          className="flex"
          animate={controls}
        >
          {/* First set of sponsors */}
          {sponsors.map((sponsor, index) => (
            <div 
              key={`sponsor-${index}`}
              className="mx-8 flex-shrink-0"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-20 w-40">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-12"
                />
              </div>
            </div>
          ))}
          
          {/* Duplicated for continuous loop */}
          {sponsors.map((sponsor, index) => (
            <div 
              key={`sponsor-dup-${index}`}
              className="mx-8 flex-shrink-0"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-20 w-40">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-12"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default SponsorCarousel