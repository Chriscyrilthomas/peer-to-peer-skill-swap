import React, { useState } from "react";
import logo from "./newlogo.jpeg";

function ForgotPassword({ onBack }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="login-wrapper">

      <div className="site-logo">
        <img src={logo} alt="logo" />
        <span>KNO</span>
      </div>

      <div className="login-card">

        <h2>Reset Password</h2>

        {step === 1 && (
          <>
            <p className="subtitle">Enter your email to receive OTP</p>
            <input
              type="email"
              placeholder="you@gmail.com"
              className="register-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn-primary" onClick={() => setStep(2)}>
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p className="subtitle">Enter OTP sent to your email</p>
            <input
              type="text"
              placeholder="Enter OTP"
              className="register-input"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="btn-primary" onClick={() => setStep(3)}>
              Verify OTP
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <p className="subtitle">Enter new password</p>
            <input
              type="password"
              placeholder="New Password"
              className="register-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button className="btn-primary" onClick={onBack}>
              Reset Password
            </button>
          </>
        )}

        <button className="btn-outline" onClick={onBack}>
          Back to Login
        </button>

      </div>
    </div>
  );
}

export default ForgotPassword;
