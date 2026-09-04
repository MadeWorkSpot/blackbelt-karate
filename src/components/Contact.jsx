import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, Check } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setContactData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: '#12141a', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <MapPin size={16} /> Dojo Location & Inquiries
          </div>
          <h2 className="section-title">
            VISIT OUR <span className="text-red">MARTIAL ARTS DOJO</span>
          </h2>
          <p className="section-subtitle">
            Have questions about belt testing, class schedules, or private lessons? Get in touch with our Sensei desk.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="contact-grid">
          {/* Left Dojo Info */}
          <div>
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '16px', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShieldCheck size={22} color="#f59e0b" /> Black Belt Headquarters
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(220, 38, 38, 0.15)', padding: '0.6rem', borderRadius: '8px' }}>
                    <MapPin size={20} color="#dc2626" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>Dojo Address</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      Kozhikode, Kerala, India
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(245, 158, 11, 0.15)', padding: '0.6rem', borderRadius: '8px' }}>
                    <Phone size={20} color="#f59e0b" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>Phone</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      +91 96455 94656
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(220, 38, 38, 0.15)', padding: '0.6rem', borderRadius: '8px' }}>
                    <Mail size={20} color="#dc2626" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>Email Inquiries</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      arjunbb441@gmail.com
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(245, 158, 11, 0.15)', padding: '0.6rem', borderRadius: '8px' }}>
                    <Clock size={20} color="#f59e0b" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>Dojo Operating Hours</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                      Mon - Fri: 04:00 PM - 09:00 PM <br />
                      Saturday: 08:30 AM - 02:00 PM <br />
                      Sunday: Closed for Master Training
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Send Us a Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Our Sensei team responds to all inquiries within 24 hours.
            </p>

            {sent ? (
              <div style={{
                background: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid #22c55e',
                color: '#ffffff',
                padding: '1.25rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <Check size={22} color="#22c55e" />
                <span>Your message has been sent successfully! OSS!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(10, 11, 14, 0.8)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '8px',
                        padding: '0.65rem 1rem',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(10, 11, 14, 0.8)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '8px',
                        padding: '0.65rem 1rem',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Belt Testing Eligibility"
                    value={contactData.subject}
                    onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(10, 11, 14, 0.8)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      padding: '0.65rem 1rem',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message or inquiry here..."
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(10, 11, 14, 0.8)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      padding: '0.65rem 1rem',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '0.85rem' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid { grid-template-columns: 0.9fr 1.1fr !important; }
        }
      `}</style>
    </section>
  );
}
