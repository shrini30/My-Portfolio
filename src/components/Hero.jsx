import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '../data'

const roles = ['Data Analyst', 'ML Engineer', 'SDE', 'AI Engineer', 'Data Scientist']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      {/* Corner decorations */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l border-t border-orange-500 opacity-40" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r border-t border-orange-500 opacity-40" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-l border-b border-orange-500 opacity-40" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-r border-b border-orange-500 opacity-40" />

      {/* Status indicators */}
      <div className="absolute top-24 right-32 hidden lg:flex flex-col gap-2">
        {['SYS.ONLINE', 'DATA.READY', 'AI.ACTIVE'].map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-teal-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
            />
            <span className="font-mono text-[10px] text-muted tracking-widest">{s}</span>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-orange-500" />
            <span className="font-mono text-xs tracking-[0.3em] text-orange-400 uppercase">Command Center — Active</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-none"
            style={{ color: '#e8e4dc' }}
          >
            Shrinjoyee
            <br />
            <span style={{ color: '#e8621a' }} className="text-glow-orange">Chatterjee</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-mono text-lg md:text-xl text-amber-400 mb-6 tracking-wide"
          >
            "Engineering Intelligence from Data"
          </motion.p>

          {/* Role switcher */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-12 h-8"
          >
            <span className="font-mono text-xs text-muted tracking-widest">ROLE://</span>
            <div className="overflow-hidden h-8 flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="font-mono text-base md:text-lg font-semibold text-teal-400 tracking-wide"
                >
                  {roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-8 py-3 bg-orange-500 font-mono text-sm font-semibold tracking-wide hover:bg-amber-400 transition-all glow-orange"
              style={{ color: '#ffffff' }}
            >
              View Projects →
            </a>
            <a
              href="https://drive.google.com/file/d/10G9uEZKF9RxCW53HtYzKp5-BPbD2fVvp/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-border text-offwhite font-mono text-sm tracking-wide hover:border-orange-500 hover:text-orange-400 transition-all"
            >
              Download Resume ↓
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border"
          >
            {[
              { val: '5+', label: 'ML Projects' },
              { val: '2', label: 'Internships' },
              { val: '5', label: 'Certifications' },
              { val: '92%', label: 'Best Model Acc.' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-mono text-2xl font-bold text-orange-400">{s.val}</div>
                <div className="font-mono text-xs text-muted tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-[10px] text-muted tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </section>
  )
}
