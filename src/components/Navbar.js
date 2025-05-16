
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/globals.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="navbar premium-navbar">
      <div className="nav-container">
        <img src="/logo.png" alt="MentorQ Pro Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jee">JEE</Link></li>
            <li><Link to="/neet">NEET</Link></li>
            <li><a href="#about" onClick={() => handleScroll('about')}>About</a></li>
            <li><a href="#contact" onClick={() => handleScroll('contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

  );
};

export default Navbar;