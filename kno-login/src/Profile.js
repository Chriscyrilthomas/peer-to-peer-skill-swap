import React from "react";
import "./Profile.css";

function Profile() {
  const user = {
    name: "anil",
    email: "anil98547@gmail.com",
    role: "Student",
    joined: "February 8, 2026",
    teach: ["react"],
    learn: ["python"]
  };

  return (
    <div className="profile-page">

      {/* Navbar */}
      <div className="navbar">
        <div className="nav-left">
          <div className="logo-circle">S</div>
          <span className="brand">SkillSwap</span>
        </div>

        <div className="nav-center">
          <span className="nav-item active">Profile</span>
          <span className="nav-item">Discover</span>
          <span className="nav-item">Requests</span>
          <span className="nav-item">Messages</span>
        </div>

        <div className="nav-right">
          <div className="user-circle">A</div>
          <span className="username">anil</span>
        </div>
      </div>

      <div className="container">

        <h2>My Profile</h2>
        <p className="subtext">View and manage your account</p>

        {/* Profile Card */}
        <div className="profile-card">

          <div className="profile-top">
            <div className="avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>

            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <span className="badge">{user.role}</span>
              <span className="joined">
                Joined {user.joined}
              </span>
            </div>

            <button className="edit-btn">
              Edit Profile
            </button>
          </div>

          <hr />

          <div className="skills-section">

            <div className="skills-box">
              <h4>Skills I Can Teach</h4>
              <div className="tags">
                {user.teach.map((skill, index) => (
                  <span key={index} className="tag teach">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-box">
              <h4>Skills I Want to Learn</h4>
              <div className="tags">
                {user.learn.map((skill, index) => (
                  <span key={index} className="tag learn">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="stats">

          <div className="stat-card">
            <h1>{user.teach.length}</h1>
            <p>Skills Offered</p>
          </div>

          <div className="stat-card">
            <h1>{user.learn.length}</h1>
            <p>Skills Wanted</p>
          </div>

          <div className="stat-card">
            <h1>{user.teach.length + user.learn.length}</h1>
            <p>Total Skills</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;
