import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { GitBranch, Cpu, BarChart3, Workflow, Settings, Layers } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Solutions() {
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
          scrub: 0.3, // Reduced for smoother performance
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
            scrub: 0.3, // Reduced for smoother performance
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const solutions: Array<{
    icon: any
    title: string
    description: string
    image: string
  }> = [
    {
      icon: GitBranch,
      title: 'Project Planning & Strategy',
      description: 'Structured approach to technology projects. We break down complex problems into manageable tasks, plan architecture, and set clear development milestones.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
    },
    {
      icon: Cpu,
      title: 'Performance Optimization',
      description: 'Focus on efficient code and optimized solutions. We work on improving application performance, database queries, and resource utilization.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Working with data processing and visualization. We explore techniques for handling, analyzing, and presenting data effectively.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      icon: Workflow,
      title: 'Automation Tools',
      description: 'Building tools to automate repetitive tasks. We create scripts and applications that streamline workflows and improve efficiency.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80'
    },
    {
      icon: Settings,
      title: 'API Development',
      description: 'Creating interfaces for system communication. We design and implement APIs that enable different applications to work together.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80'
    },
    {
      icon: Layers,
      title: 'System Architecture',
      description: 'Understanding and designing system structures. We learn about architectural patterns and how to organize code for scalability and maintainability.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80'
    }
  ]

  return (
    <div ref={sectionRef} id="solutions" className="section">
      <div className="section-content">
        <h2>
          Technical Solutions
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
          Proven approaches to complex technical challenges
        </p>
        <div ref={cardsRef} className="cards-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="whirl-card">
              <div style={{ position: 'relative', marginBottom: '1rem', borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/9' }}>
                <img
                  src={solution.image}
                  alt={solution.title}
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
              <solution.icon size={32} style={{ marginBottom: '0.75rem', color: '#3b82f6' }} />
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}