import React, { useContext, useState } from "react";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../components/UserContext";
import { Alert } from "bootstrap";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8082/login", {
        username,
        password,
      });
      console.log("Login response:", response.data);

      // Set user in context with full student details
      setUser(response.data.student);
      console.log("User set in context:", response.data.student);
      console.log("Full login response:", response);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Loging Successfull!",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => navigate('/'), 1000);
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid Credentials!",
        showConfirmButton: false,
        timer: 1500
      });
      
    }
  };
  return (
    <div className="login-page">
            <ToastContainer />
      {/* <div>
      <Navbar />
    </div> */}

      <div className="log-card  login-form">
        <div className="form-header mt-1">
          <h2>Login Form</h2>
        </div>
        <form className="text-start">
          <div className="form-group mb-4 ">
            <label htmlFor="username" className="mb-2 login-label">
              User name
            </label>
            <input
              type="text"
              className="form-control login-form-control"
              placeholder="Enter username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="login-label mb-2">
              Password
            </label>
            <input
              type="password"
              className="form-control login-form-control"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between mt-5">
            <button
              type="submit"
              className="btn btn-success fs-4"
              onClick={handleSubmit}
            >
              Login
            </button>

            <Link to="/register">
              <button type="submit" className="btn btn-primary fs-4">
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
