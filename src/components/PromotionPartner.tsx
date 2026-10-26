import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ExternalLink, Shield, Trophy, Users, Award, Code, Terminal, Database, Lock, Globe, Zap, Link as LinkIcon } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function PromotionPartner() {
  const heroRef = useRef<HTMLDivElement>(null)

  // Update page title and meta tags
  useEffect(() => {
    document.title = 'Meet Our Promotion Partner - Aarav Shah | VEDORA'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet Aarav Shah, VEDORA\'s Promotion Partner. A cybersecurity enthusiast, security researcher, and ethical hacker with expertise in web application security, penetration testing, and bug bounty hunting.')
    }
    return () => {
      document.title = 'VEDORA - Premium Technology Solutions'
      if (metaDescription) {
        metaDescription.setAttribute('content', 'VEDORA - Building premium technology solutions that drive innovation and transform businesses. Your trusted partner for enterprise software development and digital transformation.')
      }
    }
  }, [])
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const introRef = useRef<HTMLParagraphElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const recognitionsRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const communityRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      if (eyebrowRef.current) {
        gsap.from(eyebrowRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out'
        })
      }

      if (headingRef.current) {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out'
        })
      }

      if (taglineRef.current) {
        gsap.from(taglineRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out'
        })
      }

      if (introRef.current) {
        gsap.from(introRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.5,
          ease: 'power3.out'
        })
      }

      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          delay: 0.6,
          ease: 'power3.out'
        })
      }

      if (buttonsRef.current) {
        gsap.from(buttonsRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.7,
          ease: 'power3.out'
        })
      }

      // Timeline section
      if (timelineRef.current) {
        gsap.from(timelineRef.current, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3
          }
        })
      }

      // Recognitions section
      if (recognitionsRef.current) {
        gsap.from(recognitionsRef.current, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: recognitionsRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3
          }
        })
      }

      // Project section
      if (projectRef.current) {
        gsap.from(projectRef.current, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: projectRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3
          }
        })
      }

      // Skills section
      if (skillsRef.current) {
        gsap.from(skillsRef.current, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3
          }
        })
      }

      // Community section
      if (communityRef.current) {
        gsap.from(communityRef.current, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: communityRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3
          }
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToProject = () => {
    if (projectRef.current) {
      const offset = 80
      const elementPosition = projectRef.current.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div ref={heroRef} style={{ minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      {/* Hero Section */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 2rem 4rem',
        textAlign: 'center'
      }}>
        <div ref={eyebrowRef} style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#3b82f6',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem'
        }}>
          Meet Our Promotion Partner
        </div>

        <h1 ref={headingRef} style={{
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          fontWeight: 700,
          color: 'white',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Aarav Shah
        </h1>

        <p ref={taglineRef} style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(255, 255, 255, 0.85)',
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          Cybersecurity Enthusiast · Security Researcher · Ethical Hacker
        </p>

        <p ref={introRef} style={{
          fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
          color: 'rgba(255, 255, 255, 0.7)',
          maxWidth: '800px',
          marginBottom: '2.5rem',
          lineHeight: 1.7
        }}>
          A Computer Engineering undergraduate passionate about cybersecurity, ethical hacking, and web development. Aarav focuses on building secure digital systems and solving real-world security challenges through innovation and responsible security research.
        </p>

        <div ref={badgeRef} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.625rem 1.5rem',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '9999px',
          marginBottom: '2.5rem',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)'
        }}>
          <Shield size={18} style={{ color: '#3b82f6' }} />
          <span style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#3b82f6',
            letterSpacing: '0.05em'
          }}>
            PROMOTION PARTNER — VEDORA
          </span>
        </div>

        <div ref={buttonsRef} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="https://github.com/aaravshah1311"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.875rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'white',
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              border: 'none',
              borderRadius: '9999px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 30px rgba(59, 130, 246, 0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.4)'
            }}
          >
            <LinkIcon size={20} />
            View GitHub Profile
          </a>
          <button
            onClick={scrollToProject}
            style={{
              padding: '0.875rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'white',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '9999px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
            }}
          >
            <Terminal size={20} />
            Explore His Project
          </button>
        </div>
      </div>

      {/* Professional Profile Section */}
      <div style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'white',
          textAlign: 'center',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Professional Profile
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.7)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto 4rem',
          lineHeight: 1.7
        }}>
          Aarav Shah is a Computer Engineering undergraduate with deep expertise in cybersecurity, ethical hacking, penetration testing, and web development.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { icon: Lock, title: 'Ethical Hacking', desc: 'Responsible security research and vulnerability assessment' },
            { icon: Shield, title: 'Web Application Security', desc: 'Securing web applications against common threats' },
            { icon: Globe, title: 'Penetration Testing', desc: 'Comprehensive security testing and risk assessment' },
            { icon: Zap, title: 'Security Research', desc: 'Exploring emerging threats and defense mechanisms' },
            { icon: Award, title: 'Bug Bounty Hunting', desc: 'Finding and reporting vulnerabilities responsibly' },
            { icon: Code, title: 'Web Development', desc: 'Building secure and scalable web applications' }
          ].map((item, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
            }}
            >
              <item.icon size={32} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div ref={timelineRef} style={{
        padding: '6rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'white',
          textAlign: 'center',
          marginBottom: '4rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Experience & Leadership
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {[
            {
              role: 'Security Researcher',
              company: 'BugBase',
              period: '2024 – Present',
              achievements: [
                'Global Rank #25 with 100% success rate',
                'Reported impactful vulnerabilities to major companies'
              ]
            },
            {
              role: 'Founder & Community Manager',
              company: '0xRA Hacker Community',
              period: '2025 – Present',
              achievements: [
                'Built and manages a 3,500+ member cybersecurity community',
                'Mentors beginners in ethical hacking and bug bounty hunting'
              ]
            },
            {
              role: 'Cybersecurity Lead',
              company: 'GDG SVIT',
              period: '2025 – Present',
              achievements: [
                'Speaker at Cloud.Secure on OWASP Top 10 and live exploitation',
                'Demonstrated live vulnerability discovery in the GTU portal'
              ]
            }
          ].map((item, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              position: 'relative',
              paddingLeft: '3rem'
            }}>
              <div style={{
                position: 'absolute',
                left: '1.5rem',
                top: '2rem',
                width: '12px',
                height: '12px',
                background: '#3b82f6',
                borderRadius: '50%',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
              }} />
              <div style={{
                position: 'absolute',
                left: '1.56rem',
                top: '2.5rem',
                width: '2px',
                height: 'calc(100% - 1rem)',
                background: 'linear-gradient(to bottom, #3b82f6, transparent)'
              }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>
                {item.role}
              </h3>
              <p style={{ fontSize: '1rem', color: '#3b82f6', marginBottom: '0.5rem', fontWeight: 500 }}>
                {item.company}
              </p>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '1.5rem' }}>
                {item.period}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {item.achievements.map((achievement, i) => (
                  <li key={i} style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    lineHeight: 1.6
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#3b82f6'
                    }}>
                      •
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Hall of Fame & Recognitions */}
      <div ref={recognitionsRef} style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'white',
          textAlign: 'center',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Hall of Fame & Recognitions
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.7)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto 4rem',
          lineHeight: 1.7
        }}>
          Recognized by leading organizations for responsible security research and vulnerability disclosure.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            { company: 'PhonePe', achievement: 'Hall of Fame | $250 Bounty for Responsible Disclosure' },
            { company: 'TATA Motors', achievement: 'Listed in Official Hall of Fame' },
            { company: 'Airmeet', achievement: 'Honored for Security Research' },
            { company: 'Defronix Security', achievement: 'Appreciation letter for finding vulnerability in LEA-based application' },
            { company: 'Acko', achievement: 'Honored for Security Research' },
            { company: 'SVIT Cybersecurity Champions', achievement: 'Recognized for campus security achievements' }
          ].map((item, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '1.75rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              <Trophy size={24} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem' }}>
                {item.company}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                {item.achievement}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(59, 130, 246, 0.08)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.5rem', fontWeight: 600 }}>
            Private Invitations
          </p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6 }}>
            Invited by PhonePe, HDFC Bank, VI, ClearTax, Locus, Hike, and Flipkart for security programs.
          </p>
        </div>
      </div>

      {/* Featured Project - Agent-2 */}
      <div ref={projectRef} style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'white',
          textAlign: 'center',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Featured Project: Agent-2
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.7)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto 4rem',
          lineHeight: 1.7
        }}>
          An autonomous AI agentic harness built to code anything, automate terminals, perform cybersecurity tasks, and execute complex real-world workflows.
        </p>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '3rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <Terminal size={32} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem' }}>
                Purpose
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                Autonomous AI agent that turns simple prompts into autonomous execution for coding, terminal automation, and cybersecurity tasks.
              </p>
            </div>
            <div>
              <Database size={32} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem' }}>
                Architecture
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                Built with Python 3.9+, Flask for Web UI, SQLite for state management, and Google Gemini AI models.
              </p>
            </div>
            <div>
              <Code size={32} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem' }}>
                Key Features
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                18 agent tools, three surfaces (CLI, Web UI, Dual), memory management, and Git awareness for seamless workflow automation.
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a
              href="https://github.com/aaravshah1311/Agent-2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.875rem 2rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'white',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                border: 'none',
                borderRadius: '9999px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 30px rgba(59, 130, 246, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.4)'
              }}
            >
              <LinkIcon size={20} />
              Explore Project on GitHub
            </a>
            <a
              href="https://agent2.is-best.net"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.875rem 2rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'white',
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '9999px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
              }}
            >
              <ExternalLink size={20} />
              View Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Cybersecurity Expertise */}
      <div ref={skillsRef} style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'white',
          textAlign: 'center',
          marginBottom: '4rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Cybersecurity Expertise
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={24} style={{ color: '#3b82f6' }} />
              Cybersecurity
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Ethical Hacking', 'Web Application Security', 'Penetration Testing', 'Vulnerability Research', 'Bug Bounty Hunting'].map((skill, index) => (
                <div key={index} style={{
                  padding: '0.875rem 1.25rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code size={24} style={{ color: '#3b82f6' }} />
              Development
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Web Development', 'Python', 'JavaScript', 'Flask', 'HTML/CSS'].map((skill, index) => (
                <div key={index} style={{
                  padding: '0.875rem 1.25rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Community & Speaking */}
      <div ref={communityRef} style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '6rem'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'white',
          textAlign: 'center',
          marginBottom: '4rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Community & Speaking
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <Users size={32} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem' }}>
              0xRA Hacker Community
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem', lineHeight: 1.6 }}>
              Founder and Community Manager of a cybersecurity community with 3,500+ members. Mentors beginners in ethical hacking and bug bounty hunting.
            </p>
            <a
              href="https://github.com/aaravshah1311"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#3b82f6',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#60a5fa'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#3b82f6'
              }}
            >
              <LinkIcon size={16} />
              Learn More
            </a>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <Award size={32} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem' }}>
              GDG SVIT
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem', lineHeight: 1.6 }}>
              Cybersecurity Lead at Google Developer Group SVIT. Speaker at Cloud.Secure on OWASP Top 10 and live exploitation demonstrations.
            </p>
            <a
              href="https://github.com/aaravshah1311"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#3b82f6',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#60a5fa'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#3b82f6'
              }}
            >
              <ExternalLink size={16} />
              Learn More
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '2rem' }}>
            Connect with Aarav
          </h3>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {[
              { icon: LinkIcon, href: 'https://github.com/aaravshah1311', label: 'GitHub' },
              { icon: ExternalLink, href: 'https://www.linkedin.com/in/aaravshah1311', label: 'LinkedIn' },
              { icon: ExternalLink, href: 'https://bugbase.ai/profile/aaravrudra0806', label: 'BugBase' },
              { icon: Globe, href: 'https://aaravshah1311.is-great.net', label: 'Portfolio' }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.875rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
                }}
                aria-label={link.label}
              >
                <link.icon size={18} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
