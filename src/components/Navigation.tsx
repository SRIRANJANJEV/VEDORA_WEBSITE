import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Track active section for highlighting
      const sections = ['hero', 'services', 'solutions', 'projects', 'about', 'founders', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { name: 'Home', target: 'hero' },
    { name: 'About', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Solutions', target: 'solutions' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(10, 14, 26, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.4)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 2rem',
          height: '5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/logo.png"
            alt="VEDORA"
            style={{
              height: '2.5rem',
              width: 'auto',
              filter: 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.4))',
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            VEDORA
          </div>
        </div>

        {/* Desktop Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.125rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              style={{
                padding: '0.625rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: activeSection === link.target ? '#3b82f6' : 'rgba(255, 255, 255, 0.75)',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                position: 'relative',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b82f6'
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = activeSection === link.target ? '#3b82f6' : 'rgba(255, 255, 255, 0.75)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              {link.name}
              {activeSection === link.target && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: '2px',
                    backgroundColor: '#3b82f6',
                    borderRadius: '1px',
                    boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)',
                  }}
                />
              )}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            style={{
              marginLeft: '1.25rem',
              padding: '0.625rem 1.75rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'white',
              backgroundColor: '#2563eb',
              borderRadius: '9999px',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.5)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            padding: '0.5rem',
            color: 'white',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            display: 'block',
            backgroundColor: 'rgba(10, 14, 26, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
          className="mobile-menu"
        >
          <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.target)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.875rem 1.25rem',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: activeSection === link.target ? '#3b82f6' : 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#3b82f6'
                  e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = activeSection === link.target ? '#3b82f6' : 'rgba(255, 255, 255, 0.8)'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'center',
                padding: '0.875rem 2rem',
                marginTop: '1.25rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'white',
                backgroundColor: '#2563eb',
                borderRadius: '9999px',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3b82f6'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)'
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
