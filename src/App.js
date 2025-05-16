import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Jee from './pages/Jee.js';
import Neet from './pages/Neet.js';
import Home from './pages/Home';
import Plans from './pages/Plans';
import TestPortal from './pages/TestPortal';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Resources from './pages/Resources';
import About from './pages/About';

const App = () => {
  useEffect(() => {
    console.log('App component rendered');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jee" element={<Jee />} />
        <Route path="/neet" element={<Neet />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/test-portal" element={<TestPortal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
