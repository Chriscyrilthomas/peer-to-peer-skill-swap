import React, { useState } from "react";
import "./App.css";

function Register() {

  const [password, setPassword] = useState("");
  const [strengthText, setStrengthText] = useState("");
  const [strengthLevel, setStrengthLevel] = useState(0);

  const checkStrength = (pwd) => {
    setPassword(pwd);

    if (!pwd) {
      setStrengthText("");
      setStrengthLevel(0);
      return;
    }

    if (pwd.length < 6) {
      setStrengthText("Use at least 6 characters");
      setStrengthLevel(1);
      return;
    }

    let score = 0;
    if (pwd.length >= 6) score++;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 2) {
      setStrengthText("Weak password");
      setStrengthLevel(1);
    } else if (score === 3) {
      setStrengthText("Medium strength");
      setStrengthLevel(2);
    } else if (score === 4) {
      setStrengthText("Strong password");
      setStrengthLevel(3);
    } else {
      setStrengthText("Very strong password");
      setStrengthLevel(4);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered Successfully!");
  };

  return (
    <div>

      <div className="site-logo">
        <img src="/newlogo.jpeg" alt="KNO Logo" />
        <span>KNO</span>
      </div>

      <div className="login-container">
        <div className="login-card">

          <h1>KNO</h1>
          <p className="subtitle">Create your account</p>

          <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Username" required />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => checkStrength(e.target.value)}
              required
            />

            <div className="strength-graph">
              <span className={strengthLevel >= 1 ? "active" : ""}></span>
              <span className={strengthLevel >= 2 ? "active" : ""}></span>
              <span className={strengthLevel >= 3 ? "active" : ""}></span>
              <span className={strengthLevel >= 4 ? "active" : ""}></span>
            </div>

            <p>{strengthText}</p>

            <input
              type="password"
              placeholder="Confirm Password"
              required
            />

            <button type="submit" className="btn-login">
              Register
            </button>

          </form>

          <button
            className="btn-outline"
            onClick={() => window.location.href = "/"}
          >
            Back to Login
          </button>

        </div>
      </div>

    </div>
  );
}

export default Register;
