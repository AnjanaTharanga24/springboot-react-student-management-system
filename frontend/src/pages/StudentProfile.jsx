import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/profile.css";
import profileImage from "../images/profile.png";
export default function StudentProfile() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className=" d-flex profile-card ">
        <div className="shadow profile-image-card ">
          <img src={profileImage} className="profile-image" />
          <p className="profile-name">Anjana tharanga</p>
          <div className="p-4">
            <button className="btn btn-primary edit-btn ">Edit profile</button>
            <button className="btn btn-danger delete-btn">
              Delete account
            </button>
          </div>
        </div>
        <div className="d-flex shadow profile-details-card  text-start">
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
                    <label >Anjana tharanga</label>
                </div>
                <div className="p-1">
                    <label>Anjana24</label>
                </div>
                <div className="p-1">
                    <label>24</label>
                </div>
                <div className="p-1">
                    <label>Male</label>
                </div>
                <div className="p-1">
                    <label>1/28 c, weerasuriyakanda,pasyala</label>
                </div>
                <div className="p-1">
                    <label>077-4436594</label>
                </div>
                <div className="p-1">
                    <label>anjana@gmail.com</label>
                </div>
                <div className="p-1">
                    <label>2000-08-24</label>
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
