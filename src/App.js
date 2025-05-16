import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Jee from './pages/Jee.js';
import Neet from './pages/Neet.js';

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
      </Routes>
    </Router>
  );
};

export default App;