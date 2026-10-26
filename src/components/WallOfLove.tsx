import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Star, MessageSquare, Send, Filter } from 'lucide-react'
import { supabase } from '../lib/supabase'

gsap.registerPlugin(ScrollTrigger)

interface Review {
  id: string
  display_name: string
  relationship: string
  rating: number
  title?: string
  review_text: string
  created_at: string
  published_at: string
}

export default function WallOfLove() {
  const heroRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)

  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [filterRating, setFilterRating] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    relationship: '',
    rating: 5,
    title: '',
    review: '',
    consent: false
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Update page title and meta tags
  useEffect(() => {
    document.title = 'Wall of Love - Client Reviews | VEDORA'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read genuine reviews and experiences from VEDORA\'s clients, collaborators, and community members. Share your own experience on our Wall of Love.')
    }
    return () => {
      document.title = 'VEDORA - Premium Technology Solutions'
      if (metaDescription) {
        metaDescription.setAttribute('content', 'VEDORA - Building premium technology solutions that drive innovation and transform businesses. Your trusted partner for enterprise software development and digital transformation.')
      }
    }
  }, [])

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

      if (subheadingRef.current) {
        gsap.from(subheadingRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out'
        })
      }

      if (buttonsRef.current) {
        gsap.from(buttonsRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.5,
          ease: 'power3.out'
        })
      }

      // Form section
      if (formRef.current) {
        gsap.from(formRef.current, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3
          }
        })
      }

      // Reviews section
      if (reviewsRef.current) {
        gsap.from(reviewsRef.current, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: reviewsRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3
          }
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Load reviews from Supabase
  useEffect(() => {
    const loadReviews = async () => {
      try {
        if (!supabase) {
          setReviews([])
          setLoading(false)
          return
        }

        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .eq('status', 'approved')
          .order('published_at', { ascending: false })

        if (error) throw error
        setReviews(data || [])
      } catch (error) {
        console.error('Error loading reviews:', error)
        // If Supabase is not configured, show empty state
        setReviews([])
      } finally {
        setLoading(false)
      }
    }

    loadReviews()
  }, [])

  const scrollToForm = () => {
    if (formRef.current) {
      const offset = 80
      const elementPosition = formRef.current.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  const scrollToReviews = () => {
    if (reviewsRef.current) {
      const offset = 80
      const elementPosition = reviewsRef.current.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus('idle')
    setErrorMessage('')

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.review.trim()) {
      setErrorMessage('Please fill in all required fields.')
      setStatus('error')
      setSubmitting(false)
      return
    }

    if (formData.review.length < 20 || formData.review.length > 1000) {
      setErrorMessage('Review must be between 20 and 1,000 characters.')
      setStatus('error')
      setSubmitting(false)
      return
    }

    if (!formData.consent) {
      setErrorMessage('Please agree to the review publication terms.')
      setStatus('error')
      setSubmitting(false)
      return
    }

    try {
      if (!supabase) {
        setErrorMessage('Review submission is not available. Supabase credentials need to be configured.')
        setStatus('error')
        setSubmitting(false)
        return
      }

      const { error } = await supabase
        .from('reviews')
        .insert({
          display_name: formData.name.trim(),
          email: formData.email.trim(),
          relationship: formData.relationship || null,
          rating: formData.rating,
          title: formData.title.trim() || null,
          review_text: formData.review.trim(),
          status: 'pending'
        })

      if (error) throw error

      setStatus('success')
      setSubmitting(false)
      setFormData({
        name: '',
        email: '',
        relationship: '',
        rating: 5,
        title: '',
        review: '',
        consent: false
      })
    } catch (error) {
      console.error('Error submitting review:', error)
      setErrorMessage('Failed to submit review. Please try again.')
      setStatus('error')
      setSubmitting(false)
    }
  }

  const filteredReviews = filterRating
    ? reviews.filter(review => review.rating === filterRating)
    : reviews

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={interactive ? 24 : 16}
            fill={star <= rating ? '#3b82f6' : 'none'}
            color={star <= rating ? '#3b82f6' : 'rgba(255, 255, 255, 0.3)'}
            style={{
              cursor: interactive ? 'pointer' : 'default',
              transition: interactive ? 'transform 0.2s ease' : 'none'
            }}
            onMouseEnter={interactive ? () => onRatingChange?.(star) : undefined}
            onClick={interactive ? () => onRatingChange?.(star) : undefined}
          />
        ))}
      </div>
    )
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
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
          Words That Mean Something
        </div>

        <h1 ref={headingRef} style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 700,
          color: 'white',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Made Better by the People We Meet.
        </h1>

        <p ref={subheadingRef} style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(255, 255, 255, 0.7)',
          maxWidth: '700px',
          marginBottom: '3rem',
          lineHeight: 1.7
        }}>
          Every conversation, collaboration, and piece of feedback helps us grow. This is a space for people to share their experiences with VEDORA.
        </p>

        <div ref={buttonsRef} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={scrollToForm}
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
            <Send size={20} />
            Share Your Experience
          </button>
          <button
            onClick={scrollToReviews}
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
            <MessageSquare size={20} />
            Explore Reviews
          </button>
        </div>
      </div>

      {/* Review Submission Form */}
      <div ref={formRef} style={{
        padding: '6rem 2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '3rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>
            Share Your Experience
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.6)',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Your feedback helps us improve and grow.
          </p>

          {status === 'success' ? (
            <div style={{
              padding: '2rem',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <MessageSquare size={48} style={{ color: '#3b82f6', marginBottom: '1rem', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>
                Thank You!
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                Your review has been submitted for moderation and will appear on the Wall of Love after approval.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#3b82f6'
                      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#3b82f6'
                      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                  Your Relationship with VEDORA (Optional)
                </label>
                <select
                  value={formData.relationship}
                  onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#3b82f6'
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="Client">Client</option>
                  <option value="Project Collaborator">Project Collaborator</option>
                  <option value="Business or Promotion Partner">Business or Promotion Partner</option>
                  <option value="Community Member">Community Member</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                  Rating *
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {renderStars(formData.rating, true, (rating) => setFormData({ ...formData, rating }))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                  Review Title (Optional - Max 100 characters)
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => {
                    if (e.target.value.length <= 100) {
                      setFormData({ ...formData, title: e.target.value })
                    }
                  }}
                  placeholder="Brief summary of your experience"
                  maxLength={100}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#3b82f6'
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  }}
                />
                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', marginTop: '0.25rem' }}>
                  {formData.title.length}/100 characters
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                  Your Experience * (20-1,000 characters)
                </label>
                <textarea
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  placeholder="Tell us about your experience with VEDORA..."
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem',
                    resize: 'vertical',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#3b82f6'
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  }}
                />
                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', marginTop: '0.25rem' }}>
                  {formData.review.length}/1,000 characters
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px'
              }}>
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  required
                  style={{
                    marginTop: '0.25rem',
                    width: '18px',
                    height: '18px',
                    cursor: 'pointer'
                  }}
                />
                <label htmlFor="consent" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, cursor: 'pointer' }}>
                  I confirm that this review reflects my genuine experience, and I agree to its publication on VEDORA's Wall of Love if approved.
                </label>
              </div>

              {status === 'error' && (
                <div style={{
                  padding: '1rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '8px',
                  color: '#ef4444',
                  fontSize: '0.9rem'
                }}>
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'white',
                  background: submitting ? 'rgba(59, 130, 246, 0.5)' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  border: 'none',
                  borderRadius: '9999px',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
                  transition: 'all 0.3s ease',
                  opacity: submitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!submitting) {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 30px rgba(59, 130, 246, 0.6)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!submitting) {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.4)'
                  }
                }}
              >
                {submitting ? (
                  <>
                    <span style={{ animation: 'spin 1s linear infinite' }}>⏳</span>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Review
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Reviews Display */}
      <div ref={reviewsRef} style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '6rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '0.5rem'
            }}>
              Public Reviews
            </h2>
            {!loading && reviews.length > 0 && (
              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                {reviews.length} review{reviews.length !== 1 ? 's' : ''} · Average rating: {averageRating.toFixed(1)}/5
              </p>
            )}
          </div>

          {reviews.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Filter size={18} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
              <select
                value={filterRating || ''}
                onChange={(e) => setFilterRating(e.target.value ? parseInt(e.target.value) : null)}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '0.9rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
          )}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Loading reviews...</p>
          </div>
        ) : filteredReviews.length === 0 ? (
          <div style={{
            padding: '4rem 2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <MessageSquare size={64} style={{ color: 'rgba(255, 255, 255, 0.2)', marginBottom: '1.5rem', margin: '0 auto 1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem' }}>
              No stories here just yet.
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Be among the first to share your experience with VEDORA.
            </p>
            <button
              onClick={scrollToForm}
              style={{
                padding: '0.875rem 2rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'white',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                border: 'none',
                borderRadius: '9999px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
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
              <Send size={20} />
              Share Your Experience
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredReviews.map((review) => (
              <div key={review.id} style={{
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
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'white',
                    flexShrink: 0
                  }}>
                    {getInitials(review.display_name)}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: '0.25rem' }}>
                      {review.display_name}
                    </h3>
                    {review.relationship && (
                      <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '0.5rem' }}>
                        {review.relationship}
                      </p>
                    )}
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.4)' }}>
                      {formatDate(review.published_at)}
                    </div>
                  </div>
                </div>

                {renderStars(review.rating)}

                {review.title && (
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'white', marginTop: '1rem', marginBottom: '0.75rem' }}>
                    {review.title}
                  </h4>
                )}

                <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, marginTop: '1rem' }}>
                  {review.review_text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
