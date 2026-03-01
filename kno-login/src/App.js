import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Profile from "./Profile";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);

  return (
    <>
      {page === "login" && (
        <Login
          onLoginSuccess={(userData) => {
            setUser(userData);
            setPage("profile");
          }}
          onCreateAccount={() => setPage("register")}
          onForgot={() => setPage("forgot")}
        />
      )}

      {page === "register" && (
        <Register
          onRegisterSuccess={(userData) => {
            setUser(userData);
            setPage("profile");
          }}
          onBack={() => setPage("login")}
        />
      )}

      {page === "forgot" && (
        <ForgotPassword onBack={() => setPage("login")} />
      )}

      {page === "profile" && (
        <Profile user={user} />
      )}
    </>
  );
}

export default App;
