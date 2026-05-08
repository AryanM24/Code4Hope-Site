"use client"

import type React from "react"

import { useState } from "react"

interface FlipCardProps {
  frontContent: React.ReactNode
  backContent: React.ReactNode
  className?: string
}

export default function FlipCard({ frontContent, backContent, className = "" }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const toggleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`relative w-full h-full min-h-[200px] cursor-pointer perspective ${className}`}
      onClick={toggleFlip}
    >
      <div className={`relative w-full h-full duration-700 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}>
        <div className="absolute w-full h-full backface-hidden bg-canvas">
          {frontContent}
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-brand-blue-700 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
          {backContent}
        </div>
      </div>
    </div>
  )
}

