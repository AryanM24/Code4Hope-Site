"use client"

import { motion } from "framer-motion"

type SectionHeadingProps = {
  title: string
  subtitle: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <motion.h2
        className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="h-1 w-20 bg-primary mb-6"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.p
        className="max-w-[600px] text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {subtitle}
      </motion.p>
    </div>
  )
}

