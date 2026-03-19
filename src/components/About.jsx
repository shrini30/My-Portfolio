import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { about } from '../data'

const highlights = [
  { icon: '◈', label: 'Data Analytics', desc: 'End-to-end pipelines from raw data to insight' },
  { icon: '◉', label: 'Machine Learning', desc: 'CV, NLP, and predictive modeling at scale' },
  { icon: '◇', label: 'AI Engineering', desc: 'Knowledge graphs, LLMs, and intelligent systems' },
  { icon: '◆', label: 'Software Engineering', desc: 'Automation, APIs, and system optimization' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" ref={ref}>
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-xs text-orange-400 tracking-[0.3em]">01 //</span>
          <h2 className="text-2xl font-bold tracking-tight text-offwhite">About</h2>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted tracking-widest">PROFILE.SYS</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="panel rounded-sm p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-orange-500 to-transparent" />
            <div className="absolute top-4 right-4 font-mono text-[10px] text-muted tracking-widest">SYS.PROFILE</div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border border-orange-500 flex items-center justify-center text-orange-400 font-mono font-bold text-lg">
                SC
              </div>
              <div>
                <div className="font-semibold text-offwhite">Shrinjoyee Chatterjee</div>
                <div className="font-mono text-xs text-amber-400 tracking-wide">Computer Science Engineer</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed text-sm">{about}</p>

            <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-2">
              {['Python', 'ML', 'NLP', 'SQL', 'Deep Learning', 'Data Analytics'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="panel rounded-sm p-6 relative overflow-hidden group hover:border-orange-500 transition-colors"
                style={{ perspective: '800px' }}
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-2xl mb-3 text-orange-400">{h.icon}</div>
                <div className="font-semibold text-sm text-offwhite mb-1">{h.label}</div>
                <div className="font-mono text-xs text-muted leading-relaxed">{h.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
