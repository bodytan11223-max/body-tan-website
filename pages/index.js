import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// Logo: minimal rising sun with thin rays fanning upward from a small hill/semicircle
// Matches the provided logo: elegant thin lines, tallest in center, fanning left and right
const SunburstLogo = ({ size = 80 }) => {
  // 13 rays spanning ~140 degrees, rising from a small dome base
  // angles from -70deg (far left) to +70deg (far right), 0deg = straight up
  const numRays = 13;
  const cx = 50, cy = 82; // center of the semicircle base
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
    const strokeW = i === Math.floor(numRays / 2) ? 1.2 : 0.8;
    rays.push({ x1, y1, x2, y2, strokeW });
  }
  const svgW = size;
  const svgH = size * 0.95;
  const scale = svgW / 100;
  return (
    <svg width={svgW} height={svgH} viewBox="0 0 100 95" fill="none" xmlns="http://www.w3.org/2000/svg">
      {rays.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke="#C9935A" strokeWidth={r.strokeW} strokeLinecap="round" />
      ))}
      {/* Small semicircle base / horizon hill */}
      <path d={"M " + (cx - baseR) + " " + cy + " A " + baseR + " " + baseR + " 0 0 1 " + (cx + baseR) + " " + cy} fill="#C9935A" />
    </svg>
  );
};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // VIOLA font via @font-face from GitHub raw
  const violaFontUrl = 'https://raw.githubusercontent.com/bodytan11223-max/body-tan-website/main/VIOLA%20(2).ttf';

  const globalStyles = `
    @font-face {
      font-family: 'Viola';
      src: url('` + violaFontUrl + `') format('truetype');
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
    .scroll-indicator { animation: pulse 2s infinite; }
    .service-card { transition: border-color 0.4s, background 0.4s; border-bottom: 2px solid transparent; }
    .service-card:hover { border-bottom-color: #C9935A; background: #111 !important; }
    .btn-gold { transition: transform 0.3s, box-shadow 0.3s; }
    .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,147,90,0.35); }
    .btn-outline { transition: background 0.3s; }
    .btn-outline:hover { background: rgba(201,147,90,0.1) !important; }
    .nav-link { transition: color 0.3s, opacity 0.3s; }
    .nav-link:hover { color: #C9935A !important; opacity: 1 !important; }
    input::placeholder, textarea::placeholder { color: rgba(248,243,238,0.35); }
    input:focus, textarea:focus { outline: none; border-bottom-color: #C9935A !important; }
  `;

  return (
    <>
      <Head>
        <title>Body Tan — Premium Tanning and Wellness in Brooklyn</title>
        <meta name="description" content="Premium tanning beds, spray tanning, massage chair, and wellness services in Brooklyn, NY since 1989." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Raleway:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </Head>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: scrolled ? 'rgba(13,13,13,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,147,90,0.2)' : 'none',
        padding: '1.1rem 5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        transition: 'all 0.4s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <SunburstLogo size={42} />
          <div>
            <div className="viola" style={{ fontSize: '1.3rem', fontWeight: 'normal', letterSpacing: '0.18em', color: '#F8F3EE' }}>BODY TAN</div>
            <div style={{ fontSize: '0.52rem', letterSpacing: '0.25em', color: '#C9935A', textTransform: 'uppercase', fontFamily: "'Century Gothic', Arial, sans-serif" }}>And Wellness Center</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['Services', 'About', 'Booking', 'Contact'].map(item => (
            <a key={item} href={'#' + item.toLowerCase()} className="nav-link cg" style={{ color: '#F8F3EE', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.8, fontWeight: 400 }}>{item}</a>
          ))}
          <a href="#booking" className="btn-gold cg" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '0.6rem 1.6rem', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block' }}>
            Book Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(201,147,90,0.15) 0%, transparent 65%), linear-gradient(180deg, #0D0D0D 0%, #1C1208 55%, #0D0D0D 100%)'
      }}>
        {/* Background sunburst rays */}
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '550px', overflow: 'hidden', opacity: 0.07, pointerEvents: 'none' }}>
          <svg width="900" height="550" viewBox="0 0 900 550">
            {Array.from({ length: 28 }, (_, i) => {
              const a = (i * 140) / 27 - 160;
              const r = (a * Math.PI) / 180;
              return <line key={i} x1={450} y1={550} x2={450 + 700 * Math.cos(r)} y2={550 + 700 * Math.sin(r)} stroke="#C9935A" strokeWidth="1.5" />;
            })}
          </svg>
        </div>
        <div className="fade-up" style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 5vw' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><SunburstLogo size={90} /></div>
          <div className="cg" style={{ fontSize: '0.68rem', letterSpacing: '0.45em', color: '#C9935A', textTransform: 'uppercase', marginBottom: '1.8rem' }}>Est. 1989 — Brooklyn, New York</div>
          <div>
            <div className="viola" style={{ fontSize: 'clamp(5rem, 12vw, 10rem)', fontWeight: 'normal', lineHeight: 0.9, letterSpacing: '0.05em', color: '#F8F3EE' }}>BODY</div>
            <div className="viola" style={{ fontSize: 'clamp(5rem, 12vw, 10rem)', fontWeight: 'normal', lineHeight: 0.9, letterSpacing: '0.08em', color: '#C9935A', marginBottom: '1.5rem' }}>TAN</div>
          </div>
          <div className="viola" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.7rem)', fontStyle: 'italic', color: '#F8F3EE', opacity: 0.75, marginBottom: '3rem', letterSpacing: '0.04em' }}>
            Premium Tanning and Wellness Center
          </div>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#booking" className="btn-gold cg" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block' }}>Book a Session</a>
            <a href="#services" className="btn-outline cg" style={{ border: '1px solid #C9935A', color: '#C9935A', padding: '1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 400, display: 'inline-block', background: 'transparent' }}>Our Services</a>
          </div>
        </div>
        <div className="scroll-indicator" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer' }} onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
          <svg width="22" height="38" viewBox="0 0 22 38" fill="none">
            <rect x="1" y="1" width="20" height="36" rx="10" stroke="rgba(201,147,90,0.45)" strokeWidth="1.5"/>
            <circle cx="11" cy="10" r="3" fill="#C9935A"/>
          </svg>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: '#C9935A', padding: '2.2rem 5vw', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', textAlign: 'center' }}>
        {[{ num: '35+', label: 'Years of Excellence' }, { num: '14', label: 'Premium Tanning Beds' }, { num: '1000+', label: 'Happy Clients' }].map(({ num, label }) => (
          <div key={label} style={{ borderRight: label !== 'Happy Clients' ? '1px solid rgba(13,13,13,0.2)' : 'none', paddingRight: '1rem' }}>
            <div className="viola" style={{ fontSize: '2.8rem', color: '#0D0D0D', lineHeight: 1 }}>{num}</div>
            <div className="cg" style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0D0D0D', opacity: 0.65, marginTop: '0.3rem', fontWeight: 400 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* SERVICES — only 3: Tanning Beds, Massage Chair, Spray Tanning */}
      <section id="services" style={{ background: '#1a1a1a', padding: '100px 5vw', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', margin: '0 auto 1.2rem' }}></div>
        <p className="cg" style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.7rem' }}>What We Offer</p>
        <h2 className="viola" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#F8F3EE', marginBottom: '4rem', letterSpacing: '0.04em' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            {
              svg: (
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" key="s1">
                  <circle cx="26" cy="26" r="12" fill="#C9935A" fillOpacity="0.12"/>
                  <circle cx="26" cy="26" r="7" fill="#C9935A"/>
                  {[0,45,90,135,180,225,270,315].map((a,i) => { const r=(a*Math.PI)/180; return <line key={i} x1={26+14*Math.cos(r)} y1={26+14*Math.sin(r)} x2={26+20*Math.cos(r)} y2={26+20*Math.sin(r)} stroke="#C9935A" strokeWidth="2.5" strokeLinecap="round"/>; })}
                </svg>
              ),
              title: 'Premium Tanning Beds',
              desc: '14 state-of-the-art beds for the perfect golden glow. Custom sessions tailored for all skin types.'
            },
            {
              svg: (
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" key="s2">
                  <rect x="10" y="28" width="32" height="12" rx="6" stroke="#C9935A" strokeWidth="2" fill="#C9935A" fillOpacity="0.1"/>
                  <rect x="18" y="16" width="16" height="14" rx="4" stroke="#C9935A" strokeWidth="1.8" fill="none"/>
                  <path d="M14 40 L12 46" stroke="#C9935A" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M38 40 L40 46" stroke="#C9935A" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 23 Q26 19 32 23" stroke="#C9935A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
              ),
              title: 'Massage Chair',
              desc: 'Unwind in our premium massage chair. A relaxing, rejuvenating experience after every tanning session.'
            },
            {
              svg: (
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" key="s3">
                  <circle cx="26" cy="26" r="14" stroke="#C9935A" strokeWidth="1.5" fill="#C9935A" fillOpacity="0.08"/>
                  <path d="M20 26 Q26 18 32 26 Q26 34 20 26Z" fill="#C9935A" fillOpacity="0.6"/>
                  <circle cx="26" cy="26" r="4" fill="#C9935A"/>
                  <path d="M38 14 Q42 10 44 14 Q46 18 42 20" stroke="#C9935A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <line x1="38" y1="14" x2="36" y2="18" stroke="#C9935A" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="40" y1="12" x2="39" y2="17" stroke="#C9935A" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="43" y1="12" x2="41" y2="16" stroke="#C9935A" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              ),
              title: 'Spray Tanning',
              desc: 'Flawless, streak-free spray tans for a natural golden glow without the UV. Quick, customizable results.'
            }
          ].map(({ svg, title, desc }) => (
            <div key={title} className="service-card" style={{ background: '#0D0D0D', padding: '3rem 2rem', textAlign: 'center', cursor: 'default' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{svg}</div>
              <h3 className="viola" style={{ fontSize: '1.5rem', color: '#F8F3EE', marginBottom: '1rem', letterSpacing: '0.04em' }}>{title}</h3>
              <p className="cg" style={{ fontSize: '0.83rem', color: 'rgba(248,243,238,0.55)', lineHeight: 1.9, letterSpacing: '0.02em' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: '#0D0D0D', padding: '100px 5vw' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div style={{ width: '55px', height: '1px', background: 'linear-gradient(90deg, #C9935A, transparent)', marginBottom: '1.4rem' }}></div>
            <p className="cg" style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.9rem' }}>Our Story</p>
            <h2 className="viola" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#F8F3EE', marginBottom: '1.8rem', lineHeight: 1.15 }}>
              Brooklyn&apos;s Premier<br /><em>Wellness Sanctuary</em>
            </h2>
            <p className="cg" style={{ color: 'rgba(248,243,238,0.6)', lineHeight: 2.1, marginBottom: '1.4rem', fontSize: '0.88rem' }}>
              Since 1989, Body Tan has been Brooklyn&apos;s trusted destination for premium tanning and holistic wellness. What began as a boutique tanning studio has evolved into a full-service wellness center.
            </p>
            <p className="cg" style={{ color: 'rgba(248,243,238,0.6)', lineHeight: 2.1, fontSize: '0.88rem', marginBottom: '2.5rem' }}>
              With 14 state-of-the-art tanning beds, spray tanning, and a premium massage chair, we bring luxury self-care to the heart of Brooklyn.
            </p>
            <div style={{ display: 'flex', gap: '3rem' }}>
              {[{ n: '1989', l: 'Founded' }, { n: '14', l: 'Tanning Beds' }, { n: '4.9', l: 'Star Rating' }].map(({ n, l }) => (
                <div key={l}>
                  <div className="viola" style={{ fontSize: '2rem', color: '#C9935A' }}>{n}</div>
                  <div className="cg" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(248,243,238,0.45)', marginTop: '0.3rem' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ background: '#1a1a1a', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '420px', border: '1px solid rgba(201,147,90,0.15)' }}>
              <SunburstLogo size={140} />
              <div className="viola" style={{ fontSize: '1.5rem', letterSpacing: '0.22em', color: '#F8F3EE', marginTop: '1.5rem' }}>BODY TAN</div>
              <div className="cg" style={{ fontSize: '0.58rem', letterSpacing: '0.28em', color: '#C9935A', textTransform: 'uppercase', marginTop: '0.5rem' }}>And Wellness Center</div>
              <div style={{ width: '110px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', margin: '1rem 0' }}></div>
              <div className="cg" style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(248,243,238,0.35)', textTransform: 'uppercase' }}>Est. 1989</div>
            </div>
            <div style={{ position: 'absolute', top: '-14px', left: '-14px', width: '70px', height: '70px', border: '1px solid rgba(201,147,90,0.25)' }}></div>
            <div style={{ position: 'absolute', bottom: '-14px', right: '-14px', width: '70px', height: '70px', border: '1px solid rgba(201,147,90,0.25)' }}></div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" style={{ background: 'radial-gradient(ellipse at center, rgba(201,147,90,0.1) 0%, #1a1a1a 65%)', padding: '100px 5vw', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}><SunburstLogo size={65} /></div>
          <h2 className="viola" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#F8F3EE', marginBottom: '1rem', letterSpacing: '0.04em' }}>Ready to Glow?</h2>
          <p className="cg" style={{ color: 'rgba(248,243,238,0.55)', marginBottom: '3rem', fontSize: '0.95rem', lineHeight: 1.9 }}>Call us or walk in. We would love to help you find your perfect session.</p>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <a href="tel:+17183752167" className="btn-gold cg" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '1.1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block' }}>Call to Book</a>
            <a href="#contact" className="btn-outline cg" style={{ border: '1px solid #C9935A', color: '#C9935A', padding: '1.1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 400, display: 'inline-block', background: 'transparent' }}>Send a Message</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0', border: '1px solid rgba(201,147,90,0.18)', textAlign: 'center' }}>
            {[{ emoji: '🕐', label: 'Hours', lines: ['Mon–Thu: 10am–8pm', 'Fri–Sun: 10am–9pm'] }, { emoji: '📍', label: 'Location', lines: ['721 Avenue U', 'Brooklyn, NY 11229'] }, { emoji: '📞', label: 'Phone', lines: ['718-375-2167', 'Walk-ins Welcome'] }].map(({ emoji, label, lines }, idx) => (
              <div key={label} style={{ padding: '2rem 1.5rem', borderRight: idx < 2 ? '1px solid rgba(201,147,90,0.15)' : 'none' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>{emoji}</div>
                <div className="cg" style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.6rem' }}>{label}</div>
                {lines.map(line => <div key={line} className="cg" style={{ fontSize: '0.78rem', color: 'rgba(248,243,238,0.6)', lineHeight: 1.7 }}>{line}</div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: '#0D0D0D', padding: '100px 5vw' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', margin: '0 auto 1.2rem' }}></div>
          <p className="cg" style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.7rem' }}>Get In Touch</p>
          <h2 className="viola" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#F8F3EE', marginBottom: '3.5rem' }}>Contact Us</h2>
          {submitted ? (
            <div style={{ background: 'rgba(201,147,90,0.08)', border: '1px solid rgba(201,147,90,0.4)', padding: '2.5rem', color: '#C9935A', fontFamily: 'Viola, serif', fontSize: '1.3rem', letterSpacing: '0.05em', fontStyle: 'italic' }}>
              Thank you — we will be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[{ name: 'name', placeholder: 'Full Name', type: 'text' }, { name: 'email', placeholder: 'Email Address', type: 'email' }, { name: 'phone', placeholder: 'Phone Number', type: 'tel' }].map(({ name, placeholder, type }) => (
                <input key={name} type={type} name={name} placeholder={placeholder} value={formData[name]} onChange={handleChange} required style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,147,90,0.25)', padding: '0.9rem 0', color: '#F8F3EE', fontSize: '0.88rem', letterSpacing: '0.04em', width: '100%', fontFamily: "'Century Gothic', Arial, sans-serif", fontWeight: 300, transition: 'border-color 0.3s' }} />
              ))}
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={4} required style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,147,90,0.25)', padding: '0.9rem 0', color: '#F8F3EE', fontSize: '0.88rem', resize: 'none', letterSpacing: '0.04em', width: '100%', fontFamily: "'Century Gothic', Arial, sans-serif", fontWeight: 300, transition: 'border-color 0.3s' }} />
              <button type="submit" className="btn-gold cg" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '1.2rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', border: 'none', fontWeight: 700, cursor: 'pointer', marginTop: '0.5rem' }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1a1a1a', borderTop: '1px solid rgba(201,147,90,0.12)', padding: '3rem 5vw', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.2rem' }}>
          <SunburstLogo size={34} />
          <div className="viola" style={{ fontSize: '1rem', letterSpacing: '0.18em', color: '#F8F3EE' }}>BODY TAN</div>
        </div>
        <div style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,147,90,0.4), transparent)', margin: '0 auto 1.2rem' }}></div>
        <div className="cg" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(248,243,238,0.3)', textTransform: 'uppercase' }}>
          &copy; 1989&ndash;2026 Body Tan And Wellness Center &middot; Brooklyn, New York
        </div>
      </footer>
    </>
  );
}
