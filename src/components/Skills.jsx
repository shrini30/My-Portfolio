import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { skills } from '../data'

const skillLevels = {
  Python: 95, SQL: 88, 'C++': 78, JavaScript: 70, Groovy: 65, Bash: 60,
  TensorFlow: 85, PyTorch: 80, 'Scikit-learn': 88, CNN: 85, NLP: 87, LLMs: 78, YOLO: 80, OpenCV: 82,
  Pandas: 92, NumPy: 90, Excel: 85, 'Power BI': 75, Matplotlib: 88, Seaborn: 85, Neo4j: 72, MySQL: 80,
  DSA: 82, OS: 78, DBMS: 80, 'Computer Networks': 75, OOP: 85, 'System Design': 72,
}

const groupColors = {
  Programming: '#e8621a',
  'Machine Learning / AI': '#2dd4bf',
  'Data Tools': '#f0a500',
  'Core CS': '#c9a84c',
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeGroup, setActiveGroup] = useState('Machine Learning / AI')

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-xs text-orange-400 tracking-[0.3em]">02 //</span>
          <h2 className="text-2xl font-bold tracking-tight text-offwhite">Skills</h2>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted tracking-widest">CAPABILITY.MAP</span>
        </motion.div>

        {/* Group tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {Object.keys(skills).map(group => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`font-mono text-xs tracking-widest px-4 py-2 border transition-all ${
                activeGroup === group
                  ? 'border-orange-500 text-orange-400 bg-orange-500/10'
                  : 'border-border text-muted hover:border-muted'
              }`}
            >
              {group}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {skills[activeGroup].map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="panel rounded-sm p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-sm text-offwhite">{skill}</span>
                <span className="font-mono text-xs" style={{ color: groupColors[activeGroup] }}>
                  {skillLevels[skill] || 75}%
                </span>
              </div>
              <div className="h-px bg-border w-full relative overflow-hidden">
                <motion.div
                  className="h-full"
                  style={{ background: groupColors[activeGroup] }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skillLevels[skill] || 75}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* All skills overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 panel rounded-sm p-6"
        >
          <div className="font-mono text-xs text-muted tracking-widest mb-4">ALL CAPABILITIES</div>
          <div className="flex flex-wrap gap-2">
            {Object.values(skills).flat().map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
