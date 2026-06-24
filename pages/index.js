import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

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
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { background: #F8F3EE; color: #1a1a1a; font-family: 'Century Gothic', 'Raleway', Arial, sans-serif; font-weight: 300; letter-spacing: 0.02em; }
    a { text-decoration: none; }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    .fade-up { animation: fadeUp 1s ease forwards; }
    .btn-gold { transition: transform 0.3s, box-shadow 0.3s; }
    .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,147,90,0.35); }
    .btn-outline { transition: background 0.3s, color 0.3s; }
    .btn-outline:hover { background: rgba(201,147,90,0.1) !important; }
    .service-card { transition: transform 0.4s ease, border-color 0.4s ease; }
    .service-card:hover { transform: translateY(-6px); border-color: rgba(201,147,90,0.4) !important; }
    .nav-link:hover { color: #C9935A !important; opacity: 1 !important; }
    input:focus, textarea:focus { outline: none; border-bottom-color: #C9935A !important; border-bottom-width: 2px !important; }
    .mobile-menu-overlay { display: none; }
    .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; }
    .hamburger span { display: block; width: 24px; height: 2px; background: #1a1a1a; margin: 5px 0; transition: all 0.3s ease; }
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
        background: rgba(248,243,238,0.98); z-index: 99; opacity: 0; pointer-events: none;
        transition: opacity 0.3s ease;
      }
      .mobile-menu-overlay.open { opacity: 1; pointer-events: all; }
      .mobile-menu-overlay a {
        font-size: 1.4rem; letter-spacing: 0.2em; color: #1a1a1a;
        text-transform: uppercase; padding: 0.5rem 2rem;
      }
      .mobile-menu-book {
        background: linear-gradient(135deg, #C9935A, #A67840) !important;
        color: #fff !important; padding: 0.9rem 2.5rem !important; font-weight: 700 !important;
      }
    }
    @media (max-width: 768px) {
      .hero-buttons { flex-direction: column !important; align-items: center !important; }
      .hero-buttons a { width: 260px !important; text-align: center !important; }
      .stats-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
      .services-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
      .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
      .info-grid { grid-template-columns: 1fr !important; }
      .section-pad { padding: 60px 5vw !important; }
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
        <a href="#booking" className="mobile-menu-book" onClick={(e) => { e.preventDefault(); handleNavClick('booking'); }}>
          Book Now
        </a>
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(201,147,90,0.15)' : 'none',
        padding: '1rem 5vw', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', transition: 'all 0.4s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logoo.png" alt="Body Tan and Wellness Center" style={{ height: '60px', width: 'auto' }} />
        </div>

        {/* Desktop nav */}
        <div className="desktop-nav">
          {['Services', 'About', 'Booking', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" style={{ color: '#1a1a1a', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.8, fontWeight: 400 }}>{item}</a>
          ))}
          <a href="#booking" className="btn-gold" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#fff', padding: '0.75rem 1.6rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block' }}>Book Now</a>
        </div>

        {/* Hamburger */}
        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(180deg, #F8F3EE 0%, #FFFFFF 50%, #F8F3EE 100%)',
        paddingTop: '100px'
      }}>
        <div className="fade-up" style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 5vw', width: '100%' }}>
          
          {/* YOUR ACTUAL LOGO - LARGE */}
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
            <img src="/logoo.png" alt="Body Tan and Wellness Center" style={{ maxWidth: '500px', width: '90%', height: 'auto' }} />
          </div>

          <div style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#666', marginBottom: '3rem', letterSpacing: '0.04em' }}>
            Premium Tanning and Wellness Center · Brooklyn, NY
          </div>
          
          <div className="hero-buttons" style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#booking" className="btn-gold" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#fff', padding: '1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, display: 'inline-block' }}>Book a Session</a>
            <a href="#services" className="btn-outline" style={{ border: '1px solid #C9935A', color: '#C9935A', padding: '1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 400, display: 'inline-block', background: 'transparent' }}>Our Services</a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div style={{ background: '#C9935A', padding: '2.2rem 5vw' }}>
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          {[{ num: '35+', label: 'Years of Excellence' }, { num: '14', label: 'Premium Tanning Beds' }, { num: '1000+', label: 'Happy Clients' }].map(({ num, label }, idx) => (
            <div key={num} style={{ padding: '0.5rem 0', borderRight: idx < 2 ? '1px solid rgba(255,255,255,0.25)' : 'none' }}>
              <div style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff', fontWeight: 'normal', lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginTop: '0.4rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="section-pad" style={{ background: '#FFFFFF', padding: '100px 5vw', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9935A, transparent)', margin: '0 auto 1.2rem' }}></div>
        <p style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.7rem' }}>What We Offer</p>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#1a1a1a', marginBottom: '4rem', letterSpacing: '0.04em', fontWeight: 400 }}>Our Services</h2>
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { title: 'Premium Tanning Beds', desc: '14 state-of-the-art beds for the perfect golden glow. Custom sessions tailored for all skin types.' },
            { title: 'Massage Chair', desc: 'Unwind in our premium massage chair. A relaxing, rejuvenating experience after every tanning session.' },
            { title: 'Spray Tanning', desc: 'Flawless, streak-free spray tans for a natural golden glow without the UV. Quick, customizable results.' }
          ].map(({ title, desc }) => (
            <div key={title} className="service-card" style={{ background: '#F8F3EE', padding: '3rem 2rem', border: '1px solid rgba(201,147,90,0.15)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#C9935A', marginBottom: '1rem', letterSpacing: '0.04em', fontWeight: 400 }}>{title}</h3>
              <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.9 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-pad" style={{ background: '#F8F3EE', padding: '100px 5vw' }}>
        <div className="about-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div style={{ width: '55px', height: '1px', background: '#C9935A', marginBottom: '1.4rem' }}></div>
            <p style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.9rem' }}>Our Story</p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: '#1a1a1a', marginBottom: '1.8rem', lineHeight: 1.2, fontWeight: 400 }}>
              Brooklyn's Premier<br/><em style={{ color: '#C9935A' }}>Tanning and Wellness Center</em>
            </h2>
            <p style={{ color: '#555', lineHeight: 2, marginBottom: '1.4rem', fontSize: '0.92rem' }}>
              Since 1989, Body Tan has been Brooklyn's destination for premium tanning and wellness. Located on Avenue U, we've spent over three decades perfecting the art of the golden glow.
            </p>
            <p style={{ color: '#555', lineHeight: 2, fontSize: '0.92rem', marginBottom: '2.5rem' }}>
              Our expert staff provides personalized service, ensuring each client achieves their ideal results safely and beautifully. From UV tanning beds to spray tans and massage chairs — we are your complete wellness retreat.
            </p>
          </div>
          <div style={{ background: '#fff', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '420px', border: '1px solid rgba(201,147,90,0.15)' }}>
            <img src="/logoo.png" alt="Body Tan and Wellness Center" style={{ maxWidth: '300px', width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section-pad" style={{ background: '#fff', padding: '100px 5vw', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#1a1a1a', marginBottom: '1rem', letterSpacing: '0.04em', fontWeight: 400 }}>Ready to Glow?</h2>
          <p style={{ color: '#666', marginBottom: '3rem', fontSize: '0.95rem', lineHeight: 1.9 }}>
            Call us or walk in. We'd love to help you find your perfect session.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <a href="tel:7183752167" className="btn-gold" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#fff', padding: '1.1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700 }}>Call to Book</a>
            <a href="#contact" className="btn-outline" style={{ border: '1px solid #C9935A', color: '#C9935A', padding: '1.1rem 3rem', fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 400, background: 'transparent' }}>Send a Message</a>
          </div>
          <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', border: '1px solid rgba(201,147,90,0.2)', textAlign: 'center' }}>
            {[
              { label: 'Hours', lines: ['Mon–Thu: 10am–8pm', 'Fri–Sun: 10am–9pm'] },
              { label: 'Location', lines: ['721 Avenue U', 'Brooklyn, NY 11223'] },
              { label: 'Phone', lines: ['718-375-2167', 'Walk-ins Welcome'], href: 'tel:7183752167' }
            ].map(({ label, lines, href }) => (
              <div key={label} style={{ padding: '2rem 1rem', borderRight: label !== 'Phone' ? '1px solid rgba(201,147,90,0.2)' : 'none' }}>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.6rem' }}>{label}</div>
                {lines.map((line, i) => (
                  href && i === 0
                    ? <a key={i} href={href} style={{ display: 'block', color: '#555', fontSize: '0.85rem', lineHeight: 1.8 }}>{line}</a>
                    : <div key={i} style={{ color: '#555', fontSize: '0.85rem', lineHeight: 1.8 }}>{line}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-pad" style={{ background: '#F8F3EE', padding: '100px 5vw' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.63rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9935A', marginBottom: '0.7rem' }}>Get In Touch</p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#1a1a1a', marginBottom: '3.5rem', fontWeight: 400 }}>Contact Us</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            {[
              { name: 'name', placeholder: 'Full Name', type: 'text' },
              { name: 'email', placeholder: 'Email Address', type: 'email' },
              { name: 'phone', placeholder: 'Phone Number', type: 'tel' }
            ].map(({ name, placeholder, type }) => (
              <input key={name} type={type} name={name} placeholder={placeholder} required style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,147,90,0.3)', padding: '0.9rem 0', color: '#1a1a1a', fontSize: '0.92rem', width: '100%', fontFamily: 'inherit', fontWeight: 300, transition: 'border-color 0.3s' }} />
            ))}
            <textarea name="message" placeholder="Your Message" rows={4} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(201,147,90,0.3)', padding: '0.9rem 0', color: '#1a1a1a', fontSize: '0.92rem', width: '100%', fontFamily: 'inherit', fontWeight: 300, resize: 'none' }} />
            <button type="submit" className="btn-gold" style={{ background: 'linear-gradient(135deg, #C9935A, #A67840)', color: '#fff', padding: '1.1rem', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, border: 'none', cursor: 'pointer', width: '100%' }}>Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#F8F3EE', padding: '3rem 5vw', textAlign: 'center', borderTop: '1px solid rgba(201,147,90,0.2)' }}>
        <img src="/logoo.png" alt="Body Tan" style={{ height: '80px', width: 'auto', marginBottom: '1.5rem' }} />
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'rgba(26,26,26,0.5)', textTransform: 'uppercase' }}>
          &copy; 1989&ndash;2026 Body Tan And Wellness Center &middot; Brooklyn, NY
        </div>
        <div style={{ marginTop: '1rem' }}>
          <a href="https://www.instagram.com/bodytan_11223/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#A67840', margin: '0 1rem' }}>Instagram</a>
          <a href="https://www.facebook.com/people/Body-Tan/61585704763989/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#A67840', margin: '0 1rem' }}>Facebook</a>
                  <a href="/health-safety" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#A67840', margin: '0 1rem' }}>Health &amp; Safety</a>
        </div>
      </footer>
    </>
  );
}
