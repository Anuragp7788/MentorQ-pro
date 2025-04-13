// src/components/AuthSidebar.js
import React, { useState } from 'react';
import { setupRecaptcha, sendOTP, verifyOTP } from '../auth';
import { storeUserIfNew } from '../utils/storeUser';

const AuthSidebar = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState('');

  const handleSendOTP = () => {
    const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;
    setupRecaptcha(formattedPhone, setConfirmationResult)
      .then(() => {
        sendOTP(formattedPhone, setConfirmationResult);
        setStep(2);
      })
      .catch((error) => setMessage(error.message));
  };

  const handleVerifyOTP = async () => {
    verifyOTP(otp, confirmationResult, async (user) => {
      await storeUserIfNew(user);
      onClose();
    }, (error) => setMessage(error.message));
  };

  return (
    <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}>
      <div className="p-4">
        <button className="text-gray-600 float-right" onClick={onClose}>✕</button>
        <h2 className="text-xl font-semibold mb-4">Login / Signup</h2>

        <p className="text-sm text-gray-500 mb-1">India (+91)</p>

        {step === 1 ? (
          <>
            <input
              type="text"
              placeholder="Enter your mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border px-3 py-2 rounded-md mb-4 focus:outline-blue-500"
            />
            <button
              onClick={handleSendOTP}
              className="bg-blue-600 text-white w-full py-2 rounded-md"
            >
              Continue
            </button>
            <p className="text-sm text-blue-500 mt-2 text-center cursor-pointer">
              Continue with email
            </p>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border px-3 py-2 rounded-md mb-4 focus:outline-blue-500"
            />
            <button
              onClick={handleVerifyOTP}
              className="bg-green-600 text-white w-full py-2 rounded-md"
            >
              Verify & Continue
            </button>
          </>
        )}

        <div id="recaptcha-container"></div>

        {message && <p className="text-red-500 text-sm mt-3">{message}</p>}
      </div>
    </div>
  );
};

export default AuthSidebar;
