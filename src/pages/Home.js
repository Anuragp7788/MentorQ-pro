
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/globals.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import FeatureCard from '../components/FeatureCard.js';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Home component rendered');
  }, []);

  const features = [
    {
      title: '1:1 Mentorship (by only IITians)',
      image: '/icons/mentorship.png',
      description: 'Personalized sessions with IITian mentors.',
      details: 'Get dedicated guidance from top IITians to clear doubts and build strategies tailored to your needs.',
    },
    {
      title: 'Daily Mentor Calls',
      image: '/icons/calls.png',
      description: 'Regular calls for consistent support.',
      details: 'Stay on track with daily check-ins to discuss progress, challenges, and next steps.',
    },
    {
      title: 'Schedule Designed by Mentor',
      image: '/icons/schedule.png',
      description: 'Tailored study plans by mentors.',
      details: 'Maximize preparation with custom schedules designed for your strengths and weaknesses.',
    },
    {
      title: '24/7 Support via Chats',
      image: '/icons/support.png',
      description: 'Access mentors anytime in private groups.',
      details: 'Join private group chats for round-the-clock doubt resolution and support.',
    },
    {
      title: 'Tracking Sheet for Daily Activity',
      image: '/icons/tracking.png',
      description: 'Monitor study progress daily.',
      details: 'Use tracking sheets to log tasks and review progress with mentors regularly.',
    },
    {
      title: 'Weekly Progress Review',
      image: '/icons/review.png',
      description: 'Regular reviews to track progress.',
      details: 'Weekly sessions with mentors to assess performance and adjust study plans.',
    },
    {
      title: 'Bi-weekly Parents-Mentor Updates',
      image: '/icons/parent-updates.png',
      description: 'Keep parents informed.',
      details: 'Bi-weekly updates to parents on student progress and mentor feedback.',
    },
    {
      title: 'Weekly Feedbacks',
      image: '/icons/feedback.png',
      description: 'Feedback from mentors and mentees.',
      details: 'Exchange weekly feedback to improve mentorship and learning experience.',
    },
    {
      title: 'Private Telegram Groups',
      image: '/icons/telegram.png',
      description: 'Exclusive groups for mentors and students.',
      details: 'Join private Telegram groups for each mentor and their students for seamless communication.',
    },
    {
      title: 'Highly Repetitive Topics',
      image: '/icons/topics.png',
      description: 'Focus on high-yield topics.',
      details: 'Study important and repetitive chapter-wise topics to boost exam performance.',
    },
    {
      title: 'Chapter-wise PYQs',
      image: '/icons/pyqs.png',
      description: 'Practice with previous year questions.',
      details: 'Access chapter-wise previous year questions to master key concepts.',
    },
    {
      title: 'Easy Mentor Switch',
      image: '/icons/mentor-switch.png',
      description: 'Switch mentors if needed.',
      details: 'Seamlessly switch to a different mentor for better compatibility or needs.',
    },
    {
      title: '24/7 Team Support',
      image: '/icons/team-support.png',
      description: 'Support for any issues.',
      details: 'Get help from our dedicated team for technical or mentorship-related issues anytime.',
    },
    {
      title: 'Talk with Mentor to CEOs',
      image: '/icons/escalation.png',
      description: 'Escalation support for critical issues.',
      details: 'Escalate concerns from mentors to senior mentors or CEOs if required.',
    },
    {
      title: 'Post-JEE Career Support',
      image: '/icons/career.png',
      description: 'Networking and career guidance.',
      details: 'Access a community of IITians for career support and networking post-JEE.',
    },
  ];

  return (
    <div className="home-page premium-theme">
      <Navbar />
      <section id="home" className="hero premium-hero" data-testid="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1>
              Master JEE & NEET with <span className="highlight">MentorQ Pro</span>
            </h1>

            <p>
              Join thousands of aspirants guided by India’s top IITian and medical mentors. Unlock personalized mentorship, expert strategies, and proven study plans for success.
            </p>
            <div className="cta-buttons">
              <Link to="/jee" className="btn primary premium-btn">Explore Plans</Link>
              <Link to="/jee" className="btn secondary premium-btn">Join Batch</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="premium-section">
        <h2>About Us</h2>
        <p>
          MentorQ Pro is dedicated to empowering JEE and NEET aspirants with world-class mentorship. Our team of IITians and medical professionals provides personalized guidance to help you achieve your dreams.
        </p>
      </section>
      <section id="why-mentorq" className="premium-section">
        <h2>Why MentorQ Pro?</h2>
        <p>
          We offer a unique blend of personalized mentorship, cutting-edge resources, and continuous support to ensure you excel in your JEE and NEET journey.
        </p>
      </section>
      <section id="features" className="features premium-section" data-testid="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              image={feature.image}
              description={feature.description}
              details={feature.details}
            />
          ))}
        </div>
      </section>
      <section id="plans" className="plans premium-section">
        <h2>Our Plans</h2>
        <div className="plans-grid">
          <div className="plan-card premium-card">
            <h3>1-Month Plan</h3>
            <p className="price">INR 1499</p>
            <ul>
              <li>1:1 Mentorship</li>
              <li>Daily Mentor Calls</li>
              <li>Custom Schedule</li>
            </ul>
            <a href="https://forms.gle/your-form-link" className="btn primary premium-btn">Join Batch</a>
          </div>
          <div className="plan-card premium-card">
            <h3>3-Month Plan</h3>
            <p className="price">INR 3999</p>
            <ul>
              <li>1:1 Mentorship</li>
              <li>Daily Mentor Calls</li>
              <li>Custom Schedule</li>
              <li>24/7 Support via Chats</li>
              <li>Daily Activity Tracking</li>
              <li>Weekly Progress Review</li>
              <li>Bi-weekly Parents-Mentor Updates</li>
            </ul>
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=QYI3s5GnbEKjaDYZtgHQrdvzo2Ruw9dDgjBm_h-cYNhUOTlMU09aTFg4MUU3NEpMWFlNWFNVMDlERS4u" className="btn primary premium-btn">Join Batch</a>
          </div>
        </div>
      </section>
      <section id="contact" className="contact premium-section">
        <h2>Contact Us</h2>
        <p>For any queries, reach out to us:</p>
        <div className="contact-links">
          <a href="mailto:support@mentorqpro.com">support@mentorqpro.com</a>
          <a href="https://wa.me/919876543210">WhatsApp: +91 9876543210</a>
        </div>
      </section>
      <Footer />

      {showLoginPopup && (
        <LoginPopup
          isOpen={showLoginPopup}
          onClose={closeLoginPopup}
          defaultTab={defaultTab}
        />
      )}
    </div>
  );
};

export default Home;
