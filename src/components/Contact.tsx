import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Mail, Send, Phone, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [status, setStatus] = useState('')

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

      // Form fades in with scale
      gsap.from(formRef.current, {
        scale: 0.9,
        opacity: 0,
        y: 30,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          end: 'top 50%',
          scrub: 0.3, // Reduced for smoother performance
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:vedorabuildofficial@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AProject Details:%0D%0A${formData.message}`
    window.location.href = mailtoLink
    setStatus('Thank you for your message! We will respond within 16 hours.')
    setTimeout(() => setStatus(''), 5000)
  }

  return (
    <div ref={sectionRef} id="contact" className="section" style={{ minHeight: '100vh' }}>
      <div className="section-content">
        <h2>
          Get In Touch
        </h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)' }}>
          Ready to start your project? Contact us for a free consultation. We'll discuss your requirements, timeline, and how we can help achieve your goals.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Contact Information */}
          <div>
            <div className="whirl-card" style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Mail size={24} style={{ color: '#3b82f6' }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Email</div>
                    <div style={{ fontSize: '1rem' }}>vedorabuildofficial@gmail.com</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Phone size={24} style={{ color: '#3b82f6' }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Phone</div>
                    <div style={{ fontSize: '1rem' }}>+91 9840468688</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <MapPin size={24} style={{ color: '#3b82f6' }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Location</div>
                    <div style={{ fontSize: '1rem' }}>India, Tamilnadu, Salem</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="whirl-card">
              <h3 style={{ marginBottom: '1rem' }}>Frequently Asked Questions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#3b82f6' }}>What is your typical project timeline?</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                    Project timelines vary based on scope and complexity. We provide detailed estimates during the discovery phase and work with you to establish realistic milestones.
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#3b82f6' }}>Do you work with startups?</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                    Yes, we work with companies of all sizes. We offer flexible engagement models and can adapt to your budget and timeline requirements.
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#3b82f6' }}>What technologies do you specialize in?</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                    We specialize in modern web technologies including React, Node.js, Python, Java, and Go. We work with cloud platforms like AWS, Azure, and GCP, and databases including PostgreSQL, MongoDB, and Redis.
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#3b82f6' }}>Do you provide ongoing support?</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                    Yes, we offer maintenance and support packages with flexible options. Support includes bug fixes, security updates, and assistance with feature enhancements.
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#3b82f6' }}>How do you handle intellectual property?</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                    All work product and intellectual property created during our engagement belongs to you. We use standard agreements that clearly assign IP rights to our clients.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="whirl-card">
            <h3 style={{ marginBottom: '1.5rem' }}>Send Us a Message</h3>
            <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              We will respond within 16 hours
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                  Phone Number (with Country Code) *
                </label>
                <input
                  type="tel"
                  placeholder="+91 9840468688"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                  Company (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                  Project Details *
                </label>
                <textarea
                  placeholder="Tell us about your project, timeline, and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem',
                    resize: 'vertical',
                    outline: 'none',
                  }}
                />
              </div>
              <button
                type="submit"
                className="hero-cta"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}
              >
                <Send size={20} />
                Send Message
              </button>
              {status && (
                <p style={{ textAlign: 'center', color: '#3b82f6', fontSize: '0.9rem', padding: '0.75rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px' }}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}