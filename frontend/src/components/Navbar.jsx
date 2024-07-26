import React, { useContext, useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Successfull!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // console.log("User in Navbar:", user);

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
              <li className="dropdown ">
                <div className="profile-wrapper" onClick={toggleDropdown}>
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="profile-icon text-white"
                  />
                  <span className="username text-white fs-4">{user.username}</span>
                  <span className="dropdown-arrow text-white fs-4">▼</span>
                </div>
                {dropdownOpen && (
                  <div className="dropdown-content show">
                     <Link to="/student-profile">
                      My profile
                    </Link>
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
      <ToastContainer />
    </div>
  );
}
