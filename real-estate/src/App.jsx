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
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Find Your Perfect Dream Home</h1>
          <p>Discover the best luxury properties and investment opportunities with EstateHub. Your journey to a new lifestyle starts here.</p>
          <div className="hero-btns">
            <button 
              onClick={() => scrollToSection('properties', true)}
              className="hero-btn-primary">
              Explore Properties
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hero-btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container" style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="about-image" style={{ flex: '1', minWidth: '350px' }}>
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" alt="About Real Estate" />
          </div>
          <div className="about-content" style={{ flex: '1', minWidth: '350px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Your Trusted Real Estate Partner</h2>
            <p style={{ color: '#444', fontSize: '1.1rem', marginBottom: '25px' }}>
              With over 15 years of experience in the luxury real estate market, we pride ourselves on delivering exclusive properties and personalized service to our global clientele.
            </p>
            <div className="working-hours">
              <h4>🕒 Working Hours</h4>
              <p style={{ fontWeight: '600', color: '#111' }}>Mon - Fri : 9am - 5pm</p>
            </div>
            <div style={{ marginTop: '30px' }}>
              <button 
                onClick={() => scrollToSection('contact')}
                style={{ padding: '12px 25px', background: '#0f172a', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                Contact Our Agents
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" style={{ background: '#f1f5f9' }}>
        <div className="container">
          <h2 className="section-title">Featured Properties</h2>
          <div className="properties-grid">
            {[
              { id: 1, title: "The Beverly Villa", price: "$2,450,000", location: "California, USA", beds: 5, baths: 4, area: "3,200 sqft", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" },
              { id: 2, title: "Azure Bay Penthouse", price: "$1,850,000", location: "Miami, Florida", beds: 3, baths: 3, area: "2,400 sqft", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
              { id: 3, title: "Zen Escape Estate", price: "$3,200,000", location: "Aspen, Colorado", beds: 6, baths: 5, area: "4,800 sqft", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2092&auto=format&fit=crop" },
              { id: 4, title: "Modern Skyline Loft", price: "$1,200,000", location: "New York, NY", beds: 2, baths: 2, area: "1,800 sqft", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop" },
              { id: 5, title: "Emerald Garden Mews", price: "$950,000", location: "London, UK", beds: 4, baths: 3, area: "2,100 sqft", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop" },
              { id: 6, title: "Desert Oasis Retreat", price: "$2,100,000", location: "Phoenix, Arizona", beds: 5, baths: 4, area: "3,500 sqft", img: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2073&auto=format&fit=crop" },
              { id: 7, title: "Sunset Ridge Manor", price: "$4,500,000", location: "Malibu, CA", beds: 7, baths: 6, area: "6,200 sqft", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
              { id: 8, title: "Alpine Vista Chalet", price: "$2,750,000", location: "Vancouver, Canada", beds: 4, baths: 4, area: "3,000 sqft", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2065&auto=format&fit=crop" },
              { id: 9, title: "Coastal Breeze Villa", price: "$3,800,000", location: "Sydney, Australia", beds: 6, baths: 5, area: "4,500 sqft", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074&auto=format&fit=crop" },
              { id: 10, title: "Silicon Valley Smart Home", price: "$5,200,000", location: "Palo Alto, CA", beds: 5, baths: 4, area: "4,000 sqft", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop" }
            ].slice(0, showAll ? 10 : 3).map(prop => (
              <div key={prop.id} className="prop-card">
                <div className="prop-img" style={{ backgroundImage: `url('${prop.img}')` }}></div>
                <div className="prop-info">
                  <div className="prop-price">{prop.price}</div>
                  <h3>{prop.title}</h3>
                  <p style={{ color: '#666', marginTop: '10px' }}>{prop.location}</p>
                  <div style={{ display: 'flex', gap: '15px', marginTop: '15px', fontSize: '0.9rem', color: '#444' }}>
                    <span>🛏️ {prop.beds} Beds</span>
                    <span>🚿 {prop.baths} Baths</span>
                    <span>📐 {prop.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button 
              className="btn-view-all"
              onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'View All Properties'}
            </button>
          </div>
        </div>
      </section>

      {/* Feedback Marquee Section */}
      <section id="feedback" className="feedback-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="marquee-wrapper">
          <div className="marquee-container">
            {/* Duplicated list for seamless scrolling */}
            {[...feedbacks, ...feedbacks].map((fb, idx) => (
              <div key={idx} className="feedback-card">
                <div className="user">
                  <div className="avatar"></div>
                  <div>
                    <h4 style={{ margin: 0 }}>{fb.name}</h4>
                    <p style={{ fontSize: '0.8rem', opacity: 0.6, margin: 0 }}>{fb.role}</p>
                  </div>
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: '1.6' }}>"{fb.text}"</p>
                <div style={{ marginTop: '15px', color: '#f59e0b' }}>⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ background: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Get In Touch</h2>
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px', background: '#f8fafc', padding: '40px', borderRadius: '20px', textAlign: 'left' }}>
              <h3>Send us a message</h3>
              <form style={{ marginTop: '20px' }}>
                <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
                <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
                <textarea placeholder="Your Message" rows="5" style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd' }}></textarea>
                <button style={{ width: '100%', padding: '15px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Send Message</button>
              </form>
            </div>
            <div style={{ flex: '0.5', minWidth: '250px', textAlign: 'left' }}>
              <h3>Contact Info</h3>
              <p style={{ margin: '20px 0' }}>📍 123 Real Estate Blvd, Suite 100, New York, NY</p>
              <p style={{ margin: '20px 0' }}>📞 +1 (234) 567-890</p>
              <p style={{ margin: '20px 0' }}>📧 info@estatehub.com</p>
              <div className="working-hours" style={{ marginTop: '20px', width: '100%' }}>
                <h4>🕒 Office Hours</h4>
                <p>Mon - Fri : 9am - 5pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-col" style={{ flex: '1.5' }}>
              <h2 style={{ color: 'white', marginBottom: '20px' }}>🏡 EstateHub</h2>
              <p style={{ opacity: 0.6, fontSize: '0.9rem', maxWidth: '300px' }}>
                Leading the way in luxury residential properties and commercial investments across the globe.
              </p>
            </div>
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>Home</li>
                <li onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About Us</li>
                <li onClick={() => scrollToSection('properties')} style={{ cursor: 'pointer' }}>Properties</li>
                <li onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact</li>
              </ul>
            </div>
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
            <div className="footer-col">
              <h3>Follow Us</h3>
              <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                <a href="#" style={{ fontSize: '1.5rem' }}>𝕏</a>
                <a href="#" style={{ fontSize: '1.5rem' }}>📸</a>
                <a href="#" style={{ fontSize: '1.5rem' }}>📘</a>
                <a href="#" style={{ fontSize: '1.5rem' }}>💼</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 EstateHub. All rights reserved. | Terms of Service | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
