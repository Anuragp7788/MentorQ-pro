// src/pages/Home.js
import React, { useState } from 'react';
import '../styles/globals.css';
import Footer from '../components/Footer';
import LoginPopup from '../components/LoginPopup';

const Home = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [defaultTab, setDefaultTab] = useState('login');
  const [mobileNumber, setMobileNumber] = useState('');

  const openLoginPopup = (e, tab = 'login') => {
    e.preventDefault();
    setDefaultTab(tab);
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => setShowLoginPopup(false);

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length === 10) {
      alert(`OTP sent to +91${mobileNumber}!`);
    } else {
      alert('Please enter a valid 10-digit mobile number.');
    }
  };

  return (
    <div className="home-page premium-theme">
      <header className="navbar premium-navbar">
        <div className="nav-container">
          <img src="/logo.png" alt="MentorQ Pro Logo" className="logo enlarged-logo" />
          <nav>
            <ul className="nav-links">
              <li><a href="/test-portal">Test Portal</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/plans">Plans</a></li>
              <li><a href="/become-mentor">Become a Mentor</a></li>
              <li><a href="/contact">Contact</a></li>
              <li>
                <a href="#" onClick={(e) => openLoginPopup(e, 'login')}>
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="join-btn premium-btn"
                  onClick={(e) => openLoginPopup(e, 'signup')}
                >
                  Join for Free
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero premium-hero">
        <div className="hero-content">
          <div className="hero-left">
            <h1>
              Master JEE & NEET with <span className="highlight">MentorQ Pro</span>
            </h1>
            <p>Join 5 lakh+ aspirants learning from India’s top IITian mentors. Start free, upgrade for success!</p>
            <div className="cta-buttons">
              <a href="/test-portal" className="btn primary premium-btn">Start Free Test</a>
              <a href="/plans" className="btn secondary premium-btn">Explore Plans</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="login-form premium-login-form">
              <h2>Get Started</h2>
              <p>Enter your mobile number for OTP</p>
              <form onSubmit={handleOtpSubmit}>
                <div className="phone-input">
                  <select defaultValue="+91">
                    <option value="+91">India (+91)</option>
                  </select>
                  <input
                    placeholder="Mobile Number"
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                    maxLength={10}
                  />
                </div>
                <button type="submit" className="btn submit premium-btn">
                  Send OTP
                </button>
              </form>
              <p>
                New here? <a href="/signup" className="signup-link">Join for Free</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="goals premium-section">
        <h2>Your Goal, Our Mission</h2>
        <p>Prepare for 100+ exams with MentorQ Pro</p>
        <div className="goals-grid">
          <a href="#" className="goal-card premium-card">JEE Mains</a>
          <a href="#" className="goal-card premium-card">Jee Advanced</a>
          <a href="#" className="goal-card premium-card">NEET UG</a> 
        </div>
        <a href="#" className="see-all">See All Goals (100+)</a>
      </section>

      <section className="features premium-section">
        <h2>Why Choose MentorQ Pro?</h2>
        <div className="features-grid">
          <div className="feature-card premium-card">
            <h3>Daily Mentor Sessions</h3>
            <p>Interact with IITian mentors, ask doubts, and get live guidance every day.</p>
          </div>
          <div className="feature-card premium-card">
            <h3>Practice & Test Series</h3>
            <p>Access mock tests, practice questions, and PDFs for revision anytime.</p>
          </div>
          <div className="feature-card premium-card">
            <h3>Learn Anytime, Anywhere</h3>
            <p>One subscription unlocks all live and recorded sessions across devices.</p>
          </div>
          <div className="feature-card premium-card">
            <h3>Get the MentorQ App</h3>
            <p>Download lessons and study on-the-go with our mobile app.</p>
          </div>
        </div>
      </section>

      <section className="testimonials premium-section">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card premium-card">
            <p>“MentorQ Pro’s IITian mentors helped me score 95% in JEE Mains!”</p>
            <h3>- Priya S., JEE 2024</h3>
          </div>
          <div className="testimonial-card premium-card">
            <p>“The daily sessions and test series were a game-changer for NEET prep.”</p>
            <h3>- Arjun K., NEET 2023</h3>
          </div>
          <div className="testimonial-card premium-card">
            <p>“Free resources got me started, and the Pro plan sealed my success.”</p>
            <h3>- Sneha R., JEE 2025 Aspirant</h3>
          </div>
        </div>
      </section>

      <Footer />

      {showLoginPopup && (
        <LoginPopup
          isOpen={showLoginPopup}
          onClose={closeLoginPopup}
          defaultTab={defaultTab}
        />
      )}
    </div>
  );
};

export default Home;
