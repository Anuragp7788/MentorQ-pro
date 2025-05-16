import React, { useState } from 'react';
import '../styles/globals.css';

const LoginPopup = ({ isOpen, onClose, defaultTab = 'login' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [phone, setPhone] = useState('');
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      setShowOtpPopup(true);
      console.log('OTP sent to:', phone);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      console.log('Verifying OTP:', otp);
      setShowOtpPopup(false);
      onClose();
    }
  };

  return (
    <>
      {!showOtpPopup && (
        <div className="popup-overlay" onClick={onClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="tab-header">
              <button
                className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`tab-btn ${activeTab === 'signup' ? 'active' : ''}`}
                onClick={() => setActiveTab('signup')}
              >
                Join for Free
              </button>
            </div>
            <div>
              <h2>{activeTab === 'login' ? 'Login with Phone' : 'Join with Phone'}</h2>
              <form onSubmit={handlePhoneSubmit}>
                <div className="phone-input">
                  <select defaultValue="+91">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    maxLength="10"
                    required
                  />
                </div>
                <button type="submit" className="btn submit">Send OTP</button>
              </form>
              <p className="or">or</p>
              <button className="btn email">
                {activeTab === 'login' ? 'Continue with Email' : 'Join with Email'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showOtpPopup && (
        <div className="popup-overlay" onClick={() => setShowOtpPopup(false)}>
          <div className="otp-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowOtpPopup(false)}>×</button>
            <h2>Verify OTP</h2>
            <p>OTP sent to +91-{phone}</p>
            <form onSubmit={handleOtpSubmit}>
              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                maxLength="6"
                required
              />
              <button type="submit" className="btn submit">Verify OTP</button>
            </form>
            <button
              className="resend-btn"
              onClick={() => console.log('Resend OTP to:', phone)}
            >
              Resend OTP
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;