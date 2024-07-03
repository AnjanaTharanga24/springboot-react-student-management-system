import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3">
        <a className="navbar-brand text-white fs-4" href="#">
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <a className="nav-link text-white fs-5 " href="#">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white fs-5" href="#">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
