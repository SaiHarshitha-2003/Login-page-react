import React from 'react';
import '../App.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="header">
          <div className="title">Login Page</div>
        </div>
        <div className="form">
          <label className="label">User Name</label>
          <input type="text" className="input" placeholder="Enter your username" />
          
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Enter your password" />
          
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
