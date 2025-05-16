// src/pages/Signup.js
import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Signup = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState('');

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: (response) => {
            console.log("reCAPTCHA verified");
          },
        },
        auth
      );
    }
  };

  const handleSendOTP = async () => {
    if (!phone) {
      setMessage("❌ Please enter phone number");
      return;
    }

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    const formattedPhone = "+91" + phone;

    try {
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      setConfirmationResult(confirmation);
      setMessage("✅ OTP sent! Check your phone.");
    } catch (err) {
      console.error(err);
      setMessage(`❌ ${err.message}`);
    }
  };

  const handleVerifyOTP = async () => {
    if (!confirmationResult || !otp) {
      setMessage("❌ Please enter OTP");
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      setMessage("✅ Phone verified! Signup successful.");
    } catch (err) {
      console.error(err);
      setMessage("❌ Incorrect OTP");
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>Join Free (Signup with Phone)</h2>

      <input
        type="text"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>

      <br /><br />
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>

      <div id="recaptcha-container"></div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
