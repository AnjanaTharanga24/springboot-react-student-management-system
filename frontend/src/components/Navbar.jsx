import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
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
          </ul>
        </div>
      </nav>
    </div>
  );
}
