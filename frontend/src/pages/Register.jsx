import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/register.css";

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    username: '',
    age: '',
    gender: '',
    address: '',
    mobile: '',
    email: '',
    password: '',
    dob: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8082/register", user);
      console.log(response.data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="card reg-card mt-5 shadow fs-5">
        <div className="form-header">
          <h2>Register student</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="name" className="mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
              value={user.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="username" className="mb-2">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              aria-describedby="emailHelp"
              placeholder="Enter your username"
              value={user.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="age" className="mb-2">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              aria-describedby="emailHelp"
              placeholder="Enter age"
              value={user.age}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="gender" className="mb-2">
              Gender
            </label>

            <div className="d-flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="MALE"
                  checked={user.gender === 'MALE'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="FEMALE"
                  checked={user.gender === 'FEMALE'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="dob" className="mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              placeholder="Enter your date of birth"
              value={user.dob}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="address" className="mb-2">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              aria-describedby="emailHelp"
              placeholder="Enter address"
              value={user.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="mobile" className="mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              name="mobile"
              aria-describedby="emailHelp"
              placeholder="Enter contact number"
              value={user.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="email" className="mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}