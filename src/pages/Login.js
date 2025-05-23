// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setupRecaptcha, sendOTP, verifyOTP } from '../auth';
import { storeUserIfNew } from '../utils/storeUser';

const Login = () => {
  const [step, setStep] = useState(1); // Step 1 = phone, Step 2 = OTP
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone}`;
    setPhone(formattedPhone);

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
      navigate('/dashboard');
    }, (error) => setMessage(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">
          {step === 1 ? 'Login or Create your account' : 'Enter OTP'}
        </h2>

        <div className="text-sm text-center mb-4 text-gray-500">India (+91)</div>

        {step === 1 && (
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
              className="bg-blue-600 text-white w-full py-2 rounded-md font-medium"
            >
              Continue
            </button>
            <p className="text-sm text-center mt-2 text-blue-500 cursor-pointer">
              Continue with email
            </p>
          </>
        )}

        {step === 2 && (
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
              className="bg-green-600 text-white w-full py-2 rounded-md font-medium"
            >
              Verify & Continue
            </button>
          </>
        )}

        {message && (
          <p className="text-sm text-red-500 text-center mt-3">{message}</p>
        )}

        <div id="recaptcha-container"></div>

        <p className="text-xs text-gray-400 text-center mt-4">
          Having trouble? Visit our <span className="text-blue-500 underline cursor-pointer">Help Center</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
