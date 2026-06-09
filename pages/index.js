import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const SunburstLogo = ({ size = 80 }) => {
  const rays = [];
  for (let i = 0; i < 18; i++) {
    const angle = (i * 180) / 17 - 90;
    const rad = (angle * Math.PI) / 180;
    const x1 = 100 + 18 * Math.cos(rad);
    const y1 = 125 + 18 * Math.sin(rad);
    const x2 = 100 + 88 * Math.cos(rad);
    const y2 = 125 + 88 * Math.sin(rad);
    const w = i === 8 ? 3.5 : i === 7 || i === 9 ? 2.8 : i === 6 || i === 10 ? 2.2 : 1.5;
    rays.push(React.createElement('line', { key: i, x1, y1, x2, y2, stroke: '#C9935A', strokeWidth: w, strokeLinecap: 'round' }));
  }
  return React.createElement('svg', { width: size, height: size * 0.65, viewBox: '0 0 200 130', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    ...rays,
    React.createElement('circle', { cx: 100, cy: 125, r: 10, fill: '#C9935A' })
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

  const globalStyles = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { background: #0D0D0D; color: #F8F3EE; font-family: 'Raleway', 'Century Gothic', Arial, sans-serif; font-weight: 300; letter-spacing: 0.02em; }
    .serif-font { font-family: 'Cormorant Garamond', 'Times New Roman', Georgia, serif; }
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
        <meta name="description" content="Premium tanning beds, massage therapy, and wellness services in Brooklyn, NY since 1989." />
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
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.18em', color: '#F8F3EE' }}>BODY TAN</div>
            <div style={{ fontSize: '0.52rem', letterSpacing: '0.25em', color: '#C9935A', textTransform: 'uppercase' }}>And Wellness Center</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['Services', 'About', 'Booking', 'Contact'].map(item => (
            <a key={item} href={'#' + item.toLowerCase()} className="nav-link" style={{ color: '#F8F3EE', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.8, fontWeight: 400 }}>{item}</a>
          ))}
          <a href="#booking" className="btn-gold" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '0.6rem 1.6rem', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block' }}>
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
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '500px', overflow: 'hidden', opacity: 0.08, pointerEvents: 'none' }}>
          <svg width="900" height="500" viewBox="0 0 900 500">
            {Array.from({ length: 26 }, (_, i) => {
              const a = (i * 180) / 25 - 90;
              const r = (a * Math.PI) / 180;
              return <line key={i} x1={450} y1={500} x2={450 + 650 * Math.cos(r)} y2={500 + 650 * Math.sin(r)} stroke="#C9935A" strokeWidth={i === 12 || i === 13 ? 5 : 2} />;
            })}
          </svg>
        </div>
        <div className="fade-up" style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 5vw' }}>
          <div style={{ marginBottom: '1.8rem', display: 'flex', justifyContent: 'center' }}><SunburstLogo size={130} /></div>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.45em', color: '#C9935A', textTransform: 'uppercase', marginBottom: '2rem', fontFamily: 'Raleway, sans-serif' }}>Est. 1989 — Brooklyn, New York</div>
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(4.5rem, 11vw, 9rem)', fontWeight: 300, lineHeight: 0.9, letterSpacing: '0.08em', color: '#F8F3EE' }}>BODY</div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(4.5rem, 11vw, 9rem)', fontWeight: 600, lineHeight: 0.9, letterSpacing: '0.12em', color: '#C9935A', marginBottom: '1.5rem' }}>TAN</div>
          </div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem, 2.2vw, 1.5rem)', fontStyle: 'italic', color: '#F8F3EE', opacity: 0.75, marginBottom: '3rem', letterSpacing: '0.06em' }}>
            Premium Tanning and Wellness Center
          </div>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#booking" className="btn-gold" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block' }}>Book a Session</a>
            <a href="#services" className="btn-outline" style={{ border: '1px solid #C9935A', color: '#C9935A', padding: '1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 400, display: 'inline-block', background: 'transparent' }}>Our Services</a>
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
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', fontWeight: 600, color: '#0D0D0D', lineHeight: 1 }}>{num}</div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0D0D0D', opacity: 0.65, marginTop: '0.3rem', fontWeight: 400 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section id="services" style={{ background: '#1a1a1a', padding: '100px 5vw', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', margin: '0 auto 1.2rem' }}></div>
        <p style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.7rem' }}>What We Offer</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#F8F3EE', marginBottom: '4rem', letterSpacing: '0.04em' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            {
              svg: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" key="s1">
                <circle cx="26" cy="26" r="12" fill="#C9935A" fillOpacity="0.12"/>
                <circle cx="26" cy="26" r="7" fill="#C9935A"/>
                {[0,45,90,135,180,225,270,315].map((a,i) => { const r=(a*Math.PI)/180; return <line key={i} x1={26+14*Math.cos(r)} y1={26+14*Math.sin(r)} x2={26+20*Math.cos(r)} y2={26+20*Math.sin(r)} stroke="#C9935A" strokeWidth="2.5" strokeLinecap="round"/>; })}
              </svg>,
              title: 'Premium Tanning Beds',
              desc: '14 state-of-the-art beds for the perfect golden glow. Custom sessions for all skin types.'
            },
            {
              svg: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" key="s2">
                <path d="M10 22 Q16 10 26 15 Q36 10 42 22 Q44 30 38 36 Q32 44 26 46 Q20 44 14 36 Q8 30 10 22Z" stroke="#C9935A" strokeWidth="1.8" fill="#C9935A" fillOpacity="0.12"/>
                <path d="M18 24 Q22 19 26 24 Q30 29 34 24" stroke="#C9935A" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <circle cx="26" cy="32" r="3.5" fill="#C9935A"/>
              </svg>,
              title: 'Massage Therapy',
              desc: 'Deep tissue, Swedish, and hot stone massages. Expert therapists to unwind and rejuvenate.'
            },
            {
              svg: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" key="s3">
                <rect x="18" y="8" width="16" height="28" rx="8" stroke="#C9935A" strokeWidth="2" fill="#C9935A" fillOpacity="0.1"/>
                <path d="M26 36 L26 46" stroke="#C9935A" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 46 L32 46" stroke="#C9935A" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M12 24 Q7 24 7 19 Q7 14 12 14" stroke="#C9935A" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M40 24 Q45 24 45 19 Q45 14 40 14" stroke="#C9935A" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </svg>,
              title: 'Red Light Therapy',
              desc: 'Cutting-edge recovery and skin rejuvenation. Coming soon to our Brooklyn sanctuary.'
            },
            {
              svg: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" key="s4">
                <path d="M26 6 L30 18 L44 18 L33 27 L37 40 L26 31 L15 40 L19 27 L8 18 L22 18Z" stroke="#C9935A" strokeWidth="1.8" fill="#C9935A" fillOpacity="0.15"/>
                <circle cx="26" cy="26" r="4" fill="#C9935A"/>
              </svg>,
              title: 'Wellness Treatments',
              desc: 'Expanding holistic wellness offerings. Comprehensive self-care solutions in one place.'
            }
          ].map(({ svg, title, desc }) => (
            <div key={title} className="service-card" style={{ background: '#0D0D0D', padding: '3rem 2rem', textAlign: 'center', cursor: 'default' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{svg}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: '#F8F3EE', marginBottom: '1rem', letterSpacing: '0.04em' }}>{title}</h3>
              <p style={{ fontSize: '0.83rem', color: 'rgba(248,243,238,0.55)', lineHeight: 1.9, letterSpacing: '0.02em' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: '#0D0D0D', padding: '100px 5vw' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div style={{ width: '55px', height: '1px', background: 'linear-gradient(90deg, #C9935A, transparent)', marginBottom: '1.4rem' }}></div>
            <p style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.9rem' }}>Our Story</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 300, color: '#F8F3EE', marginBottom: '1.8rem', lineHeight: 1.15 }}>
              Brooklyn&apos;s Premier<br /><em>Wellness Sanctuary</em>
            </h2>
            <p style={{ color: 'rgba(248,243,238,0.6)', lineHeight: 2.1, marginBottom: '1.4rem', fontSize: '0.88rem' }}>
              Since 1989, Body Tan has been Brooklyn&apos;s trusted destination for premium tanning and holistic wellness. What began as a boutique tanning studio has evolved into a full-service wellness center.
            </p>
            <p style={{ color: 'rgba(248,243,238,0.6)', lineHeight: 2.1, fontSize: '0.88rem', marginBottom: '2.5rem' }}>
              With 14 state-of-the-art tanning beds, professional massage therapy, and an expanding wellness menu, we bring luxury self-care to the heart of Brooklyn.
            </p>
            <div style={{ display: 'flex', gap: '3rem' }}>
              {[{ n: '1989', l: 'Founded' }, { n: '14', l: 'Tanning Beds' }, { n: '4.9', l: 'Star Rating' }].map(({ n, l }) => (
                <div key={l}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: '#C9935A' }}>{n}</div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(248,243,238,0.45)', marginTop: '0.3rem' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ background: '#1a1a1a', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '420px', border: '1px solid rgba(201,147,90,0.15)' }}>
              <SunburstLogo size={160} />
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.22em', color: '#F8F3EE', marginTop: '2rem' }}>BODY TAN</div>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.28em', color: '#C9935A', textTransform: 'uppercase', marginTop: '0.5rem' }}>And Wellness Center</div>
              <div style={{ width: '110px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', margin: '1rem 0' }}></div>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(248,243,238,0.35)', textTransform: 'uppercase' }}>Est. 1989</div>
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
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#F8F3EE', marginBottom: '1rem', letterSpacing: '0.04em' }}>Ready to Glow?</h2>
          <p style={{ color: 'rgba(248,243,238,0.55)', marginBottom: '3rem', fontSize: '0.95rem', lineHeight: 1.9 }}>Call us or walk in. We would love to help you find your perfect session.</p>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <a href="tel:+17180000000" className="btn-gold" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '1.1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block' }}>Call to Book</a>
            <a href="#contact" className="btn-outline" style={{ border: '1px solid #C9935A', color: '#C9935A', padding: '1.1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 400, display: 'inline-block', background: 'transparent' }}>Send a Message</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0', border: '1px solid rgba(201,147,90,0.18)', textAlign: 'center' }}>
            {[{ emoji: '🕐', label: 'Hours', lines: ['Mon–Sat: 9am–8pm', 'Sun: 10am–6pm'] }, { emoji: '📍', label: 'Location', lines: ['Brooklyn, NY', 'Call for address'] }, { emoji: '📞', label: 'Phone', lines: ['(718) 000-0000', 'Walk-ins Welcome'] }].map(({ emoji, label, lines }, idx) => (
              <div key={label} style={{ padding: '2rem 1.5rem', borderRight: idx < 2 ? '1px solid rgba(201,147,90,0.15)' : 'none' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>{emoji}</div>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.6rem' }}>{label}</div>
                {lines.map(line => <div key={line} style={{ fontSize: '0.78rem', color: 'rgba(248,243,238,0.6)', lineHeight: 1.7 }}>{line}</div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: '#0D0D0D', padding: '100px 5vw' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', margin: '0 auto 1.2rem' }}></div>
          <p style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.7rem' }}>Get In Touch</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#F8F3EE', marginBottom: '3.5rem' }}>Contact Us</h2>
          {submitted ? (
            <div style={{ background: 'rgba(201,147,90,0.08)', border: '1px solid rgba(201,147,90,0.4)', padding: '2.5rem', color: '#C9935A', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', letterSpacing: '0.05em', fontStyle: 'italic' }}>
              Thank you — we will be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[{ name: 'name', placeholder: 'Full Name', type: 'text' }, { name: 'email', placeholder: 'Email Address', type: 'email' }, { name: 'phone', placeholder: 'Phone Number', type: 'tel' }].map(({ name, placeholder, type }) => (
                <input key={name} type={type} name={name} placeholder={placeholder} value={formData[name]} onChange={handleChange} required style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,147,90,0.25)', padding: '0.9rem 0', color: '#F8F3EE', fontSize: '0.88rem', letterSpacing: '0.04em', width: '100%', fontFamily: 'Raleway, sans-serif', fontWeight: 300, transition: 'border-color 0.3s' }} />
              ))}
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={4} required style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,147,90,0.25)', padding: '0.9rem 0', color: '#F8F3EE', fontSize: '0.88rem', resize: 'none', letterSpacing: '0.04em', width: '100%', fontFamily: 'Raleway, sans-serif', fontWeight: 300, transition: 'border-color 0.3s' }} />
              <button type="submit" className="btn-gold" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#0D0D0D', padding: '1.2rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', border: 'none', fontWeight: 700, cursor: 'pointer', marginTop: '0.5rem', fontFamily: 'Raleway, sans-serif' }}>
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
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.18em', color: '#F8F3EE' }}>BODY TAN</div>
        </div>
        <div style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,147,90,0.4), transparent)', margin: '0 auto 1.2rem' }}></div>
        <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(248,243,238,0.3)', textTransform: 'uppercase' }}>
          &copy; 1989&ndash;2026 Body Tan And Wellness Center &middot; Brooklyn, New York
        </div>
      </footer>
    </>
  );
}
