// src/components/Footer.js
import React from 'react';
     import '../styles/globals.css';

     const Footer = () => {
       return (
         <footer className="footer">
           <div className="footer-container">
             <div className="footer-brand">
               <h3>MentorQ Pro</h3>
               <p>Empowering JEE & NEET aspirants with top-tier mentorship.</p>
             </div>
             <div className="footer-link-sections">
               <div className="footer-column">
                 <h4>Links</h4>
                 <ul>
                   <li><a href="/">Home</a></li>
                   <li><a href="/jee">JEE</a></li>
                   <li><a href="/neet">NEET</a></li>
                   <li><a href="/about">About</a></li>
                 </ul>
               </div>
               <div className="footer-column">
                 <h4>Contact</h4>
                 <ul>
                   <li><a href="mailto:support@mentorqpro.com">Email Us</a></li>
                 </ul>
               </div>
             </div>
             <div className="footer-bottom">
               <p>© 2025 MentorQ Pro. All rights reserved.</p>
             </div>
           </div>
         </footer>
       );
     };

     export default Footer;

