// src/auth.js
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const setupRecaptcha = (phoneNumber, setConfirmationResult) => {
  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    size: 'invisible',
    callback: (response) => {
      console.log("reCAPTCHA solved");
    },
  });

  sendOTP(phoneNumber, setConfirmationResult);
};

export const sendOTP = async (phoneNumber, setConfirmationResult) => {
  try {
    const confirmation = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
    setConfirmationResult(confirmation);
  } catch (error) {
    console.error("OTP error", error);
  }
};

export const verifyOTP = async (otp, confirmationResult, onSuccess, onError) => {
  try {
    const result = await confirmationResult.confirm(otp);
    onSuccess(result.user);
  } catch (error) {
    onError(error);
  }
};
