"use client";

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useAnimation, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react"
import ImageComparisonSlider from "@/components/image-comparison-slider"
import ScrollingNewsTicker from "@/components/scrolling-ticker"
import LocationMap from "@/components/location-map"
import { ScrollReveal } from "@/components/scroll-reveal"
import Footer from "@/components/footer"
import SponsorCarousel from "../components/sponsor-carousel"

// Import images
import hero_image from "@/public/placeholder.svg" // Replace with your actual image paths
import blog1 from "@/public/1.jpg"
import blog2 from "@/public/2.jpg"
import blog3 from "@/public/3.jpg"
import impactX from "@/public/ImpactX (1).png"
import c4h2025 from "@/public/c4h2025.png"

// Import icons
function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function DiscordIcon(props) {
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
      <path d="M18 6c-1.07-.95-2.47-1.65-4-2.05M6 6c1.07-.95 2.47-1.65 4-2.05M12 2v2M8.5 7C7.67 7 7 7.67 7 8.5S7.67 10 8.5 10 10 9.33 10 8.5 9.33 7 8.5 7m7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 9.33 17 8.5 16.33 7 15.5 7m-3.5 5c-2 0-5 1-5 4v1h10v-1c0-3-3-4-5-4" />
    </svg>
  )
}

function TiktokIcon(props) {
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
      <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z" />
      <path d="M10 12a3 3 0 1 1-3 3V6c.333 1 1.6 3 4 3" />
    </svg>
  )
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  )
}

function LocationIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function UserIcon(props) {
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
  )
}

export default function Home() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && message) {
      setContactSubmitted(true)
      setEmail("")
      setMessage("")
    }
  }

  // Gallery images
  const galleryImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Code Club Session",
      caption: "Students learning Python at our weekly after-school program",
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "Computer Distribution",
      caption: "Providing refurbished computers to students without technology at home",
    },
    {
      src: "/placeholder.svg?height=350&width=350",
      alt: "Summer Code Camp",
      caption: "Intensive coding education during our summer programs",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Community Hackathon",
      caption: "Students collaborating to solve real-world problems with code",
    },
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background dark:bg-[#262626]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ScrollReveal>
        <section className="w-full py-24 md:py-32 lg:py-40 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=1080&width=1920"
              alt="Students coding together"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              className="flex flex-col items-center space-y-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Code4Hope
              </motion.h1>
              <motion.p 
                className="mx-auto max-w-[700px] text-lg md:text-xl pt-2 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                A not-for-profit organization that hosts hackathons throughout the year, empowering students to innovate and make an impact for charitable causes.
              </motion.p>
              <motion.div 
                className="space-x-2 sm:space-x-6 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.div 
                  className="inline-block mb-2 sm:mb-0"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-primary hover:bg-primary/90 text-white px-5 sm:px-8 py-5 sm:py-6 text-base sm:text-lg" onClick={() => window.open("/about", "_self")}>
                    Learn More
                  </Button>
                </motion.div>
                <motion.div 
                  className="inline-block"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-white text-primary hover:bg-white/90 px-5 sm:px-8 py-5 sm:py-6 text-base sm:text-lg" onClick={() => window.open("/events", "_self")}>
                    Get Involved
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* About Section - Revised Layout */}
      <ScrollReveal>
        <section id="about" className="w-full py-16 md:py-20 lg:py-24 bg-background dark:bg-[#262626]">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">Our Story</h2>
              <p className="text-muted-foreground dark:text-gray-300 text-lg">
                Uniting technology and creativity to drive social change and empower the next generation of innovators.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              <motion.div 
                className="lg:col-span-7 space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="h-1 w-12 bg-primary mb-6"></div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground dark:text-white leading-tight">
                    Empowering students to create technology <span className="text-primary">with purpose</span>
                  </h3>
                  <p className="text-muted-foreground dark:text-gray-300 text-lg leading-relaxed mb-6">
                    Code4Hope is a not-for-profit organization dedicated to empowering students to leverage technology for social good. Our mission is to unite technology and creativity to drive social change, fostering a global community of young innovators addressing real-world challenges.
                  </p>
                  <p className="text-muted-foreground dark:text-gray-300 text-lg leading-relaxed">
                    Through our regular hackathons, we create opportunities for students to develop their skills while making a meaningful impact for charitable causes. We believe in the power of young minds to shape a better future through code.
                  </p>
                </div>
                
                <motion.div 
                  className="pt-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white" 
                    onClick={() => window.open("/about", "_self")}
                  >
                    Learn more about our journey
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
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-5 space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-8 rounded-xl bg-card dark:bg-[#333333] shadow-sm">
                  <h4 className="font-bold text-xl mb-4 text-foreground dark:text-white">Our Vision</h4>
                  <p className="text-muted-foreground dark:text-gray-300 text-lg leading-relaxed">
                    A world where technology is created with compassion and purpose, solving our most pressing social challenges.
                  </p>
                </div>
                
                <div className="p-8 rounded-xl bg-card dark:bg-[#333333] shadow-sm">
                  <h4 className="font-bold text-xl mb-4 text-foreground dark:text-white">Our Impact</h4>
                  <p className="text-muted-foreground dark:text-gray-300 text-lg leading-relaxed">
                    Thousands of students connected, hundreds of projects created, and dozens of charitable causes supported through innovative hackathons and events.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sponsors Section */}
      <ScrollReveal>
        <section id="sponsors" className="w-full py-12 md:py-16 lg:py-20 bg-background dark:bg-[#262626]">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-4"
            >
              <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-white">Our Sponsors</h2>
              <p className="text-muted-foreground dark:text-gray-300">
                We're grateful to partner with these amazing organizations who make our hackathons possible.
              </p>
            </motion.div>

            <div className="text-center mb-4">
              <Button variant="outline" className="rounded-full" onClick={() => window.open("/sponsors", "_self")}>
                View All Sponsors
              </Button>
            </div>

            <SponsorCarousel />
          </div>
        </section>
      </ScrollReveal>

      {/* Events Section */}
      <ScrollReveal>
        <section id="events" className="w-full py-12 md:py-16 lg:py-20 bg-muted dark:bg-[#262626]">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-white">Upcoming Events</h2>
              <p className="text-muted-foreground dark:text-gray-300">
                Throughout the year, we host multiple hackathons, each focusing on a different technology trend
                that supports charitable causes.
              </p>
              <Button variant="outline" className="rounded-full mt-4" onClick={() => window.open("/events", "_self")}>
                View All Events
              </Button>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
              {[
                {
                  image: c4h2025,
                  title: "Code4Hope '25",
                  date: "July 10, 2025",
                  location: "Times Square, New York City, NY",
                  description: "Code4Hope 2025 is our first in-person-only hackathon, uniting high school innovators to tackle real-world challenges in sustainability, health, education, and finance.",
                  link: "https://c4h2025.devpost.com/"
                },
                {
                  image: impactX,
                  title: "ImpactX '25",
                  date: "Dec 7-9, 2025",
                  location: "Virtual Event",
                  description: "Projects for a better world by solving real-world problems—whether they be health, wellness, and education—where your ideas today shape a brighter, more sustainable tomorrow.",
                  link: "/"
                }
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col h-full"
                >
                  <div className="card rounded-xl overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card dark:bg-[#333333]">
                    <div className="relative">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={600}
                          height={340}
                          className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {event.date}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2 text-foreground dark:text-white">{event.title}</h3>
                      <div className="flex items-center text-muted-foreground dark:text-gray-300 mb-4">
                        <LocationIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <p className="text-muted-foreground dark:text-gray-300 mb-6 line-clamp-3">
                        {event.description}
                      </p>
                      <div className="mt-auto pt-4 flex">
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full"
                        >
                          <Button 
                            className="w-full bg-primary hover:bg-primary/90 text-white" 
                            onClick={() => window.open(event.link, "_self")}
                          >
                            Register Now
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Workshops Section */}
      <ScrollReveal>
        <section id="workshops" className="w-full py-12 md:py-16 lg:py-20 bg-background dark:bg-[#262626]">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-white">Recent Workshops</h2>
              <p className="text-muted-foreground dark:text-gray-300">
                Learn from industry professionals through our workshop recordings. These sessions from our past hackathons
                provide valuable insights and skills for aspiring developers.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              {[
                {
                  image: blog1,
                  title: "Build Your Best Projects Faster with Refact.ai",
                  presenter: "Refact AI @ ImpactX"
                },
                {
                  image: blog2,
                  title: "Unleashing the Power of Data and AI",
                  presenter: "Rajesh Mittal, PrismView EHS @ ImpactX"
                },
                {
                  image: blog3,
                  title: "Ignite Your Journey to Entrepreneurship",
                  presenter: "Prachi Kuradi @ ImpactX"
                }
              ].map((workshop, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <div className="card rounded-xl overflow-hidden h-full hover:shadow-xl transition-shadow duration-300 bg-card dark:bg-[#333333]">
                    <div className="relative">
                      <Image
                        src={workshop.image}
                        alt={workshop.title}
                        width={400}
                        height={225}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-2xl font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors text-foreground dark:text-white">
                        {workshop.title}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4 flex items-center">
                        <UserIcon className="h-4 w-4 mr-1 inline" />
                        {workshop.presenter}
                      </p>
                      <motion.div 
                        whileHover={{ scale: 1.03 }} 
                        whileTap={{ scale: 0.97 }}
                        className="mt-auto"
                      >
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white text-sm py-1">
                          Watch Now
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Photo Gallery */}
      <ScrollReveal>
        <section className="py-16 bg-muted dark:bg-[#262626]">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-white">Our Impact in Pictures</h2>
              <p className="text-muted-foreground dark:text-gray-300">Glimpses of our work and the students we serve</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="relative overflow-hidden rounded-lg shadow-md group"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {image.alt}
                      </h3>
                      <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/gallery">See Full Gallery</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Social Media Section */}
      <ScrollReveal>
        <section className="w-full py-16 md:py-20 lg:py-24 bg-background dark:bg-[#262626]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="card rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 p-8 md:p-12 bg-primary">
                  <div className="h-full flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                      Connect With Our Community
                    </h2>
                    <p className="text-white/90 text-lg mb-8 leading-relaxed">
                      Stay connected for real-time updates, announcements, and behind-the-scenes content from our hackathons and workshops.
                    </p>
                    <div className="mt-auto">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          className="bg-white text-primary hover:bg-gray-100 px-6"
                          onClick={() => window.open("https://discord.gg/7ssCZx8Hme", "_blank")}
                        >
                          Join Discord
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 p-8 md:p-12 bg-card dark:bg-[#333333] flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground dark:text-white">
                    Follow Us On Social Media
                  </h3>
                  <p className="text-muted-foreground dark:text-gray-300 mb-8">
                    We post regularly on our social channels with event updates, tech tips, and success stories from our community.
                  </p>
                  
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {[
                      { href: "https://www.instagram.com/code4hope_/?hl=en", icon: <InstagramIcon className="h-6 w-6" />, label: "Instagram" },
                      { href: "https://discord.gg/7ssCZx8Hme", icon: <DiscordIcon className="h-6 w-6" />, label: "Discord" },
                      { href: "https://www.tiktok.com/@code4hopeofficial", icon: <TiktokIcon className="h-6 w-6" />, label: "TikTok" },
                      { href: "https://x.com/code4hope_", icon: <TwitterIcon className="h-6 w-6" />, label: "Twitter" },
                      { href: "https://github.com/Code4Hope", icon: <GithubIcon className="h-6 w-6" />, label: "GitHub" },
                      { href: "https://linkedin.com/company/code4hope", icon: <LinkedinIcon className="h-6 w-6" />, label: "LinkedIn" }
                    ].map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ 
                          scale: 1.1,
                          y: -5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Link
                          href={social.href}
                          className="flex flex-col items-center justify-center p-3 rounded-lg border border-border dark:border-gray-700 hover:border-primary hover:text-primary transition-all duration-300 text-foreground dark:text-gray-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.icon}
                          <span className="text-xs mt-2 hidden sm:block">{social.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}

