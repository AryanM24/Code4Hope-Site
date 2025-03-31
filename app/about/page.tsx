"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { useState, useRef } from "react"
import { ArrowRightIcon, Laptop, Users, ArrowRight, Award, Globe, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission")
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  })

  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const background = useTransform(scaleProgress, [0, 1], ["rgba(var(--primary) / 0)", "rgba(var(--primary) / 0.2)"])

  const timelineEvents = [
    {
      date: "August 2024",
      title: "Code4Hope Founded",
      description: "Established brand by designing logo art, finalizing the name, and outlining initial goals.",
      icon: <Users className="w-5 h-5" />,
      color: "bg-primary",
    },
    {
      date: "September 2024",
      title: "Building the Community",
      description:
        "Launched Discord server and introduced Code4Hope to the public. Began planning the first hackathon.",
      icon: <Globe className="w-5 h-5" />,
      color: "bg-primary",
    },
    {
      date: "October 2024",
      title: "Outreach & Team Growth",
      description:
        "Expanded outreach efforts and onboarded key executive board members for event planning and operations.",
      icon: <Users className="w-5 h-5" />,
      color: "bg-primary",
    },
    {
      date: "November 2024",
      title: "Hackathon Preparation",
      description:
        "Finalized event logistics, opened participant registration, and coordinated with sponsors and judges.",
      icon: <Settings className="w-5 h-5" />,
      color: "bg-primary",
    },
    {
      date: "December 2024",
      title: "ImpactX Hackathon",
      description:
        "Hosted the first hackathon with workshops, judging, and prizes, marking a major milestone for Code4Hope.",
      icon: <Award className="w-5 h-5" />,
      color: "bg-primary",
    },
    {
      date: "Early 2025",
      title: "Expanding Operations",
      description: "Established a new operations subteam to improve event management and streamline workflows.",
      icon: <Settings className="w-5 h-5" />,
      color: "bg-primary",
    },
    {
      date: "Spring 2025",
      title: "Tech Development Begins",
      description: "Started work on the Code4Hope Dashboard app to enhance participant and team experiences.",
      icon: <Laptop className="w-5 h-5" />,
      color: "bg-primary",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen" ref={scrollRef}>
      {/* Parallax Hero Section */}
      <section className="py-16 bg-background dark:bg-[#262626]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">About Us</h1>
          <p className="text-muted-foreground">
            Uniting technology and creativity to drive social change and empower the next generation of innovators.
          </p>
        </motion.div>
      </section>

      {/* Tabbed Mission Section */}
      <section id="mission" className="py-20 relative bg-background dark:bg-[#262626]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
                  Our vision for <span className="text-primary">technology</span> and{" "}
                  <span className="text-primary">social good</span>
                </h2>

                <div className="flex flex-col gap-2 mb-8">
                  <button
                    onClick={() => setActiveTab("mission")}
                    className={cn(
                      "text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center",
                      activeTab === "mission"
                        ? "bg-primary/10 font-medium text-primary"
                        : "hover:bg-muted dark:hover:bg-[#333333] text-foreground",
                    )}
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full mr-3 transition-all duration-300",
                        activeTab === "mission" ? "bg-primary" : "bg-muted dark:bg-[#444444]",
                      )}
                    />
                    Mission Statement
                  </button>

                  <button
                    onClick={() => setActiveTab("who")}
                    className={cn(
                      "text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center",
                      activeTab === "who"
                        ? "bg-primary/10 font-medium text-primary"
                        : "hover:bg-muted dark:hover:bg-[#333333] text-foreground",
                    )}
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full mr-3 transition-all duration-300",
                        activeTab === "who" ? "bg-primary" : "bg-muted dark:bg-[#444444]",
                      )}
                    />
                    Who We Are
                  </button>

                  <button
                    onClick={() => setActiveTab("what")}
                    className={cn(
                      "text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center",
                      activeTab === "what"
                        ? "bg-primary/10 font-medium text-primary"
                        : "hover:bg-muted dark:hover:bg-[#333333] text-foreground",
                    )}
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full mr-3 transition-all duration-300",
                        activeTab === "what" ? "bg-primary" : "bg-muted dark:bg-[#444444]",
                      )}
                    />
                    What We Do
                  </button>

                  <button
                    onClick={() => setActiveTab("outreach")}
                    className={cn(
                      "text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center",
                      activeTab === "outreach"
                        ? "bg-primary/10 font-medium text-primary"
                        : "hover:bg-muted dark:hover:bg-[#333333] text-foreground",
                    )}
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full mr-3 transition-all duration-300",
                        activeTab === "outreach" ? "bg-primary" : "bg-muted dark:bg-[#444444]",
                      )}
                    />
                    Outreach
                  </button>

                  <button
                    onClick={() => setActiveTab("operations")}
                    className={cn(
                      "text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center",
                      activeTab === "operations"
                        ? "bg-primary/10 font-medium text-primary"
                        : "hover:bg-muted dark:hover:bg-[#333333] text-foreground",
                    )}
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full mr-3 transition-all duration-300",
                        activeTab === "operations" ? "bg-primary" : "bg-muted dark:bg-[#444444]",
                      )}
                    />
                    Operations
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="md:w-1/2">
              {activeTab === "mission" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card dark:bg-[#333333] p-8 rounded-2xl shadow-xl"
                >
                  <div className="mb-6 h-1 w-12 bg-primary"></div>
                  <h3 className="text-2xl font-bold mb-6 text-card-foreground">Our Mission Statement</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Code4Hope is a not-for-profit organization dedicated to empowering students to leverage technology
                    for social good. Our mission is to unite technology and creativity to drive social change, fostering
                    a global community of young innovators addressing real-world challenges.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Through our regular hackathons, we create opportunities for students to develop their skills while
                    making a meaningful impact.
                  </p>
                  <div className="aspect-video relative rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Students collaborating at a hackathon"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === "who" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card dark:bg-[#333333] p-8 rounded-2xl shadow-xl"
                >
                  <div className="mb-6 h-1 w-12 bg-primary"></div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-6">Who We Are</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Code4Hope is a not-for-profit organization dedicated to empowering students to leverage technology
                    for social good. We are a community of passionate students, educators, and technology enthusiasts
                    who believe in the power of innovation to address real-world challenges.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our team consists of dedicated volunteers who organize hackathons, develop educational resources,
                    and build connections between students and charitable organizations. We believe that by fostering a
                    collaborative environment, we can inspire the next generation of technologists to create solutions
                    that make a positive impact on society.
                  </p>
                  <div className="aspect-video relative rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Code4Hope team members"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === "what" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card dark:bg-[#333333] p-8 rounded-2xl shadow-xl"
                >
                  <div className="mb-6 h-1 w-12 bg-primary"></div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-6">What We Do</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Through our regular hackathons, we create opportunities for students to develop their technical
                    skills while making a meaningful impact on society. Our events bring together participants from
                    diverse backgrounds to collaborate on projects that address real challenges faced by charitable
                    organizations and communities.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We provide mentorship, resources, and a supportive environment that encourages innovation and
                    creativity. By connecting students with non-profit organizations, we enable them to apply their
                    technical knowledge to create practical solutions that drive positive change.
                  </p>
                  <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Students working on hackathon projects"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                  >
                    Learn more about our hackathons
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              )}

              {activeTab === "outreach" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card dark:bg-[#333333] p-8 rounded-2xl shadow-xl"
                >
                  <div className="mb-6 h-1 w-12 bg-primary"></div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-6">Outreach</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our outreach initiatives focus on connecting with students, educational institutions, and charitable
                    organizations worldwide. We believe in the power of technology to create positive change, and
                    through our programs, we encourage students to apply their skills to solve real-world problems.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our community extends beyond hackathons, creating lasting connections and opportunities for
                    continued learning and impact. We organize workshops, webinars, and networking events that bring
                    together students, mentors, and industry professionals to share knowledge and inspire innovation.
                  </p>
                  <div className="aspect-video relative rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Code4Hope outreach event"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === "operations" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card dark:bg-[#333333] p-8 rounded-2xl shadow-xl"
                >
                  <div className="mb-6 h-1 w-12 bg-primary"></div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-6">Operations</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The Operations team is the backbone of Code4Hope's technical infrastructure. This dedicated subteam
                    manages web development, ensures seamless hackathon experiences, and implements automation solutions
                    to streamline our organization's processes.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    From maintaining our digital presence to developing innovative tools for outreach projects, the
                    Operations team plays a crucial role in advancing our mission. They work behind the scenes to create
                    platforms that facilitate collaboration, track project progress, and showcase the impact of our
                    community's work.
                  </p>
                  <div className="aspect-video relative rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Operations team working on technical infrastructure"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-muted dark:bg-[#262626]">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From concept to impact, see how Code4Hope has grown.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

              {/* Timeline events */}
              <div className="space-y-16">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary z-10"></div>

                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                      <div className="bg-card dark:bg-[#333333] p-6 rounded-xl shadow-md">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                          {event.date}
                        </span>
                        <h3 className="text-xl font-bold text-card-foreground mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>

                    {/* Empty space for the other side */}
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="py-20 bg-gradient-to-b from-primary/20 to-background dark:to-[#262626]"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Join Our Mission</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Together, we can harness the power of technology to create positive social change and empower the next
            generation of innovators.
          </p>
          <motion.a
            href="/get-involved"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-primary hover:bg-primary/80 text-primary-foreground font-medium py-3 px-6 rounded-full shadow-md transition-colors duration-300"
          >
            Get Involved
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </div>
      </motion.section>
    </main>
  )
}

