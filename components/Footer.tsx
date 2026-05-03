'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative px-6 py-10 mt-10">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent mb-10 opacity-40" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span
            className="text-2xl font-extrabold gradient-text"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            AM
          </span>
          <p className="text-xs text-[#64748B]">Ayush Mandal — Web Developer</p>
        </div>

        {/* Center text */}
        <div className="text-center">
          <p className="text-sm text-[#64748B] flex items-center gap-1.5 justify-center">
            Designed & built with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={13} className="text-[#7C3AED] fill-[#7C3AED]" />
            </motion.span>{' '}
            by Ayush Mandal
          </p>
          <p className="text-xs text-[#475569] mt-1">© 2025 All Rights Reserved</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {[
            { icon: <Github size={16} />, href: '#' },
            { icon: <Linkedin size={16} />, href: '#' },
            { icon: <Mail size={16} />, href: 'mailto:Ayushmandal228@gmail.com' },
          ].map(({ icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#64748B] border border-white/8 transition-all"
              whileHover={{
                color: '#A78BFA',
                borderColor: 'rgba(124,58,237,0.4)',
                background: 'rgba(124,58,237,0.1)',
              }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
