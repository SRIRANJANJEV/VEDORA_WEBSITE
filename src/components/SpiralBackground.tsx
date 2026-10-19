import { useEffect } from 'react'

export default function SpiralBackground() {
  useEffect(() => {
    // Generate spiral rings dynamically
    const container = document.querySelector('.spiral-background')
    if (!container) return

    for (let i = 0; i < 12; i++) {
      const ring = document.createElement('div')
      ring.className = 'spiral-layer'
      const size = 200 + (i * 150)
      ring.style.width = `${size}px`
      ring.style.height = `${size}px`
      ring.style.opacity = String(0.6 - (i * 0.04))
      ring.style.border = `2px solid rgba(59, 130, 246, ${0.5 - (i * 0.03)})`
      container.appendChild(ring)
    }
  }, [])

  return <div className="spiral-background"></div>
}