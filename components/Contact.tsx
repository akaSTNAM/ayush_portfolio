'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: 'Ayushmandal228@gmail.com',
      href: 'mailto:Ayushmandal228@gmail.com',
    },
    {
      icon: <Phone size={18} />,
      label: 'Phone',
      value: '+91 9664342961',
      href: 'tel:9664342961',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: 'Kota, Rajasthan, India',
      href: null,
    },
  ]

  return (
    <section id="contact" className="px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open to opportunities, collaborations, and conversations. Feel free to reach out!"
        />

        <div className="grid md:grid-cols-1 gap-8">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 glass-hover flex flex-col justify-between"
          >
            <div>
              <h3
                className="text-xl font-bold gradient-text mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Contact Information
              </h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#7C3AED]"
                      style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)' }}
                    >
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-[#64748B] uppercase tracking-widest mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-[#F1F5F9] hover:text-[#7C3AED] transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#F1F5F9]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-[#64748B] uppercase tracking-widest mb-3">Find me on</p>
              <div className="flex gap-3">
                {[
                  { icon: <Github size={18} />, href: '#', label: 'GitHub' },
                  { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
                  { icon: <Mail size={18} />, href: 'mailto:Ayushmandal228@gmail.com', label: 'Email' },
                ].map(({ icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-[#94A3B8] border border-white/10"
                    whileHover={{
                      color: '#fff',
                      borderColor: 'rgba(124,58,237,0.5)',
                      boxShadow: '0 0 18px rgba(124,58,237,0.3)',
                      background: 'rgba(124,58,237,0.12)',
                      y: -2,
                    }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8 relative"
          >
            <h3
              className="text-xl font-bold gradient-text mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Send a Message
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#64748B] uppercase tracking-widest block mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="glass-input"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#64748B] uppercase tracking-widest block mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="glass-input"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-[#64748B] uppercase tracking-widest block mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's it about?"
                  className="glass-input"
                />
              </div>
              <div>
                <label className="text-xs text-[#64748B] uppercase tracking-widest block mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className="glass-input resize-none"
                />
              </div>
              <motion.button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-sm mt-2"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                whileHover={{ boxShadow: '0 0 30px rgba(124,58,237,0.5)', scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </div>

            {/* Toast */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-6 left-6 right-6 flex items-center gap-3 px-5 py-3.5 rounded-xl"
                  style={{
                    background: 'rgba(34,197,94,0.12)',
                    border: '1px solid rgba(34,197,94,0.4)',
                    boxShadow: '0 0 20px rgba(34,197,94,0.2)',
                  }}
                >
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                  <span className="text-sm text-green-300 font-medium">Message sent! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}
            </AnimatePresence>
          {/* </motion.div> */} 
        </div>
      </div>
    </section>
  )
}
