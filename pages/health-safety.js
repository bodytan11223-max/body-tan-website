import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HealthSafety() {
  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#F8F3EE',
      fontFamily: "'Century Gothic', 'Raleway', Arial, sans-serif",
      fontWeight: 300,
      letterSpacing: '0.02em',
      color: '#333',
      paddingTop: '120px',
      paddingBottom: '80px',
    },
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      backgroundColor: 'rgba(248, 243, 238, 0.95)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '40px',
      paddingRight: '40px',
      zIndex: 1000,
      borderBottom: '1px solid rgba(169, 120, 64, 0.1)',
    },
    logo: {
      height: '60px',
      width: 'auto',
    },
    navLinks: {
      display: 'flex',
      gap: '40px',
      alignItems: 'center',
      margin: 0,
    },
    navLink: {
      fontSize: '0.72rem',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: '#333',
      fontWeight: 300,
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    navLinkHover: {
      color: '#C9935A',
    },
    bookButton: {
      backgroundColor: '#C9935A',
      color: 'white',
      padding: '12px 28px',
      fontSize: '0.72rem',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      border: 'none',
      cursor: 'pointer',
      fontFamily: "'Century Gothic', 'Raleway', Arial, sans-serif",
      fontWeight: 300,
      transition: 'background-color 0.3s ease',
    },
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
      paddingBottom: '30px',
      borderBottom: `3px solid #C9935A`,
    },
    h1: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '10px',
      fontWeight: 300,
      letterSpacing: '0.02em',
    },
    subtitle: {
      color: '#A67840',
      fontSize: '1.1rem',
      fontWeight: 300,
    },
    section: {
      backgroundColor: 'white',
      padding: '35px',
      marginBottom: '30px',
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    },
    h2: {
      fontSize: '1.8rem',
      color: '#333',
      marginBottom: '25px',
      borderLeft: `4px solid #C9935A`,
      paddingLeft: '15px',
      fontWeight: 300,
      letterSpacing: '0.02em',
    },
    h3: {
      fontSize: '1.2rem',
      color: '#333',
      marginTop: '25px',
      marginBottom: '15px',
      fontWeight: 300,
    },
    warningBox: {
      backgroundColor: '#FFF8E7',
      border: '2px solid #C9935A',
      borderRadius: '4px',
      padding: '25px',
      margin: '20px 0',
      fontSize: '0.95rem',
    },
    warningTitle: {
      marginTop: 0,
      marginBottom: '15px',
      color: '#A67840',
      fontSize: '1.1rem',
      fontWeight: 300,
    },
    ageRestriction: {
      backgroundColor: '#FFE8E8',
      borderLeft: '4px solid #C9935A',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '4px',
      fontSize: '0.95rem',
    },
    formInfo: {
      backgroundColor: '#E8F4F8',
      borderLeft: '4px solid #C9935A',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '4px',
      fontSize: '0.95rem',
    },
    contactInfo: {
      backgroundColor: '#F0F0F0',
      borderLeft: '4px solid #A67840',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '4px',
      fontSize: '0.95rem',
    },
    ul: {
      marginLeft: '20px',
      marginTop: '15px',
      lineHeight: '1.8',
    },
    li: {
      marginBottom: '12px',
    },
    p: {
      marginBottom: '15px',
      lineHeight: '1.7',
      fontSize: '0.95rem',
    },
    strong: {
      color: '#333',
      fontWeight: 400,
    },
    complianceNote: {
      fontSize: '0.85rem',
      color: '#999',
      textAlign: 'center',
      marginTop: '50px',
      paddingTop: '25px',
      borderTop: '1px solid #ddd',
    },
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '50px 40px',
      textAlign: 'center',
      marginTop: '80px',
    },
    footerLogo: {
      height: '80px',
      marginBottom: '20px',
    },
    footerText: {
      fontSize: '0.85rem',
      marginBottom: '20px',
      fontWeight: 300,
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      marginTop: '20px',
    },
    socialLink: {
      color: '#A67840',
      textDecoration: 'none',
      fontSize: '0.9rem',
      transition: 'color 0.3s ease',
    },
  };

  const [navHover, setNavHover] = React.useState(null);

  return (
    <>
      <Head>
        <title>Health & Safety Information | Body Tan and Wellness</title>
        <meta name="description" content="NYC DOH compliant health and safety information for indoor tanning at Body Tan and Wellness." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav style={styles.navbar}>
        <Link href="/">
          <img src="/logoo.png" alt="Body Tan and Wellness" style={styles.logo} />
        </Link>
        <ul style={styles.navLinks}>
          <li>
            <Link href="/">
              <a
                style={{
                  ...styles.navLink,
                  color: navHover === 'home' ? '#C9935A' : '#333',
                }}
                onMouseEnter={() => setNavHover('home')}
                onMouseLeave={() => setNavHover(null)}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/health-safety">
              <a
                style={{
                  ...styles.navLink,
                  color: '#C9935A',
                }}
              >
                Health & Safety
              </a>
            </Link>
          </li>
          <li>
            <a
              href="https://your-booking-link.com"
              style={{
                ...styles.bookButton,
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#A67840'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#C9935A'}
            >
              Book Now
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={styles.page}>
        <div style={styles.container}>
          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.h1}>Health & Safety Information</h1>
            <p style={styles.subtitle}>Your wellbeing is our priority</p>
          </div>

          {/* Health Hazard Section */}
          <div style={styles.section}>
            <h2 style={styles.h2}>Important Health Hazard Information</h2>

            <div style={styles.warningBox}>
              <h3 style={styles.warningTitle}>⚠️ UV Radiation Health Risks</h3>
              <p>
                <strong style={styles.strong}>UV radiation from indoor tanning devices can cause:</strong>
              </p>
              <ul style={styles.ul}>
                <li style={styles.li}>
                  <strong style={styles.strong}>Skin Cancer</strong> — including melanoma, the type of skin cancer responsible for the most deaths
                </li>
                <li style={styles.li}>
                  <strong style={styles.strong}>Eye Burns</strong> — that can cause intense pain and negatively affect vision
                </li>
                <li style={styles.li}>
                  <strong style={styles.strong}>Sunburn</strong> — discomfort, pain and tenderness on the skin
                </li>
                <li style={styles.li}>
                  <strong style={styles.strong}>Early Skin Aging</strong> — such as wrinkles and age spots
                </li>
              </ul>
            </div>

            <h3 style={styles.h3}>Before You Tan</h3>
            <p style={styles.p}>
              UV radiation from indoor tanning devices carries real health risks. The earlier a person begins indoor tanning and the more frequently they tan, the greater their risk of developing skin cancer. We recommend consulting with a physician before using tanning devices, especially if you:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Have a personal or family history of skin cancer</li>
              <li style={styles.li}>Are taking photosensitive medications or using certain cosmetics</li>
              <li style={styles.li}>Have sensitive skin or a history of burns</li>
              <li style={styles.li}>Are under 30 years old (risk of melanoma increases significantly)</li>
            </ul>
          </div>

          {/* Age Requirements Section */}
          <div style={styles.section}>
            <h2 style={styles.h2}>Age Requirements & ID Policy</h2>

            <div style={styles.ageRestriction}>
              <strong style={styles.strong}>⚠️ Age Requirement:</strong>
              <p style={{ ...styles.p, marginTop: '10px' }}>
                Persons under 18 years of age are prohibited from using UV radiation devices. Persons 18 years of age or older must provide a valid driver's license or other photo identification issued by a government or educational institution before using UV radiation devices.
              </p>
            </div>
          </div>

          {/* Eye Protection Section */}
          <div style={styles.section}>
            <h2 style={styles.h2}>Eye Protection Requirements</h2>

            <h3 style={styles.h3}>Protective Eyewear is Mandatory</h3>
            <p style={styles.p}>
              <strong style={styles.strong}>FDA-certified protective eyewear must be worn during all tanning sessions.</strong> Failure to use proper eye protection can result in severe eye damage including:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Photokeratitis (severe corneal burns)</li>
              <li style={styles.li}>Cataracts</li>
              <li style={styles.li}>Macular degeneration</li>
              <li style={styles.li}>Eye cancer (melanoma)</li>
            </ul>
            <p style={styles.p}>
              <strong style={styles.strong}>Important:</strong> Closing your eyes does not protect you. We provide complimentary FDA-certified protective eyewear to all clients. If you prefer to use your own, it must meet FDA standards.
            </p>
          </div>

          {/* What to Expect Section */}
          <div style={styles.section}>
            <h2 style={styles.h2}>What to Expect When You Visit</h2>

            <h3 style={styles.h3}>Required Forms & Information</h3>
            <div style={styles.formInfo}>
              <p style={{ ...styles.p, marginTop: 0 }}>
                In compliance with New York City Department of Health and New York State Public Health Law, all clients must:
              </p>
              <ul style={styles.ul}>
                <li style={styles.li}>
                  <strong style={styles.strong}>Review the NYC Health Department Tanning Hazards Information Sheet</strong> — describes health risks and safety information
                </li>
                <li style={styles.li}>
                  <strong style={styles.strong}>Complete the Tanning Facility Patron Acknowledgement Form</strong> — certifies that you understand the risks and accept responsibility for your use of tanning devices
                </li>
                <li style={styles.li}>
                  <strong style={styles.strong}>Provide valid ID</strong> — to confirm you are 18 years or older
                </li>
                <li style={styles.li}>
                  <strong style={styles.strong}>Receive skin type assessment</strong> — our staff will determine your skin type to establish safe exposure times
                </li>
              </ul>
            </div>

            <h3 style={styles.h3}>During Your Session</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>Adhere to the maximum exposure time for your skin type (displayed on the tanning device)</li>
              <li style={styles.li}>Never exceed the manufacturer's recommended exposure limits</li>
              <li style={styles.li}>Wear protective eyewear at all times</li>
              <li style={styles.li}>Inform staff of any medications, cosmetics, or medical conditions that may increase photosensitivity</li>
            </ul>

            <h3 style={styles.h3}>After Your Session</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>Report any burns, rashes, or injuries to our staff immediately</li>
              <li style={styles.li}>Limit your tanning frequency to reduce cumulative UV exposure</li>
              <li style={styles.li}>Monitor your skin for any changes and consult a dermatologist if concerned</li>
            </ul>
          </div>

          {/* Photosensitivity Section */}
          <div style={styles.section}>
            <h2 style={styles.h2}>Photosensitivity & Drug Interactions</h2>

            <p style={styles.p}>
              Certain medications, foods, and cosmetics can increase your skin's sensitivity to UV radiation (called "photosensitivity"). Please inform our staff if you use:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Antibiotics (especially tetracyclines)</li>
              <li style={styles.li}>Anti-inflammatory medications</li>
              <li style={styles.li}>Certain acne medications (Accutane/isotretinoin)</li>
              <li style={styles.li}>Birth control pills</li>
              <li style={styles.li}>Diuretics and other heart medications</li>
              <li style={styles.li}>Perfumed or scented cosmetics</li>
              <li style={styles.li}>Certain citrus products or essential oils</li>
            </ul>
            <p style={styles.p}>
              Our staff can provide a more complete list. When in doubt, consult your physician or pharmacist before tanning.
            </p>
          </div>

          {/* Safety Standards Section */}
          <div style={styles.section}>
            <h2 style={styles.h2}>Safety Standards & Compliance</h2>

            <p style={styles.p}>Body Tan and Wellness operates in full compliance with:</p>
            <ul style={styles.ul}>
              <li style={styles.li}>New York City Department of Health and Mental Hygiene (DOHMH) regulations</li>
              <li style={styles.li}>New York State Public Health Law</li>
              <li style={styles.li}>FDA regulations for tanning devices and protective eyewear</li>
              <li style={styles.li}>All local health and safety codes</li>
            </ul>

            <p style={styles.p}>
              Our facility is regularly inspected by the NYC Department of Health. All tanning devices are maintained according to manufacturer specifications and tested annually for safety.
            </p>

            <div style={styles.contactInfo}>
              <strong style={styles.strong}>Report a Concern:</strong>
              <p style={{ ...styles.p, marginTop: '10px', marginBottom: 0 }}>
                If you experience an injury or illness from tanning, or have concerns about our facility's compliance, you can file a complaint with the NYC Department of Health at <strong style={styles.strong}>311</strong> or visit <strong style={styles.strong}>nyc.gov</strong>.
              </p>
            </div>
          </div>

          {/* Priority Section */}
          <div style={styles.section}>
            <h2 style={styles.h2}>Your Health is Our Priority</h2>

            <p style={styles.p}>
              We take your safety seriously. If you have any questions about tanning safety, your skin type, exposure limits, or whether tanning is right for you, please speak with our staff. We're here to help you make informed decisions about your health and wellness.
            </p>

            <p style={{ ...styles.p, fontStyle: 'italic' }}>
              <strong style={styles.strong}>When in doubt, consult your physician before tanning.</strong>
            </p>
          </div>

          <div style={styles.complianceNote}>
            <p>This facility operates under NYC Department of Health regulations. Last updated: 2024</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <Link href="/">
          <img src="/logoo.png" alt="Body Tan and Wellness" style={styles.footerLogo} />
        </Link>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} Body Tan and Wellness. All rights reserved.
        </p>
        <div style={styles.socialLinks}>
          <a
                          href="https://www.instagram.com/bodytan_11223/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
            onMouseEnter={(e) => e.target.style.color = '#C9935A'}
            onMouseLeave={(e) => e.target.style.color = '#A67840'}
          >
            Instagram
          </a>
          <a
                          href="https://www.facebook.com/people/Body-Tan/61585704763989/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
            onMouseEnter={(e) => e.target.style.color = '#C9935A'}
            onMouseLeave={(e) => e.target.style.color = '#A67840'}
          >
            Facebook
          </a>
        </div>
      </footer>
    </>
  );
}
