import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('INITIALIZING SYSTEMS')

  const phases = ['INITIALIZING SYSTEMS', 'LOADING DATA CORE', 'CALIBRATING INTERFACE', 'READY']

  useEffect(() => {
    let p = 0
    const interval = setInterval(() => {
      p += Math.random() * 18 + 4
      if (p >= 100) {
        p = 100
        clearInterval(interval)
        setTimeout(onDone, 600)
      }
      setProgress(Math.min(p, 100))
      const idx = Math.floor((Math.min(p, 99) / 100) * (phases.length - 1))
      setPhase(phases[idx])
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
      style={{ background: '#1a1a1a' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid lines */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Scanning line */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #e8621a, transparent)' }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 w-80">
        {/* Logo mark */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-orange-500 rotate-45 flex items-center justify-center">
            <div className="w-3 h-3 bg-orange-500" />
          </div>
          <span className="font-mono text-sm tracking-[0.3em] text-amber-400 uppercase">Data Command</span>
        </div>

        {/* Progress bar */}
        <div className="w-full">
          <div className="flex justify-between mb-2">
            <span className="font-mono text-xs text-muted tracking-widest">{phase}</span>
            <span className="font-mono text-xs text-orange-400">{Math.round(progress)}%</span>
          </div>
          <div className="h-px bg-border w-full relative overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-amber-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Grid cells */}
        <div className="grid grid-cols-8 gap-1">
          {Array.from({ length: 32 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 border border-border"
              animate={{ borderColor: progress > (i / 32) * 100 ? '#e8621a' : '#333', background: progress > (i / 32) * 100 ? 'rgba(232,98,26,0.15)' : 'transparent' }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
