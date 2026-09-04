import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Gallery', href: '#gallery', badge: 'Featured' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Instructors', href: '#instructors' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const styles = {
    header: {
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 900,
      backgroundColor: isScrolled ? 'rgba(10, 12, 16, 0.96)' : 'rgba(10, 12, 16, 0.80)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: isScrolled
        ? '1px solid rgba(132, 204, 22, 0.4)'
        : '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'all 0.3s ease',
      padding: isScrolled ? '0.6rem 0' : '0.9rem 0',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      textDecoration: 'none',
    },
    logoImg: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      border: '2px solid #f59e0b',
      boxShadow: '0 0 18px rgba(132,204,22,0.5)',
      objectFit: 'cover',
    },
    brandTitle: {
      fontFamily: "'Cinzel', serif",
      fontSize: 'clamp(0.85rem, 2vw, 1.15rem)',
      fontWeight: 900,
      color: '#fff',
      lineHeight: 1,
      letterSpacing: '0.04em',
    },
    brandSub: {
      fontFamily: "'Oswald', sans-serif",
      fontSize: 'clamp(0.55rem, 1.2vw, 0.65rem)',
      letterSpacing: '0.18em',
      color: '#84cc16',
      textTransform: 'uppercase',
      marginTop: '2px',
    },
    navLink: {
      color: '#f3f4f6',
      textDecoration: 'none',
      fontFamily: "'Oswald', sans-serif",
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem',
    },
    badge: {
      fontSize: '0.65rem',
      background: '#84cc16',
      color: '#0b0d12',
      padding: '1px 6px',
      borderRadius: '4px',
      fontWeight: 800,
    },
    trialBtn: {
      background: 'linear-gradient(135deg, #a3e635 0%, #84cc16 50%, #4d7c0f 100%)',
      color: '#0b0d12',
      fontWeight: 800,
      fontFamily: "'Oswald', sans-serif",
      fontSize: '0.85rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '0.6rem 1.25rem',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(132,204,22,0.4)',
      transition: 'all 0.25s ease',
    },
    mobileBtn: {
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(132,204,22,0.35)',
      color: '#fff',
      padding: '0.5rem 0.8rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '1.2rem',
      lineHeight: 1,
    },
    drawer: {
      position: 'absolute',
      top: '100%',
      left: 0, right: 0,
      background: '#0d1017',
      borderBottom: '2px solid #84cc16',
      padding: '1.5rem 1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      boxShadow: '0 15px 30px rgba(0,0,0,0.9)',
      zIndex: 899,
    },
    drawerLink: {
      color: '#fff',
      textDecoration: 'none',
      fontFamily: "'Oswald', sans-serif",
      fontSize: '1.1rem',
      textTransform: 'uppercase',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '0.6rem',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Brand Logo */}
        <a href="#hero" style={styles.brand}>
          <img src="logo.jpg" alt="Okinawa Shorin Kai Logo" style={styles.logoImg} />
          <div>
            <div style={styles.brandTitle}>OKINAWA SHORIN KAI</div>
            <div style={styles.brandSub}>BLACK BELT KARATE ACADEMY • 尚倫會</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="navbar-desktop">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} style={styles.navLink}>
              {link.name}
              {link.badge && <span style={styles.badge}>{link.badge}</span>}
            </a>
          ))}
          <button onClick={onOpenBooking} style={styles.trialBtn}>
            Free Trial Class
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={styles.mobileBtn}
          className="navbar-mobile-btn"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div style={styles.drawer}>
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={styles.drawerLink}
            >
              {link.name}
              {link.badge && (
                <span style={{ ...styles.badge, fontSize: '0.7rem', padding: '2px 7px' }}>
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onOpenBooking(); }}
            style={{ ...styles.trialBtn, width: '100%', padding: '0.85rem', fontSize: '1rem', borderRadius: '8px' }}
          >
            Book Free Trial Class
          </button>
        </div>
      )}

      {/* Responsive Switch */}
      <style>{`
        .navbar-desktop { display: flex !important; }
        .navbar-mobile-btn { display: none !important; }
        @media (max-width: 900px) {
          .navbar-desktop { display: none !important; }
          .navbar-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
