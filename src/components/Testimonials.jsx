import React from 'react';
import { TESTIMONIALS } from '../data/karateData';
import { Star, Quote, Award } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ background: '#12141a', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Quote size={16} /> Student & Parent Reviews
          </div>
          <h2 className="section-title">
            VOICES OF OUR <span className="text-gold">BLACK BELT COMMUNITY</span>
          </h2>
          <p className="section-subtitle">
            Real stories of transformation, resilience, confidence, and achievement from our dojo family.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Rating Stars */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>

                <p style={{ fontSize: '1rem', color: '#f3f4f6', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.75rem' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{
                borderTop: '1px solid var(--border-light)',
                paddingTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                    {t.role}
                  </div>
                </div>

                <div style={{
                  fontSize: '0.75rem',
                  background: 'rgba(220, 38, 38, 0.15)',
                  border: '1px solid rgba(220, 38, 38, 0.3)',
                  color: '#dc2626',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  fontWeight: 700
                }}>
                  {t.belt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
