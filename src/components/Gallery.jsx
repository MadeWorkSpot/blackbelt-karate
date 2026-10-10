import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/karateData';
import LightboxModal from './LightboxModal';
import { Maximize2, Camera, ChevronDown, ChevronUp } from 'lucide-react';

const INITIAL_COUNT = 4;

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? GALLERY_ITEMS : GALLERY_ITEMS.slice(0, INITIAL_COUNT);
  const hiddenCount = GALLERY_ITEMS.length - INITIAL_COUNT;

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

  const handleImgError = (e) => {
    const img = e.currentTarget || e.target;
    if (!img) return;
    const currentSrc = img.getAttribute('src') || '';
    const retries = parseInt(img.dataset.retries || '0', 10);
    if (retries >= 3) return;
    img.dataset.retries = (retries + 1).toString();

    if (!currentSrc.includes('public/')) {
      img.src = 'public/' + currentSrc.replace(/^\//, '');
    } else {
      img.src = currentSrc.replace(/^\/?public\//, '');
    }
  };

  return (
    <section id="gallery" className="section-padding" style={{ background: '#0a0b0e', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <Camera size={16} /> Action Gallery &amp; Dojo Moments
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
          {visibleItems.map((item, index) => (
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
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: 'fadeInUp 0.4s ease both',
                animationDelay: `${(index % INITIAL_COUNT) * 0.05}s`
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
                onError={handleImgError}
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

        {/* Show More / Show Less */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.9rem 2.2rem',
                background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                color: '#fff',
                border: '1px solid rgba(220, 38, 38, 0.5)',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
                letterSpacing: '0.04em',
                boxShadow: '0 6px 24px rgba(220, 38, 38, 0.35)',
                transition: 'all 0.25s ease',
                fontFamily: 'var(--font-subheading)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 32px rgba(220, 38, 38, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(220, 38, 38, 0.35)';
              }}
            >
              <ChevronDown size={18} />
              View All {hiddenCount} More Photos
            </button>
          ) : (
            <button
              onClick={() => {
                setShowAll(false);
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.9rem 2.2rem',
                background: 'transparent',
                color: 'var(--text-muted)',
                border: '1px solid var(--border-light)',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                letterSpacing: '0.04em',
                transition: 'all 0.25s ease',
                fontFamily: 'var(--font-subheading)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.4)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              <ChevronUp size={18} />
              Show Less
            </button>
          )}

          <p style={{
            marginTop: '0.75rem',
            fontSize: '0.8rem',
            color: 'var(--text-dim)',
            letterSpacing: '0.03em'
          }}>
            Showing {visibleItems.length} of {GALLERY_ITEMS.length} photos
          </p>
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

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}


