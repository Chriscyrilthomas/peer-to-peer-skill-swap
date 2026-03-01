import React from "react";
import logo from "./newlogo.jpeg";

function Login({ onCreateAccount, onForgot, onLoginSuccess }) {
  return (
    <div className="login-wrapper">

      {/* Top Left Logo */}
      <div className="site-logo">
        <img src={logo} alt="logo" />
        <span>KNO</span>
      </div>

      {/* Login Card */}
      <div className="login-card">

        <div className="card-logo">
          <img src={logo} alt="logo" />
        </div>

        <h2>Welcome Back</h2>
        <p className="subtitle">
          Sign in to continue swapping skills
        </p>

        <input
          type="email"
          placeholder="you@gmail.com"
          className="register-input"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="register-input"
        />

        {/* IMPORTANT FIX HERE */}
        <button className="btn-primary" onClick={onLoginSuccess}>
          Sign In
        </button>

        <button className="btn-outline" onClick={onCreateAccount}>
          Create Account
        </button>

        <p className="forgot" onClick={onForgot}>
          Forgot your password?
        </p>

      </div>
    </div>
  );
}

export default Login;
