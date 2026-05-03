'use client'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Shield } from 'lucide-react'
import SectionHeading from './SectionHeading'

const timelineItems = [
  {
    icon: <GraduationCap size={18} />,
    date: '2025 – 2027',
    title: 'Master of Computer Application (MCA)',
    institution: 'University of Kota, Rajasthan',
    detail: '',
    badge: 'Pursuing',
    badgeColor: '#06B6D4',
    side: 'right',
  },
  {
    icon: <GraduationCap size={18} />,
    date: '2022 – 2025',
    title: 'Bachelor of Computer Application (BCA)',
    institution: 'University of Kota, Rajasthan',
    detail: 'CGPA: 7.37 / 10',
    badge: 'Completed',
    badgeColor: '#22C55E',
    side: 'left',
  },
  {
    icon: <Award size={18} />,
    date: '2024',
    title: 'Python Programming Certification',
    institution: 'Ministry of MSME, Government of India',
    detail: '',
    badge: 'Certified',
    badgeColor: '#7C3AED',
    side: 'right',
  },
  {
    icon: <Shield size={18} />,
    date: '2024',
    title: 'Ethical Hacking & Cyber Security',
    institution: 'R-CAT, Rajasthan',
    detail: '',
    badge: 'Certified',
    badgeColor: '#7C3AED',
    side: 'left',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Education & Certifications"
          subtitle="My academic journey and professional credentials"
        />

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 hidden md:block timeline-line opacity-40" />

          <div className="space-y-10">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  item.side === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-[45%]">
                  <div
                    className="glass rounded-2xl p-6 glass-hover"
                    style={{ borderColor: `${item.badgeColor}30` }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${item.badgeColor}18`,
                          border: `1px solid ${item.badgeColor}40`,
                          color: item.badgeColor,
                        }}
                      >
                        {item.icon}
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: `${item.badgeColor}18`,
                          color: item.badgeColor,
                          border: `1px solid ${item.badgeColor}40`,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] mb-1.5 tracking-widest uppercase">{item.date}</p>
                    <h4
                      className="text-base font-bold text-white mb-1"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#94A3B8]">{item.institution}</p>
                    {item.detail && (
                      <p className="text-sm font-medium mt-2" style={{ color: item.badgeColor }}>
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>

                {/* Center dot (desktop only) */}
                <div className="hidden md:flex w-[10%] justify-center">
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 z-10"
                    style={{
                      background: item.badgeColor,
                      borderColor: '#050510',
                      boxShadow: `0 0 12px ${item.badgeColor}`,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: 'spring' }}
                  />
                </div>

                {/* Spacer for alternating */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
