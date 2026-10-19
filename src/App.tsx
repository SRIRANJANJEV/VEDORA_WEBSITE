import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Solutions from './components/Solutions'
import Projects from './components/Projects'
import About from './components/About'
import Founders from './components/Founders'
import Contact from './components/Contact'
import SpiralBackground from './components/SpiralBackground'
import './styles/cinematic.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Delay animation initialization to ensure DOM is ready
    const timer = setTimeout(() => {
      try {
        // Global scroll-based spiral rotation (subtle, not distracting)
        const spiralElements = document.querySelectorAll('.spiral-layer')

        spiralElements.forEach((element, index) => {
          gsap.to(element, {
            rotation: 180 + (index * 30),
            scale: 1 + (index * 0.02),
            scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.5,
            }
          })
        })

        // Ensure text elements never rotate during scroll
        const textElements = document.querySelectorAll('h1, h2, h3, h4, p, span, button, a, label, input, textarea')
        textElements.forEach((element) => {
          gsap.set(element, {
            force3D: true,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
          })
        })

        // Cleanup
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
      } catch (error) {
        console.error('Animation initialization error:', error)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={appRef} className="app-container">
      <Navigation />
      <SpiralBackground />
      <Hero />
      <Services />
      <Solutions />
      <Projects />
      <About />
      <Founders />
      <Contact />
      <Footer />
    </div>
  )
}

export default App