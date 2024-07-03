import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      {/* <div>
      <Navbar />
    </div> */}

      <div className="card shadow fs-5 login-form">
        <div className="form-header">
          <h2>Login</h2>
        </div>
        <form>
          <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1" className="mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="exampleInputPassword1" className="mb-2">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div className="d-flex justify-content-between mt-5">
            <button type="submit" className="btn btn-success">
              Login
            </button>

            <Link to="/register">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>

      {/* <div>
      <Footer />
    </div> */}
    </div>
  );
}
