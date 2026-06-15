import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// Logo: minimal rising sun with thin rays fanning upward from a small hill/semicircle
// Matches the provided logo: elegant thin lines, tallest in center, fanning left and right
const SunburstLogo = ({ size = 80 }) => {
  // 13 rays spanning ~140 degrees, rising from a small dome base
  // angles from -70deg (far left) to +70deg (far right), 0deg = straight up
  const numRays = 13;
  const cx = 50, cy = 82; // center of the small semicircle base
  const baseR = 8; // radius of the small dome
  const spread = 130; // total spread in degrees
  const startAngle = -90 - spread / 2; // start from top-left
  // Ray lengths vary: tallest in center (index 6), shorter toward edges
  const maxLen = size * 0.72;
  const minLen = size * 0.28;
  const rays = [];
  for (let i = 0; i < numRays; i++) {
    const t = i / (numRays - 1); // 0 to 1
    const angle = (startAngle + spread * t) * (Math.PI / 180);
    // Bell curve for length: longest in center
    const center = (numRays - 1) / 2;
    const dist = Math.abs(i - center) / center;
    const len = minLen + (maxLen - minLen) * (1 - dist * dist * 0.85);
    const x1 = cx + baseR * Math.cos(angle);
    const y1 = cy + baseR * Math.sin(angle);
    const x2 = cx + len * Math.cos(angle);
    const y2 = cy + len * Math.sin(angle);
    rays.push({ x1, y1, x2, y2 });
  }
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {rays.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
          stroke="#C9935A" strokeWidth="1.2" strokeLinecap="round" />
      ))}
      <path d={`M ${cx - baseR} ${cy} A ${baseR} ${baseR} 0 0 1 ${cx + baseR} ${cy}`}
        stroke="#C9935A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
};

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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(13,13,13,0.98);
        z-index: 99;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }
      .mobile-menu-overlay.open {
        opacity: 1;
        pointer-events: all;
      }
      .mobile-menu-overlay a {
        font-size: 1.4rem;
        letter-spacing: 0.2em;
        color: #F8F3EE;
        text-transform: uppercase;
        font-family: 'Century Gothic', Arial, sans-serif;
        padding: 0.5rem 2rem;
        touch-action: manipulation;
      }
      .mobile-menu-overlay a:hover { color: #C9935A; }
      .mobile-menu-book {
        background: linear-gradient(135deg, #C9935A, #A67840);
        color: #0D0D0D !important;
        padding: 0.9rem 2.5rem !important;
        font-weight: 700 !important;
        font-size: 1rem !important;
      }
    }

    @media (max-width: 768px) {
      .hero-title-row { flex-direction: column !important; gap: 0 !important; align-items: center !important; }
      .hero-buttons { flex-direction: column !important; align-items: center !important; }
      .hero-buttons a { width: 260px !important; text-align: center !important; padding: 1rem 1.5rem !important; }
      .stats-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
      .stats-divider { display: none !important; }
      .services-grid { grid-template-columns: 1fr !important; gap: 1rem !important; max-width: 100% !important; }
      .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
      .about-stats-row { gap: 1.5rem !important; flex-wrap: wrap !important; }
      .info-grid { grid-template-columns: 1fr !important; }
      .info-grid > div { border-right: none !important; border-bottom: 1px solid rgba(201,147,90,0.18) !important; }
      .info-grid > div:last-child { border-bottom: none !important; }
      .section-pad { padding: 60px 5vw !important; }
      .hero-bg-svg { width: min(900px, 100%) !important; }
    }

    @media (max-width: 480px) {
      .hero-buttons a { width: 90vw !important; max-width: 320px !important; }
    }
  `;

  return (
    <>
      <Head>
        <title>Body Tan — Premium Tanning and Wellness in Brooklyn</title>
        <meta name="description" content="Premium tanning beds, spray tanning, massage chair, and wellness services in Brooklyn, NY since 1989." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </Head>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay${menuOpen ? ' open' : ''}`}>
        {['services', 'about', 'booking', 'contact'].map(id => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); handleNavClick(id); }}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <a href="#booking" className="mobile-menu-book cg" onClick={(e) => { e.preventDefault(); handleNavClick('booking'); }}>
          Book Now
        </a>
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: scrolled ? 'rgba(13,13,13,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,147,90,0.15)' : 'none',
        padding: '1.1rem 5vw', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', transition: 'all 0.4s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <SunburstLogo size={38} />
          <div>
            <div className="viola" style={{ fontSize: '1.55rem', fontWeight: 'normal', letterSpacing: '0.18em', color: '#F8F3EE', lineHeight: 1.1 }}>BODY TAN</div>
            <div className="cg" style={{ fontSize: '0.62rem', letterSpacing: '0.3em', color: '#C9935A', textTransform: 'uppercase', fontFamily: "'Century Gothic', Arial, sans-serif", marginTop: '2px' }}>And Wellness Center</div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="desktop-nav">
          {['Services', 'About', 'Booking', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link cg" style={{ color: '#F8F3EE', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.8, fontWeight: 400 }}>{item}</a>
          ))}
          <a href="#booking" className="btn-gold cg" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '0.75rem 1.6rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block', touchAction: 'manipulation' }}>Book Now</a>
        </div>

        {/* Hamburger */}
        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh', minHeight: '100dvh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(201,147,90,0.15) 0%, transparent 65%), linear-gradient(180deg, #0D0D0D 0%, #1C1208 55%, #0D0D0D 100%)'
      }}>
        {/* Background sunburst rays */}
        <div className="hero-bg-svg" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '550px', overflow: 'hidden', opacity: 0.07, pointerEvents: 'none' }}>
          <SunburstLogo size={900} />
        </div>

        <div className="fade-up" style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 5vw', width: '100%' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <SunburstLogo size={70} />
          </div>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.45em', color: '#C9935A', textTransform: 'uppercase', marginBottom: '1.8rem' }}>
            Est. 1989 — Brooklyn, New York
          </div>
          <div className="hero-title-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '0.1em', marginBottom: '1.5rem' }}>
            <span className="viola" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: 'normal', lineHeight: 0.9, letterSpacing: '0.05em', color: '#F8F3EE' }}>BODY</span>
            <span className="viola" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: 'normal', lineHeight: 0.9, letterSpacing: '0.08em', color: '#C9935A' }}>TAN</span>
          </div>
          <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.7rem)', fontStyle: 'italic', color: '#F8F3EE', opacity: 0.75, marginBottom: '3rem', letterSpacing: '0.04em' }}>
            Premium Tanning and Wellness Center
          </div>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#booking" className="btn-gold cg" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block', touchAction: 'manipulation' }}>Book a Session</a>
            <a href="#services" className="btn-outline cg" style={{ border: '1px solid #C9935A', color: '#C9935A', padding: '1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 400, display: 'inline-block', background: 'transparent', touchAction: 'manipulation' }}>Our Services</a>
          </div>
        </div>

        <div className="scroll-indicator" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer' }} onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
          <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
            <rect x="1" y="1" width="22" height="34" rx="11" stroke="rgba(201,147,90,0.4)" strokeWidth="1.5"/>
            <circle cx="12" cy="10" r="3" fill="#C9935A"/>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <div style={{ background: '#C9935A', padding: '2.2rem 5vw' }}>
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          {[{ num: '35+', label: 'Years of Excellence' }, { num: '14', label: 'Premium Tanning Beds' }, { num: '1000+', label: 'Happy Clients' }].map(({ num, label }, idx) => (
            <div key={num} style={{ padding: '0.5rem 0', borderRight: idx < 2 ? '1px solid rgba(13,13,13,0.2)' : 'none' }} className={idx < 2 ? 'stats-divider-wrap' : ''}>
              <div className="viola" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#0D0D0D', fontWeight: 'normal', lineHeight: 1 }}>{num}</div>
              <div className="cg" style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(13,13,13,0.65)', marginTop: '0.4rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="section-pad" style={{ background: '#1a1a1a', padding: '100px 5vw', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', margin: '0 auto 1.2rem' }}></div>
        <p className="cg" style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.7rem' }}>What We Offer</p>
        <h2 className="viola" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#F8F3EE', marginBottom: '4rem', letterSpacing: '0.04em' }}>Our Services</h2>
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            {
              title: 'Premium Tanning Beds',
              desc: '14 state-of-the-art beds for the perfect golden glow. Custom sessions tailored for all skin types.',
              svg: (
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <circle cx="26" cy="26" r="10" stroke="#C9935A" strokeWidth="1.8" fill="none"/>
                  {[0,45,90,135,180,225,270,315].map(deg => {
                    const r = Math.PI * deg / 180;
                    return <line key={deg} x1={26 + 13*Math.cos(r)} y1={26 + 13*Math.sin(r)} x2={26 + 19*Math.cos(r)} y2={26 + 19*Math.sin(r)} stroke="#C9935A" strokeWidth="1.8" strokeLinecap="round"/>;
                  })}
                </svg>
              )
            },
            {
              title: 'Massage Chair',
              desc: 'Unwind in our premium massage chair. A relaxing, rejuvenating experience after every tanning session.',
              svg: (
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <rect x="14" y="18" width="24" height="18" rx="6" stroke="#C9935A" strokeWidth="1.8" fill="none"/>
                  <rect x="18" y="16" width="16" height="14" rx="4" stroke="#C9935A" strokeWidth="1.8" fill="none"/>
                  <line x1="14" y1="36" x2="10" y2="44" stroke="#C9935A" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="38" y1="36" x2="42" y2="44" stroke="#C9935A" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="38" y1="22" x2="44" y2="22" stroke="#C9935A" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="38" y1="28" x2="44" y2="28" stroke="#C9935A" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              )
            },
            {
              title: 'Spray Tanning',
              desc: 'Flawless, streak-free spray tans for a natural golden glow without the UV. Quick, customizable results.',
              svg: (
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <circle cx="26" cy="26" r="10" stroke="#C9935A" strokeWidth="1.8" fill="none"/>
                  <circle cx="26" cy="26" r="3" fill="#C9935A"/>
                  <circle cx="40" cy="12" r="5" stroke="#C9935A" strokeWidth="1.8" fill="none"/>
                  <line x1="35" y1="17" x2="30" y2="22" stroke="#C9935A" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )
            }
          ].map(({ title, desc, svg }) => (
            <div key={title} className="service-card" style={{ background: '#0D0D0D', padding: '3rem 2rem', border: '1px solid rgba(201,147,90,0.08)', textAlign: 'center' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{svg}</div>
              <h3 className="viola" style={{ fontSize: '1.5rem', color: '#C9935A', marginBottom: '1rem', letterSpacing: '0.04em', fontWeight: 'normal' }}>{title}</h3>
              <p className="cg" style={{ color: 'rgba(248,243,238,0.55)', fontSize: '0.83rem', lineHeight: 1.9 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-pad" style={{ background: '#0D0D0D', padding: '100px 5vw' }}>
        <div className="about-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div style={{ width: '55px', height: '1px', background: 'linear-gradient(90deg, #C9935A, transparent)', marginBottom: '1.4rem' }}></div>
            <p className="cg" style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.9rem' }}>Our Story</p>
            <h2 className="viola" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#F8F3EE', marginBottom: '1.8rem', lineHeight: 1.15 }}>
              Brooklyn's Premier<br /><em>Tanning and Wellness Center</em>
            </h2>
            <p className="cg" style={{ color: 'rgba(248,243,238,0.6)', lineHeight: 2.1, marginBottom: '1.4rem', fontSize: '0.88rem' }}>
              Since 1989, Body Tan has been Brooklyn's destination for premium tanning and wellness. Located on Avenue U, we've spent over three decades perfecting the art of the golden glow.
            </p>
            <p className="cg" style={{ color: 'rgba(248,243,238,0.6)', lineHeight: 2.1, fontSize: '0.88rem', marginBottom: '2.5rem' }}>
              Our expert staff provides personalized service, ensuring each client achieves their ideal results safely and beautifully. From UV tanning beds to spray tans and massage chairs — we are your complete wellness retreat.
            </p>
            <div className="about-stats-row" style={{ display: 'flex', gap: '3rem' }}>
              {[{ n: '1989', l: 'Founded' }, { n: '14', l: 'Tanning Beds' }, { n: '4.9', l: 'Star Rating' }].map(({ n, l }) => (
                <div key={n}>
                  <div className="viola" style={{ fontSize: '2rem', color: '#C9935A' }}>{n}</div>
                  <div className="cg" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(248,243,238,0.45)', marginTop: '0.3rem' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ background: '#1a1a1a', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '420px', border: '1px solid rgba(201,147,90,0.15)' }}>
              <SunburstLogo size={140} />
              <div className="viola" style={{ fontSize: '1.5rem', color: '#F8F3EE', marginTop: '2rem', letterSpacing: '0.2em' }}>BODY TAN</div>
              <div style={{ width: '110px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', margin: '1rem 0' }}></div>
              <div className="cg" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: '#C9935A', textTransform: 'uppercase' }}>Est. 1989 · Brooklyn</div>
            </div>
            <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '60px', height: '60px', border: '1px solid rgba(201,147,90,0.25)', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: '-12px', right: '-12px', width: '60px', height: '60px', border: '1px solid rgba(201,147,90,0.25)', pointerEvents: 'none' }}></div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section-pad" style={{ background: 'radial-gradient(ellipse at center, rgba(201,147,90,0.1) 0%, #1a1a1a 65%)', padding: '100px 5vw', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}><SunburstLogo size={65} /></div>
          <h2 className="viola" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#F8F3EE', marginBottom: '1rem', letterSpacing: '0.04em' }}>Ready to Glow?</h2>
          <p className="cg" style={{ color: 'rgba(248,243,238,0.55)', marginBottom: '3rem', fontSize: '0.95rem', lineHeight: 1.9 }}>
            Call us or walk in. We would love to help you find your perfect session.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <a href="tel:7183752167" className="btn-gold cg" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '1.1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block', touchAction: 'manipulation' }}>Call to Book</a>
            <a href="#contact" className="btn-outline cg" style={{ border: '1px solid #C9935A', color: '#C9935A', padding: '1.1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 400, display: 'inline-block', background: 'transparent', touchAction: 'manipulation' }}>Send a Message</a>
          </div>
          <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0', border: '1px solid rgba(201,147,90,0.18)', textAlign: 'center' }}>
            {[
              {
                label: 'Hours',
                lines: ['Mon–Thu: 10am–8pm', 'Fri–Sun: 10am–9pm'],
                svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#C9935A" strokeWidth="1.5"/><line x1="14" y1="8" x2="14" y2="14" stroke="#C9935A" strokeWidth="1.5" strokeLinecap="round"/><line x1="14" y1="14" x2="19" y2="17" stroke="#C9935A" strokeWidth="1.5" strokeLinecap="round"/></svg>
              },
              {
                label: 'Location',
                lines: ['721 Avenue U', 'Brooklyn, NY 11229'],
                svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4C10.13 4 7 7.13 7 11c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#C9935A" strokeWidth="1.5" fill="none"/><circle cx="14" cy="11" r="2.5" stroke="#C9935A" strokeWidth="1.5" fill="none"/></svg>
              },
              {
                label: 'Phone',
                lines: ['718-375-2167', 'Walk-ins Welcome'],
                href: 'tel:7183752167',
                svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M8 5h4l2 5-2.5 1.5a11 11 0 005 5L18 14l5 2v4a2 2 0 01-2 2C9 22 6 9 8 5z" stroke="#C9935A" strokeWidth="1.5" fill="none" strokeLinejoin="round"/></svg>
              }
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
      <section id="contact" className="section-pad" style={{ background: '#0D0D0D', padding: '100px 5vw' }}>
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
          <SunburstLogo size={34} />
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
