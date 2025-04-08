import React from 'react';
import '../styles/globals.css';
import Footer from '../components/Footer';

const TestPortal = () => {
  return (
    <div>
      <h2>Test Portal</h2>
      <p>Access free and premium tests for JEE & NEET aspirants.</p>
      <div className="test-options">
        <div className="test-card">
          <h3>Free Test</h3>
          <p>Try a sample JEE mock test.</p>
          <a href="#" className="btn primary">Start Free Test</a>
        </div>
        <div className="test-card">
          <h3>Premium Test</h3>
          <p>Full access with a plan.</p>
          <a href="/plans" className="btn secondary">Get a Plan</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestPortal;