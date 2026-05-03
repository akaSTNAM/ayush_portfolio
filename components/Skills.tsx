'use client'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const skillGroups = [
  {
    category: 'Technical Skills',
    color: '#7C3AED',
    items: [
      { name: 'HTML5', level: 85 },
      { name: 'CSS3', level: 80 },
      { name: 'C Programming', level: 70 },
      { name: 'SQL', level: 72 },
      { name: 'Visual Basic', level: 68 },
      { name: 'MS Excel', level: 75 },
    ],
  },
  {
    category: 'Tools & Platforms',
    color: '#06B6D4',
    items: [
      { name: 'MS Excel', level: 75 },
      { name: 'SQL Database', level: 70 },
      { name: 'VB IDE', level: 68 },
      { name: 'MS Access', level: 65 },
    ],
  },
  {
    category: 'Soft Skills',
    color: '#A855F7',
    items: [
      { name: 'Communication', level: 90 },
      { name: 'Teamwork', level: 88 },
      { name: 'Problem-Solving', level: 85 },
      { name: 'Critical Thinking', level: 85 },
      { name: 'Analytical Mindset', level: 82 },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  return (
    <section id="skills" className="px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="My Skills" subtitle="Technologies and competencies I've developed through academic and project work" />

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-2xl p-7 glass-hover"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: group.color, boxShadow: `0 0 10px ${group.color}` }}
                />
                <h3
                  className="font-bold text-base text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-5">
                {group.items.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-[#F1F5F9] font-medium">{skill.name}</span>
                      <span className="text-xs text-[#94A3B8]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${group.color}, ${group.color}99)`,
                          boxShadow: `0 0 6px ${group.color}80`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pill Tags Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          {['C', 'HTML', 'CSS', 'SQL', 'Visual Basic', 'MS Excel', 'Python', 'Data Analysis', 'Cyber Security'].map((tag, i) => (
            <motion.span
              key={tag}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-default"
              style={{
                borderColor: i % 2 === 0 ? 'rgba(124,58,237,0.4)' : 'rgba(6,182,212,0.4)',
                color: i % 2 === 0 ? '#A78BFA' : '#67E8F9',
                background: i % 2 === 0 ? 'rgba(124,58,237,0.08)' : 'rgba(6,182,212,0.08)',
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: i % 2 === 0 ? '0 0 15px rgba(124,58,237,0.35)' : '0 0 15px rgba(6,182,212,0.35)',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
