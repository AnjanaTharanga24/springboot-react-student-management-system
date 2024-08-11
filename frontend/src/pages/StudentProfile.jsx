import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/profile.css";
import profileImage from "../images/profile2.jpg";
import { UserContext } from "../components/UserContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
export default function StudentProfile() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8082/students/${user.id}`
      );
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          setUser(null);
          navigate("/");
        }
      });
    } catch (error) {
      console.error("Error deleting account: ", error.response || error);
      let errorMessage = "Failed to delete account";
      if (error.response) {
        errorMessage += `: ${error.response.status} ${error.response.statusText}`;
      }
      Swal.fire({
        position: "center",
        icon: "error",
        title: errorMessage,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="student-profile">
      <div>
        <Navbar />
      </div>

      <div className=" d-flex profile-card ">
        <div className="profile-image-card ">
          <img src={profileImage} className="profile-image" />
          <p className="profile-name">{user.name}</p>
          <div className="p-4">
            <Link to="/update-student-profile">
              <button className="btn btn-primary edit-btn ">
                Edit profile
              </button>
            </Link>
            <button
              className="btn btn-danger delete-btn"
              onClick={handleDelete}
            >
              Delete account
            </button>
          </div>
        </div>
        <div className="d-flex profile-details-card  text-start">
          <div className="main-text fs-2">
            <div className="p-1">
              <label>Name</label>
            </div>
            <div className="p-1">
              <label>Username</label>
            </div>
            <div className="p-1">
              <label>Age</label>
            </div>
            <div className="p-1">
              <label>Gender</label>
            </div>
            <div className="p-1">
              <label>Address</label>
            </div>
            <div className="p-1">
              <label>Mobile</label>
            </div>
            <div className="p-1">
              <label>Email</label>
            </div>
            <div className="p-1">
              <label>Date of birth</label>
            </div>
          </div>
          <div className="value-text fs-2">
            <div className="p-1">
              <label>{user.name}</label>
            </div>
            <div className="p-1">
              <label>{user.username}</label>
            </div>
            <div className="p-1">
              <label>{user.age}</label>
            </div>
            <div className="p-1">
              <label>{user.gender}</label>
            </div>
            <div className="p-1">
              <label>{user.address}</label>
            </div>
            <div className="p-1">
              <label>{user.mobile}</label>
            </div>
            <div className="p-1">
              <label>{user.email}</label>
            </div>
            <div className="p-1">
              <label>{user.dob}</label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
