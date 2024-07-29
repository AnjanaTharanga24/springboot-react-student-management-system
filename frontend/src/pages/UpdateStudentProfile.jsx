import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from "../components/UserContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function UpdateStudentProfile() {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setFormData({
      name: user.name,
      username: user.username,
      age: user.age,
      gender: user.gender,
      address: user.address,
      mobile: user.mobile,
      email: user.email,
      dob: user.dob,
      password: user.password,
    });
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8082/students/${user.id}`,
        formData
      );
      const updatedUser = response.data;
      setUser({
        ...user,
        ...updatedUser,
        username: user.username,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Profile updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/student-profile");
    } catch (error) {
      console.error("Error updating profile: ", error.response || error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to update profile",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="register-page">
      <div>
        <Navbar />
      </div>

      <div className="reg-card reg-card mt-5 shadow fs-5 register-form">
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
              className="form-control register-form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
              value={formData.name || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="username" className="mb-2">
              User Name
            </label>
            <input
              type="text"
              className="form-control register-form-control"
              id="username"
              name="username"
              aria-describedby="emailHelp"
              placeholder="Enter your username"
              value={formData.username || ""}
              onChange={handleChange}
            
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="age" className="mb-2">
              Age
            </label>
            <input
              type="number"
              className="form-control register-form-control"
              id="age"
              name="age"
              aria-describedby="emailHelp"
              placeholder="Enter age"
              value={formData.age || ""}
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
                  className="form-check-input register-form-control"
                  type="radio"
                  name="gender"
                  id="male"
                  value="MALE"
                  checked={user.gender === "MALE"}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input register-form-control"
                  type="radio"
                  name="gender"
                  id="female"
                  value="FEMALE"
                  checked={user.gender === "FEMALE"}
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
              className="form-control register-form-control"
              id="dob"
              name="dob"
              placeholder="Enter your date of birth"
              value={formData.dob || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="address" className="mb-2">
              Address
            </label>
            <input
              type="text"
              className="form-control register-form-control"
              id="address"
              name="address"
              aria-describedby="emailHelp"
              placeholder="Enter address"
              value={formData.address || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="mobile" className="mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              className="form-control register-form-control"
              id="mobile"
              name="mobile"
              aria-describedby="emailHelp"
              placeholder="Enter contact number"
              value={formData.mobile || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="email" className="mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="form-control register-form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              className="form-control register-form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password || ""}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
