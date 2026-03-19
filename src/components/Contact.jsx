import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { profile } from '../data'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-xs text-orange-400 tracking-[0.3em]">07 //</span>
          <h2 className="text-2xl font-bold tracking-tight text-offwhite">Contact</h2>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted tracking-widest">CONNECT.SYS</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-offwhite leading-tight mb-4">
              Let's Build Something
              <br />
              <span className="text-orange-400 text-glow-orange">Impactful.</span>
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-8 max-w-md">
              Open to Data Analyst, ML Engineer, AI Engineer, SDE, and Data Scientist roles. 
              Let's connect and explore how I can contribute to your team.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: '✉' },
                { label: 'GitHub', value: 'github.com/shrini30', href: profile.github, icon: '◈' },
                { label: 'LinkedIn', value: 'linkedin.com/in/shrinjoyee-chatterjee', href: profile.linkedin, icon: '◉' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <span className="text-orange-400 w-5">{link.icon}</span>
                  <div>
                    <div className="font-mono text-[10px] text-muted tracking-widest">{link.label}</div>
                    <div className="font-mono text-sm text-offwhite group-hover:text-orange-400 transition-colors">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="panel rounded-sm p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-orange-500 to-transparent" />

            <div className="font-mono text-xs text-muted tracking-widest mb-6">QUICK CONNECT</div>

            <div className="space-y-4">
              <div>
                <label className="font-mono text-xs text-muted tracking-widest block mb-2">YOUR NAME</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-charcoal border border-border px-4 py-3 font-mono text-sm text-offwhite placeholder-muted/40 focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted tracking-widest block mb-2">YOUR EMAIL</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-charcoal border border-border px-4 py-3 font-mono text-sm text-offwhite placeholder-muted/40 focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted tracking-widest block mb-2">MESSAGE</label>
                <textarea
                  rows={4}
                  placeholder="What would you like to discuss?"
                  className="w-full bg-charcoal border border-border px-4 py-3 font-mono text-sm text-offwhite placeholder-muted/40 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button className="w-full py-3 bg-orange-500 text-charcoal font-mono text-sm font-semibold tracking-widest uppercase hover:bg-amber-400 transition-all glow-orange">
                Send Message →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border border-orange-500 rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-orange-500" />
            </div>
            <span className="font-mono text-xs text-muted tracking-widest">SHRINJOYEE CHATTERJEE — 2025</span>
          </div>
          <span className="font-mono text-xs text-muted tracking-widest">BUILT WITH REACT + FRAMER MOTION</span>
        </motion.div>
      </div>
    </section>
  )
}
