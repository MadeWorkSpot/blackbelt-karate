import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/karateData';
import LightboxModal from './LightboxModal';
import { Maximize2, Camera } from 'lucide-react';

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleOpenLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="section-padding" style={{ background: '#0a0b0e', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <Camera size={16} /> Action Gallery & Dojo Moments
          </div>
          <h2 className="section-title">
            CAPTURING THE <span className="text-red">SPIRIT OF KARATE</span>
          </h2>
          <p className="section-subtitle">
            Explore moments of discipline, tournament victories, kata forms, and belt graduation ceremonies at Black Belt Karate Academy.
          </p>
        </div>

        {/* Gallery Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.75rem'
        }}>
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                cursor: 'pointer',
                height: '280px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              className="gallery-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.5)';
                const overlay = e.currentTarget.querySelector('.gallery-overlay');
                if (overlay) overlay.style.opacity = '1';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
                const overlay = e.currentTarget.querySelector('.gallery-overlay');
                if (overlay) overlay.style.opacity = '0';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              {/* Photo Image */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />

              {/* Zoom Icon Top Right */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: '#dc2626',
                color: '#fff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.6)'
              }}>
                <Maximize2 size={16} />
              </div>

              {/* Hover Dark Overlay Details */}
              <div
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 11, 14, 0.95) 0%, rgba(10, 11, 14, 0.4) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <h3 style={{
                  fontSize: '1.15rem',
                  color: '#ffffff',
                  marginBottom: '0.35rem',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.2
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.825rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.4,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {item.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                  fontSize: '0.75rem',
                  color: 'var(--accent-gold)',
                  fontWeight: 700
                }}>
                  Click to Open Fullscreen Lightbox →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Render */}
      {selectedImageIndex !== null && (
        <LightboxModal
          item={GALLERY_ITEMS[selectedImageIndex]}
          totalItems={GALLERY_ITEMS.length}
          currentIndex={selectedImageIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
