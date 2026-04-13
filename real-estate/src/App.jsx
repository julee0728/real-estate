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

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--active');
        }
      });
    }, observerOptions);

    // Timeout ensures elements are definitely in the DOM after hot-reloads
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  });

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
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
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
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>🛠️ Services</a>
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

      {/* The Problem Section */}
      <section id="problem" className="problem-section reveal">
        <style>
          {`
            .problem-section { padding: 80px 5%; background: #ffffff; text-align: center; }
            .section-tag { font-family: 'Outfit', sans-serif; color: #06b6d4; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; font-size: 0.85rem; margin-bottom: 15px; display: block; }
            .problem-title { font-size: 1.5rem; color: #0f172a; margin-bottom: 20px; line-height: 1.2; }
            .problem-subtitle { font-size: 1.1rem; color: #64748b; max-width: 700px; margin: 0 auto 50px; line-height: 1.6; }
            .problem-grid { display: flex; gap: 30px; justify-content: center; flex-wrap: wrap; }
            .problem-card { flex: 1; min-width: 300px; border-radius: 20px; padding: 40px 30px; text-align: left; border: 1px solid transparent; }
            .problem-card:nth-child(1) { background: #f0f9ff; border-color: #e0f2fe; }
            .problem-card:nth-child(2) { background: #fdf2f8; border-color: #fce7f3; }
            .problem-card:nth-child(3) { background: #f0fdf4; border-color: #dcfce7; }
            .problem-number { font-size: 2rem; font-weight: 700; opacity: 0.3; margin-bottom: 20px; font-family: 'Outfit', sans-serif; color: #0f172a; }
            .problem-card:nth-child(1) .problem-number { color: #0ea5e9; }
            .problem-card:nth-child(2) .problem-number { color: #ec4899; }
            .problem-card:nth-child(3) .problem-number { color: #22c55e; }
            .problem-card-title { font-size: 1rem; font-weight: 700; color: #0f172a; margin-bottom: 15px; }
            .problem-card-desc { font-size: 0.95rem; color: #475569; line-height: 1.6; }
            @media (max-width: 768px) { .problem-title { font-size: 2rem; } }
          `}
        </style>
        <div className="container">
          <span className="section-tag">THE PROBLEM</span>
          <h2 className="problem-title">Most properties sit on the market — and lose value daily</h2>
          <p className="problem-subtitle">
            When buyers search for "homes in your suburb", your listing might be buried. Here's why you're not getting enough serious offers.
          </p>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-number">01</div>
              <h3 className="problem-card-title">Your Google Maps ranking is weak</h3>
              <p className="problem-card-desc">72% of buyers choose properties from the first page of search results. If you're not there, you're not in the consideration set — before they've even seen your home.</p>
            </div>
            <div className="problem-card">
              <div className="problem-number">02</div>
              <h3 className="problem-card-title">Your website isn't converting visitors</h3>
              <p className="problem-card-desc">Listings with low-quality photos or lacking virtual tours get skipped instantly. Traffic arrives but leaves without making an inquiry or booking a viewing.</p>
            </div>
            <div className="problem-card">
              <div className="problem-number">03</div>
              <h3 className="problem-card-title">Your ads are wasting budget</h3>
              <p className="problem-card-desc">Generic valuation models and lack of local market insight lead to incorrect pricing. This burns through your time and leads to low-ball offers or stale listings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="what-we-do-section reveal">
        <style>
          {`
            .what-we-do-section { padding: 80px 5%; background: #f8fafc; text-align: center; }
            .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; margin-top: 50px; }
            .service-card { background: #ffffff; padding: 40px 30px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); text-align: left; transition: transform 0.3s; border: 1px solid #e2e8f0; display: flex; flex-direction: column; }
            .service-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.06); border-color: #cbd5e1; }
            .service-icon { width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 20px; }
            .service-card:nth-child(1) .service-icon { background: #fee2e2; color: #ef4444; }
            .service-card:nth-child(2) .service-icon { background: #f0f9ff; color: #0ea5e9; }
            .service-card:nth-child(3) .service-icon { background: #f0fdf4; color: #22c55e; }
            .service-card:nth-child(4) .service-icon { background: #f3e8ff; color: #a855f7; }
            .service-card:nth-child(5) .service-icon { background: #dcfce7; color: #10b981; }
            .service-card:nth-child(6) .service-icon { background: #fef3c7; color: #f59e0b; }
            .service-title { font-size: 1.2rem; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
            .service-desc { font-size: 0.95rem; color: #64748b; line-height: 1.6; margin-bottom: 20px; flex-grow: 1; }
            .service-price { font-size: 0.9rem; font-weight: 600; color: #06b6d4; }
          `}
        </style>
        <div className="container">
          <span className="section-tag">WHAT WE DO</span>
          <h2 className="problem-title">Everything you need to dominate the local market</h2>
          <p className="problem-subtitle">We specialize in premium real estate, meaning every strategy is tailored to highlight the unique value of your property — not repurpused from a generic playbook.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📍</div>
              <h3 className="service-title">Targeted Property Marketing</h3>
              <p className="service-desc">Get your listing in front of high-intent buyers. We optimize your property's online visibility, build extensive local citations, and create suburb-specific landing pages.</p>
              <div className="service-price">From $1,200 / marketing package</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3 className="service-title">Strategic Lead Generation</h3>
              <p className="service-desc">Targeted Google Ads & Meta campaigns for high-value properties. We use precise geographic targeting, keyword lists, and conversion tracking so every dollar is tracked.</p>
              <div className="service-price">Management from $800/mo</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3 className="service-title">Immersive Virtual Tours</h3>
              <p className="service-desc">High-definition 3D walkthroughs and drone photography that convert online browsers into serious property inquiries. Custom-built and delivered in under 2 weeks.</p>
              <div className="service-price">From $500 one-off</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3 className="service-title">24/7 Buyer Concierge</h3>
              <p className="service-desc">An AI-powered smart chat capturing inquiries instantly on your dedicated property site, qualifying buyers, and scheduling viewings round the clock.</p>
              <div className="service-price">Included in Premium</div>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3 className="service-title">Market Valuation Models</h3>
              <p className="service-desc">Data-driven pricing strategies comparing real-time market trends, recent local sales, and neighborhood developments to maximize your exact property's return.</p>
              <div className="service-price">Included with Listing</div>
            </div>
            <div className="service-card">
              <div className="service-icon">⭐</div>
              <h3 className="service-title">Premium Staging Services</h3>
              <p className="service-desc">Professional interior styling designed to create deep emotional connections with potential buyers, historically elevating final sale prices significantly.</p>
              <div className="service-price">From $2,000 / property</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section reveal">
        <style>
          {`
            .how-it-works-section { padding: 100px 5%; background: #0f172a; color: #ffffff; text-align: center; }
            .how-section-tag { font-family: 'Outfit', sans-serif; color: #06b6d4; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; font-size: 0.85rem; margin-bottom: 15px; display: block; }
            .how-title { font-size: 1.5rem; margin-bottom: 20px; line-height: 1.2; }
            .how-subtitle { font-size: 1.1rem; color: #94a3b8; max-width: 700px; margin: 0 auto 60px; line-height: 1.6; }
            
            .steps-container { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; max-width: 1100px; margin: 0 auto; text-align: left; }
            .step-col { flex: 1; position: relative; }
            .step-number { font-family: 'Outfit', sans-serif; font-size: 1.2rem; font-weight: 700; color: #06b6d4; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px; }
            .step-title { font-size: 1rem; font-weight: 700; margin-bottom: 15px; }
            .step-desc { font-size: 0.95rem; color: #94a3b8; line-height: 1.6; }
            
            .step-arrow { position: absolute; right: -25px; top: 2px; width: 35px; height: 35px; background: rgba(6, 182, 212, 0.2); color: #06b6d4; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; z-index: 2; }
            
            @media (max-width: 900px) {
              .steps-container { flex-direction: column; gap: 40px; }
              .step-arrow { transform: rotate(90deg); right: auto; left: 20px; bottom: -30px; top: auto; }
              .step-col { padding-left: 0; }
            }
          `}
        </style>
        <div className="container">
          <span className="how-section-tag">HOW IT WORKS</span>
          <h2 className="how-title">A proven system built for real estate sales</h2>
          <p className="how-subtitle">Four steps. 30 days. Measurable buyer growth — or we re-strategize at no extra cost.</p>
          
          <div className="steps-container">
            <div className="step-col">
              <div className="step-number">STEP 01</div>
              <h3 className="step-title">Property Audit</h3>
              <p className="step-desc">We audit your property, targeting local market data, competitor landscape, and specific selling points — all tailored exclusively to your suburb.</p>
            </div>
            <div className="step-col">
              <div className="step-number">STEP 02</div>
              <h3 className="step-title">Custom Strategy</h3>
              <p className="step-desc">We build a 30-day plan targeting the exact demographic your local buyers search for — not generic methods, but localized, intent-specific match-making.</p>
            </div>
            <div className="step-col">
              <div className="step-number">STEP 03</div>
              <h3 className="step-title">Launch & Optimize</h3>
              <p className="step-desc">We implement styling, optimize your digital presence, and run targeted Ads with specific landing pages. You receive weekly reporting.</p>
            </div>
            <div className="step-col">
              <div className="step-number">STEP 04</div>
              <h3 className="step-title">Scale what works</h3>
              <p className="step-desc">Weekly strategy calls to review offers, double down on top-performing campaigns, and expand our reach into high-value buyer segments like investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
<section id="results" className="results-section section-padding">
  <div className="container">
    <div className="results-header centered-header">
      <span className="sur-title text-accent">RESULTS</span>
      <h2>What property buyers achieve in 90 days</h2>
      <p className="results-description">
        Real outcomes from verified deals. We focus on successful bookings,
        profitable investments, and smooth property closures — not just views.
      </p>
    </div>

    <div className="results-grid">
      {/* Result 1 */}
      <div className="result-card">
        <div className="result-top-border"></div>
        <span className="clinic-type">LUXURY APARTMENT — SYDNEY
</span>
        <p className="result-quote">
          "Within 6 weeks, we found a verified 3BHK apartment in SYDNEY below
          market value. The deal closed smoothly with complete legal
          verification and loan assistance."
        </p>
        <div className="result-author">
          <div className="author-avatar">AK</div>
          <div className="author-info">
            <strong>Amit Kumar</strong>
            <span>Home Buyer, SYDNEY</span>
          </div>
        </div>
        <div className="result-stats">
          <div className="stat-item">
            <span className="stat-num">₹18L</span>
            <span className="stat-label">Investment saved</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">15%</span>
            <span className="stat-label">Higher resale potential</span>
          </div>
        </div>
      </div>

      {/* Result 2 */}
      <div className="result-card">
        <div className="result-top-border"></div>
        <span className="clinic-type">COMMERCIAL OFFICE — MELBOURNE</span>
        <p className="result-quote">
          "Our office investment generated premium rental demand in less than
          2 months. EstateHub helped us secure the best location and complete
          paperwork hassle-free."
        </p>
        <div className="result-author">
          <div className="author-avatar">RS</div>
          <div className="author-info">
            <strong>Riya Sharma</strong>
            <span>Investor, MELBOURNE </span>
          </div>
        </div>
        <div className="result-stats">
          <div className="stat-item">
            <span className="stat-num">+22%</span>
            <span className="stat-label">Rental yield growth</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">2.8x</span>
            <span className="stat-label">ROI in 1 year</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Why Us Section */}
      <section id="why-us" className="why-us-section reveal">
        <style>
          {`
            .why-us-section { padding: 80px 5% 100px; background: #0f172a; color: #ffffff; text-align: center; }
            .why-grid { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 50px; }
            .why-card { background: #1e293b; padding: 40px 25px; border-radius: 20px; flex: 1; min-width: 250px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.3s; display: flex; flex-direction: column; align-items: center; text-align: center; }
            .why-card:hover { transform: translateY(-5px); border-color: rgba(6, 182, 212, 0.4); box-shadow: 0 10px 30px rgba(6, 182, 212, 0.1); }
            .why-icon { font-size: 2rem; margin-bottom: 20px; text-align: center; }
            .why-card-title { font-size: 1rem; font-weight: 700; margin-bottom: 12px; }
            .why-card-desc { font-size: 0.95rem; color: #94a3b8; line-height: 1.6; }
          `}
        </style>
        <div className="container">
          <span className="how-section-tag">WHY US</span>
          <h2 className="how-title" style={{marginBottom: "20px"}}>WHAT SETS US APART</h2>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🚨</div>
              <h3 className="why-card-title">Priority Support</h3>
              <p className="why-card-desc">Available 24/7 for urgent real estate inquiries and offers.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📋</div>
              <h3 className="why-card-title">Personalized Plans</h3>
              <p className="why-card-desc">Marketing tailored to your specific property needs.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🧘‍♂️</div>
              <h3 className="why-card-title">Client First</h3>
              <p className="why-card-desc">Stress-free transitions and a calm environment guiding you.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3 className="why-card-title">Transparent Pricing</h3>
              <p className="why-card-desc">Flexible commission options and straightforward costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section id="about" className="about reveal">

        {/* ✅ HEADING alag rakho */}
        <h2 className="about-title">
          Your Trusted Real Estate Partner
        </h2>

        <div
          className="container"
          style={{
            display: 'flex',
            gap: '50px',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >

          {/* IMAGE */}
          <div
            className="about-image reveal"
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

      {/* Properties Section */}
      <section id="properties" className="properties reveal">
        <div className="container">
          <h2 className="section-title">Featured Properties</h2>
          <div className="properties-grid">
            {[
              {
                id: 1,
                title: "Luxury Waterfront Villa",
                price: "$2,500,000",
                location: "Point Piper, Sydney",
                image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
                beds: 5,
                baths: 4,
                sqft: "4,200"
              },
              {
                id: 2,
                title: "Modern Skyline Apartment",
                price: "$1,150,000",
                location: "Southbank, Melbourne",
                image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
                beds: 3,
                baths: 2,
                sqft: "1,550"
              },
              {
                id: 3,
                title: "Coastal Breeze Cottage",
                price: "$1,850,000",
                location: "Surfers Paradise, Gold Coast",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
                beds: 4,
                baths: 3,
                sqft: "2,800"
              },
              {
                id: 4,
                title: "Grand Victorian Estate",
                price: "$3,200,000",
                location: "Toorak, Victoria",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
                beds: 6,
                baths: 5,
                sqft: "5,500"
              },
              {
                id: 5,
                title: "Smart Urban Penthouse",
                price: "$2,100,000",
                location: "Fortitude Valley, Brisbane",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
                beds: 3,
                baths: 3,
                sqft: "2,200"
              },
              {
                id: 6,
                title: "Tranquil Garden House",
                price: "$980,000",
                location: "Stirling, Adelaide",
                image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop",
                beds: 4,
                baths: 2,
                sqft: "2,100"
              }
            ].slice(0, showAll ? 6 : 3).map((prop) => (
                <div key={prop.id} className="prop-card reveal">
                <div
                  className="prop-img"
                  style={{ backgroundImage: `url(${prop.image})` }}
                ></div>
                <div className="prop-info">
                  <div className="prop-price">{prop.price}</div>
                  <h3 style={{ fontSize: '1.2rem', margin: '5px 0' }}>{prop.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '15px' }}>
                    📍 {prop.location}
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: '#475569',
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '15px'
                  }}>
                    <span>🛏️ {prop.beds} Beds</span>
                    <span>🚿 {prop.baths} Baths</span>
                    <span>📏 {prop.sqft} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button
              className="btn-view-all"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'View All Properties'}
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section reveal">
        <style>
          {`
            .pricing-section { padding: 100px 5%; background: #ffffff; text-align: center; }
            .pricing-section .section-tag { font-family: 'Outfit', sans-serif; color: #06b6d4; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; font-size: 0.85rem; margin-bottom: 15px; display: inline-block; }
            .pricing-grid { display: flex; justify-content: center; gap: 20px; margin-top: 50px; flex-wrap: wrap; align-items: stretch; }
            .pricing-card { background: #fff; border-radius: 20px; padding: 40px; border: 1px solid #e2e8f0; width: 340px; text-align: left; display: flex; flex-direction: column; }
            .pricing-card.popular { background: #0f172a; color: #fff; position: relative; border: none; box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2); transform: scale(1.05); }
            .popular-badge { position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #06b6d4; color: #fff; padding: 6px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; }
            .pricing-tier { font-size: 1rem; font-weight: 700; color: #64748b; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px; }
            .pricing-card.popular .pricing-tier { color: #e2e8f0; }
            .pricing-amount { font-size: 2rem; font-weight: 800; color: #0f172a; line-height: 1; margin-bottom: 5px; font-family: 'Outfit', sans-serif; }
            .pricing-card.popular .pricing-amount { color: #fff; }
            .pricing-period { font-size: 0.9rem; color: #64748b; margin-bottom: 30px; }
            .pricing-card.popular .pricing-period { color: #94a3b8; }
            .pricing-features { list-style: none; padding: 0; margin: 0 0 40px; flex-grow: 1; }
            .pricing-features li { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 15px; font-size: 0.95rem; color: #475569; }
            .pricing-card.popular .pricing-features li { color: #e2e8f0; }
            .pricing-features li::before { content: '✓'; color: #06b6d4; font-weight: bold; }
            .btn-pricing { display: block; width: 100%; padding: 15px; text-align: center; border-radius: 8px; font-weight: 700; transition: all 0.3s; border: 1px solid #0f172a; background: transparent; color: #0f172a; cursor: pointer; }
            .btn-pricing:hover { background: #f1f5f9; }
            .pricing-card.popular .btn-pricing { background: transparent; border: 1px solid #06b6d4; color: #fff; }
            .pricing-card.popular .btn-pricing:hover { background: rgba(6, 182, 212, 0.1); }
            
            @media (max-width: 1024px) {
              .pricing-card.popular { transform: scale(1); }
            }
          `}
        </style>
        <div className="container">
          <span className="section-tag">PRICING</span>
          <h2 className="problem-title" style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#0f172a', fontFamily: "'Outfit', sans-serif" }}>Transparent packages. No lock-in contracts.</h2>
          <p className="problem-subtitle" style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto 30px', fontSize: '1.1rem' }}>All packages include a free initial appraisal, high-quality photography, and a dedicated local agent representative during AEST business hours.</p>
          
          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card">
              <div className="pricing-tier">Standard</div>
              <div className="pricing-amount">$1,500</div>
              <div className="pricing-period">AUD upfront marketing</div>
              <ul className="pricing-features">
                <li>Local SEO (up to 15 keywords)</li>
                <li>RealEstate.com.au & Domain portal optimization</li>
                <li>Monthly performance report</li>
                <li>Digital styling setup</li>
                <li>Email support</li>
              </ul>
              <button className="btn-pricing" onClick={() => scrollToSection('contact')}>Get started</button>
            </div>
            
            {/* Growth (Popular) */}
            <div className="pricing-card popular">
              <div className="popular-badge">MOST POPULAR</div>
              <div className="pricing-tier">Premium</div>
              <div className="pricing-amount">$2,500</div>
              <div className="pricing-period">AUD upfront marketing</div>
              <ul className="pricing-features">
                <li>Everything in Standard</li>
                <li>Google Ads management (up to $2k spend)</li>
                <li>Conversion-optimized property landing page</li>
                <li>Monthly strategy call</li>
                <li>Local competitor tracking dashboard</li>
                <li>Priority support — AEST hours</li>
              </ul>
              <button className="btn-pricing" onClick={() => scrollToSection('contact')}>Get started</button>
            </div>
            
            {/* Scale */}
            <div className="pricing-card">
              <div className="pricing-tier">Elite</div>
              <div className="pricing-amount">$4,500</div>
              <div className="pricing-period">AUD upfront marketing</div>
              <ul className="pricing-features">
                <li>Everything in Premium</li>
                <li>Meta Ads (Facebook & Instagram)</li>
                <li>AI chatbot for 24/7 lead capture</li>
                <li>High-value investor outreach campaigns</li>
                <li>Weekly reporting calls</li>
                <li>Full property staging guidance</li>
              </ul>
              <button className="btn-pricing" onClick={() => scrollToSection('contact')}>Get started</button>
            </div>
          </div>
        </div>
      </section>

      <section id="feedback" className="feedback-section reveal">

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

      {/* FAQ Section */}
      <section id="faq" className="faq-section reveal">
        <style>
          {`
            .faq-section { padding: 100px 5%; background: #ffffff; text-align: center; }
            .faq-section .section-tag { font-family: 'Outfit', sans-serif; color: #06b6d4; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; font-size: 0.85rem; margin-bottom: 15px; display: inline-block; }
            .faq-title { font-size: 1.5rem; color: #0f172a; margin-bottom: 50px; font-family: 'Outfit', sans-serif; font-weight: 700; }
            .faq-container { max-width: 800px; margin: 0 auto; text-align: left; }
            details.faq-item { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 15px; padding: 20px 25px; transition: all 0.3s ease; }
            details.faq-item[open] { background: #ffffff; border-color: #06b6d4; box-shadow: 0 4px 15px rgba(6, 182, 212, 0.1); }
            details.faq-item summary { display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-size: 1rem; font-weight: 600; color: #0f172a; list-style: none; }
            details.faq-item summary::-webkit-details-marker { display: none; }
            details.faq-item summary:hover { color: #06b6d4; }
            details.faq-item summary::after { content: '+'; font-size: 1rem; font-weight: 400; color: #64748b; transition: transform 0.3s; }
            details.faq-item[open] summary::after { content: '−'; color: #06b6d4; }
            details.faq-item p { margin-top: 15px; color: #475569; line-height: 1.6; font-size: 0.95rem; margin-bottom: 0; padding-top: 15px; border-top: 1px solid #e2e8f0; }
          `}
        </style>
        <span className="section-tag">FAQ</span>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="faq-container">
          <details className="faq-item">
            <summary>How do you determine the estimated value of my property?</summary>
            <p>We provide a comprehensive Comparative Market Analysis (CMA) which evaluates your home against recently sold, similar properties in your neighborhood, active listings, and current market trends affecting local supply and demand.</p>
          </details>
          <details className="faq-item">
            <summary>Should I renovate before selling?</summary>
            <p>It depends on the property and current market. Often, minor cosmetic updates like a fresh coat of paint, clean landscaping, and professional staging offer the highest return on investment. Our team provides specific guidance tailored to your home to maximize value without overcapitalizing.</p>
          </details>
          <details className="faq-item">
            <summary>Are there any hidden fees in your pricing?</summary>
            <p>Absolutely not. We believe in complete transparency. Our upfront marketing fees and commission scale are clearly outlined in your exclusive agency agreement before you sign. There are no surprise costs down the line.</p>
          </details>
          <details className="faq-item">
            <summary>How long does it typically take to sell a property?</summary>
            <p>While the average time on market varies by suburb and property type, our precise digital marketing and localized pricing strategies typically result in successfully matched buyers within 21-30 days of listing.</p>
          </details>
          <details className="faq-item">
            <summary>Do I need to be present during open homes?</summary>
            <p>We highly recommend that sellers are not present during property inspections. Buyers feel more comfortable imagining themselves living in the property and asking honest questions when the owner is away. Our agents are trained to highlight specific features and answer all questions professionally.</p>
          </details>
        </div>
      </section>

      <section id="contact" className="contact-section reveal">

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
      <footer className="footer reveal">

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
                <li onClick={() => scrollToSection('services')}>Services</li>
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
              &copy; 2026 Ventoria Global.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
