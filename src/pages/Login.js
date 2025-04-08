import React from 'react';
import '../styles/globals.css';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <div className="login-form" style={{ maxWidth: '400px', margin: '2rem auto' }}>
        <p>Enter your mobile number</p>
        <form>
          <div className="phone-input">
            <select>
              <option value="+91">India (+91)</option>
            </select>
            <input type="tel" placeholder="Mobile Number" />
          </div>
          <button type="submit" className="btn submit">Send OTP</button>
        </form>
        <p>
          New here? <a href="/signup" className="signup-link">Join for Free</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;