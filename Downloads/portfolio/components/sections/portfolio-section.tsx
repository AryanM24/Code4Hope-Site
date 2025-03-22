"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"

const PortfolioSection = forwardRef<HTMLElement>((props, ref) => {
  const projects = [
    {
      title: "PatientNav",
      category: "Python Tkinter Application",
      image: "/placeholder.svg?height=300&width=400",
      description: "A project submitted to HackJPS'24 that utilizes Google Gemini AI to help people understand causes and severity of symptoms. This software can also be used in the hospital to store, lookup, or input patient data.",
      github: "https://github.com/AryanM24/PatientNav",
      demo: "https://devpost.com/software/symptom-checker-xutq9c"
    },
    {
      title: "AutoEmailer",
      category: "Google Apps Script",
      image: "/placeholder.svg?height=300&width=400",
      description: "An automatic emailer system using google apps script that sends emails to a list of recipients.",
      github: "https://github.com/AryanM24/AutoEmailer",
      demo: "https://youtu.be/3JGpUJh3iBc"
    },
    {
      title: "To Do List App",
      category: "Svelte Application",
      image: "/placeholder.svg?height=300&width=400",
      description: "Assignment for FRC Team 2554 Application. An editable to-do list app using Svelte. It allows users to add, remove, and manage tasks with priorities and due dates.",
      github: "https://github.com/AryanM24/SvelteToDoList",
      demo: "https://svelte-to-do-list-lac.vercel.app/"
    },
    {
      title: "College Major Quiz",
      category: "Python Streamlit Web Application",
      image: "/placeholder.svg?height=300&width=400",
      description: "Streamlit app that visualizes data about college majors and employment outcomes.",
      github: "https://github.com/AryanM24/AryanM-AP-CREATE-PT",
      demo: "https://rucooked.streamlit.app/"
    },
    {
      title: "Team 2554 Website Redesign",
      category: "React Website",
      image: "/placeholder.svg?height=300&width=400",
      description: "A responsive website for a restaurant with online reservation and menu browsing.",
      github: "https://github.com/AryanM24/Team-2554-Website_Redesign",
      demo: "https://team-2554-wesbite-redesign.vercel.app/"
    },
    {
      title: "Innovate&Elevate Website",
      category: "React Website",
      image: "/placeholder.svg?height=300&width=400",
      description: "A website for a entrepenuership non-profit.",
      github: "https://github.com/AryanM24/innovate-elevate",
      demo: "https://innovate-elevate.vercel.app/"
    },
    {
      title: "Recycled Relief Wesbite",
      category: "React Website",
      image: "/placeholder.svg?height=300&width=400",
      description: "Interactive website for an organization that helps the environment.",
      github: "https://github.com/AryanM24/recycled-relief",
      demo: "https://recycled-relief.vercel.app/"
    }
  ]

  return (
    <section ref={ref} id="portfolio" className="py-20">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading title="My Portfolio" subtitle="Check out some of my recent projects" />

        <motion.div
          className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold flex items-center mb-5">
            <span className="inline-block w-8 h-8 rounded-full bg-white text-black text-center leading-8 mr-3">
              💼
            </span>
            Projects
          </h3>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay that appears on hover */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 rounded-t-2xl">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
                      >
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub Repository</span>
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
                      >
                        <ExternalLink className="h-6 w-6" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 inline-block w-fit mb-2">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-white/70 text-sm flex-grow">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

PortfolioSection.displayName = "PortfolioSection"
export default PortfolioSection

