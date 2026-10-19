import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    try {
      const ctx = gsap.context(() => {
        // Logo scale and fade entrance (no rotation for readability)
        if (logoRef.current) {
          gsap.from(logoRef.current, {
            scale: 0.8,
            opacity: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 1.5,
            ease: 'power3.out',
          })
        }

        // Tagline fade in with slight vertical movement (no rotation)
        if (taglineRef.current) {
          gsap.from(taglineRef.current, {
            opacity: 0,
            y: 30,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 1.2,
            delay: 0.3,
            ease: 'power3.out',
          })
        }

        // CTA button entrance
        if (ctaRef.current) {
          gsap.from(ctaRef.current, {
            opacity: 0,
            y: 20,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 1,
            delay: 0.6,
            ease: 'power3.out',
          })
        }
      }, heroRef)

      return () => ctx.revert()
    } catch (error) {
      console.error('Hero animation error:', error)
    }
  }, [])

  const handleScroll = () => {
    const firstSection = document.querySelector('.section')
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={heroRef} className="hero-section">
      {/* Logo placeholder - add your logo image here */}
      <div ref={logoRef} style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <img
          src="/logo.png"
          alt="VEDORA Logo"
          style={{
            maxWidth: '350px',
            height: 'auto',
            display: 'block',
            margin: '0 auto 1.5rem',
            filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))',
          }}
          onError={(e) => {
            // Fallback if image not found
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="hero-logo" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
          VEDORA
        </div>
      </div>
      <div ref={taglineRef} style={{ textAlign: 'center' }}>
        <h3 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontWeight: 600,
          color: '#3b82f6',
          marginBottom: '1rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          Imagine. Engineer. Evolve.
        </h3>
        <p style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
          color: 'rgba(255, 255, 255, 0.85)',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: '0 auto 2.5rem'
        }}>
          Building intelligent software, exploring emerging technologies, and engineering ideas into reality.
        </p>
      </div>
      <button ref={ctaRef} className="hero-cta" onClick={handleScroll}>
        Learn More
      </button>
    </div>
  )
}