import { Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer
      style={{
        backgroundColor: '#0a0e1a',
        color: 'white',
        padding: '4rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            gap: '3rem',
          }}
          className="md-grid-cols-2 lg-grid-cols-4"
        >
          {/* Brand Section */}
          <div className="lg-col-span-2">
            <div style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              VEDORA
            </div>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '1.5rem',
                maxWidth: '20rem',
                lineHeight: 1.6,
              }}
            >
              Building premium technology solutions that drive innovation and transform businesses. Your trusted partner for enterprise software development and digital transformation.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="mailto:contact@vedora.com"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2563eb'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                }}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
                color: 'white',
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    transition: 'color 0.2s',
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    transition: 'color 0.2s',
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    transition: 'color 0.2s',
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solutions')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    transition: 'color 0.2s',
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    transition: 'color 0.2s',
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('founders')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    transition: 'color 0.2s',
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Founders
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    transition: 'color 0.2s',
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
                color: 'white',
              }}
            >
              Contact
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem' }}>
                vedorabuildofficial@gmail.com
              </li>
              <li style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem' }}>
                +91 9840468688
              </li>
              <li style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem' }}>
                India, Tamilnadu, Salem
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
            className="md-flex-row md-space-y-0"
          >
            <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.875rem' }}>
              © {currentYear} VEDORA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
