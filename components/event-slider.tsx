'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

interface Event {
  name: string
  description: string
  logo: string
  devpostLink: string
}

interface EventSliderProps {
  events: Event[]
}

export function EventSlider({ events }: EventSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [shake, setShake] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    )
    setShake(true)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    )
    setShake(true)
  }

  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => setShake(false), 500)
      return () => clearTimeout(timer)
    }
  }, [shake])

  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8">
      <button 
        onClick={prevSlide}
        className="absolute left-[-30px] md:left-[-40px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-transform"
        aria-label="Previous event"
      >
        <ChevronLeft className="h-8 w-8 text-primary" />
      </button>

      <motion.div 
        className="border border-primary/30 bg-card rounded-2xl p-6 md:p-8 shadow-lg"
        animate={shake ? "shake" : ""}
        variants={shakeVariants}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square w-full max-w-[400px] mx-auto bg-white/10 p-4 rounded-xl">
            <Image
              src={events[currentIndex].logo}
              alt={`${events[currentIndex].name} logo`}
              width={400}
              height={400}
              className="w-full h-full object-contain transition-opacity duration-300"
            />
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">{events[currentIndex].name}</h3>
            <p className="text-card-foreground/80 text-base md:text-lg">{events[currentIndex].description}</p>
            <Button 
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground transition-all duration-300"
              asChild
              size="lg"
            >
              <a href={events[currentIndex].devpostLink} target="_blank" rel="noopener noreferrer">
                See more...
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      <button 
        onClick={nextSlide}
        className="absolute right-[-30px] md:right-[-40px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-transform"
        aria-label="Next event"
      >
        <ChevronRight className="h-8 w-8 text-primary" />
      </button>

      {/* Slide indicator dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}