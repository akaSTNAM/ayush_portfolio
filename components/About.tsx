'use client'
import { motion } from 'framer-motion'
import { MapPin, Mail, BookOpen, Globe, Briefcase } from 'lucide-react'
import SectionHeading from './SectionHeading'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const details = [
  { icon: <BookOpen size={16} />, label: 'Name', value: 'Ayush Mandal' },
  { icon: <MapPin size={16} />, label: 'Location', value: 'Kota, Rajasthan' },
  { icon: <BookOpen size={16} />, label: 'Degree', value: 'BCA | Pursuing MCA' },
  { icon: <Mail size={16} />, label: 'Email', value: 'Ayushmandal228@gmail.com' },
  { icon: <Globe size={16} />, label: 'Languages', value: 'English, Hindi' },
  { icon: <Briefcase size={16} />, label: 'Status', value: 'Open to Opportunities' },
]

const stats = [
  { value: '7.37', label: 'CGPA Score', unit: '/10' },
  { value: '2', label: 'Certifications', unit: '+' },
  { value: '1', label: 'Projects', unit: '+' },
]

export default function About() {
  return (
    <section id="about" className="px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Details Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 glass-hover"
          >
            <h3
              className="text-lg font-semibold text-white mb-6 gradient-text"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Personal Details
            </h3>
            <div className="space-y-4">
              {details.map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#7C3AED] flex-shrink-0">{icon}</span>
                  <div>
                    <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-sm text-[#F1F5F9]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Narrative + Stats */}
          <motion.div
            variants={{ ...fadeUp, hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3
                className="text-lg font-semibold gradient-text mb-4"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Who I Am
              </h3>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-4">
                I&apos;m Ayush Mandal, a passionate Web Developer and Computer Science graduate from the University of Kota. My academic journey has equipped me with a solid foundation in programming, data analysis, and problem-solving.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-4">
                I hold certifications in Python Programming from the Ministry of MSME and Ethical Hacking & Cyber Security from R-CAT, which reflect my curiosity for both development and security domains.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Currently pursuing my MCA, I&apos;m eager to channel my analytical mindset and technical skills into building meaningful software solutions. I thrive in collaborative environments and love tackling complex challenges with creative solutions.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label, unit }) => (
                <motion.div
                  key={label}
                  className="glass rounded-xl p-5 text-center glass-hover"
                  whileHover={{ scale: 1.04 }}
                >
                  <p
                    className="text-3xl font-extrabold gradient-text"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {value}<span className="text-xl">{unit}</span>
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-1 leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
