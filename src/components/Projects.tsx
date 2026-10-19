import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fades and scales in
      gsap.from(sectionRef.current, {
        scale: 0.95,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        }
      })

      // Cards fade in with scale
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
            scrub: 0.8,
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const projects: Array<{
    title: string
    category: string
    description: string
    technologies: string
    image: string
  }> = [
    {
      title: 'Security Analysis Tools',
      category: 'Cybersecurity',
      description: 'Developing Python-based tools for network security analysis and digital forensics. Exploring techniques for identifying vulnerabilities and analyzing system security.',
      technologies: 'Python, Linux, Security Tools',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
    },
    {
      title: 'IoT Device Monitoring',
      category: 'Embedded Systems',
      description: 'Building IoT solutions using ESP32 and STM32 microcontrollers. Working on sensor data collection, device communication, and real-time monitoring systems.',
      technologies: 'C/C++, ESP32, STM32, MQTT',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
    },
    {
      title: 'AI-Powered Applications',
      category: 'Artificial Intelligence',
      description: 'Experimenting with AI technologies and large language models to build intelligent applications. Exploring automation and AI-powered solutions for practical use cases.',
      technologies: 'Python, AI/ML Libraries, APIs',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
    },
    {
      title: 'Web Application Development',
      category: 'Web Development',
      description: 'Creating responsive web applications using modern frameworks. Building functional interfaces and backend systems for various project ideas.',
      technologies: 'React, Node.js, Web Technologies',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      title: 'Automation Scripts',
      category: 'Automation',
      description: 'Developing scripts and tools to automate repetitive tasks and improve workflow efficiency. Focusing on practical automation solutions.',
      technologies: 'Python, Shell Scripting, Automation',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80'
    },
    {
      title: 'Technical Learning Projects',
      category: 'Education',
      description: 'Personal learning projects across various technologies. Building small applications and experiments to strengthen technical skills and explore new areas.',
      technologies: 'Various Technologies',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80'
    }
  ]

  return (
    <div ref={sectionRef} className="section">
      <div className="section-content">
        <h2>
          Featured Projects
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
          Real-world solutions delivering measurable business impact
        </p>
        <div ref={cardsRef} className="cards-grid">
          {projects.map((project, index) => (
            <div key={index} className="whirl-card">
              <div style={{ position: 'relative', marginBottom: '1rem', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/9' }}>
                <img
                  src={project.image}
                  alt={project.title}
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
              <div style={{
                fontSize: '0.75rem',
                color: '#3b82f6',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600
              }}>
                {project.category}
              </div>
              <h3>{project.title}</h3>
              <p style={{ marginBottom: '1rem' }}>{project.description}</p>
              <div style={{
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.5)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '0.75rem'
              }}>
                {project.technologies}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}