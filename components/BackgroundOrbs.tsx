'use client'
import { motion } from 'framer-motion'

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Large violet orb top-left */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          top: '-200px',
          left: '-200px',
        }}
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Cyan orb top-right */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
          top: '10%',
          right: '-150px',
        }}
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      {/* Violet orb center */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
          top: '45%',
          left: '30%',
        }}
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      {/* Cyan orb bottom-left */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
          bottom: '-100px',
          left: '10%',
        }}
        animate={{ y: [0, -35, 0], x: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      {/* Small violet orb bottom-right */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)',
          bottom: '5%',
          right: '5%',
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
    </div>
  )
}
