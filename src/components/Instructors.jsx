import React, { useState } from 'react';
import { INSTRUCTORS } from '../data/karateData';
import { Shield, ArrowUpRight, X } from 'lucide-react';

export default function Instructors() {
  const [selectedMaster, setSelectedMaster] = useState(null);

  const handleImgError = (e) => {
    const img = e.currentTarget || e.target;
    if (!img) return;
    const currentSrc = img.getAttribute('src') || '';
    const retries = parseInt(img.dataset.retries || '0', 10);
    if (retries >= 3) return;
    img.dataset.retries = (retries + 1).toString();

    if (retries === 0 && img.dataset.altSrc) {
      img.src = img.dataset.altSrc;
      return;
    }

    if (!currentSrc.includes('public/')) {
      img.src = 'public/' + currentSrc.replace(/^\//, '');
    } else {
      img.src = currentSrc.replace(/^\/?public\//, '');
    }
  };

  return (
    <section id="instructors" className="section-padding" style={{ background: '#080a0e', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag" style={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
            <Shield size={14} /> Traditional Lineage &amp; Leadership
          </div>
          <h2 className="section-title">
            MASTERS OF <span className="text-red">OUR DOJO</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '0.95rem' }}>
            Honoring our supreme Okinawan Grand Master in Japan, our Asian Director, and the Chief Master of Black Belt Karate Academy.
          </p>
        </div>

        {/* 3-Column Classic Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1180px',
          margin: '0 auto'
        }}>
          {INSTRUCTORS.map((master) => (
            <div
              key={master.id}
              className="glass-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                position: 'relative',
                background: 'rgba(15, 18, 26, 0.75)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = master.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              {/* Zone Ribbon Header */}
              <div style={{
                padding: '0.75rem 1.25rem',
                background: 'rgba(10, 12, 16, 0.85)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: master.badgeColor,
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-subheading)'
                }}>
                  {master.zoneTag}
                </span>
                <span style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-dim)',
                  fontWeight: 500
                }}>
                  {master.zone}
                </span>
              </div>

              {/* Image Area */}
              <div
                style={{
                  position: 'relative',
                  height: '380px',
                  overflow: 'hidden',
                  background: '#0d1017',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedMaster(master)}
              >
                <img
                  src={master.image}
                  data-alt-src={master.altImage}
                  onError={handleImgError}
                  alt={master.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: master.id === 'grand-master-kakinohana' ? 'contain' : 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.4s ease',
                    padding: master.id === 'grand-master-kakinohana' ? '0.75rem' : 0
                  }}
                />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: 'linear-gradient(to top, rgba(10, 12, 16, 0.95) 0%, rgba(10, 12, 16, 0.15) 50%, transparent 100%)'
                }} />

                {/* Rank Tag overlaid at bottom of photo */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  zIndex: 2
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '6px',
                    background: master.badgeBg,
                    border: `1px solid ${master.accent}`,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-subheading)',
                    letterSpacing: '0.04em'
                  }}>
                    {master.rank}
                  </div>
                </div>
              </div>

              {/* Clean & Elegant Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: master.accent, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    {master.role}
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    lineHeight: 1.25,
                    marginBottom: '0.5rem'
                  }}>
                    {master.name}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}>
                    {master.desc}
                  </p>
                </div>

                <div style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                    Okinawa Shorin-Kai
                  </span>
                  <button
                    onClick={() => setSelectedMaster(master)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: master.accent,
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    View Portrait <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Classic Master Lightbox */}
        {selectedMaster && (
          <div
            className="modal-overlay"
            style={{ padding: '1rem', zIndex: 1000 }}
            onClick={() => setSelectedMaster(null)}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '820px',
                width: '100%',
                background: '#0d1017',
                borderRadius: '16px',
                border: `1px solid ${selectedMaster.accent}`,
                boxShadow: '0 25px 60px rgba(0,0,0,0.9)',
                overflow: 'hidden'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMaster(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(20, 24, 34, 0.85)',
                  color: '#fff',
                  border: '1px solid var(--border-light)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                <X size={18} />
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                <div style={{
                  background: '#080a0e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.25rem',
                  minHeight: '400px'
                }}>
                  <img
                    src={selectedMaster.image}
                    data-alt-src={selectedMaster.altImage}
                    onError={handleImgError}
                    alt={selectedMaster.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '480px',
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }}
                  />
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    background: selectedMaster.badgeBg,
                    color: selectedMaster.badgeColor,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                    alignSelf: 'flex-start'
                  }}>
                    {selectedMaster.zoneTag}
                  </span>

                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#fff', marginBottom: '0.25rem' }}>
                    {selectedMaster.name}
                  </h3>
                  <div style={{ color: selectedMaster.accent, fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {selectedMaster.rank}
                  </div>

                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>
                    {selectedMaster.role} • {selectedMaster.zone}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {selectedMaster.desc}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.85rem', fontSize: '0.8rem', color: 'var(--accent-gold)' }}>
                    Okinawa Karate Do Shorin Ryu Shorin Kai
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
