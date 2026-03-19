import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { certifications } from '../data'

const tagColors = {
  Analytics: '#f0a500',
  Engineering: '#c9a84c',
  CV: '#2dd4bf',
  Cloud: '#e8621a',
  ML: '#a78bfa',
}

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="certifications" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-xs text-orange-400 tracking-[0.3em]">06 //</span>
          <h2 className="text-2xl font-bold tracking-tight text-offwhite">Certifications</h2>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted tracking-widest">CREDENTIALS.DB</span>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="panel rounded-sm p-5 relative overflow-hidden group hover:border-orange-500/40 transition-colors"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, ${tagColors[cert.tag] || '#e8621a'}, transparent)` }}
              />
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="font-semibold text-sm text-offwhite leading-snug mb-1">{cert.name}</div>
                  <div className="font-mono text-xs text-muted">{cert.issuer}</div>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <span
                    className="font-mono text-[10px] px-2 py-0.5 border tracking-widest"
                    style={{ color: tagColors[cert.tag], borderColor: `${tagColors[cert.tag]}40` }}
                  >
                    {cert.tag}
                  </span>
                  <span className="font-mono text-[10px] text-muted">{cert.year}</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span className="font-mono text-[10px] text-muted tracking-widest">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
