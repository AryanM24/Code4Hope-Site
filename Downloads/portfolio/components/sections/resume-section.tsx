"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"
import TimelineItem from "@/components/ui/timeline-item"

const ResumeSection = forwardRef<HTMLElement>((props, ref) => {
  const education = [
    {
      degree: "John P. Stevens High School",
      school: "JPS Robotics, FCCLA, Hawks of Wall Street",
      years: "2024 - 2028",
      description: "Currently a freshman at John P. Stevens High School. Participating in various clubs and activities.",
    }
  ]

  const experience = [
    {
      position: "Founder and Exec. Director",
      company: "Code4Hope",
      years: "2024 - Present",
      description:
        "Founded a 501(c)(3) nonprofit organization to provide computer science education to underprivileged students. Host multiple annual hackathons.",
    },
    {
      position: "Founder and Tutor",
      company: "The Python Lab",
      years: "2024 - Present",
      description:
        "Founded a tutoring service to teach Python programming to students of all ages. Provide personalized lessons and mentorship.",
    },
    {
      position: "Operations and Operations Programming",
      company: "Warhawks Team 2554 (JPS Robotics)",
      years: "2025 - present",
      description:
        "Emailed sponsors, applied to grants, and assisted the team during competitions through development/management of pitch and match scouting technologies. Developed the new website and various apps for the teams use and convenience during the build process.",
    },
  ]

  return (
    <section ref={ref} id="resume" className="py-20">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading title="My Resume" subtitle="My education and work experience" />

        <div className="space-y-8">
          {/* Education */}
          <motion.div
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold flex items-center mb-5">
              <span className="inline-block w-8 h-8 rounded-full bg-white text-black text-center leading-8 mr-3">
                🎓
              </span>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  title={edu.degree}
                  subtitle={edu.school}
                  period={edu.years}
                  description={edu.description}
                />
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold flex items-center mb-5">
              <span className="inline-block w-8 h-8 rounded-full bg-white text-black text-center leading-8 mr-3">
                💼
              </span>
              Experience
            </h3>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.position}
                  subtitle={exp.company}
                  period={exp.years}
                  description={exp.description}
                />
              ))}
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            className="flex justify-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              className="rounded-full h-12 px-6 bg-white text-black hover:bg-white/90 hover:shadow-glow-white transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

ResumeSection.displayName = "ResumeSection"
export default ResumeSection

