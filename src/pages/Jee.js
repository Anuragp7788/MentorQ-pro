import React from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Jee = () => {
  return (
    <div className="home-page premium-theme">
      <Navbar />
      <section className="premium-section">
        <h2>JEE Mentorship Plans</h2>
        <p>Comprehensive guidance for JEE Main and Advanced by IITian mentors.</p>
        <div className="plans-grid">
          <div className="plan-card premium-card">
            <h3>1-Month JEE Plan</h3>
            <p className="price">INR 1499</p>
            <ul>
              <li>1:1 Mentorship</li>
              <li>Daily Mentor Calls</li>
              <li>Custom Schedule</li>
              <li>Chapter-wise PYQs</li>
            </ul>
            <a href="https://forms.gle/your-form-link" className="btn primary premium-btn">Join Batch</a>
          </div>
          <div className="plan-card premium-card">
            <h3>3-Month JEE Plan</h3>
            <p className="price">INR 3999</p>
            <ul>
              <li>1:1 Mentorship</li>
              <li>Daily Mentor Calls</li>
              <li>Custom Schedule</li>
              <li>24/7 Support via Chats</li>
              <li>Daily Activity Tracking</li>
              <li>Chapter-wise PYQs</li>
              <li>High-Yield Topics</li>
            </ul>
            <a href="https://forms.gle/your-form-link" className="btn primary premium-btn">Join Batch</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Jee;