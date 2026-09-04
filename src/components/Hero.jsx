import React from 'react';
import { Award, ChevronRight, ShieldCheck, Play, Flame } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        background: `radial-gradient(circle at 70% 30%, rgba(220, 38, 38, 0.15) 0%, transparent 60%), 
                    radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                    #0a0b0e`,
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Overlay Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          {/* Left Column Content */}
          <div style={{ maxWidth: '680px' }}>
            <div className="section-tag" style={{ display: 'inline-flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <Flame size={16} color="#dc2626" /> Premier Shotokan & Competition Dojo
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              marginBottom: '1.5rem',
              letterSpacing: '0.02em',
              textTransform: 'uppercase'
            }}>
              MASTER THE ART OF <br />
              <span style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f59e0b 50%, #dc2626 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                DISCIPLINE & HONOR
              </span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              marginBottom: '2.5rem',
              lineHeight: 1.7
            }}>
              Welcome to <strong style={{ color: '#fff' }}>Black Belt Karate Academy</strong>. Building champions inside and outside the dojo.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '3rem' }}>
              <button onClick={onOpenBooking} className="btn-primary">
                Book Free Trial Class <ChevronRight size={18} />
              </button>
              <a href="#gallery" className="btn-secondary">
                Explore Gallery
              </a>
            </div>

            {/* Trust Badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'center',
              borderTop: '1px solid var(--border-light)',
              paddingTop: '1.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShieldCheck size={28} color="#f59e0b" />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>Certified WKF Affiliated</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Official International Dojo</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Award size={28} color="#dc2626" />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>500+ Black Belts</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Graduated Since 2010</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Visual Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{
              padding: '1.25rem',
              borderRadius: '20px',
              border: '1px solid rgba(220, 38, 38, 0.3)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '420px' }}>
                <img
                  src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=80"
                  alt="Black Belt Karate Master Kata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 11, 14, 0.95) 0%, transparent 60%)'
                }} />

                {/* Overlaid Live Card */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(20, 23, 31, 0.9)',
                  backdropFilter: 'blur(12px)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em' }}>
                      Next Belt Promotion
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>
                      Fall Belt Graduation 2026
                    </div>
                  </div>
                  <a href="#belts" className="btn-gold" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', borderRadius: '6px' }}>
                    View Ranks
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1.2fr 0.8fr !important; }
        }
      `}</style>
    </section>
  );
}
