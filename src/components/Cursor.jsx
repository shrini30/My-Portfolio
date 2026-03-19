import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot.current) {
        dot.current.style.left = mouseX + 'px'
        dot.current.style.top = mouseY + 'px'
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ring.current) {
        ring.current.style.left = ringX + 'px'
        ring.current.style.top = ringY + 'px'
      }
      requestAnimationFrame(animate)
    }

    const onEnter = () => ring.current && (ring.current.style.transform = 'translate(-50%, -50%) scale(1.8)')
    const onLeave = () => ring.current && (ring.current.style.transform = 'translate(-50%, -50%) scale(1)')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    animate()
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
