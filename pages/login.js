import React, { useState } from 'react';

const inputStyle = {
  padding: '10px',
  margin: '10px 0',
  width: '100%',
  maxWidth: '300px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    alert("Login logic can be implemented here ✅");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button style={buttonStyle} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
