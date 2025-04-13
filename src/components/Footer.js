// src/components/Footer.js
import React from 'react';
import '../styles/globals.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand section */}
        <div className="footer-brand">
          <h3>MentorQ Pro</h3>
          <p>Premium Professional Learning Platform</p>
        </div>

        {/* Links section - moved below brand */}
        <div className="footer-link-sections">
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="/plans">Plans</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/test-portal">Test Portal</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MentorQ Pro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
