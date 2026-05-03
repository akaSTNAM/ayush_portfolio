'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Plane, Users, CalendarDays, Database, LayoutDashboard } from 'lucide-react'
import SectionHeading from './SectionHeading'

const features = [
  { icon: <Plane size={16} />, text: 'Flight scheduling & management' },
  { icon: <Users size={16} />, text: 'Passenger booking system' },
  { icon: <LayoutDashboard size={16} />, text: 'Admin control panel' },
  { icon: <Database size={16} />, text: 'Database-backed records (MS Access)' },
]

const techTags = ['Visual Basic', 'MS Access', 'Windows Forms', 'VB6']

export default function Projects() {
  return (
    <section id="projects" className="px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Work I've built that demonstrates my technical capabilities"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden"
            whileHover={{ boxShadow: '0 0 50px rgba(124,58,237,0.25)' }}
            style={{ border: '1px solid rgba(124,58,237,0.3)' }}
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
                transform: 'translate(30%, -30%)',
              }}
            />

            {/* Badges row */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30">
                BCA Final Year Project
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#06B6D4]/10 text-[#67E8F9] border border-[#06B6D4]/30 flex items-center gap-1">
                <CalendarDays size={11} /> May 2025
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-3xl md:text-4xl font-extrabold text-white mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Airline Management
              <br />
              <span className="gradient-text">System</span>
            </h3>

            {/* Description */}
            <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
              A fully functional desktop application for managing airline operations including flight scheduling, seat booking, passenger records, and an admin dashboard. Built as the BCA final year capstone project using Visual Basic with a Microsoft Access database backend.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-medium text-[#94A3B8] bg-white/5 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-[#94A3B8]">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[#7C3AED]"
                    style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)' }}
                  >
                    {icon}
                  </span>
                  {text}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium text-white"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #5B21B6)', fontFamily: "'DM Sans', sans-serif" }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(124,58,237,0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={15} /> Source Code
              </motion.button>
              <motion.button
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium text-[#06B6D4] border border-[#06B6D4]/50"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(6,182,212,0.25)', background: 'rgba(6,182,212,0.08)' }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={15} /> View Details
              </motion.button>
            </div>
          </motion.div>

          {/* Coming soon note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-[#64748B] text-sm italic mt-8"
          >
            ✦ More projects coming soon as I continue my MCA journey...
          </motion.p>
        </div>
      </div>
    </section>
  )
}
