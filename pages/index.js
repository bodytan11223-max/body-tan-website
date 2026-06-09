import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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

  const SunburstLogo = ({ size = 80, dark = false }) => (
    <svg width={size} height={size * 0.65} viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[...Array(18)].map((_, i) => {
        const angle = (i * 180) / 17 - 90;
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + 18 * Math.cos(rad);
        const y1 = 125 + 18 * Math.sin(rad);
        const x2 = 100 + 90 * Math.cos(rad);
        const y2 = 125 + 90 * Math.sin(rad);
        const width = i === 8 ? 3.5 : i === 7 || i === 9 ? 2.8 : i === 6 || i === 10 ? 2.2 : 1.5;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={dark ? '#1a1a1a' : '#C9935A'} strokeWidth={width} strokeLinecap="round" />;
      })}
      <circle cx="100" cy="125" r="10" fill={dark ? '#1a1a1a' : '#C9935A'} />
    </svg>
  );

  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="10" fill="#C9935A" opacity="0.2"/>
          <circle cx="24" cy="24" r="6" fill="#C9935A"/>
          {[0,45,90,135,180,225,270,315].map((a,i) => {
            const r=(a*Math.PI)/180; return <line key={i} x1={24+14*Math.cos(r)} y1={24+14*Math.sin(r)} x2={24+19*Math.cos(r)} y2={24+19*Math.sin(r)} stroke="#C9935A" strokeWidth="2.5" strokeLinecap="round"/>;
          })}
        </svg>
      ),
      title: 'Premium Tanning Beds',
      desc: '14 state-of-the-art beds for the perfect golden glow. Custom sessions available for all skin types.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M8 20 Q14 10 24 14 Q34 10 40 20 Q42 28 36 34 Q30 42 24 44 Q18 42 12 34 Q6 28 8 20Z" stroke="#C9935A" strokeWidth="2" fill="#C9935A" fillOpacity="0.15"/>
          <path d="M16 22 Q20 18 24 22 Q28 26 32 22" stroke="#C9935A" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <circle cx="24" cy="30" r="3" fill="#C9935A"/>
        </svg>
      ),
      title: 'Massage Therapy',
      desc: 'Deep tissue, Swedish, and hot stone massages. Expert therapists to unwind and rejuvenate your body.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="16" y="8" width="16" height="28" rx="8" stroke="#C9935A" strokeWidth="2" fill="#C9935A" fillOpacity="0.1"/>
          <path d="M24 36 L24 44" stroke="#C9935A" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M18 44 L30 44" stroke="#C9935A" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M10 22 Q6 22 6 18 Q6 14 10 14" stroke="#C9935A" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M38 22 Q42 22 42 18 Q42 14 38 14" stroke="#C9935A" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
      ),
      title: 'Red Light Therapy',
      desc: 'Cutting-edge recovery and skin rejuvenation. Coming soon to our Brooklyn wellness sanctuary.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 6 L28 18 L40 18 L30 26 L34 38 L24 30 L14 38 L18 26 L8 18 L20 18Z" stroke="#C9935A" strokeWidth="2" fill="#C9935A" fillOpacity="0.2"/>
          <circle cx="24" cy="24" r="4" fill="#C9935A"/>
        </svg>
      ),
      title: 'Wellness Treatments',
      desc: 'Expanding our holistic wellness offerings — comprehensive self-care solutions all in one place.'
    }
  ];

  return (
    <>
      <Head>
        <title>Body Tan — Premium Tanning & Wellness in Brooklyn</title>
        <meta name="description" content="Premium tanning beds, massage therapy, and wellness services in Brooklyn, NY since 1989." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Raleway:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          :root {
            --gold: #C9935A;
            --gold-light: #E8B887;
            --gold-dark: #A67840;
            --black: #0D0D0D;
            --charcoal: #1a1a1a;
            --cream: #F8F3EE;
            --cream-dark: #EDE5D8;
            --white: #FFFFFF;
          }
          html { scroll-behavior: smooth; }
          body { background: var(--black); color: var(--cream); font-family: 'Raleway', sans-serif; font-weight: 300; letter-spacing: 0.02em; }
          h1, h2, h3, .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
          .gold { color: var(--gold); }
          .gold-line { width: 60px; height: 1px; background: linear-gradient(90deg, transparent, var(--gold), transparent); margin: 0 auto 1.5rem; }
          section { padding: 100px 5vw; }
          @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          .fade-up { animation: fadeUp 0.9s ease forwards; }
          @keyframes shimmer { 0%,100% { opacity:0.7; } 50% { opacity:1; } }
        `}</style>
      </Head>

      {/* NAVIGATION */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: scrolled ? 'rgba(13,13,13,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,147,90,0.2)' : 'none',
        padding: '1.2rem 5vw',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        transition: 'all 0.4s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <SunburstLogo size={44} />
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--cream)' }}>BODY TAN</div>
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginTop: '-2px' }}>And Wellness Center</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['Services','About','Booking','Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: 'var(--cream)', textDecoration: 'none', fontSize: '0.75rem',
              letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.85,
              transition: 'all 0.3s', fontWeight: 400
            }} onMouseEnter={e => { e.target.style.color='var(--gold)'; e.target.style.opacity='1'; }} onMouseLeave={e => { e.target.style.color='var(--cream)'; e.target.style.opacity='0.85'; }}>{item}</a>
          ))}
          <a href="#booking" style={{
            background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
            color: 'var(--black)', padding: '0.6rem 1.6rem',
            fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s'
          }} onMouseEnter={e => e.target.style.transform='translateY(-1px)'} onMouseLeave={e => e.target.style.transform='translateY(0)'}>
            Book Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{
        minHeight: '100vh', padding: 0, position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(201,147,90,0.18) 0%, rgba(13,13,13,0) 60%), linear-gradient(180deg, #0D0D0D 0%, #1a1108 50%, #0D0D0D 100%)'
      }}>
        {/* Decorative rays */}
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '800px', height: '500px', overflow: 'hidden', opacity: 0.12 }}>
          <svg width="800" height="500" viewBox="0 0 800 500">
            {[...Array(24)].map((_, i) => {
              const angle = (i * 180) / 23 - 90;
              const rad = (angle * Math.PI) / 180;
              return <line key={i} x1={400} y1={500} x2={400 + 600 * Math.cos(rad)} y2={500 + 600 * Math.sin(rad)} stroke="#C9935A" strokeWidth={i===11||i===12?4:2} />;
            })}
          </svg>
        </div>
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 5vw', animation: 'fadeUp 1s ease forwards' }}>
          <div style={{ marginBottom: '2rem' }}>
            <SunburstLogo size={120} />
          </div>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: 'Raleway' }}>
            Est. 1989 — Brooklyn, New York
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '0.05em', color: 'var(--cream)', marginBottom: '0.5rem' }}>
            BODY
          </h1>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '2rem' }}>
            TAN
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontStyle: 'italic', color: 'var(--cream)', opacity: 0.8, marginBottom: '3rem', letterSpacing: '0.05em' }}>
            Premium Tanning & Wellness Center
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#booking" style={{
              background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
              color: 'var(--black)', padding: '1rem 3rem', fontSize: '0.75rem',
              letterSpacing: '0.25em', textTransform: 'uppercase', textDecoration: 'none',
              fontWeight: 600, transition: 'all 0.3s', display: 'inline-block'
            }} onMouseEnter={e => { e.target.style.transform='translateY(-2px)'; e.target.style.boxShadow='0 8px 30px rgba(201,147,90,0.4)'; }} onMouseLeave={e => { e.target.style.transform='translateY(0)'; e.target.style.boxShadow='none'; }}>
              Book a Session
            </a>
            <a href="#services" style={{
              border: '1px solid var(--gold)', color: 'var(--gold)',
              padding: '1rem 3rem', fontSize: '0.75rem',
              letterSpacing: '0.25em', textTransform: 'uppercase', textDecoration: 'none',
              fontWeight: 400, transition: 'all 0.3s', display: 'inline-block',
              background: 'transparent'
            }} onMouseEnter={e => { e.target.style.background='rgba(201,147,90,0.1)'; }} onMouseLeave={e => { e.target.style.background='transparent'; }}>
              Our Services
            </a>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', animation: 'shimmer 2s infinite' }}>
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
            <rect x="1" y="1" width="22" height="38" rx="11" stroke="rgba(201,147,90,0.5)" strokeWidth="1.5"/>
            <circle cx="12" cy="10" r="3" fill="var(--gold)" style={{ animation: 'fadeUp 1.5s infinite' }}/>
          </svg>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: 'var(--gold)', padding: '2rem 5vw', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem', textAlign: 'center' }}>
        {[{ num: '35+', label: 'Years of Excellence' }, { num: '14', label: 'Premium Tanning Beds' }, { num: '1000+', label: 'Happy Clients' }].map(({ num, label }) => (
          <div key={label}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 600, color: 'var(--black)', lineHeight: 1 }}>{num}</div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--black)', opacity: 0.75, marginTop: '0.3rem' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section id="services" style={{ background: 'var(--charcoal)', textAlign: 'center' }}>
        <div className="gold-line" style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', margin: '0 auto 1.5rem' }}></div>
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem' }}>What We Offer</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '4rem', letterSpacing: '0.05em' }}>
          Our Services
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2px', maxWidth: '1200px', margin: '0 auto' }}>
          {services.map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: 'var(--black)', padding: '3rem 2rem', textAlign: 'center',
              borderBottom: '2px solid transparent', transition: 'all 0.4s ease', cursor: 'default',
              position: 'relative', overflow: 'hidden'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderBottom='2px solid var(--gold)'; e.currentTarget.style.background='#111'; }}
            onMouseLeave={e => { e.currentTarget.style.borderBottom='2px solid transparent'; e.currentTarget.style.background='var(--black)'; }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{icon}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 400, color: 'var(--cream)', marginBottom: '1rem', letterSpacing: '0.05em' }}>{title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(248,243,238,0.6)', lineHeight: 1.8, letterSpacing: '0.02em' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: 'var(--black)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, var(--gold), transparent)', marginBottom: '1.5rem' }}></div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Our Story</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '2rem', lineHeight: 1.1 }}>
              Brooklyn's Premier<br /><em>Wellness Sanctuary</em>
            </h2>
            <p style={{ color: 'rgba(248,243,238,0.65)', lineHeight: 2, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Since 1989, Body Tan has been Brooklyn's trusted destination for premium tanning and holistic wellness. What began as a boutique tanning studio has evolved into a full-service wellness center.
            </p>
            <p style={{ color: 'rgba(248,243,238,0.65)', lineHeight: 2, fontSize: '0.9rem', marginBottom: '2.5rem' }}>
              With 14 state-of-the-art tanning beds, professional massage therapy, and an expanding menu of wellness treatments, we bring luxury self-care to the heart of Brooklyn.
            </p>
            <div style={{ display: 'flex', gap: '3rem' }}>
              {[{ n:'1989', l:'Founded' }, { n:'14', l:'Tanning Beds' }, { n:'4.9', l:'Star Rating' }].map(({ n, l }) => (
                <div key={l}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: 'var(--gold)' }}>{n}</div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(248,243,238,0.5)', marginTop: '0.2rem' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ background: 'var(--charcoal)', padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', border: '1px solid rgba(201,147,90,0.15)' }}>
              <SunburstLogo size={160} />
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--cream)', marginTop: '2rem' }}>BODY TAN</div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginTop: '0.5rem' }}>And Wellness Center</div>
              <div style={{ width: '120px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', margin: '1rem 0' }}></div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(248,243,238,0.4)', textTransform: 'uppercase' }}>Est. 1989</div>
            </div>
            <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '80px', height: '80px', border: '1px solid rgba(201,147,90,0.3)' }}></div>
            <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', width: '80px', height: '80px', border: '1px solid rgba(201,147,90,0.3)' }}></div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section id="booking" style={{ background: 'radial-gradient(ellipse at center, rgba(201,147,90,0.12) 0%, var(--charcoal) 70%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <SunburstLogo size={70} />
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--cream)', margin: '1.5rem 0 1rem', letterSpacing: '0.05em' }}>
            Ready to Glow?
          </h2>
          <p style={{ color: 'rgba(248,243,238,0.6)', marginBottom: '3rem', fontSize: '1rem', lineHeight: 1.8 }}>
            Call us or walk in — we'd love to help you find your perfect session.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="tel:+1718-000-0000" style={{
              background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
              color: 'var(--black)', padding: '1.1rem 3rem', fontSize: '0.75rem',
              letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600
            }}>Call to Book</a>
            <a href="#contact" style={{
              border: '1px solid var(--gold)', color: 'var(--gold)',
              padding: '1.1rem 3rem', fontSize: '0.75rem',
              letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 400
            }}>Send a Message</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', textAlign: 'center', border: '1px solid rgba(201,147,90,0.2)', padding: '2rem' }}>
            {[{ icon: '⏰', label: 'Hours', val: 'Mon–Sat: 9am–8pm
Sun: 10am–6pm' },{ icon: '📍', label: 'Location', val: 'Brooklyn, NY
(Call for address)' },{ icon: '📞', label: 'Phone', val: '(718) 000-0000
Walk-ins Welcome' }].map(({ icon, label, val }) => (
              <div key={label} style={{ borderRight: label !== 'Phone' ? '1px solid rgba(201,147,90,0.15)' : 'none', paddingRight: label !== 'Phone' ? '1.5rem' : 0 }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{icon}</div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>{label}</div>
                {val.split('\n').map((line, i) => <div key={i} style={{ fontSize: '0.8rem', color: 'rgba(248,243,238,0.65)', lineHeight: 1.6 }}>{line}</div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: 'var(--black)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', margin: '0 auto 1.5rem' }}></div>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem' }}>Get In Touch</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '3rem' }}>Contact Us</h2>
          {submitted ? (
            <div style={{ background: 'rgba(201,147,90,0.1)', border: '1px solid var(--gold)', padding: '2rem', color: 'var(--gold)', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', letterSpacing: '0.05em' }}>
              Thank you — we'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[{ name: 'name', placeholder: 'Full Name', type: 'text' }, { name: 'email', placeholder: 'Email Address', type: 'email' }, { name: 'phone', placeholder: 'Phone Number', type: 'tel' }].map(({ name, placeholder, type }) => (
                <input key={name} type={type} name={name} placeholder={placeholder} value={formData[name]} onChange={handleChange} required style={{
                  background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,147,90,0.3)',
                  padding: '1rem 0', color: 'var(--cream)', fontSize: '0.9rem', outline: 'none',
                  letterSpacing: '0.05em', width: '100%', transition: 'border-color 0.3s',
                  fontFamily: 'Raleway, sans-serif'
                }} onFocus={e => e.target.style.borderBottomColor='var(--gold)'} onBlur={e => e.target.style.borderBottomColor='rgba(201,147,90,0.3)'}/>
              ))}
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={4} required style={{
                background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,147,90,0.3)',
                padding: '1rem 0', color: 'var(--cream)', fontSize: '0.9rem', outline: 'none',
                resize: 'none', letterSpacing: '0.05em', width: '100%', fontFamily: 'Raleway, sans-serif'
              }} onFocus={e => e.target.style.borderBottomColor='var(--gold)'} onBlur={e => e.target.style.borderBottomColor='rgba(201,147,90,0.3)'}/>
              <button type="submit" style={{
                background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                color: 'var(--black)', padding: '1.2rem', fontSize: '0.75rem',
                letterSpacing: '0.25em', textTransform: 'uppercase', border: 'none',
                fontWeight: 700, cursor: 'pointer', marginTop: '1rem', transition: 'all 0.3s', fontFamily: 'Raleway, sans-serif'
              }} onMouseEnter={e => e.target.style.transform='translateY(-2px)'} onMouseLeave={e => e.target.style.transform='translateY(0)'}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--charcoal)', borderTop: '1px solid rgba(201,147,90,0.15)', padding: '3rem 5vw', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
          <SunburstLogo size={36} />
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--cream)' }}>BODY TAN</div>
        </div>
        <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(248,243,238,0.35)', textTransform: 'uppercase' }}>
          © 1989–2026 Body Tan And Wellness Center · Brooklyn, New York
        </div>
      </footer>
    </>
  );
}
