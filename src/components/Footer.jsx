import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Action Gallery', href: '#gallery' },
    { name: 'Weekly Schedule', href: '#schedule' },
    { name: 'Master Instructors', href: '#instructors' },
    { name: 'Membership Pricing', href: '#pricing' },
    { name: 'Contact Dojo', href: '#contact' },
  ];

  const dojoKun = [
    'Seek perfection of character.',
    'Be faithful.',
    'Endeavor to excel.',
    'Respect others.',
    'Refrain from violent behavior.',
  ];

  const s = {
    footer: {
      background: '#05070a',
      borderTop: '1px solid rgba(132, 204, 22, 0.35)',
      padding: '4rem 0 2rem 0',
      color: '#9ca3af',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1.25rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2.5rem',
      marginBottom: '3rem',
    },
    logoImg: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      border: '2px solid #84cc16',
      boxShadow: '0 0 14px rgba(132,204,22,0.4)',
      objectFit: 'cover',
      marginBottom: '1rem',
      display: 'block',
    },
    heading: {
      fontFamily: "'Cinzel', serif",
      fontSize: '1rem',
      fontWeight: 800,
      color: '#ffffff',
      marginBottom: '1.25rem',
      letterSpacing: '0.04em',
    },
    link: {
      display: 'block',
      color: '#9ca3af',
      textDecoration: 'none',
      fontSize: '0.875rem',
      marginBottom: '0.6rem',
      transition: 'color 0.2s ease',
    },
    bottom: {
      borderTop: '1px solid rgba(255,255,255,0.07)',
      paddingTop: '1.5rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '0.82rem',
    },
  };

  return (
    <footer style={s.footer}>
      <div style={s.container}>
        <div style={s.grid}>
          {/* Brand Column */}
          <div>
            <img src="logo.jpg" alt="Okinawa Shorin Kai Logo" style={s.logoImg} />
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', fontWeight: 900, color: '#fff', marginBottom: '0.25rem' }}>
              OKINAWA SHORIN KAI
            </div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', color: '#84cc16', marginBottom: '0.75rem' }}>
              BLACK BELT KARATE ACADEMY • 尚倫會
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.65 }}>
              Building martial arts champions of character, focus, strength, and discipline. Certified Okinawa Shorin Kai dojo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={s.heading}>QUICK LINKS</h4>
            {quickLinks.map(l => (
              <a key={l.name} href={l.href} style={s.link}
                onMouseEnter={e => (e.currentTarget.style.color = '#84cc16')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
              >
                {l.name}
              </a>
            ))}
          </div>

          {/* Programs */}
          <div>
            <h4 style={s.heading}>DOJO CURRICULUMS</h4>
            {[
              'Little Tigers Karate (Ages 4–7)',
              'Junior Warriors (Ages 8–12)',
              'Teens & Adults Black Belt Track',
              'WKF Elite Competition Kumite',
              "Women's Self-Defense Program",
              'Traditional Okinawan Kobudo',
            ].map((item, i) => (
              <div key={i} style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.55rem' }}>{item}</div>
            ))}
          </div>

          {/* Dojo Kun */}
          <div>
            <h4 style={s.heading}>DOJO KUN (5 RULES)</h4>
            <div style={{
              fontSize: '0.825rem',
              lineHeight: 1.8,
              background: 'rgba(255,255,255,0.03)',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.07)',
            }}>
              {dojoKun.map((rule, i) => (
                <div key={i}><span style={{ color: '#84cc16', fontWeight: 700 }}>{i + 1}.</span> {rule}</div>
              ))}
            </div>
            <div style={{ marginTop: '1rem', fontSize: '0.82rem', color: '#f59e0b' }}>
              空手道 — Character • Effort • Sincerity • Etiquette • Self-Control
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={s.bottom}>
          <div>
            © {currentYear} <strong style={{ color: '#fff' }}>Okinawa Shorin Kai Black Belt Karate Academy</strong>. All rights reserved.
          </div>
          <div style={{ color: '#84cc16', fontFamily: "'Oswald', sans-serif", letterSpacing: '0.08em' }}>
            尚倫會 • 沖縄空手道
          </div>
        </div>
      </div>
    </footer>
  );
}
