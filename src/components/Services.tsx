import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Code, Database, Shield, Microchip, Brain, Globe } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fades and scales in (no rotation for readability)
      gsap.from(sectionRef.current, {
        scale: 0.95,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.3, // Reduced for smoother performance
        }
      })

      // Cards fade in with scale (no rotation)
      const cards = cardsRef.current?.querySelectorAll('.whirl-card')
      cards?.forEach((card) => {
        gsap.from(card, {
          scale: 0.9,
          opacity: 0,
          y: 30,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.3, // Reduced for smoother performance
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const services: Array<{
    icon: any
    title: string
    description: string
    image: string
  }> = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'We build web applications and software solutions using modern frameworks and programming languages. Our focus is on creating clean, functional code that solves real problems.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
    },
    {
      icon: Database,
      title: 'Web Development',
      description: 'Responsive web applications with modern design and functionality. We work with frontend and backend technologies to create user-friendly digital experiences.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security-focused development and testing. We explore network security, digital forensics, and secure coding practices to build more resilient systems.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
    },
    {
      icon: Microchip,
      title: 'Embedded Systems & IoT',
      description: 'Electronics programming and IoT device development. We work with microcontrollers like STM32 and ESP32 to create connected hardware solutions.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'Exploration of AI technologies, large language models, and intelligent automation. We experiment with building AI-powered tools and solutions.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
    },
    {
      icon: Globe,
      title: 'Technology Exploration',
      description: 'Continuous learning across emerging technologies. We research and experiment with new tools, frameworks, and approaches to expand our technical capabilities.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    }
  ]

  return (
    <div ref={sectionRef} id="services" className="section">
      <div className="section-content">
        <h2>
          Our Services
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
          Comprehensive technology solutions engineered for enterprise scale and performance
        </p>
        <div ref={cardsRef} className="cards-grid">
          {services.map((service, index) => (
            <div key={index} className="whirl-card">
              <div style={{ position: 'relative', marginBottom: '1rem', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/9' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                />
              </div>
              <service.icon size={32} style={{ marginBottom: '0.75rem', color: '#3b82f6' }} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}