import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Head>
        <title>Body Tan - Premium Tanning & Wellness in Brooklyn</title>
        <meta name="description" content="Premium tanning beds, massage therapy, and wellness services in Brooklyn, NY since 1989." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ background: '#f8f6f3', minHeight: '100vh' }}>
        {/* Navigation */}
        <nav style={{
          background: 'white',
          borderBottom: '0.5px solid #ddd',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{ fontSize: '20px', fontWeight: '500', color: '#C9935A' }}>
            BODY TAN
          </div>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '14px' }}>
            <a href="#services" style={{ color: '#333', textDecoration: 'none' }}>Services</a>
            <a href="#about" style={{ color: '#333', textDecoration: 'none' }}>About</a>
            <a href="#contact" style={{ color: '#333', textDecoration: 'none' }}>Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #f8f6f3 0%, #faf8f5 100%)',
          borderBottom: '0.5px solid #ddd'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Sun Logo */}
            <svg viewBox="0 0 200 120" style={{ width: '120px', height: '72px', margin: '0 auto 2rem' }}>
              <g>
                <circle cx="100" cy="80" r="35" fill="#C9935A" />
                {[...Array(24)].map((_, i) => {
                  const angle = (i / 24) * Math.PI;
                  const x1 = 100 + 50 * Math.cos(angle);
                  const y1 = 80 - 50 * Math.sin(angle);
                  const x2 = 100 + 70 * Math.cos(angle);
                  const y2 = 80 - 70 * Math.sin(angle);
                  return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9935A" strokeWidth="2.5" />;
                })}
              </g>
            </svg>

            <h1 style={{
              fontSize: '48px',
              fontWeight: '400',
              color: '#2d2d2d',
              margin: '0 0 1rem 0',
              letterSpacing: '0.05em'
            }}>
              BODY TAN
            </h1>
            
            <p style={{
              fontSize: '18px',
              color: '#666',
              margin: '0 0 2rem 0',
              fontStyle: 'italic'
            }}>
              A wellness center since 1989
            </p>

            <p style={{
              fontSize: '16px',
              color: '#333',
              lineHeight: '1.8',
              margin: '0 0 2rem 0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Premium tanning beds, massage therapy, and emerging wellness modalities. Escape to our Brooklyn sanctuary.
            </p>
          </div>
        </section>

        {/* Divider with sun rays */}
        <div style={{ textAlign: 'center', padding: '2rem 0', background: 'white' }}>
          <svg viewBox="0 0 200 30" style={{ width: '200px', height: '30px', margin: '0 auto', opacity: 0.4 }}>
            {[...Array(12)].map((_, i) => {
              const x = 20 + (i * 15);
              return <line key={i} x1={x} y1="10" x2={x} y2="20" stroke="#C9935A" strokeWidth="1.5" />;
            })}
          </svg>
        </div>

        {/* Services Section */}
        <section id="services" style={{ padding: '4rem 2rem', background: 'white' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '400',
              color: '#2d2d2d',
              textAlign: 'center',
              marginBottom: '3rem',
              letterSpacing: '0.05em'
            }}>
              Our Services
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { icon: '☀️', title: 'Premium Tanning Beds', desc: '14 state-of-the-art beds for the perfect golden glow. Custom sessions available.' },
                { icon: '💆', title: 'Massage Therapy', desc: 'Deep tissue, Swedish, and hot stone massages. Unwind and rejuvenate.' },
                { icon: '🔴', title: 'Red Light Therapy', desc: 'Cutting-edge recovery and skin health. Coming soon to our Brooklyn location.' },
                { icon: '✨', title: 'Wellness Treatments', desc: 'Expanding our holistic wellness offerings. Comprehensive self-care in one place.' }
              ].map((service, idx) => (
                <div key={idx} style={{
                  background: '#f8f6f3',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '0.5px solid #ddd',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '32px', marginBottom: '1rem' }}>{service.icon}</div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '500',
                    color: '#2d2d2d',
                    margin: '0 0 0.75rem 0'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666',
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{ padding: '4rem 2rem', background: '#f8f6f3' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '400',
              color: '#2d2d2d',
              textAlign: 'center',
              marginBottom: '2rem',
              letterSpacing: '0.05em'
            }}>
              Established 1989
            </h2>

            <p style={{
              fontSize: '16px',
              color: '#333',
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              For over three decades, Body Tan has been Brooklyn's trusted destination for premium tanning and wellness services. We've built our reputation on quality, consistency, and a genuine commitment to helping our clients look and feel their best.
            </p>

            <p style={{
              fontSize: '16px',
              color: '#333',
              lineHeight: '1.8'
            }}>
              As wellness evolves, so do we. We're expanding beyond tanning to offer a full spectrum of treatments—from therapeutic massage to cutting-edge therapies like red light therapy. Our goal is simple: be your one-stop wellness sanctuary in the heart of Brooklyn.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ padding: '4rem 2rem', background: 'white' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '400',
              color: '#2d2d2d',
              textAlign: 'center',
              marginBottom: '3rem',
              letterSpacing: '0.05em'
            }}>
              Get in Touch
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
              {/* Location Info */}
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#2d2d2d',
                  marginBottom: '1rem'
                }}>
                  Visit Us
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#333',
                  lineHeight: '1.8',
                  margin: '0 0 1.5rem 0'
                }}>
                  <strong>Body Tan</strong><br />
                  <a href="https://maps.google.com/?q=721+Avenue+U+Brooklyn+NY+11223" target="_blank" rel="noopener noreferrer" style={{ color: '#C9935A', textDecoration: 'none' }}>
                    721 Avenue U<br />
                    Brooklyn, NY 11223
                  </a>
                </p>

                <h4 style={{
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#2d2d2d',
                  margin: '0 0 0.5rem 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Hours
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#333',
                  lineHeight: '1.6',
                  margin: '0 0 1.5rem 0'
                }}>
                  Mon–Thu: 10am–8pm<br />
                  Fri–Sat: 10am–9pm<br />
                  Sun: 10am–9pm
                </p>

                <h4 style={{
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#2d2d2d',
                  margin: '0 0 0.5rem 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Phone
                </h4>
                <p style={{
                  fontSize: '14px',
                  margin: 0
                }}>
                  <a href="tel:+17183752167" style={{ color: '#C9935A', textDecoration: 'none' }}>
                    (718) 375-2167
                  </a>
                </p>

                {/* Social Links */}
                <div style={{
                  marginTop: '2rem',
                  display: 'flex',
                  gap: '1.5rem',
                  fontSize: '14px'
                }}>
                  <a href="https://www.instagram.com/bodytan_11223/" target="_blank" rel="noopener noreferrer" style={{
                    color: '#C9935A',
                    textDecoration: 'none'
                  }}>
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/people/Body-Tan/61585704763989/" target="_blank" rel="noopener noreferrer" style={{
                    color: '#C9935A',
                    textDecoration: 'none'
                  }}>
                    Facebook
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ padding: '8px 12px', fontSize: '14px', border: '0.5px solid #ccc', borderRadius: '6px' }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ padding: '8px 12px', fontSize: '14px', border: '0.5px solid #ccc', borderRadius: '6px' }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ padding: '8px 12px', fontSize: '14px', border: '0.5px solid #ccc', borderRadius: '6px' }}
                  />
                  <textarea
                    name="message"
                    placeholder="Message or inquiry"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    style={{ padding: '8px 12px', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical', border: '0.5px solid #ccc', borderRadius: '6px' }}
                  ></textarea>
                  <button
                    type="submit"
                    style={{
                      background: '#C9935A',
                      color: 'white',
                      border: 'none',
                      padding: '12px',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      borderRadius: '6px',
                      transition: 'opacity 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                  >
                    Send Message
                  </button>
                  {submitted && (
                    <p style={{
                      fontSize: '13px',
                      color: '#0a7d3b',
                      background: '#e8f5e9',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      margin: 0,
                      textAlign: 'center'
                    }}>
                      Thanks for reaching out! We'll be in touch soon.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          background: '#2d2d2d',
          color: 'white',
          padding: '2rem',
          textAlign: 'center',
          fontSize: '13px',
          borderTop: '0.5px solid rgba(255,255,255,0.1)'
        }}>
          <p style={{ margin: 0 }}>
            © 1989–2026 Body Tan. Brooklyn's premier wellness sanctuary.
          </p>
        </footer>
      </div>
    </>
  );
}
