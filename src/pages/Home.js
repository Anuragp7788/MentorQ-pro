import React from 'react';
import '../styles/globals.css';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-container">
          <h1 className="logo">MentorQ Pro</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="/test-portal">Test Portal</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/plans">Plans</a></li>
              <li><a href="/become-mentor">Become a Mentor</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup" className="join-btn">Join for Free</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Master JEE & NEET with <span className="highlight">MentorQ Pro</span>
            </h1>
            <p>Join 5 lakh+ aspirants learning from India’s top IITian mentors. Start free, upgrade for success!</p>
            <div className="cta-buttons">
              <a href="/test-portal" className="btn primary">Start Free Test</a>
              <a href="/plans" className="btn secondary">Explore Plans</a>
            </div>
          </div>
          <div className="login-form">
            <h2>Get Started</h2>
            <p>Enter your mobile number for OTP</p>
            <form>
              <div className="phone-input">
                <select>
                  <option value="+91">India (+91)</option>
                </select>
                <input type="tel" placeholder="Mobile Number" />
              </div>
              <button type="submit" className="btn submit">Send OTP</button>
            </form>
            <p>
              New here? <a href="/signup" className="signup-link">Join for Free</a>
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="goals">
        <h2>Your Goal, Our Mission</h2>
        <p>Prepare for 100+ exams with MentorQ Pro</p>
        <div className="goals-grid">
          <a href="#" className="goal-card">IIT JEE</a>
          <a href="#" className="goal-card">NEET UG</a>
          <a href="#" className="goal-card">CBSE Class 12</a>
          <a href="#" className="goal-card">Olympiads</a>
        </div>
        <a href="#" className="see-all">See All Goals (100+)</a>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose MentorQ Pro?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Daily Mentor Sessions</h3>
            <p>Interact with IITian mentors, ask doubts, and get live guidance every day.</p>
          </div>
          <div className="feature-card">
            <h3>Practice & Test Series</h3>
            <p>Access mock tests, practice questions, and PDFs for revision anytime.</p>
          </div>
          <div className="feature-card">
            <h3>Learn Anytime, Anywhere</h3>
            <p>One subscription unlocks all live and recorded sessions across devices.</p>
          </div>
          <div className="feature-card">
            <h3>Get the MentorQ App</h3>
            <p>Download lessons and study on-the-go with our mobile app.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>“MentorQ Pro’s IITian mentors helped me score 95% in JEE Mains!”</p>
            <h3>- Priya S., JEE 2024</h3>
          </div>
          <div className="testimonial-card">
            <p>“The daily sessions and test series were a game-changer for NEET prep.”</p>
            <h3>- Arjun K., NEET 2023</h3>
          </div>
          <div className="testimonial-card">
            <p>“Free resources got me started, and the Pro plan sealed my success.”</p>
            <h3>- Sneha R., JEE 2025 Aspirant</h3>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;