import React from 'react';
import './GoalsAndFeaturesCards.css'; // We'll create this CSS file next

const cards = [
  {
    title: "Create a Powerful Brand",
    description: "Establish MentorQ Pro as a trusted mentorship platform by offering exceptional guidance from IITians.",
  },
  {
    title: "Offer a Freemium Model",
    description: "Provide free basic mentorship and test series access, and premium plans for advanced resources and test series.",
  },
  {
    title: "Simplify Mentor Applications",
    description: "Build a portal where IITians can apply to become mentors and help students preparing for JEE Advanced.",
  },
  {
    title: "Secure & Scalable Platform",
    description: "Use modern tech stack (Next.js, Firebase, Razorpay) to ensure smooth user experience and secure payments.",
  },
  {
    title: "Private Mentor System",
    description: "No public display of mentors. Students are matched privately after plan purchase for focused one-on-one mentoring.",
  },
  {
    title: "JEE 2025 Focused Launch",
    description: "Use JEE Advanced 2025 as a launchpad to market MentorQ Pro and gain initial traction with target students.",
  },
];

const GoalsAndFeaturesCards = () => {
  return (
    <div className="cards-container">
      <h2 className="section-title">Our Vision & Key Features</h2>
      <div className="cards-wrapper">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsAndFeaturesCards;
