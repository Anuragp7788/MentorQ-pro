// src/components/Navbar.js
import React from 'react';
import '../styles/globals.css'; // Optional: if you have styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MentorQ</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#mentors">Mentors</a></li>
        <li><a href="#questions">Questions</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;