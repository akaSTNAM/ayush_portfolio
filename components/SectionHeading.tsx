'use client'
import { motion } from 'framer-motion'

interface Props {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className="text-4xl md:text-5xl font-bold gradient-text mb-4 inline-block"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 mt-3">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#7C3AED]" />
        <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06B6D4]" />
      </div>
      {subtitle && (
        <p className="text-[#94A3B8] mt-4 text-base max-w-xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  )
}
