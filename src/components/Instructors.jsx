import React from 'react';
import { INSTRUCTORS } from '../data/karateData';
import { Shield, Award, Sparkles } from 'lucide-react';

export default function Instructors() {
  return (
    <section id="instructors" className="section-padding" style={{ background: '#0a0b0e' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Shield size={16} /> Certified Master Instructors
          </div>
          <h2 className="section-title">
            LEARN FROM <span className="text-red">WORLD-CLASS SENSEIS</span>
          </h2>
          <p className="section-subtitle">
            Our teaching board comprises international champion competitors, traditional Okinawan Dan holders, and child development leaders.
          </p>
        </div>

        {/* Instructors Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem'
        }}>
          {INSTRUCTORS.map((ins, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Photo */}
              <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={ins.image}
                  alt={ins.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(18, 20, 26, 1) 0%, transparent 60%)'
                }} />

                {/* Rank Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.25rem',
                  background: '#dc2626',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-subheading)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '6px',
                  boxShadow: '0 4px 12px rgba(220, 38, 38, 0.5)'
                }}>
                  {ins.rank}
                </div>
              </div>

              {/* Bio Details */}
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                  {ins.name}
                </h3>
                <div style={{ fontSize: '0.875rem', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {ins.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>
                  {ins.experience}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {ins.bio}
                </p>

                <div style={{
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  color: '#fff'
                }}>
                  <Sparkles size={16} color="#f59e0b" />
                  <span>Specialty: <strong>{ins.specialty}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
