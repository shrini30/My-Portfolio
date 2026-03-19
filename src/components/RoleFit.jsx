import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { roleData, projects } from '../data'

const roleColors = {
  'Data Analyst': '#f0a500',
  'ML Engineer': '#2dd4bf',
  SDE: '#c9a84c',
  'AI Engineer': '#e8621a',
  'Data Scientist': '#a78bfa',
}

function MatchBar({ score, color, inView }) {
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (!inView) return
    const timeout = setTimeout(() => setDisplayed(score), 300)
    return () => clearTimeout(timeout)
  }, [score, inView])

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-xs text-muted tracking-widest">ROLE FIT SCORE</span>
        <motion.span
          key={score}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-2xl font-bold"
          style={{ color }}
        >
          {displayed}%
        </motion.span>
      </div>
      <div className="h-2 bg-border rounded-sm overflow-hidden">
        <div
          className="match-bar-fill rounded-sm"
          style={{ width: `${displayed}%`, background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
        />
      </div>
    </div>
  )
}

export default function RoleFit() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeRole, setActiveRole] = useState('AI Engineer')
  const data = roleData[activeRole]
  const color = roleColors[activeRole]
  const roleProjects = projects.filter(p => data.projects.includes(p.id))

  return (
    <section id="role-fit" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-xs text-orange-400 tracking-[0.3em]">05 //</span>
          <h2 className="text-2xl font-bold tracking-tight text-offwhite">Role Fit Analyzer</h2>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted tracking-widest">ADAPTIVE.SYS</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="font-mono text-xs text-muted tracking-wide mb-10"
        >
          Select a target role to see tailored skills, relevant projects, and fit analysis.
        </motion.p>

        {/* Role selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {Object.keys(roleData).map(role => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`font-mono text-xs tracking-widest px-5 py-2.5 border transition-all relative overflow-hidden ${
                activeRole === role ? 'text-charcoal' : 'border-border text-muted hover:border-muted'
              }`}
              style={activeRole === role ? { background: color, borderColor: color } : {}}
            >
              {activeRole === role && (
                <motion.div
                  layoutId="roleActive"
                  className="absolute inset-0"
                  style={{ background: color }}
                  transition={{ type: 'spring', damping: 20 }}
                />
              )}
              <span className="relative z-10">{role}</span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {/* Left: Summary + Match */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Match score */}
              <div className="panel rounded-sm p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                <MatchBar score={data.matchScore} color={color} inView={inView} />
              </div>

              {/* Summary */}
              <div className="panel rounded-sm p-6 relative overflow-hidden">
                <div className="font-mono text-xs tracking-widest mb-3" style={{ color }}>ROLE SUMMARY</div>
                <p className="text-sm text-muted leading-relaxed">{data.summary}</p>
              </div>

              {/* Why suitable */}
              <div className="panel rounded-sm p-6 relative overflow-hidden">
                <div className="font-mono text-xs tracking-widest mb-4" style={{ color }}>WHY I'M SUITABLE</div>
                <ul className="space-y-3">
                  {data.reasons.map((r, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-3 text-xs text-muted"
                    >
                      <span className="flex-shrink-0 mt-0.5" style={{ color }}>◆</span>
                      <span>{r}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Skills + Projects */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Relevant skills */}
              <div className="panel rounded-sm p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                <div className="font-mono text-xs tracking-widest mb-4" style={{ color }}>RELEVANT SKILLS</div>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      className="px-3 py-1.5 font-mono text-xs border tracking-wide"
                      style={{ borderColor: `${color}50`, color, background: `${color}10` }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Proof of work */}
              <div className="panel rounded-sm p-6 relative overflow-hidden">
                <div className="font-mono text-xs tracking-widest mb-4" style={{ color }}>PROOF OF WORK</div>
                <div className="space-y-4">
                  {roleProjects.map((p, i) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="border border-border rounded-sm p-4 hover:border-opacity-60 transition-colors"
                      style={{ borderLeftColor: p.color, borderLeftWidth: '2px' }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <div className="font-semibold text-sm text-offwhite">{p.title}</div>
                          <div className="font-mono text-xs text-muted mt-0.5">{p.subtitle}</div>
                        </div>
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-muted hover:text-teal-400 transition-colors flex-shrink-0"
                        >
                          GitHub ↗
                        </a>
                      </div>
                      <div className="grid grid-cols-3 gap-3 mt-3">
                        <div>
                          <div className="font-mono text-[10px] text-muted tracking-widest mb-1">PROBLEM</div>
                          <p className="text-xs text-muted leading-relaxed line-clamp-2">{p.problem}</p>
                        </div>
                        <div>
                          <div className="font-mono text-[10px] text-muted tracking-widest mb-1">OUTCOME</div>
                          <p className="text-xs text-muted leading-relaxed line-clamp-2">{p.outcome}</p>
                        </div>
                        <div>
                          <div className="font-mono text-[10px] text-muted tracking-widest mb-1">IMPACT</div>
                          <p className="text-xs text-muted leading-relaxed line-clamp-2">{p.impact}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {p.tech.slice(0, 5).map(t => (
                          <span key={t} className="tag" style={{ borderColor: `${p.color}40`, color: p.color }}>{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
