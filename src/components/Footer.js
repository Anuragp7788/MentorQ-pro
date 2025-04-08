import React from 'react';
import '../styles/globals.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>MentorQ Pro</h2>
          <p>Empowering students with IITian mentorship for JEE & NEET.</p>
        </div>
        <div className="footer-links">
          <a href="/plans">Plans</a>
          <a href="/test-portal">Test Portal</a>
          <a href="/become-mentor">Become a Mentor</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MentorQ Pro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;