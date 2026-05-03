'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(5,5,16,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold gradient-text cursor-pointer"
            style={{ fontFamily: "'Syne', sans-serif" }}
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo('home')}
          >
            AM
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-[#94A3B8] hover:text-white text-sm font-medium transition-all duration-200 relative group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <motion.button
              onClick={() => scrollTo('contact')}
              className="px-5 py-2 rounded-lg text-sm font-medium text-white border border-[#7C3AED] transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              whileHover={{
                boxShadow: '0 0 20px rgba(124,58,237,0.5)',
                background: 'rgba(124,58,237,0.15)',
              }}
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(5,5,16,0.97)', backdropFilter: 'blur(20px)' }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-3xl font-bold gradient-text"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {link}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollTo('contact')}
              className="mt-4 px-8 py-3 rounded-xl text-white border border-[#7C3AED] text-lg font-medium"
              style={{ background: 'rgba(124,58,237,0.2)' }}
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
