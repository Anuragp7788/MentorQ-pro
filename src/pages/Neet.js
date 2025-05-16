import React from 'react';
     import '../styles/globals.css';
     import Navbar from '../components/Navbar.js';
     import Footer from '../components/Footer.js';

     const Neet = () => {
       return (
         <div className="home-page premium-theme">
           <Navbar />
           <section id="coming-soon" className="coming-soon premium-section">
             <h2>NEET Mentorship Coming Soon</h2>
             <p>
               Our NEET mentorship plans are under development. Join our waitlist to be the first to access personalized guidance from top medical mentors!
             </p>
             <a href="https://forms.gle/your-form-link" className="btn primary premium-btn">Join Waitlist</a>
           </section>
           <Footer />
         </div>
       );
     };

     export default Neet;