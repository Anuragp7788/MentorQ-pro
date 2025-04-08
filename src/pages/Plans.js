import React from 'react';
import '../styles/globals.css';
import Footer from '../components/Footer';

const Plans = () => {
  return (
    <div>
      <section className="plans-section">
        <h2 className="section-title">Choose Your Plan</h2>
        <div className="plans">
          <div className="plan-card">
            <h3>Basic</h3>
            <p className="price">₹499 / month</p>
            <ul>
              <li>Weekly Mentor Calls</li>
              <li>Strategy Planning</li>
              <li>Doubt Support</li>
            </ul>
            <button className="plan-btn">Choose Plan</button>
          </div>
          <div className="plan-card featured">
            <h3>Pro</h3>
            <p className="price">₹999 / month</p>
            <ul>
              <li>Dedicated IITian Mentor</li>
              <li>Daily Doubt Solving</li>
              <li>Test Series Analysis</li>
              <li>Parent-Teacher Sessions</li>
            </ul>
            <button className="plan-btn">Get Pro</button>
          </div>
          <div className="plan-card">
            <h3>Custom</h3>
            <p className="price">₹1499+ / month</p>
            <ul>
              <li>Group Mentorship</li>
              <li>Personalized Strategy</li>
              <li>Unlimited Support</li>
            </ul>
            <button className="plan-btn">Contact Us</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Plans;