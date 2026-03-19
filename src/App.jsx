import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import RoleFit from './components/RoleFit'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Cursor />
      <AnimatePresence>
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <>
          <div className="grid-bg" />
          <Nav />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <RoleFit />
            <Certifications />
            <Contact />
          </main>
          <BackToTop />
        </>
      )}
    </>
  )
}
