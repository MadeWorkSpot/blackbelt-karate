import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Calendar, Tag, Camera, Share2 } from 'lucide-react';

export default function LightboxModal({ item, totalItems, currentIndex, onClose, onPrev, onNext }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" style={{ zIndex: 1000, padding: 0 }}>
      {/* Background backdrop click to close */}
      <div
        style={{ position: 'absolute', inset: 0, cursor: 'pointer' }}
        onClick={onClose}
      />

      {/* Top Header Control Bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.25rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        zIndex: 10,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 100%)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            fontSize: '0.85rem',
            fontFamily: 'var(--font-subheading)',
            color: 'var(--accent-gold)',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px'
          }}>
            Photo {currentIndex + 1} of {totalItems}
          </span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            {item.title}
          </span>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            title="Toggle Zoom"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              padding: '0.5rem 0.8rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem'
            }}
          >
            {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
            <span style={{ display: 'none' }} className="btn-label">Zoom</span>
          </button>

          <button
            onClick={handleShare}
            title="Share Photo"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: copied ? '#22c55e' : '#fff',
              padding: '0.5rem 0.8rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem'
            }}
          >
            <Share2 size={18} />
            {copied ? 'Link Copied!' : 'Share'}
          </button>

          <button
            onClick={onClose}
            title="Close Lightbox (Esc)"
            style={{
              background: '#dc2626',
              border: 'none',
              color: '#fff',
              padding: '0.5rem 0.8rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 700
            }}
          >
            <X size={20} /> Close
          </button>
        </div>
      </div>

      {/* Main Image Display Area */}
      <div style={{
        position: 'relative',
        zIndex: 5,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        padding: '5rem 4rem 8rem 4rem'
      }}>
        {/* Navigation Arrow Previous */}
        <button
          onClick={onPrev}
          title="Previous Photo (Left Arrow)"
          style={{
            position: 'absolute',
            left: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(20, 23, 31, 0.85)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#dc2626';
            e.currentTarget.style.background = '#dc2626';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.background = 'rgba(20, 23, 31, 0.85)';
          }}
        >
          <ChevronLeft size={28} />
        </button>

        {/* Image Container */}
        <div style={{
          maxHeight: '100%',
          maxWidth: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: isZoomed ? 'auto' : 'hidden',
          borderRadius: '12px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.9)'
        }}>
          <img
            src={item.image}
            alt={item.title}
            style={{
              maxHeight: isZoomed ? 'none' : '75vh',
              maxWidth: isZoomed ? 'none' : '90vw',
              objectFit: 'contain',
              borderRadius: '8px',
              transition: 'transform 0.3s ease',
              transform: isZoomed ? 'scale(1.3)' : 'scale(1)'
            }}
          />
        </div>

        {/* Navigation Arrow Next */}
        <button
          onClick={onNext}
          title="Next Photo (Right Arrow)"
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(20, 23, 31, 0.85)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#dc2626';
            e.currentTarget.style.background = '#dc2626';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.background = 'rgba(20, 23, 31, 0.85)';
          }}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Bottom Photo Metadata Details Footer */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1.25rem 2rem',
        background: 'linear-gradient(to top, rgba(10,11,14,0.98) 0%, rgba(10,11,14,0.7) 80%, transparent 100%)',
        zIndex: 10,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justify: 'space-between',
        gap: '1rem',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)' }}>
            {item.title}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '700px' }}>
            {item.description}
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            <Camera size={14} color="#f59e0b" /> {item.photographer}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            <Calendar size={14} color="#dc2626" /> {item.date}
          </div>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {item.tags.map((tag) => (
              <span key={tag} style={{
                fontSize: '0.75rem',
                background: 'rgba(255,255,255,0.08)',
                color: 'var(--text-main)',
                padding: '2px 8px',
                borderRadius: '4px'
              }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
