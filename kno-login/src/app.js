import React from "react";

function App() {
  return (
    <div className="login-wrapper">

      {/* Top Logo */}
      <div className="site-logo">
        <img src="/newlogo.jpeg" alt="logo" />
        <span>KNO</span>
      </div>

      {/* Card */}
      <div className="login-card">

        <div className="card-logo">
          <img src="/newlogo.jpeg" alt="logo" />
        </div>

        <h2>Welcome Back</h2>
        <p className="subtitle">
          Sign in to continue swapping skills
        </p>

        <div className="input-group">
          <label>Email Address *</label>
          <input type="email" placeholder="you@gmail.com" />
        </div>

        <div className="input-group">
          <label>Password *</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button className="btn-primary">
          Sign In
        </button>

        <button className="btn-outline">
          Create Account
        </button>

        <p className="forgot">
          Forgot your password?
        </p>

      </div>
    </div>
  );
}

export default App;
