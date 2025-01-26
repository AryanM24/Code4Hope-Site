'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

interface Sponsor {
  name: string
  description: string
  logo: string
  devpostLink: string
}

interface SponsorSliderProps {
  sponsors: Sponsor[]
  multiImage: boolean
}

export function SponsorSlider({ sponsors, multiImage }: SponsorSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [shake, setShake] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1
    )
    setShake(true)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sponsors.length - 1 : prevIndex - 1
    )
    setShake(true)
  }

  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => setShake(false), 500)
      return () => clearTimeout(timer)
    }
  }, [shake])

  const getImages = (add:boolean, amount:number) =>  {
    console.log("hahaha")
    if (add ? currentIndex + amount > sponsors.length : currentIndex - amount < 0) {
      if (add) {
        return currentIndex + amount - sponsors.length
      } else {
        return currentIndex - amount + sponsors.length
      }
    } else {
      return add ? currentIndex +amount : currentIndex -amount
    }
  }

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
        aria-label="Previous sponsor"
      >
        <ChevronLeft className="h-8 w-8 text-[#826CB8]" />
      </button>

      <motion.div 
        className="border-2 border-[#826CB8] rounded-[32px] p-8 shadow-md"
        animate={shake ? "shake" : ""}
        variants={shakeVariants}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square w-full max-w-[400px] mx-auto">
            {multiImage ? <div>
              <Image
                  src={sponsors[getImages(false, 1)].logo}
                  alt={`${sponsors[getImages(false, 1)].name} logo`}
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
              />
              <Image
                  src={sponsors[currentIndex].logo}
                  alt={`${sponsors[currentIndex].name} logo`}
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
              /><Image
                src={sponsors[getImages(true, 1)].logo}
                alt={`${sponsors[getImages(true, 1)].name} logo`}
                width={400}
                height={400}
                className="w-full h-full object-contain"
            /><Image
                src={sponsors[getImages(true, 2)].logo}
                alt={`${sponsors[getImages(true, 2)].name} logo`}
                width={400}
                height={400}
                className="w-full h-full object-contain"
            />
            </div> : <Image
                src={sponsors[currentIndex].logo}
                alt={`${sponsors[currentIndex].name} logo`}
                width={400}
                height={400}
                className="w-full h-full object-contain"
            />}
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">{sponsors[currentIndex].name}</h3>
            <p className="text-gray-600">{sponsors[currentIndex].description}</p>
            <Button 
              className="w-full bg-[#826CB8] hover:bg-[#6f5c9d] text-white"
              asChild
            >
              <a href={sponsors[currentIndex].devpostLink} target="_blank" rel="noopener noreferrer">
                See more...
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      <button 
        onClick={nextSlide}
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10"
        aria-label="Next sponsor"
      >
        <ChevronRight className="h-8 w-8 text-[#826CB8]" />
      </button>
    </div>
  )
}

