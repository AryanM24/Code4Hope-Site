"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

// No need to define sponsors here as we'll use the global sponsors from utils.ts

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

  // Use the global sponsors defined in utils.ts
  const sponsors = globalThis.sponsors || []

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
              className="mx-4 flex-shrink-0"
            >
              <a 
                href={sponsor.devpostLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-canvas rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-32 w-56">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={100}
                    className={`object-contain max-h-20 ${sponsor.invertColors ? 'invert' : ''} ${sponsor.name === 'YRI Fellowship' ? 'scale-125' : ''}`}
                  />
                </div>
              </a>
            </div>
          ))}
          
          {/* Duplicated for continuous loop */}
          {sponsors.map((sponsor, index) => (
            <div 
              key={`sponsor-dup-${index}`}
              className="mx-4 flex-shrink-0"
            >
              <a 
                href={sponsor.devpostLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-canvas rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center h-32 w-56">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={100}
                    className={`object-contain max-h-20 ${sponsor.invertColors ? 'invert' : ''} ${sponsor.name === 'YRI Fellowship' ? 'scale-125' : ''}`}
                  />
                </div>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default SponsorCarousel