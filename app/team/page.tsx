"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TeamMemberCard } from "@/components/team-member-card"
import { JoinSection } from "@/components/join-section"
import Footer from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion";

export default function TeamPage() {
  const executiveBoard = [
    {
      name: "Aryan Mittal",
      title: "Founder & Executive Director",
      image: "https://docs.code4hope.net/img/team-1.jpg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Krish Tated",
      title: "Executive Director of Outreach",
      image: "https://docs.code4hope.net/img/team-2.jpg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Maira Batra",
      title: "Executive Director of Marketing",
      image: "https://docs.code4hope.net/img/team-3.jpg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Ranya Chaudhary",
      title: "Executive Event Director",
      image: "https://docs.code4hope.net/img/team-4.jpg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    }
  ]

  const generalTeam = [
    {
      name: "Amogh Sheth",
      title: "Event Director",
      image: "https://docs.code4hope.net/img/team-5.jpg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Anvita Somisetty",
      title: "Merch Designer",
      image: "/placeholder.svg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Aryan Varshney",
      title: "Outreach Director",
      image: "https://myainak.org/wp-content/uploads/2024/08/aryan.png",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Aakansha Sharma",
      title: "Outreach Director and Head of Legal Operations",
      image: "/team5.JPG",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    }
  ]

  const operationsTeam = [
    {
      name: "Shlok Patel",
      title: "Operations Director",
      image: "https://docs.code4hope.net/img/team-6.jpg",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    },
    {
      name: "Malay Patel",
      title: "Operations Director",
      image: "https://avatars.githubusercontent.com/u/56907997?v=4",
      socials: {
        linkedin: "https://www.linkedin.com/in/malay-patel-dev/",
        instagram: "https://instagram.com/malayyy.p",
        tiktok: "#",
      }
    },
    {
      name: "Gong Ming",
      title: "Operations Director",
      image: "https://avatars.githubusercontent.com/u/137864516?v=4",
      socials: {
        linkedin: "#",
        instagram: "#",
        tiktok: "#"
      }
    }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  // Common layout for all team sections - switching from grid to flex for better centering
  const teamLayoutClass = "flex flex-wrap justify-center gap-4 sm:gap-6";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Parallax Hero Section */}
        <section className="py-16 bg-background dark:bg-[#262626]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">Our Team</h1>
            <p className="text-muted-foreground">
            Meet the dedicated team behind Code4Hope! We are a group of passionate individuals committed to driving social change through technology and innovation.
            </p>
          </motion.div>
        </section>
        
        <ScrollReveal>
          <section className="py-8 md:py-12 bg-background dark:bg-[#262626]">
            <div className="container mx-auto px-4">
              <motion.div 
                className="mb-8 text-center"
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">The Executive Board</h2>
                <div className="w-16 h-0.5 bg-primary/50 my-3 mx-auto" />
                <p className="text-muted-foreground">Our 2024-2025 Code4Hope Executive Board</p>
              </motion.div>
              <motion.div 
                className={teamLayoutClass}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {executiveBoard.map((member, index) => (
                  <motion.div key={member.name} variants={itemVariants} custom={index} className="w-[160px] sm:w-[180px] md:w-[200px]">
                    <TeamMemberCard {...member} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <motion.div 
                className="mb-8 text-center"
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">General Team</h2>
                <div className="w-16 h-0.5 bg-primary/50 my-3 mx-auto" />
                <p className="text-muted-foreground">Our dedicated event organizers and creative minds</p>
              </motion.div>
              <motion.div 
                className={teamLayoutClass}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.08 }}
              >
                {generalTeam.map((member, index) => (
                  <motion.div key={member.name} variants={itemVariants} custom={index} className="w-[160px] sm:w-[180px] md:w-[200px]">
                    <TeamMemberCard {...member} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-8 md:py-12 bg-background dark:bg-[#262626]">
            <div className="container mx-auto px-4">
              <motion.div 
                className="mb-8 text-center"
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">Operations Team</h2>
                <div className="w-16 h-0.5 bg-primary/50 my-3 mx-auto" />
                <p className="text-muted-foreground">The backbone of our technical infrastructure</p>
              </motion.div>
              <motion.div 
                className={teamLayoutClass}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {operationsTeam.map((member, index) => (
                  <motion.div key={member.name} variants={itemVariants} custom={index} className="w-[160px] sm:w-[180px] md:w-[200px]">
                    <TeamMemberCard {...member} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-12 bg-gradient-to-b from-primary/20 to-background dark:to-[#262626]">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <JoinSection />
              </motion.div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  )
}
