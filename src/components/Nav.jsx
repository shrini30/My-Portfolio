import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Role Fit', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress((window.scrollY / total) * 100)
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(' ', '-'))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border border-orange-500 rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 bg-orange-500" />
          </div>
          <span className="font-mono text-xs tracking-[0.25em] text-amber-400 uppercase">SC.Portfolio</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-mono text-xs tracking-widest text-muted hover:text-orange-400 transition-colors uppercase"
            >
              {link}
            </button>
          ))}
        </div>

        <a
          href="https://drive.google.com/file/d/1tBb81sdkt9GucxIGpDn0kpK_DU-axYfp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-widest border border-orange-500 text-orange-400 px-4 py-2 hover:bg-orange-500 hover:text-charcoal transition-all"
        >
          Resume ↓
        </a>
      </div>
    </nav>
  )
}
