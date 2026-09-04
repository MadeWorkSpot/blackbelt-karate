import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Shield, Flame, User, Phone, Mail } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    program: 'little-tigers',
    preferredDay: 'Monday Evening (05:30 PM)',
    experience: 'Beginner (White Belt / New)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" style={{ zIndex: 1100 }}>
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '560px',
          padding: '2.5rem',
          borderRadius: '16px',
          position: 'relative',
          border: '1px solid rgba(220, 38, 38, 0.4)',
          background: 'linear-gradient(135deg, rgba(18, 20, 26, 0.98) 0%, rgba(10, 11, 14, 0.99) 100%)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#fff',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          /* Confirmation State */
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(34, 197, 94, 0.15)',
              border: '2px solid #22c55e',
              display: 'inline-flex',
              alignItems: 'center',
              justify: 'center',
              marginBottom: '1.25rem'
            }}>
              <CheckCircle size={40} color="#22c55e" />
            </div>

            <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              FREE TRIAL CLASS RESERVED!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Thank you <strong style={{ color: '#fff' }}>{formData.fullName}</strong>! Our Sensei desk has reserved your spot for <strong style={{ color: 'var(--accent-gold)' }}>{formData.preferredDay}</strong>. A confirmation SMS & email have been sent.
            </p>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem'
            }}>
              🥋 <strong>What to wear:</strong> Comfortable workout shorts or sweatpants and a t-shirt. Barefoot training in the dojo.
            </div>

            <button onClick={handleReset} className="btn-primary" style={{ width: '100%' }}>
              Back to Dojo Website
            </button>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                <Flame size={16} color="#dc2626" /> Limited Spots Available
              </div>
              <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginTop: '0.25rem' }}>
                BOOK YOUR <span className="text-red">FREE TRIAL CLASS</span>
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Experience a 60-minute trial session with zero obligation. Free white belt gi uniform upon enrollment.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(10, 11, 14, 0.8)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      padding: '0.65rem 1rem 0.65rem 2.6rem',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Phone Number *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(10, 11, 14, 0.8)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '8px',
                        padding: '0.65rem 1rem 0.65rem 2.6rem',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(10, 11, 14, 0.8)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '8px',
                        padding: '0.65rem 1rem 0.65rem 2.6rem',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Select Program *
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
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
                >
                  <option value="little-tigers">Little Tigers (Ages 4-7)</option>
                  <option value="junior-warriors">Junior Warriors (Ages 8-12)</option>
                  <option value="teen-adult">Teens & Adults Karate (Ages 13+)</option>
                  <option value="competition-squad">Elite Competition Kumite Team</option>
                  <option value="women-self-defense">Women's Self-Defense</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Preferred Time Slot *
                </label>
                <select
                  value={formData.preferredDay}
                  onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
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
                >
                  <option value="Monday Evening (05:30 PM)">Monday Evening (05:30 PM)</option>
                  <option value="Wednesday Evening (05:30 PM)">Wednesday Evening (05:30 PM)</option>
                  <option value="Friday Afternoon (04:30 PM)">Friday Afternoon (04:30 PM)</option>
                  <option value="Saturday Morning (09:00 AM)">Saturday Morning (09:00 AM)</option>
                </select>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', padding: '0.9rem' }}>
                <Calendar size={18} /> Confirm Free Trial Reservation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
