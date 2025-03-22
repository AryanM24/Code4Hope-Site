"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/ui/section-heading"
import SkillBar from "@/components/ui/skill-bar"

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const skills = [
    { skill: "Python", level: 95 },
    { skill: "JavaScript (ES6+)", level: 90 },
    { skill: "React & React Native", level: 85 },
    { skill: "Next.js", level: 80 },
    { skill: "Node.js", level: 75 },
    { skill: "Git & GitHub", level: 85 },
    { skill: "Firebase", level: 80 },
    { skill: "Google Cloud & AI APIs", level: 75 },
  ]

  return (
    <section ref={ref} id="about" className="py-20">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know more about me, my background, and what I do" />

        <div className="space-y-8">
          <motion.div
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold flex items-center mb-5">
              <span className="inline-block w-8 h-8 rounded-full bg-white text-black text-center leading-8 mr-3">
                👤
              </span>
              Who am I?
            </h3>
            <div className="space-y-4">
              <p className="text-white/70">
                I'm Aryan Mittal, a high school student passionate about computer science and finance. I'm the founder of
                Code4Hope, a non-profit that organizes hackathons for social change, and the creator of AidSnap, an AI-powered first aid app.
              </p>
              <p className="text-white/70">
                I specialize in AI/ML, full-stack development, and cloud computing. I enjoy working with technologies
                like Python, React, Firebase, and Google Cloud to build impactful applications.
              </p>
              <p className="text-white/70">
                When I'm not coding, I'm involved in clubs like FCCLA and MUN, exploring economic theories, or working on
                new projects that combine technology and social impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold flex items-center mb-5">
              <span className="inline-block w-8 h-8 rounded-full bg-white text-black text-center leading-8 mr-3">
                💻
              </span>
              My Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <SkillBar key={skill.skill} skill={skill.skill} level={skill.level} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold flex items-center mb-5">
              <span className="inline-block w-8 h-8 rounded-full bg-white text-black text-center leading-8 mr-3">
                🪪
              </span>
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center rounded-lg p-3 bg-white/5">
                <span className="text-white/60 mr-2">Email:</span>
                <span className="font-medium">aryan@code4hope.net</span>
              </div>
              <div className="flex items-center rounded-lg p-3 bg-white/5">
                <span className="text-white/60 mr-2">Location:</span>
                <span className="font-medium">New Jersey, USA</span>
              </div>
              <div className="flex items-center rounded-lg p-3 bg-white/5">
                <span className="text-white/60 mr-2">Languages:</span>
                <span className="font-medium">English, Spanish</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"
export default AboutSection
