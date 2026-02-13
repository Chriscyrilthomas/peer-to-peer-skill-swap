import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./Register";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Submitted!");
  };

  return (
    <div>

      <div className="site-logo">
        <img src="/newlogo.jpeg" alt="KNO Logo" />
        <span>KNO</span>
      </div>

      <div className="login-container">
        <div className="login-card">

          <div className="login-logo">
            <img src="/newlogo.jpeg" alt="KNO Logo" />
          </div>

          <p className="subtitle">Sign in to your account</p>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username or Email" required />
            <input type="password" placeholder="Password" required />

            <button type="submit" className="btn-login">
              Login
            </button>
          </form>

          <Link to="/register" className="btn-outline">
            Create Account
          </Link>

        </div>
      </div>

    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
