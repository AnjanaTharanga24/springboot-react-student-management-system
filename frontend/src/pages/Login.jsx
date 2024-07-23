import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../components/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  const {setUser} = useContext(UserContext);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/login',{
        username,
        password
      })
      console.log("Login response:" , response.data)

      //Set user in context
      setUser({
        username: response.data.username
      })
      console.log("user set in context:",{
         username: response.data.username
      })
      console.log("full login response :",response)
      navigate('/')
    } catch (error) {
      console.error("login error : " , error)
    }

  }
  return (
    <div>
      {/* <div>
      <Navbar />
    </div> */}

      <div className="card shadow fs-5 login-form">
        <div className="form-header">
          <h2>Login</h2>
        </div>
        <form >
          <div className="form-group mb-4">
            <label htmlFor="username" className="mb-2">
              User name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between mt-5">
            <button type="submit" className="btn btn-success" onClick={handleSubmit}>
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
