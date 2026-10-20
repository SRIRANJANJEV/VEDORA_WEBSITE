import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Founders() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const ctx = gsap.context(() => {
        if (sectionRef.current) {
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
        }

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
    } catch (error) {
      console.error('Founders animation error:', error)
    }
  }, [])

  const founders: Array<{
    name: string
    headline: string
    bio: string
    skills: string[]
    github: string
    linkedin: string
    portfolio?: string
  }> = [
    {
      name: 'S. Sri Ranjan',
      headline: 'ECE Student | Cybersecurity & Embedded Systems | Software Engineering',
      bio: 'S. Sri Ranjan is an Electronics and Communication Engineering student at Knowledge Institute of Technology (KIOT), Salem, with interests spanning cybersecurity, software engineering, embedded systems, and intelligent connected technologies. His technical interests include network security, Linux, digital forensics, security testing, Python-based tooling, IoT security, firmware analysis, and embedded platforms such as STM32 and ESP32. He enjoys exploring the intersection of electronics and cybersecurity to understand how digital and connected systems can be designed and secured. Through technical projects, experimentation, and collaborative problem-solving, he aims to develop practical security-focused solutions while continuing to strengthen his engineering foundations. His long-term direction is to combine core ECE knowledge with cybersecurity, embedded security, and secure technology development.',
      skills: [
        'Cybersecurity and Network Security',
        'Linux and Digital Forensics',
        'Embedded Systems and Firmware Security',
        'IoT and Hardware Security',
        'Python and Security Tooling',
        'STM32, ESP32, and Electronics',
        'Secure Software and Cyber-Physical Systems'
      ],
      github: 'https://github.com/SRIRANJANJEV',
      linkedin: 'https://www.linkedin.com/in/s-sri-ranjan-1a7079362/',
      portfolio: 'https://s-sri-ranjan-o4ko952.gamma.site/'
    },
    {
      name: 'Saran Sivakumar',
      headline: 'ECE Student | Python Developer | AI & Automation Enthusiast | Aspiring Entrepreneur',
      bio: 'I\'m Saran Sivakumar, a second-year Electronics and Communication Engineering student at Knowledge Institute of Technology (KIOT), Salem, Tamil Nadu. I have a foundation in Python and C programming, along with web development. I\'m passionate about exploring Artificial Intelligence, Large Language Models (LLMs), AI agents, and intelligent automation to build practical solutions to real-world problems. My interests span AI-powered digital services, startup innovation, entrepreneurship, and the integration of electronics, IoT, and software technologies. I enjoy learning new technologies, experimenting with ideas, and turning concepts into useful digital products. My goal is to combine AI, software development, and ECE innovation to build impactful solutions, create meaningful digital experiences, and explore entrepreneurial opportunities.',
      skills: [
        'AI and Large Language Models',
        'AI Agents and Intelligent Automation',
        'Python and C Programming',
        'Web Development',
        'IoT and Embedded Systems',
        'Startups and Entrepreneurship',
        'AI-Powered Digital Services'
      ],
      github: '#',
      linkedin: '#'
    }
  ]

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2)
  }

  return (
    <div ref={sectionRef} id="founders" className="section">
      <div className="section-content">
        <h2>
          Meet the Founders
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
          Two student builders exploring the intersection of technology, security, and innovation
        </p>
        <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
          {founders.map((founder, index) => (
            <div key={index} className="whirl-card" style={{ textAlign: 'center' }}>
              {/* Avatar placeholder */}
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'white',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
              }}>
                {getInitials(founder.name)}
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{founder.name}</h3>
              <p style={{ fontSize: '0.95rem', color: '#3b82f6', marginBottom: '1.5rem', fontWeight: 500 }}>
                {founder.headline}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {founder.bio}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Core Interests
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                  {founder.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.4rem 0.8rem',
                        background: 'rgba(59, 130, 246, 0.15)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '20px',
                        color: 'rgba(255,255,255,0.9)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {founder.portfolio ? (
                  <a
                    href={founder.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.6rem 1.2rem',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: 'white',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <ExternalLink size={16} />
                    View Portfolio
                  </a>
                ) : (
                  <button
                    style={{
                      padding: '0.6rem 1.2rem',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: 'white',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <ExternalLink size={16} />
                    View Portfolio
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                {founder.github && founder.github !== '#' && (
                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      color: 'rgba(255,255,255,0.7)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#3b82f6'
                      e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                    }}
                    aria-label="GitHub"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
                {founder.linkedin && founder.linkedin !== '#' && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      color: 'rgba(255,255,255,0.7)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#3b82f6'
                      e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                    }}
                    aria-label="LinkedIn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
