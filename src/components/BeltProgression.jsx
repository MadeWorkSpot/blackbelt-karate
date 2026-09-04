import React, { useState } from 'react';
import { BELT_RANKS } from '../data/karateData';
import { Shield, ChevronRight, Award, CheckCircle2, BookOpen } from 'lucide-react';

export default function BeltProgression() {
  const [selectedRankIndex, setSelectedRankIndex] = useState(0);
  const activeBelt = BELT_RANKS[selectedRankIndex];

  return (
    <section id="belts" className="section-padding" style={{ background: '#12141a', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Award size={16} /> Belt Rank System & Curriculum
          </div>
          <h2 className="section-title">
            THE PATH TO <span className="text-gold">BLACK BELT MASTERY</span>
          </h2>
          <p className="section-subtitle">
            Every master was once a beginner. Step through each belt rank to discover technical requirements, katas, and mental philosophy.
          </p>
        </div>

        {/* Belt Rank Selector Buttons Row */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          overflowX: 'auto',
          paddingBottom: '1rem',
          marginBottom: '2.5rem',
          justifyContent: 'flex-start',
          scrollbarWidth: 'thin'
        }} className="belt-scroll">
          {BELT_RANKS.map((belt, index) => {
            const isSelected = index === selectedRankIndex;
            return (
              <button
                key={belt.rank}
                onClick={() => setSelectedRankIndex(index)}
                style={{
                  flex: '0 0 auto',
                  background: isSelected ? 'rgba(23, 25, 34, 0.95)' : 'rgba(23, 25, 34, 0.4)',
                  border: isSelected ? '2px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '0.85rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 4px 20px rgba(245, 158, 11, 0.3)' : 'none'
                }}
              >
                {/* Belt Visual Color Swatch */}
                <div style={{
                  width: '28px',
                  height: '14px',
                  borderRadius: '3px',
                  backgroundColor: belt.color,
                  border: belt.border || '1px solid rgba(0,0,0,0.3)',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.5)'
                }} />
                <span style={{
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-subheading)',
                  fontWeight: 700,
                  color: isSelected ? '#ffffff' : 'var(--text-muted)',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
                }}>
                  {belt.rank}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Belt Detail Card */}
        <div className="glass-card" style={{
          padding: '2.5rem',
          borderRadius: '16px',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          background: 'linear-gradient(135deg, rgba(23, 25, 34, 0.9) 0%, rgba(14, 16, 22, 0.95) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Top Accent Ribbon */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundColor: activeBelt.color,
            borderBottom: activeBelt.border || 'none'
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="belt-grid">
            {/* Left Belt Summary */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: activeBelt.color,
                  border: activeBelt.border || '2px solid rgba(0,0,0,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                }}>
                  <Shield size={20} color={activeBelt.textColor} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.8rem', color: '#ffffff', lineHeight: 1.1, textTransform: 'uppercase' }}>
                    {activeBelt.rank}
                  </h3>
                  <div style={{ fontSize: '0.95rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-subheading)' }}>
                    {activeBelt.japanese}
                  </div>
                </div>
              </div>

              {/* Timeframe Pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-light)',
                padding: '0.4rem 1rem',
                borderRadius: '6px',
                fontSize: '0.875rem',
                color: 'var(--text-main)',
                marginBottom: '1.5rem'
              }}>
                <BookOpen size={16} color="#dc2626" /> Training Duration: <strong>{activeBelt.duration}</strong>
              </div>

              {/* Belt Philosophy Quote */}
              <blockquote style={{
                fontStyle: 'italic',
                color: 'var(--text-muted)',
                borderLeft: '3px solid #f59e0b',
                paddingLeft: '1rem',
                fontSize: '1rem',
                marginBottom: '1.5rem',
                background: 'rgba(245, 158, 11, 0.04)',
                padding: '0.75rem 1rem',
                borderRadius: '0 8px 8px 0'
              }}>
                "{activeBelt.motto}"
              </blockquote>
            </div>

            {/* Right Curriculum Requirements */}
            <div>
              <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={18} color="#dc2626" /> Required Grading Syllabus & Katas
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {activeBelt.requirements.map((req, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(10, 11, 14, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '8px',
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <CheckCircle2 size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: '#f3f4f6', fontWeight: 500 }}>
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .belt-grid { grid-template-columns: 1fr 1.2fr !important; }
        }
      `}</style>
    </section>
  );
}
