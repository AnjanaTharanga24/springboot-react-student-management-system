import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/landing.css";
import homeImage2 from "../images/homeImage2.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <img src={homeImage2} className="home-image" />
        <div className="hero-card mt-3">
          <div className="text-div">
            <p className=" p-5 text-white hero-text-title">
              Welcome to Our Student Management System
            </p>

            <div className="text2-div">
              <p className="fs-3 text-white">
              Our Student Management System is designed to streamline educational processes and 
              enhance the learning experience. It offers a comprehensive suite of tools for students, teachers, 
              and administrators, including course management, attendance tracking, grade reporting, and 
              communication features. With user-friendly interfaces and powerful analytics, our system helps educational 
              institutions operate more efficiently while providing valuable insights to support student success.

              </p>
            </div>

            <div className="p-3  ">
              <Link to="/view-courses">
              <button className="btn btn-primary fs-3 mb-4">View Our Courses</button>
              </Link>
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
