import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    e.target.reset();
  };

  const globalStyles = `
@font-face {
  font-family: 'Viola';
  src: url('https://raw.githubusercontent.com/bodytan11223-max/body-tan-website/main/VIOLA%20(2).ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { background: #0D0D0D; color: #F8F3EE; font-family: 'Century Gothic', 'Raleway', Arial, sans-serif; font-weight: 300; letter-spacing: 0.02em; }
.viola { font-family: 'Viola', 'Cormorant Garamond', Georgia, serif; }
.cg { font-family: 'Century Gothic', 'Raleway', Arial, sans-serif; }
a { text-decoration: none; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.fade-up { animation: fadeUp 1s ease forwards; }
@keyframes pulse { 0%,100% { opacity:0.5; transform: translateY(0); } 50% { opacity:1; transform: translateY(6px); } }
.scroll-indicator { animation: pulse 2s ease-in-out infinite; }
.btn-gold { transition: transform 0.3s, box-shadow 0.3s; }
.btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,147,90,0.35); }
.btn-outline { transition: background 0.3s, color 0.3s; }
.btn-outline:hover { background: rgba(201,147,90,0.1) !important; }
.service-card { transition: transform 0.4s ease, border-color 0.4s ease; }
.service-card:hover { transform: translateY(-6px); border-color: rgba(201,147,90,0.4) !important; }
.nav-link:hover { color: #C9935A !important; opacity: 1 !important; }
input:focus, textarea:focus { outline: none; border-bottom-color: #C9935A !important; border-bottom-width: 2px !important; }
.mobile-menu-overlay { display: none; }
.hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; touch-action: manipulation; }
.hamburger span { display: block; width: 24px; height: 2px; background: #F8F3EE; margin: 5px 0; transition: all 0.3s ease; }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
.desktop-nav { display: flex; gap: 2.5rem; align-items: center; }
@media (max-width: 900px) {
  .hamburger { display: block; }
  .desktop-nav { display: none; }
  .mobile-menu-overlay {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 2rem; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(13,13,13,0.98); z-index: 99; opacity: 0; pointer-events: none;
    transition: opacity 0.3s ease;
  }
  .mobile-menu-overlay.open { opacity: 1; pointer-events: all; }
  .mobile-menu-overlay a { font-size: 1.4rem; letter-spacing: 0.2em; color: #F8F3EE; text-transform: uppercase; font-family: 'Century Gothic', Arial, sans-serif; padding: 0.5rem 2rem; touch-action: manipulation; }
  .mobile-menu-overlay a:hover { color: #C9935A; }
  .mobile-menu-book { background: linear-gradient(135deg, #C9935A, #A67840); color: #0D0D0D !important; padding: 0.9rem 2.5rem !important; }
}
`;

  return (
    <>
      <Head>
        <title>Body Tan — Premium Tanning and Wellness in Brooklyn</title>
        <meta name="description" content="Brooklyn's premier tanning and wellness center. EST. 1989." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>{globalStyles}</style>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
        {['services','about','booking','contact'].map(id => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); handleNavClick(id); }}>{id}</a>
        ))}
        <a href="#booking" className="mobile-menu-book" onClick={(e) => { e.preventDefault(); handleNavClick('booking'); }}>Book Now</a>
      </div>

      {/* Navbar */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '1.2rem 5vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: scrolled ? 'rgba(13,13,13,0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid rgba(201,147,90,0.12)' : 'none', transition: 'all 0.4s ease' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.png" alt="Body Tan Logo" style={{ height: '44px', width: 'auto' }} />
          <div>
            <div className="viola" style={{ fontSize: '1.15rem', letterSpacing: '0.22em', color: '#F8F3EE', lineHeight: 1.1 }}>BODY TAN</div>
            <div className="cg" style={{ fontSize: '0.52rem', letterSpacing: '0.22em', color: '#C9935A', textTransform: 'uppercase' }}>And Wellness Center</div>
          </div>
        </div>
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <div className="desktop-nav">
          {['services','about','booking','contact'].map(id => (
            <a key={id} href={`#${id}`} className="nav-link cg" onClick={(e) => { e.preventDefault(); handleNavClick(id); }} style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(248,243,238,0.75)', fontWeight: 400, transition: 'color 0.3s' }}>{id}</a>
          ))}
          <a href="#booking" className="btn-gold cg" onClick={(e) => { e.preventDefault(); handleNavClick('booking'); }} style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '0.75rem 1.8rem', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, touchAction: 'manipulation' }}>Book Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(ellipse at 50% 100%, rgba(201,147,90,0.15) 0%, transparent 65%), linear-gradient(180deg, #0D0D0D 0%, #1a1008 100%)' }}>
        {/* Background sunburst rays */}
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '900px', opacity: 0.07, pointerEvents: 'none' }}>
          <svg width="900" height="900" viewBox="0 0 100 100" fill="none">
            {Array.from({length: 13}, (_, i) => {
              const numRays = 13, cx = 50, cy = 82, baseR = 8, spread = 130;
              const startAngle = -90 - spread / 2;
              const t = i / (numRays - 1);
              const angle = (startAngle + spread * t) * (Math.PI / 180);
              const center = (numRays - 1) / 2;
              const dist = Math.abs(i - center) / center;
              const len = 28 + (72 - 28) * (1 - dist * dist * 0.85);
              return <line key={i} x1={cx + baseR * Math.cos(angle)} y1={cy + baseR * Math.sin(angle)} x2={cx + len * Math.cos(angle)} y2={cy + len * Math.sin(angle)} stroke="#C9935A" strokeWidth="1.2" strokeLinecap="round" />;
            })}
          </svg>
        </div>

        <div className="fade-up" style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 5vw', width: '100%' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <img src="/logo.png" alt="Body Tan Logo" style={{ height: '70px', width: 'auto' }} />
          </div>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.45em', color: '#C9935A', textTransform: 'uppercase', marginBottom: '1.8rem' }}>
            Est. 1989 — Brooklyn, New York
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '0.1em', marginBottom: '0.4rem', lineHeight: 1 }}>
            <span className="viola" style={{ fontSize: 'clamp(4rem, 13vw, 10rem)', color: '#F8F3EE', fontWeight: 400, letterSpacing: '-0.01em' }}>BODY</span>
            <span className="viola" style={{ fontSize: 'clamp(4rem, 13vw, 10rem)', color: '#C9935A', fontWeight: 400, letterSpacing: '-0.01em' }}>TAN</span>
          </div>
          <p className="viola" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.6rem)', color: 'rgba(248,243,238,0.7)', letterSpacing: '0.12em', marginBottom: '3.5rem', fontStyle: 'italic' }}>Premium Tanning and Wellness Center</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#booking" className="btn-gold cg" onClick={(e) => { e.preventDefault(); handleNavClick('booking'); }} style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '1.15rem 3rem', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block', touchAction: 'manipulation' }}>Book a Session</a>
            <a href="#services" className="btn-outline cg" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }} style={{ border: '1px solid rgba(201,147,90,0.5)', color: '#C9935A', padding: '1.15rem 3rem', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 400, display: 'inline-block', touchAction: 'manipulation' }}>Our Services</a>
          </div>
        </div>
        <div className="scroll-indicator" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
          <svg width="28" height="40" viewBox="0 0 28 40" fill="none"><rect x="1" y="1" width="26" height="38" rx="13" stroke="rgba(201,147,90,0.4)" strokeWidth="1.5"/><circle cx="14" cy="10" r="3" fill="#C9935A" opacity="0.7"/></svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ background: '#111', padding: '100px 5vw' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', margin: '0 auto 1.2rem' }}></div>
            <p className="cg" style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.7rem' }}>What We Offer</p>
            <h2 className="viola" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#F8F3EE' }}>Our Services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'UV Tanning', desc: 'Premium UV tanning beds with the latest technology for a perfect, even tan every time.', icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="7" stroke="#C9935A" strokeWidth="1.5"/>{[0,45,90,135,180,225,270,315].map(a=><line key={a} x1={18+10*Math.cos(a*Math.PI/180)} y1={18+10*Math.sin(a*Math.PI/180)} x2={18+14*Math.cos(a*Math.PI/180)} y2={18+14*Math.sin(a*Math.PI/180)} stroke="#C9935A" strokeWidth="1.5" strokeLinecap="round"/>)}</svg> },
              { title: 'Spray Tan', desc: 'Flawless, natural-looking spray tans customized to your skin tone and desired level.', icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M10 26C10 26 12 18 18 14C24 10 28 12 28 12" stroke="#C9935A" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="26" r="3" stroke="#C9935A" strokeWidth="1.5"/></svg> },
              { title: 'Red Light Therapy', desc: 'Anti-aging red light therapy to rejuvenate skin, reduce inflammation and boost collagen.', icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="5" fill="rgba(201,147,90,0.2)" stroke="#C9935A" strokeWidth="1.5"/>{[0,60,120,180,240,300].map(a=><line key={a} x1={18+8*Math.cos(a*Math.PI/180)} y1={18+8*Math.sin(a*Math.PI/180)} x2={18+13*Math.cos(a*Math.PI/180)} y2={18+13*Math.sin(a*Math.PI/180)} stroke="#C9935A" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>)}</svg> },
              { title: 'Teeth Whitening', desc: 'Professional-grade teeth whitening treatments for a brighter, more confident smile.', icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M10 14C10 14 12 12 18 12C24 12 26 14 26 14L24 24C24 26 22 28 18 28C14 28 12 26 12 24L10 14Z" stroke="#C9935A" strokeWidth="1.5" fill="none"/></svg> },
              { title: 'Wellness Packages', desc: 'Curated wellness packages combining multiple services for a complete self-care experience.', icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 8L20.5 15H28L22 19.5L24.5 26.5L18 22L11.5 26.5L14 19.5L8 15H15.5L18 8Z" stroke="#C9935A" strokeWidth="1.5" fill="none" strokeLinejoin="round"/></svg> },
              { title: 'Memberships', desc: 'Flexible monthly memberships offering unlimited sessions and exclusive member perks.', icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="6" y="12" width="24" height="16" rx="2" stroke="#C9935A" strokeWidth="1.5"/><path d="M6 17H30" stroke="#C9935A" strokeWidth="1.5"/><path d="M10 22H16" stroke="#C9935A" strokeWidth="1.5" strokeLinecap="round"/></svg> },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="service-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,147,90,0.12)', padding: '2.5rem 2rem' }}>
                <div style={{ marginBottom: '1.2rem' }}>{icon}</div>
                <h3 className="viola" style={{ fontSize: '1.4rem', color: '#F8F3EE', marginBottom: '0.8rem' }}>{title}</h3>
                <p className="cg" style={{ fontSize: '0.78rem', color: 'rgba(248,243,238,0.55)', lineHeight: 1.8, letterSpacing: '0.02em' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ background: '#0D0D0D', padding: '100px 5vw' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', marginBottom: '1.2rem' }}></div>
            <p className="cg" style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.7rem' }}>Our Story</p>
            <h2 className="viola" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#F8F3EE', marginBottom: '2rem' }}>Brooklyn's Premier Tanning & Wellness Destination</h2>
            <p className="cg" style={{ fontSize: '0.82rem', color: 'rgba(248,243,238,0.65)', lineHeight: 2, marginBottom: '1.5rem' }}>
              Since 1989, Body Tan has been the trusted destination for premium tanning and wellness services in the heart of Brooklyn. What began as a small tanning studio has grown into a full-service wellness center.
            </p>
            <p className="cg" style={{ fontSize: '0.82rem', color: 'rgba(248,243,238,0.65)', lineHeight: 2, marginBottom: '2.5rem' }}>
              We combine the latest technology with personalized service to ensure every client leaves feeling confident, refreshed, and glowing.
            </p>
            <a href="#booking" className="btn-gold cg" onClick={(e) => { e.preventDefault(); handleNavClick('booking'); }} style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '1rem 2.5rem', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block', touchAction: 'manipulation' }}>Book Your Visit</a>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ background: 'rgba(201,147,90,0.06)', border: '1px solid rgba(201,147,90,0.15)', padding: '3rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {[{ num: '35+', label: 'Years of Excellence' }, { num: '50K+', label: 'Happy Clients' }, { num: '6', label: 'Premium Services' }].map(({ num, label }) => (
                  <div key={label}>
                    <div className="viola" style={{ fontSize: '3rem', color: '#C9935A', lineHeight: 1 }}>{num}</div>
                    <div className="cg" style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(248,243,238,0.45)', marginTop: '0.4rem' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" style={{ background: '#111', padding: '100px 5vw' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', margin: '0 auto 1.2rem' }}></div>
          <p className="cg" style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.7rem' }}>Reserve Your Session</p>
          <h2 className="viola" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#F8F3EE', marginBottom: '1rem' }}>Book an Appointment</h2>
          <p className="cg" style={{ fontSize: '0.82rem', color: 'rgba(248,243,238,0.55)', marginBottom: '3.5rem', lineHeight: 1.9 }}>Ready to glow? Call us or stop by. Walk-ins are always welcome.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            <a href="tel:7183752167" className="btn-gold cg" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '1.2rem 4rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block', touchAction: 'manipulation' }}>Call 718-375-2167</a>
            <a href="#contact" className="btn-outline cg" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} style={{ border: '1px solid #C9935A', color: '#C9935A', padding: '1.1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 400, display: 'inline-block', background: 'transparent', touchAction: 'manipulation' }}>Send a Message</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0', border: '1px solid rgba(201,147,90,0.18)', textAlign: 'center', marginTop: '4rem' }}>
            {[
              { label: 'Hours', lines: ['Mon-Thu: 10am-8pm', 'Fri-Sun: 10am-9pm'], svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#C9935A" strokeWidth="1.5"/><line x1="14" y1="8" x2="14" y2="14" stroke="#C9935A" strokeWidth="1.5" strokeLinecap="round"/><line x1="14" y1="14" x2="19" y2="17" stroke="#C9935A" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { label: 'Location', lines: ['721 Avenue U', 'Brooklyn, NY 11229'], svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4C10.13 4 7 7.13 7 11c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#C9935A" strokeWidth="1.5" fill="none"/><circle cx="14" cy="11" r="2.5" stroke="#C9935A" strokeWidth="1.5" fill="none"/></svg> },
              { label: 'Phone', lines: ['718-375-2167', 'Walk-ins Welcome'], href: 'tel:7183752167', svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M8 5h4l2 5-2.5 1.5a11 11 0 005 5L18 14l5 2v4a2 2 0 01-2 2C9 22 6 9 8 5z" stroke="#C9935A" strokeWidth="1.5" fill="none" strokeLinejoin="round"/></svg> }
            ].map(({ label, lines, svg, href }) => (
              <div key={label} style={{ padding: '2rem 1rem', borderRight: label !== 'Phone' ? '1px solid rgba(201,147,90,0.18)' : 'none' }}>
                <div style={{ marginBottom: '0.8rem', display: 'flex', justifyContent: 'center' }}>{svg}</div>
                <div className="cg" style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.6rem' }}>{label}</div>
                {lines.map((line, i) => (
                  href && i === 0
                    ? <a key={i} href={href} className="cg" style={{ display: 'block', color: 'rgba(248,243,238,0.75)', fontSize: '0.78rem', lineHeight: 1.8, touchAction: 'manipulation' }}>{line}</a>
                    : <div key={i} className="cg" style={{ color: 'rgba(248,243,238,0.75)', fontSize: '0.78rem', lineHeight: 1.8 }}>{line}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ background: '#0D0D0D', padding: '100px 5vw' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', margin: '0 auto 1.2rem' }}></div>
          <p className="cg" style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.7rem' }}>Get In Touch</p>
          <h2 className="viola" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#F8F3EE', marginBottom: '3.5rem' }}>Contact Us</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            <div style={{ background: 'rgba(201,147,90,0.08)', border: '1px solid rgba(201,147,90,0.4)', padding: '2rem', color: '#C9935A', fontFamily: 'Viola, serif', fontSize: '1.1rem', letterSpacing: '0.05em', fontStyle: 'italic' }}>
              "Your glow is just one appointment away."
            </div>
            {[{ name: 'name', placeholder: 'Full Name', type: 'text' }, { name: 'email', placeholder: 'Email Address', type: 'email' }, { name: 'phone', placeholder: 'Phone Number', type: 'tel' }].map(({ name, placeholder, type }) => (
              <input key={name} type={type} name={name} placeholder={placeholder} required style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,147,90,0.25)', padding: '0.9rem 0', color: '#F8F3EE', fontSize: '0.88rem', letterSpacing: '0.04em', width: '100%', fontFamily: "'Century Gothic', Arial, sans-serif", fontWeight: 300, transition: 'border-color 0.3s' }} />
            ))}
            <textarea name="message" placeholder="Your Message" rows={4} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,147,90,0.25)', padding: '0.9rem 0', color: '#F8F3EE', fontSize: '0.88rem', letterSpacing: '0.04em', width: '100%', fontFamily: "'Century Gothic', Arial, sans-serif", fontWeight: 300, resize: 'none', transition: 'border-color 0.3s' }} />
            <button type="submit" className="btn-gold cg" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '1.1rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, border: 'none', cursor: 'pointer', width: '100%', touchAction: 'manipulation' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1a1a', borderTop: '1px solid rgba(201,147,90,0.12)', padding: '3rem 5vw', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.2rem' }}>
          <img src="/logo.png" alt="Body Tan Logo" style={{ height: '34px', width: 'auto' }} />
          <div className="viola" style={{ fontSize: '1.3rem', letterSpacing: '0.2em', color: '#F8F3EE' }}>BODY TAN</div>
        </div>
        <div className="cg" style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'rgba(248,243,238,0.3)', textTransform: 'uppercase' }}>
          &copy; 1989&ndash;2026 Body Tan And Wellness Center &middot; Brooklyn, New York
        </div>
        <div style={{ marginTop: '1rem' }}>
          <a href="tel:7183752167" className="cg" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(248,243,238,0.4)', touchAction: 'manipulation' }}>
            718-375-2167
          </a>
        </div>
      </footer>
    </>
  );
}
