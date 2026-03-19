import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useRef } from 'react'
import { projects } from '../data'

function ProjectCard({ project, index, inView, onClick }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(8px)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateZ(0)'
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(project)}
      className="panel rounded-sm p-6 cursor-pointer relative overflow-hidden group"
      style={{ transition: 'transform 0.15s ease, border-color 0.2s ease', willChange: 'transform' }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      {/* Corner tag */}
      <div className="absolute top-4 right-4 font-mono text-[10px] text-muted tracking-widest">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="mb-4">
        <div className="w-8 h-8 border flex items-center justify-center mb-4" style={{ borderColor: project.color }}>
          <div className="w-2 h-2" style={{ background: project.color }} />
        </div>
        <h3 className="text-lg font-semibold text-offwhite mb-1">{project.title}</h3>
        <p className="font-mono text-xs text-muted tracking-wide">{project.subtitle}</p>
      </div>

      <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">{project.problem}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 4).map(t => (
          <span key={t} className="tag" style={{ borderColor: `${project.color}40`, color: project.color }}>{t}</span>
        ))}
        {project.tech.length > 4 && <span className="tag">+{project.tech.length - 4}</span>}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="font-mono text-xs text-muted group-hover:text-orange-400 transition-colors">
          View Details →
        </span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="font-mono text-xs text-muted hover:text-teal-400 transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </motion.div>
  )
}

function Modal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative panel rounded-sm max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-offwhite">{project.title}</h3>
              <p className="font-mono text-xs text-muted mt-1 tracking-wide">{project.subtitle}</p>
            </div>
            <button onClick={onClose} className="text-muted hover:text-orange-400 transition-colors font-mono text-lg">✕</button>
          </div>

          <div className="space-y-6">
            <div>
              <div className="font-mono text-xs tracking-widest mb-2" style={{ color: project.color }}>PROBLEM</div>
              <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <div className="font-mono text-xs tracking-widest mb-2" style={{ color: project.color }}>OUTCOME</div>
              <p className="text-sm text-muted leading-relaxed">{project.outcome}</p>
            </div>

            <div>
              <div className="font-mono text-xs tracking-widest mb-2" style={{ color: project.color }}>IMPACT</div>
              <p className="text-sm text-muted leading-relaxed">{project.impact}</p>
            </div>

            <div>
              <div className="font-mono text-xs tracking-widest mb-3" style={{ color: project.color }}>TECH STACK</div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="tag" style={{ borderColor: `${project.color}50`, color: project.color }}>{t}</span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 border border-border font-mono text-sm text-muted hover:border-orange-500 hover:text-orange-400 transition-all tracking-widest"
              >
                View on GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-xs text-orange-400 tracking-[0.3em]">04 //</span>
          <h2 className="text-2xl font-bold tracking-tight text-offwhite">Projects</h2>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted tracking-widest">BUILD.LOG</span>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} inView={inView} onClick={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
