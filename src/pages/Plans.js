// src/pages/Plans.js
import React from 'react';
import '../styles/globals.css';
import Footer from '../components/Footer'; // Relative to src/pages/

const Plans = () => {
  return (
    <div className="plans-page">
      <header className="navbar">
        <div className="nav-container">
          <img src="/logo.png" alt="MentorQ Pro Logo" className="logo" />
          <nav>
            <ul className="nav-links">
              <li><a href="/test-portal">Test Portal</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/plans">Plans</a></li>
              <li><a href="/become-mentor">Become a Mentor</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#" className="join-btn">Join for Free</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="plans-header">
        <h1>Choose Your Learning Plan</h1>
        <p className="subtitle">Unlock premium features with MentorQ Pro subscriptions tailored for JEE & NEET success.</p>
      </section>
      <section className="pricing">
        <div className="pricing-grid">
          <div className="plan-card">
            <h3>Free Plan</h3>
            <p className="price">₹0<span>/forever</span></p>
            <ul className="features-list">
              <li>Access to free resources</li>
              <li>Basic test series</li>
              <li>Community support</li>
            </ul>
            <button className="btn primary">Start Free</button>
          </div>
          <div className="plan-card premium">
            <h3>Pro Monthly</h3>
            <p className="price">₹999<span>/month</span></p>
            <ul className="features-list">
              <li>All free plan features</li>
              <li>Daily mentor sessions</li>
              <li>Full test series</li>
              <li>Priority support</li>
            </ul>
            <button className="btn primary">Get Pro</button>
          </div>
          <div className="plan-card">
            <h3>Pro Yearly</h3>
            <p className="price">₹9,999<span>/year</span></p>
            <ul className="features-list">
              <li>All Pro Monthly features</li>
              <li>Exclusive workshops</li>
              <li>Save 17% annually</li>
            </ul>
            <button className="btn primary">Get Pro</button>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <h2>Ready to Excel?</h2>
        <p>Join thousands of students achieving their goals with MentorQ Pro.</p>
        <a href="#" className="btn join">Join for Free</a>
      </section>
      <Footer />
    </div>
  );
};

export default Plans;