"use client"

import { forwardRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"
import ContactItem from "@/components/ui/contact-item"

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="contact" className="py-20">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Feel free to contact me for any project or collaboration" />

        <motion.div
          className="space-y-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have
            other requests or questions, don't hesitate to contact me using the information below.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <ContactItem icon={MapPin} title="Location" value="Edison, NJ" />

            <ContactItem icon={Mail} title="Email" value="aryan.raj.mittal@gmail.com" />

            <ContactItem icon={Phone} title="Phone" value="(732) 609-3389" />
          </div>

        </motion.div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
export default ContactSection

