import React from 'react';
import '../styles/globals.css';
import Footer from '../components/Footer';

const inputStyle = {
  padding: "0.75rem",
  borderRadius: "0.5rem",
  border: "1px solid #ccc",
  fontSize: "1rem"
};

const Contact = () => {
  return (
    <div>
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
      <Footer />
    </div>
  );
};

export default Contact;