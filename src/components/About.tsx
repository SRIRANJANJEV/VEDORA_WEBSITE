import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Target, Eye, Users, Zap, Shield, Award, Brain } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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
      const cards = contentRef.current?.querySelectorAll('.whirl-card')
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

  return (
    <div ref={sectionRef} className="section">
      <div className="section-content">
        <h2>
          About VEDORA
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
          Technology partners committed to your success
        </p>

        <div ref={contentRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div className="whirl-card">
            <Target size={48} style={{ marginBottom: '1rem', color: '#3b82f6' }} />
            <h3>Our Mission</h3>
            <p>
              To empower businesses with technology that transforms ideas into reality. We bridge the gap between vision and execution through strategic planning, technical excellence, and collaborative partnerships.
            </p>
          </div>
          <div className="whirl-card">
            <Eye size={48} style={{ marginBottom: '1rem', color: '#3b82f6' }} />
            <h3>Our Vision</h3>
            <p>
              To be recognized as a trusted technology partner that combines technical excellence with strategic insight. We deliver innovative solutions that help businesses achieve their goals.
            </p>
          </div>
        </div>

        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          Built by Two. Driven by Possibility.
        </h3>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
          VEDORA brings together two aspiring technology builders with complementary interests across software engineering, cybersecurity, artificial intelligence, automation, and electronics. We combine our curiosity, technical learning, and practical experimentation to explore ideas and develop useful digital solutions.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="whirl-card" style={{ textAlign: 'center' }}>
            <Zap size={40} style={{ marginBottom: '1rem', color: '#3b82f6' }} />
            <h3>Complementary Technical Interests</h3>
            <p>
              Our backgrounds span cybersecurity, embedded systems, AI development, and automation, allowing us to approach problems from multiple angles.
            </p>
          </div>
          <div className="whirl-card" style={{ textAlign: 'center' }}>
            <Target size={40} style={{ marginBottom: '1rem', color: '#3b82f6' }} />
            <h3>Hands-On Problem Solving</h3>
            <p>
              We learn by doing—building projects, experimenting with technologies, and solving real technical challenges through practical application.
            </p>
          </div>
          <div className="whirl-card" style={{ textAlign: 'center' }}>
            <Brain size={40} style={{ marginBottom: '1rem', color: '#3b82f6' }} />
            <h3>Exploration Across Domains</h3>
            <p>
              From software and AI to cybersecurity and electronics, we explore the intersections between technologies to create integrated solutions.
            </p>
          </div>
          <div className="whirl-card" style={{ textAlign: 'center' }}>
            <Award size={40} style={{ marginBottom: '1rem', color: '#3b82f6' }} />
            <h3>Continuous Learning</h3>
            <p>
              We are committed to continuous learning, staying current with emerging technologies, and applying new knowledge to practical innovation.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Our Engagement Process
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>01</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Discovery</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                We learn about your business requirements, technical constraints, and project goals.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>02</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Strategy</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                Architecture design, technology selection, and detailed project planning with clear milestones.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>03</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Development</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                Agile development with regular demos, continuous integration, and quality assurance.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.5rem' }}>04</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Launch & Support</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                Production deployment, monitoring setup, and ongoing maintenance and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}