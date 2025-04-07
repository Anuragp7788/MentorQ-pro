import React from 'react';
import './index.css';
const inputStyle = {
  padding: "0.75rem",
  borderRadius: "0.5rem",
  border: "1px solid #ccc",
  fontSize: "1rem"
};



const App = () => {
  return (
    <div className="app">
            {/* Navigation Bar */}
            <header className="navbar">
        <div className="nav-container">
          <h1 className="logo">MentorQ Pro</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Plans</a></li>
              <li><a href="#">Test Portal</a></li>
              <li><a href="#">Become a Mentor</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">MentorQ Pro 👨‍🏫</span></h1>
          <p>Your premium mentorship platform for JEE & NEET aspirants.</p>
          <div className="cta-buttons">
            <a href="/test-portal.html" className="btn primary">Test Portal</a>
            <a href="/become-mentor.html" className="btn secondary">Become a Mentor</a>
          </div>
        </div>
      </section>
            {/* Plans Section */}
            <section className="plans-section">
        <h2 className="section-title">Our Plans</h2>
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


      {/* Plans Section */}
      <section className="plans">
        <h2>Choose Your Plan</h2>
        <div className="plan-cards">
          <div className="card">
            <h3>Basic</h3>
            <p className="price">₹499/month</p>
            <ul>
              <li>1:1 Mentorship</li>
              <li>Weekly Test Plans</li>
              <li>Doubt Clearing Support</li>
            </ul>
            <a href="#" className="btn primary">Get Started</a>
          </div>
          <div className="card featured">
            <h3>Pro</h3>
            <p className="price">₹999/month</p>
            <ul>
              <li>Everything in Basic</li>
              <li>Personalised Study Planner</li>
              <li>Top IITian Mentors</li>
            </ul>
            <a href="#" className="btn secondary">Get Pro</a>
          </div>
        </div>
      </section>

      {/* Student Login Section */}
      <section className="login-section">
        <h2>Student Login</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="btn primary" type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="#">Register here</a>
        </p>
      </section>
            
    <section id="contact" style={{ padding: "4rem 2rem", backgroundColor: "#f5f5f5" }}>
  <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>Contact Us</h2>
  <form style={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
    <input type="text" placeholder="Your Name" required style={inputStyle} />
    <input type="email" placeholder="Your Email" required style={inputStyle} />
    <textarea placeholder="Your Message" rows="5" required style={inputStyle}></textarea>
    <button type="submit" style={{
      padding: "0.75rem",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
      fontWeight: "bold"
    }}>Send Message</button>
  </form>
</section>
{/* Footer */}
<footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h2>MentorQ Pro</h2>
            <p>Empowering students with IITian mentorship for JEE & NEET.</p>
          </div>
          <div className="footer-links">
            <a href="#">Plans</a>
            <a href="#">Test Portal</a>
            <a href="#">Become a Mentor</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MentorQ Pro. All rights reserved.</p>
        </div>
      </footer>




    </div>
  );
};

export default App;

     
