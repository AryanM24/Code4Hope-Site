'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export interface Winner {
  id: number
  name: string
  projectName: string
  event: string
  year: string
  awardName: string
  description: string
  image: string
  devpostLink?: string
}

interface WinnersSliderProps {
  winners: Winner[]
}

export function WinnersSliderClean({ winners }: WinnersSliderProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [shake, setShake] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const itemsPerSlide = isMobile ? 1 : 3
  const totalSlides = Math.ceil(winners.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    )
    setShake(true)
  }

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
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

  if (!winners || winners.length === 0) {
    return <p className="text-center text-gray-600 py-8">No past winners to display at the moment.</p>
  }

  const startIndex = currentSlideIndex * itemsPerSlide
  const currentWinners = winners.slice(startIndex, startIndex + itemsPerSlide)

  return (
    <div className="relative w-full max-w-7xl mx-auto my-8">
      <button 
        onClick={prevSlide}
        className="absolute left-[-30px] md:left-[-40px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-transform"
        aria-label="Previous winners"
        disabled={totalSlides <= 1}
      >
        <ChevronLeft className="h-8 w-8 text-primary" />
      </button>

      <motion.div 
        animate={shake ? "shake" : ""}
        variants={shakeVariants}
        className="w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentWinners.map((winner) => (
            <div key={winner.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="aspect-[4/3] w-full bg-gray-50 rounded-lg relative overflow-hidden mb-4">
                {winner.image ? (
                  <Image
                    src={winner.image}
                    alt={`${winner.projectName} project image`}
                    fill
                    className="object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://placehold.co/300x225/CCCCCC/FFFFFF?text=Project+Image";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Project Image</span>
                  </div>
                )}
                {winner.awardName && (
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold py-1 px-2 rounded-full shadow-md">
                    {winner.awardName}
                  </div>
                )}
              </div>
              
              <div className="flex-grow space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {winner.projectName}
                  </h3>
                  <p className="text-xs text-gray-600 mb-1">
                    <strong>Team:</strong> {winner.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Event:</strong> {winner.event} ({winner.year})
                  </p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow">
                  {winner.description}
                </p>
                
                <div className="pt-2">
                  {winner.devpostLink && winner.devpostLink !== "#" ? (
                    <Button 
                      className="w-full bg-primary hover:bg-primary/80 text-primary-foreground transition-all duration-300"
                      size="sm"
                      asChild
                    >
                      <a href={winner.devpostLink} target="_blank" rel="noopener noreferrer">
                        View Project →
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      className="w-full bg-gray-100 text-gray-600 cursor-not-allowed"
                      size="sm"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <button 
        onClick={nextSlide}
        className="absolute right-[-30px] md:right-[-40px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-transform"
        aria-label="Next winners"
        disabled={totalSlides <= 1}
      >
        <ChevronRight className="h-8 w-8 text-primary" />
      </button>

      {/* Slide indicator dots */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlideIndex(index)
                setShake(true)
              }}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentSlideIndex ? 'bg-primary w-6' : 'bg-primary/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
