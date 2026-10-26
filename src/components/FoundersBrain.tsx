import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Users, Code, Zap, Rocket, Brain, Lightbulb, ClipboardCheck, Cpu, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function FoundersBrain() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const aiRef = useRef<HTMLDivElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      if (heroRef.current) {
        gsap.from(heroRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out'
        })
      }

      // Feature cards animation
      if (featuresRef.current) {
        const cards = featuresRef.current.querySelectorAll('.feature-card')
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3
          }
        })
      }

      // AI section animation
      if (aiRef.current) {
        const aiCards = aiRef.current.querySelectorAll('.ai-card')
        gsap.from(aiCards, {
          opacity: 0,
          scale: 0.95,
          stagger: 0.1,
          scrollTrigger: {
            trigger: aiRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3
          }
        })
      }

      // Status section animation
      if (statusRef.current) {
        gsap.from(statusRef.current, {
          opacity: 0,
          y: 30,
          scrollTrigger: {
            trigger: statusRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3
          }
        })
      }

      // CTA section animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 30,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: Users,
      title: 'Find Your Co-Founder',
      description: 'Connect with aspiring founders and potential co-founders who share your vision, interests, and entrepreneurial ambitions.'
    },
    {
      icon: Code,
      title: 'Discover Builders',
      description: 'Find developers, designers, engineers, and other talented people who can help turn ideas into working products.'
    },
    {
      icon: Zap,
      title: 'Meet Executors',
      description: 'Connect with people who focus on implementation, operations, execution, and getting things done.'
    },
    {
      icon: Rocket,
      title: 'Build Your Startup Team',
      description: 'Discover collaborators and assemble teams around startup ideas, complementary skills, and shared goals.'
    }
  ]

  const aiAgents = [
    {
      icon: Lightbulb,
      title: 'Idea & Research Agent',
      description: 'Help explore startup ideas, research markets, and structure early-stage concepts.'
    },
    {
      icon: ClipboardCheck,
      title: 'Planning Agent',
      description: 'Help organize goals, break down tasks, and create actionable plans.'
    },
    {
      icon: Cpu,
      title: 'Building Agent',
      description: 'Assist with technical problem-solving, development workflows, and product iteration.'
    },
    {
      icon: Zap,
      title: 'Execution Agent',
      description: 'Help organize workflows, track priorities, and coordinate startup activities.'
    }
  ]

  return (
    <div ref={sectionRef} id="founders-brain" style={{
      position: 'relative',
      zIndex: 10,
      padding: '8rem 2rem',
      background: 'linear-gradient(180deg, transparent 0%, rgba(10, 14, 26, 0.5) 50%, transparent 100%)'
    }}>
      {/* Hero Section */}
      <div ref={heroRef} style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: '6rem'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '0.5rem 1.5rem',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '9999px',
          marginBottom: '2rem'
        }}>
          <span style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#3b82f6',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            VEDORA Startups
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          color: 'white',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Your Startup Needs More Than an Idea.
        </h1>

        <h2 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 600,
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '2rem',
          letterSpacing: '-0.01em'
        }}>
          Find Your People. Build Your Team. Bring Your Vision to Life.
        </h2>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(255, 255, 255, 0.7)',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: 1.8
        }}>
          Founders Brain is an upcoming collaborative workspace designed to bring founders, co-founders, builders, executors, and startup teams together. Discover people who share your ambition, form meaningful collaborations, and use powerful LLM-powered AI agents to help move your startup forward.
        </p>
      </div>

      {/* Platform Features */}
      <div ref={featuresRef} style={{
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '8rem'
      }}>
        <h3 style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
          fontWeight: 700,
          color: 'white',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          The Platform
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '2.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
              e.currentTarget.style.transform = 'translateY(-5px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
              }}>
                <feature.icon size={28} color="white" />
              </div>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: '1rem'
              }}>
                {feature.title}
              </h4>
              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.7
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Agents Section */}
      <div ref={aiRef} style={{
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '8rem'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '9999px',
            marginBottom: '2rem'
          }}>
            <Brain size={20} color="#8b5cf6" />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#8b5cf6',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              AI-Powered
            </span>
          </div>

          <h3 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '1.5rem'
          }}>
            Your Startup. Your Team. Your AI Advantage.
          </h3>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            Founders Brain aims to bring powerful large language model (LLM) agents into the startup-building process, helping founders think through challenges, explore ideas, organize work, and accelerate execution.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {aiAgents.map((agent, index) => (
            <div key={index} className="ai-card" style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '20px',
              padding: '2.5rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)'
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)'
              e.currentTarget.style.transform = 'translateY(-5px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)'
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />
              
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
                position: 'relative',
                zIndex: 1
              }}>
                <agent.icon size={28} color="white" />
              </div>
              
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: '1rem',
                position: 'relative',
                zIndex: 1
              }}>
                {agent.title}
              </h4>
              
              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.7,
                position: 'relative',
                zIndex: 1
              }}>
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Development Status */}
      <div ref={statusRef} style={{
        maxWidth: '800px',
        margin: '0 auto',
        marginBottom: '8rem'
      }}>
        <div style={{
          background: 'rgba(59, 130, 246, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: '24px',
          padding: '3rem',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.25rem',
            background: 'rgba(59, 130, 246, 0.2)',
            border: '1px solid rgba(59, 130, 246, 0.4)',
            borderRadius: '9999px',
            marginBottom: '2rem'
          }}>
            <Clock size={18} color="#3b82f6" />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#3b82f6',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Under Development
            </span>
          </div>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '1rem',
            lineHeight: 1.7
          }}>
            We're building Founders Brain to make startup collaboration more accessible and intelligent. The platform is currently under development and will be published when development is complete.
          </p>

          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.6)',
            fontStyle: 'italic'
          }}>
            The next big idea could start with the right people.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div ref={ctaRef} style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
          fontWeight: 700,
          color: 'white',
          marginBottom: '1.5rem'
        }}>
          The Future of Your Startup Starts With the Right Team.
        </h3>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(255, 255, 255, 0.7)',
          maxWidth: '700px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.8
        }}>
          Founders Brain is in development. We're working toward a collaborative workspace that brings people, ideas, execution, and AI together in one place.
        </p>

        <button
          disabled
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1rem',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.7)',
            background: 'rgba(59, 130, 246, 0.2)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '9999px',
            cursor: 'not-allowed',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Clock size={20} />
          Founders Brain — Coming Soon
        </button>
      </div>
    </div>
  )
}
