import React from 'react';
import { Award, Users, Trophy, Flame } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: <Award size={32} color="#dc2626" />, value: '15+', label: 'Years of Excellence', sub: 'Established Dojo 2011' },
    { icon: <Users size={32} color="#f59e0b" />, value: '500+', label: 'Black Belts Graduated', sub: 'From White to 1st Dan' },
    { icon: <Trophy size={32} color="#dc2626" />, value: '120+', label: 'Championship Medals', sub: 'State & National WKF' },
    { icon: <Flame size={32} color="#f59e0b" />, value: '100%', label: 'Dedicated Guidance', sub: 'Certified Sensei Board' },
  ];

  return (
    <section style={{ background: '#12141a', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '3.5rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(23, 25, 34, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '1.75rem 1.5rem',
                textAlign: 'center',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              }}
            >
              <div style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                fontFamily: 'var(--font-subheading)',
                color: '#ffffff',
                lineHeight: 1
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f3f4f6', margin: '0.5rem 0 0.25rem 0' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
