import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BecomeMentor from './pages/BecomeMentor';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import TestPortal from './pages/TestPortal';
import Login from './pages/Login';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <img src="/logo.png" alt="MentorQ Pro" style={{ width: '50px' }} />
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/become-mentor">Become a Mentor</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/test-portal">Test Portal</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/become-mentor" element={<BecomeMentor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/test-portal" element={<TestPortal />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;