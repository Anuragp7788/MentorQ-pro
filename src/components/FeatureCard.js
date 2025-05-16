import React, { useState } from 'react';
import '../styles/globals.css';

const FeatureCard = ({ title, image, description, details }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`feature-card premium-card ${isToggled ? 'toggled' : ''}`}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isToggled}
      aria-label={`Toggle details for ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      <div className="feature-card-content">
        <img src={image} alt={title} className="feature-icon" />
        <h3>{title}</h3>
        <p className="feature-description">{description}</p>
        <div className="feature-details" aria-hidden={!isToggled}>
          {details}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;