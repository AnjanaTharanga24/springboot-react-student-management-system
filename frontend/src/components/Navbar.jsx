import React, { useContext, useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  console.log("User in Navbar:", user);
   
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3">
        <a className="navbar-brand text-white fs-4" href="/">
          Student Management System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {!user && (
              <>
                <li className="nav-item">
                  <Link to="/login">
                    <button className="signin btn btn-success">Sign in</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register">
                    <button className="btn btn-info text-white">Sign up</button>
                  </Link>
                </li>
              </>
            )}

            {user && (
              <li className="dropdown">
                <div className="profile-wrapper" onClick={toggleDropdown}>
                  <span className="profile-icon bg-danger text-white">👤</span>
                  <span className="username text-white">{user.username}</span>
                  <span className="dropdown-arrow text-white">▼</span>
                </div>
                {dropdownOpen && (
                  <div className="dropdown-content show">
                    <Link to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}