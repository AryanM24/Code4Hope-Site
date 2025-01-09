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
        className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10"
        aria-label="Previous event"
      >
        <ChevronLeft className="h-8 w-8 text-[#826CB8]" />
      </button>

      <motion.div 
        className="border-2 border-[#826CB8] rounded-[32px] p-8"
        animate={shake ? "shake" : ""}
        variants={shakeVariants}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square w-full max-w-[400px] mx-auto">
            <Image
              src={events[currentIndex].logo}
              alt={`${events[currentIndex].name} logo`}
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">{events[currentIndex].name}</h3>
            <p className="text-gray-600">{events[currentIndex].description}</p>
            <Button 
              className="w-full bg-[#826CB8] hover:bg-[#6f5c9d] text-white"
              asChild
            >
              <a href={events[currentIndex].devpostLink} target="_blank" rel="noopener noreferrer">
                Devpost
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      <button 
        onClick={nextSlide}
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10"
        aria-label="Next event"
      >
        <ChevronRight className="h-8 w-8 text-[#826CB8]" />
      </button>
    </div>
  )
}

