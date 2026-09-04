import React from 'react';
import { PROGRAMS } from '../data/karateData';
import { Shield, Check, Users, ArrowRight } from 'lucide-react';

export default function Programs({ onOpenBooking }) {
  return (
    <section id="programs" className="section-padding" style={{ background: '#0a0b0e' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Users size={16} /> Structured Training Programs
          </div>
          <h2 className="section-title">
            KARATE FOR <span className="text-red">EVERY AGE & LEVEL</span>
          </h2>
          <p className="section-subtitle">
            Whether building motor focus in toddlers or training elite athletes for international kumite, we offer specialized curriculums.
          </p>
        </div>

        {/* Programs Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="glass-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative'
              }}
            >
              {/* Top Banner Image */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                  src={program.image}
                  alt={program.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(18, 20, 26, 1) 0%, transparent 70%)'
                }} />

                {/* Badge Tag */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#dc2626',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-subheading)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '6px',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 12px rgba(220, 38, 38, 0.5)'
                }}>
                  {program.badge}
                </div>

                {/* Age Pill */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '1.25rem',
                  background: 'rgba(10, 11, 14, 0.85)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  color: 'var(--accent-gold)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '6px'
                }}>
                  {program.ageGroup}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                  {program.title}
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {program.description}
                </p>

                {/* Feature Checklist */}
                <div style={{ marginTop: 'auto', marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-dim)', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                    Syllabus Highlights:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {program.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#e5e7eb' }}>
                        <Check size={16} color="#dc2626" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trial CTA Button */}
                <button
                  onClick={onOpenBooking}
                  className="btn-secondary"
                  style={{ width: '100%', fontSize: '0.875rem', padding: '0.75rem' }}
                >
                  Join This Class <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
