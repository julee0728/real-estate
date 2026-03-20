import React from 'react';
import './index.css';

function App() {
  const [showAll, setShowAll] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id, showMore = false) => {
    if (showMore) setShowAll(true);
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const feedbacks = [
    { name: "John Doe", text: "Found my dream home in record time! The service was exceptional.", role: "Home Buyer" },
    { name: "Sarah Williams", text: "Very professional team. They handled everything from documentation to keys.", role: "Investor" },
    { name: "Michael Chen", text: "The property options provided were exactly what I was looking for.", role: "First-time Buyer" },
    { name: "Emily Davis", text: "Transparent pricing and amazing support throughout the process.", role: "Home Seller" },
    { name: "Robert Miller", text: "Highly recommend for anyone looking for luxury properties.", role: "Business Owner" }
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo cursor-pointer" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
          <span style={{ fontSize: '2rem' }}>🏡</span> EstateHub
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#properties" onClick={(e) => { e.preventDefault(); scrollToSection('properties'); }}>Properties</a>
          <a href="#feedback" onClick={(e) => { e.preventDefault(); scrollToSection('feedback'); }}>Feedback</a>
        </div>

        <div className="nav-right">
          <div className="btn-feedback desktop-contact" onClick={() => scrollToSection('contact')}>
            Contact
          </div>
          {/* Hamburger Button */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu-header">
          <span style={{ fontSize: '1.8rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>🏡 EstateHub</span>
        </div>
        <nav className="mobile-nav-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>🏠 Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>ℹ️ About</a>
          <a href="#properties" onClick={(e) => { e.preventDefault(); scrollToSection('properties'); }}>🏘️ Properties</a>
          <a href="#feedback" onClick={(e) => { e.preventDefault(); scrollToSection('feedback'); }}>💬 Feedback</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="mobile-contact-btn">📞 Contact Us</a>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-inner">
          {/* Trust Badge */}
          <div className="hero-badge">
            🏆 Australia's Most Trusted Real Estate Agency
          </div>

          <h1 className="hero-title">
            Find Your Perfect <br />
            <span className="hero-highlight">Dream Home</span>
          </h1>

          <p className="hero-subtitle">
            With over 3 years of excellence, EstateHub has helped <strong>500+ families</strong> across
            Australia discover their dream properties. From luxury villas to smart city apartments —
            we make your real estate journey seamless, trusted, and rewarding.
          </p>

          {/* Stats Row */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">150+</span>
              <span className="hero-stat-label">Happy Clients</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-num">100+</span>
              <span className="hero-stat-label">Properties Sold</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-num">3+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-num">4.9★</span>
              <span className="hero-stat-label">Customer Rating</span>
            </div>
          </div>

          <div className="hero-btns">
            <button
              onClick={() => scrollToSection('properties', true)}
              className="hero-btn-primary">
              🏘️ Explore Properties
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hero-btn-secondary">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div
          className="container"
          style={{
            display: 'flex',
            gap: '60px',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            justifyContent: 'center',
            position: 'relative', // heading ko absolutely center karne ke liye
          }}
        >
          {/* HEADING — IMAGE + TEXT ke upar center */}
          <h2
            style={{
              position: 'absolute',
              top: '-60px', // upar margin adjust karo
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              fontSize: '2.8rem',
              width: '100%',
              zIndex: 10,
            }}
          >
            Your Trusted Real Estate Partner
          </h2>

          {/* IMAGE */}
          <div
            className="about-image"
            style={{ flex: '1.3', minWidth: '450px', height: '550px' }}
          >
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
              alt="About Real Estate"
            />
          </div>

          {/* CONTENT */}
          <div
            className="about-content"
            style={{ flex: '1', minWidth: '350px' }}
          >
            <div className="about-text">
              <div className="about-card">
                <p>
                  🏠 <strong>Heritage of Excellence:</strong> With over 3 years of experience in the luxury real estate market, we specialize in delivering exclusive, high-end properties tailored to the unique needs of our clients.
                </p>
              </div>
              <div className="about-card">
                <p>
                  🤝 <strong>Trusted Relationships:</strong> We build long-term relationships with clients through transparent communication and smart investment insights.
                </p>
              </div>
              <div className="about-card">
                <p>
                  ✨ <strong>Visionary Approach:</strong> We help clients discover spaces that match their lifestyle and aspirations.
                </p>
              </div>
            </div>

            {/* WORKING HOURS + BUTTON IN ROW */}
            <div
              className="working-hours-contact"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '30px',
              }}
            >
              {/* Working Hours */}
              <div className="working-hours">
                <h4>🕒 Working Hours</h4>
                <p style={{ fontWeight: '600', color: '#111', margin: 0 }}>
                  Mon - Fri : 9am - 5pm
                </p>
              </div>

              {/* Contact Button */}
              <button
                onClick={() => scrollToSection('contact')}
                style={{
                  padding: '12px 25px',
                  background: '#0f172a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Contact Our Agents
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="feedback" className="feedback-section">

        {/* Internal CSS */}
        <style>
          {`
  .feedback-section {
    padding: 60px 20px;
  }

  .marquee-wrapper {
    overflow: hidden;
    width: 100%;
  }

  .marquee-container {
    display: flex;
    gap: 20px;
    width: max-content;
    animation: scroll 25s linear infinite;
  }

  /* ✅ FIXED CARD */
  .feedback-card {
    width: 300px;            /* fixed width */
    height: 230px;           /* fixed height */
    flex-shrink: 0;          /* prevent shrinking */
  
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* ✅ MOBILE FIX */
  @media (max-width: 768px) {
    .feedback-card {
      width: 250px;
      height: 210px;
      padding: 15px;
    }
  }

  /* Avatar */
  .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #3b82f6;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 10px;
  }

  .user {
    display: flex;
    align-items: center;
  }

  /* TEXT CONTROL (important) */
  .feedback-text {
    font-size: 0.95rem;
    line-height: 1.4;
    overflow: hidden;
  }

  /* Smooth infinite scroll */
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`}
        </style>

        <h2 className="section-title">What Our Clients Say</h2>

        <div className="marquee-wrapper">
          <div className="marquee-container">
            {[...feedbacks, ...feedbacks].map((fb, idx) => (
              <div key={idx} className="feedback-card">

                <div className="user">
                  <div className="avatar">
                    {fb.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h4 style={{ margin: 0 }}>{fb.name}</h4>
                    <p style={{ fontSize: '0.8rem', opacity: 0.6, margin: 0 }}>
                      {fb.role}
                    </p>
                  </div>
                </div>

                <p style={{ fontSize: '1rem', fontStyle: 'italic', lineHeight: '1.5' }}>
                  "{fb.text}"
                </p>

                <div style={{ marginTop: '15px', color: '#f59e0b' }}>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">

        {/* Internal CSS */}
        <style>
          {`
      .contact-section {
        background: #fff;
        padding: 60px 20px;
      }

      .contact-container {
        max-width: 1100px;
        margin: auto;
        text-align: center;
      }

      .contact-grid {
        display: flex;
        justify-content: center;
        align-items: center;   /* ✅ vertical center */
        gap: 40px;
        margin-top: 40px;
      }

      /* FORM */
      .contact-form {
        flex: 1;
        max-width: 500px;
        background: #f8fafc;
        padding: 40px;
        border-radius: 20px;
        text-align: center;   /* ✅ center content */
      }

      /* INFO */
      .contact-info {
        flex: 1;
        max-width: 400px;
        text-align: center;   /* ✅ center content */
      }

      /* INPUTS */
      .contact-form input,
      .contact-form textarea {
        width: 100%;
        padding: 12px;
        margin-bottom: 15px;
        border-radius: 8px;
        border: 1px solid #ddd;
        text-align: center;   /* optional */
      }

      .contact-form button {
        width: 100%;
        padding: 15px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
      }

      /* TEXT CENTER */
      .contact-info p {
        margin: 15px 0;
      }

      /* MOBILE */
      @media (max-width: 768px) {
        .contact-grid {
          flex-direction: column;
        }

        .contact-form {
          padding: 25px;
        }
      }
    `}
        </style>

        <div className="contact-container">
          <h2 style={{ fontSize: '2.5rem' }}>Get In Touch</h2>

          <div className="contact-grid">

            {/* FORM */}
            <div className="contact-form">
              <h3>Send us a message</h3>

              <form style={{ marginTop: '20px' }}>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
                <textarea placeholder="Your Message" rows="5"></textarea>

                <button>Send Message</button>
              </form>
            </div>

            {/* INFO */}
            <div className="contact-info">
              <h3>Contact Info</h3>

              <p>📍 123 Collins Street, Suite 100, Melbourne VIC 3000, Australia</p>
              <p>📞 +1 (234) 567-890</p>
              <p>📧 info@estatehub.com</p>

              <div style={{ marginTop: '20px' }}>
                <h4>🕒 Office Hours</h4>
                <p>Mon - Fri : 9am - 5pm</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">

        {/* Internal CSS */}
        <style>
          {`
      .footer {
        background: #0f172a;
        color: #fff;
        padding: 60px 20px 20px;
      }

      .footer-container {
        max-width: 1200px;
        margin: auto;
        text-align: center;
      }

      .footer-top {
        display: flex;
        justify-content: center;
        gap: 50px;
        flex-wrap: wrap;
        margin-bottom: 40px;
      }

      .footer-col {
        flex: 1;
        min-width: 220px;
      }

      .footer-col h3 {
        margin-bottom: 15px;
      }

      .footer-col p {
        opacity: 0.7;
        font-size: 0.9rem;
        margin: auto;
      }

      .footer-col ul {
        list-style: none;
        padding: 0;
      }

      .footer-col ul li {
        margin: 10px 0;
        cursor: pointer;
        opacity: 0.8;
        transition: 0.3s;
      }

      .footer-col ul li:hover {
        opacity: 1;
        color: #38bdf8;
      }

      /* LOGO CENTER FIX */
      .footer-logo {
        font-size: 1.8rem;
        margin-bottom: 15px;
      }

      /* BOTTOM */
      .footer-bottom {
        border-top: 1px solid rgba(255,255,255,0.1);
        padding-top: 15px;
        font-size: 0.85rem;
        opacity: 0.7;
      }

      /* ✅ MOBILE */
      @media (max-width: 768px) {
        .footer-top {
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 30px;
        }

        .footer-col p {
          max-width: 100%;
        }
      }
    `}
        </style>

        <div className="footer-container">

          <div className="footer-top">

            {/* LOGO + ABOUT */}
            <div className="footer-col" style={{ flex: '1.5' }}>
              <h2 className="footer-logo">🏡 EstateHub</h2>
              <p>
                Leading the way in luxury residential properties.
                Specializing in premium villas and apartments across Australia.
                Offering expert commercial property investment solutions.
                Committed to delivering exceptional value to our clients.
              </p>
            </div>

            {/* LINKS */}
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About Us</li>
                <li onClick={() => scrollToSection('properties')}>Properties</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
              </ul>
            </div>

            {/* SERVICES */}
            <div className="footer-col">
              <h3>Services</h3>
              <ul>
                <li>Property Buying</li>
                <li>Villa Rental</li>
                <li>Commercial Real Estate</li>
                <li>Market Analysis</li>
                <li>Home Valuation</li>
              </ul>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="footer-bottom">
            <p>
              &copy; 2024 EstateHub. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
