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
    // Delay animation initialization to ensure DOM is fully ready
    const timer = setTimeout(() => {
      try {
        // Global scroll-based spiral rotation (optimized for performance)
        const spiralElements = document.querySelectorAll('.spiral-layer')

        spiralElements.forEach((element, index) => {
          gsap.to(element, {
            rotation: 180 + (index * 30),
            scale: 1 + (index * 0.02),
            scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.5, // Reduced from 1.5 for smoother performance
              onUpdate: (self) => {
                // Ensure smooth rendering during scroll
                if (element instanceof HTMLElement) {
                  element.style.willChange = 'transform'
                }
              }
            }
          })
        })

        // Ensure text elements remain stable during scroll
        const textElements = document.querySelectorAll('h1, h2, h3, h4, p, span, button, a, label, input, textarea')
        textElements.forEach((element) => {
          if (element instanceof HTMLElement) {
            element.style.transform = 'translateZ(0)' // Hardware acceleration
            element.style.backfaceVisibility = 'hidden'
          }
        })

        // Cleanup
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
      } catch (error) {
        console.error('Animation initialization error:', error)
      }
    }, 300) // Increased delay to 300ms for better DOM readiness

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