"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button"; // Assuming Button is in this path

// Icon components (UserIcon, TrophyIcon) - these should also be in a shared location or passed as props if they vary
// For simplicity, I'm including them here. Ideally, move them to a shared icons file.
function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
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
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
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
      {...props}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}


// Winner data structure - This should be defined where your data comes from,
// or in a shared types file. For this component, we expect `winners` prop to match this.
export interface Winner {
  id: number;
  name: string;
  projectName: string;
  event: string;
  year: string;
  awardName: string;
  description: string;
  image: string; // Can be string (URL/path) or StaticImageData
  devpostLink?: string;
}

// Helper to get number of items per slide based on screen width
const getItemsPerSlide = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 768) return 1; // Mobile
    if (window.innerWidth < 1024) return 2; // Tablet
    return 3; // Desktop
  }
  return 3; // Default for SSR or non-browser environments
};

interface WinnersSliderProps {
  winners: Winner[];
}

export default function WinnersSlider({ winners }: WinnersSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const [shake, setShake] = useState(false);
  const [direction, setDirection] = useState(0); // 0 for initial, 1 for next, -1 for prev

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust currentIndex if itemsPerSlide changes and currentIndex becomes out of bounds
   useEffect(() => {
    const numSlides = Math.ceil(winners.length / itemsPerSlide);
    if (currentIndex >= numSlides && numSlides > 0) {
      setCurrentIndex(numSlides - 1);
    } else if (numSlides === 0 && currentIndex !== 0) { // Handle case where winners array becomes empty
        setCurrentIndex(0);
    }
  }, [itemsPerSlide, winners.length, currentIndex]);


  const numSlides = Math.ceil(winners.length / itemsPerSlide);

  const nextSlide = () => {
    if (numSlides <= 1) return;
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === numSlides - 1 ? 0 : prevIndex + 1));
    setShake(true);
  };

  const prevSlide = () => {
    if (numSlides <= 1) return;
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? numSlides - 1 : prevIndex - 1));
    setShake(true);
  };

  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timer);
    }
  }, [shake]);

  const shakeVariants = {
    shake: {
      x: [0, -8, 8, -8, 8, 0],
      transition: { duration: 0.4 }
    },
    initial: { x: 0 }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    })
  };

  const startIndex = currentIndex * itemsPerSlide;
  const endIndex = startIndex + itemsPerSlide;
  const currentWinners = winners.slice(startIndex, endIndex);

  if (!winners || winners.length === 0) {
    return <p className="text-center text-slate py-8">No past winners to display at the moment.</p>;
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <button
        onClick={prevSlide}
        className="absolute left-[-15px] sm:left-[-25px] md:left-[-35px] top-1/2 transform -translate-y-1/2 z-20 hover:scale-110 transition-transform p-2 bg-card/50 hover:bg-card/80"
        aria-label="Previous winners"
        disabled={numSlides <= 1}
      >
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
      </button>

      <motion.div
        animate={shake ? "shake" : "initial"}
        variants={shakeVariants}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="py-6 md:py-8 px-2 sm:px-0"
          >
            <div className={`grid gap-6 sm:gap-8 ${
                itemsPerSlide === 1 ? 'grid-cols-1 max-w-sm mx-auto' : ''
              } ${
                itemsPerSlide === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto' : ''
              } ${
                itemsPerSlide === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : ''
              }`}
            >
              {currentWinners.map((winner) => (
                <div key={winner.id} className="h-full flex">
                  <div className="card rounded-xl overflow-hidden h-full shadow-lg bg-card flex flex-col w-full relative">
                    {winner.awardName && (
                      <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold py-1 px-3 m-2 rounded-full shadow-md z-10">
                        {winner.awardName}
                      </div>
                    )}
                    {winner.image && (
                      <div className="relative w-full h-48 flex-shrink-0">
                        <Image
                          src={winner.image}
                          alt={winner.projectName}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Basic sizes, adjust as needed
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found";
                          }}
                        />
                      </div>
                    )}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-black pt-1">{winner.projectName}</h3>
                      <p className="text-xs sm:text-sm font-medium text-slate">
                        <UserIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 inline-block flex-shrink-0" /> Team: {winner.name}
                      </p>
                      <p className="text-xs sm:text-sm text-slate">
                        <TrophyIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 inline-block flex-shrink-0" /> Event: {winner.event} ({winner.year})
                      </p>
                      <p className="text-slate text-sm sm:text-base mb-4 flex-grow line-clamp-3 sm:line-clamp-4">
                        {winner.description}
                      </p>
                      {winner.devpostLink && winner.devpostLink !== "#" && (
                         <motion.div
                           className="mt-auto pt-2"
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                         >
                          <Button
                            variant="outline"
                            className="w-full text-sm sm:text-base border-brand-blue-700 text-primary hover:bg-brand-blue-200"
                            onClick={() => window.open(winner.devpostLink, "_blank", "noopener,noreferrer")}
                          >
                            View Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <button
        onClick={nextSlide}
        className="absolute right-[-15px] sm:right-[-25px] md:right-[-35px] top-1/2 transform -translate-y-1/2 z-20 hover:scale-110 transition-transform p-2 bg-card/50 hover:bg-card/80"
        aria-label="Next winners"
        disabled={numSlides <= 1}
      >
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
      </button>

      {numSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: numSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (index === currentIndex) return; // Prevent re-triggering shake on same dot
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                setShake(true);
              }}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-5 sm:w-6' : 'bg-brand-blue-200 hover:bg-brand-blue-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
