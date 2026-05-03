'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

const roles = ['Web Developer', 'CS Graduate', 'Problem Solver', 'Tech Enthusiast']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[roleIndex]
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center pt-20">
        {/* Left: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm uppercase tracking-[0.3em] text-[#7C3AED] font-medium mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-extrabold gradient-text leading-tight mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              textShadow: '0 0 60px rgba(124,58,237,0.3)',
            }}
          >
            Ayush
            <br />
            Mandal
          </motion.h1>

          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6 h-10">
            <span
              className="text-xl md:text-2xl font-medium text-[#06B6D4]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {displayed}
            </span>
            <span className="w-0.5 h-7 bg-[#06B6D4] animate-blink inline-block" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[#94A3B8] text-base leading-relaxed max-w-md mb-8"
          >
            Motivated Computer Science graduate eager to apply programming and
            analytical skills in a dynamic organization to contribute to impactful
            projects.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3 rounded-xl font-medium text-white"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #5B21B6)', fontFamily: "'DM Sans', sans-serif" }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.button>
            <motion.a
              href="/ayushmandal.pdf"
              download
              className="px-7 py-3 rounded-xl font-medium text-[#06B6D4] border border-[#06B6D4] flex items-center gap-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(6,182,212,0.3)', background: 'rgba(6,182,212,0.08)' }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {[
              { icon: <Github size={20} />, href: '#', label: 'GitHub' },
              { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
              { icon: <Mail size={20} />, href: 'mailto:Ayushmandal228@gmail.com', label: 'Email' },
            ].map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center text-[#94A3B8] border border-white/10 transition-all duration-300"
                whileHover={{
                  color: '#fff',
                  borderColor: 'rgba(124,58,237,0.6)',
                  boxShadow: '0 0 20px rgba(124,58,237,0.3)',
                  background: 'rgba(124,58,237,0.12)',
                  y: -2,
                }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Decorative Orb Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-[#7C3AED]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            {/* Middle ring */}
            <motion.div
              className="absolute inset-4 rounded-full border border-[#06B6D4]/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            {/* Glow core */}
            <div
              className="absolute inset-8 rounded-full flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle at 35% 35%, rgba(124,58,237,0.35), rgba(6,182,212,0.2) 60%, rgba(5,5,16,0.9))',
                boxShadow: '0 0 60px rgba(124,58,237,0.3), inset 0 0 40px rgba(124,58,237,0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(124,58,237,0.3)',
              }}
            >
              <span
                className="text-7xl md:text-8xl font-extrabold gradient-text select-none"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                AM
              </span>
            </div>
            {/* Floating dots */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: i % 2 === 0 ? '#7C3AED' : '#06B6D4',
                  top: `${50 - 45 * Math.cos((deg * Math.PI) / 180)}%`,
                  left: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                  boxShadow: i % 2 === 0 ? '0 0 8px #7C3AED' : '0 0 8px #06B6D4',
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94A3B8] text-xs tracking-widest uppercase"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ color: '#06B6D4' }}
      >
        Scroll
        <ChevronDown size={18} />
      </motion.button>
    </section>
  )
}
