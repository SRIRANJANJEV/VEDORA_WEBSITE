import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { name: 'Home', target: '.hero-section' },
    { name: 'About', target: '.section:nth-of-type(4)' },
    { name: 'Services', target: '.section:nth-of-type(1)' },
    { name: 'Solutions', target: '.section:nth-of-type(2)' },
    { name: 'Projects', target: '.section:nth-of-type(3)' },
    { name: 'Founders', target: '.section:nth-of-type(5)' },
    { name: 'Contact', target: '.section:nth-of-type(6)' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s',
        backgroundColor: isScrolled ? 'rgba(10, 14, 26, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
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
              filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))',
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            VEDORA
          </div>
        </div>

        {/* Desktop Navigation */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.25rem',
          }}
          className="md-flex"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '0.5rem',
                transition: 'all 0.2s',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('.section:nth-of-type(6)')}
            style={{
              marginLeft: '1rem',
              padding: '0.5rem 1.5rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'white',
              backgroundColor: '#2563eb',
              borderRadius: '9999px',
              transition: 'all 0.2s',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb'
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
          className="md-hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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
            backgroundColor: 'rgba(10, 14, 26, 0.95)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          className="md-hidden"
        >
          <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '60vh', overflowY: 'auto' }}>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.target)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.75rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('.section:nth-of-type(6)')}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'center',
                padding: '0.75rem 1.5rem',
                marginTop: '1rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'white',
                backgroundColor: '#2563eb',
                borderRadius: '9999px',
                transition: 'all 0.2s',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3b82f6'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb'
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
