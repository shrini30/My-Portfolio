import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience } from '../data'

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-xs text-orange-400 tracking-[0.3em]">03 //</span>
          <h2 className="text-2xl font-bold tracking-tight text-offwhite">Experience</h2>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted tracking-widest">WORK.LOG</span>
        </motion.div>

        <div className="relative pl-8">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-orange-500 via-amber-400 to-transparent"
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 top-6 w-3 h-3 border border-orange-500 rotate-45 bg-charcoal flex items-center justify-center">
                <div className="w-1 h-1 bg-orange-500" />
              </div>

              <div className="panel rounded-sm p-8 relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-orange-500 to-transparent" />

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-offwhite">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-sm text-orange-400">{exp.company}</span>
                      <span className="text-border">·</span>
                      <span className="font-mono text-xs text-muted">{exp.location}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-amber-400 border border-amber-400/30 px-3 py-1 tracking-widest">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted">
                      <span className="text-orange-500 mt-0.5 flex-shrink-0">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
