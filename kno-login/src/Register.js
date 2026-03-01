import React, { useState } from "react";
import logo from "./newlogo.jpeg";

function Register({ onBack, onRegisterSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Password Strength Logic
  const getStrength = () => {
    if (password.length === 0) return 0;
    if (password.length < 6) return 1;
    if (password.match(/[A-Z]/) && password.match(/[0-9]/)) return 3;
    return 2;
  };

  const strength = getStrength();

  const isValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    password.length >= 6;

  return (
    <div className="login-wrapper">
      {/* Top Logo */}
      <div className="site-logo">
        <img src={logo} alt="logo" />
        <span>KNO</span>
      </div>

      {/* Card */}
      <div className="login-card">
        <div className="card-logo">
          <img src={logo} alt="logo" />
        </div>

        <h2>Create Account</h2>
        <p className="subtitle">Join KNO and build skills</p>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="register-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="register-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="register-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Password Strength Meter */}
        <div className="password-meter">
          <div className={`strength-bar ${strength >= 1 ? "active weak" : ""}`}></div>
          <div className={`strength-bar ${strength >= 2 ? "active medium" : ""}`}></div>
          <div className={`strength-bar ${strength >= 3 ? "active strong" : ""}`}></div>
        </div>

        {/* Strength Text */}
        {password && (
          <p className="strength-text">
            {strength === 1 && "Weak Password"}
            {strength === 2 && "Medium Password"}
            {strength === 3 && "Strong Password"}
          </p>
        )}

        {/* Register Button */}
        <button
          className="btn-primary"
          disabled={!isValid}
          onClick={() =>
            onRegisterSuccess({
              name,
              email,
              role: "Student",
              joined: new Date().toLocaleDateString(),
              teach: [],
              learn: []
            })
          }
        >
          Register
        </button>

        <button className="btn-outline" onClick={onBack}>
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Register;
