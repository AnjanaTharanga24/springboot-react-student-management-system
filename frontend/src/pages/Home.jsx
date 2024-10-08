import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/landing.css";
import homeImage2 from "../images/profilebg2.jpg";
import card1Image from "../images/courseImg2.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import '../css/Loading.css'
export default function Home() {
  const [courses, setCourse] = useState([]);

  const LoadingAnimation = () => (
    <div className="loading-animation">
      <div className="loading-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <p>Loading popular courses...</p>
    </div>
  );

  useEffect(() => {
    fetchCourses();
  });

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8082/courses");
      console.log(response.data);
      setCourse(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
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
              Welcome to Our  Education 
            </p>
            <p className=" text-white" style={{marginTop:"-70px",marginBottom:"70px" , fontSize:"60px",fontWeight:"bold" }}>
               Galaxy
            </p>

            <div className="text2-div">
              <p className="fs-3 text-white">
                Our Student Management System is designed to streamline
                educational processes and enhance the learning experience. It
                offers a comprehensive suite of tools for students, teachers,
                and administrators, including course management, attendance
                tracking, grade reporting, and communication features. With
                user-friendly interfaces and powerful analytics, our system
                helps educational institutions operate more efficiently while
                providing valuable insights to support student success.
              </p>
            </div>

            <div className="p-3  ">
              <Link to="/view-courses">
                <button className="btn btn-primary fs-3 mb-4">
                  View Our Courses
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="sec2 p-4">
        <h1 className="sec2-title p-4 mb-5">Popular Courses</h1>

        <div className="d-flex justify-content-center flex-wrap">
          {courses.length === 0 &&(
            <div className=" me-5 mb-5">
            <div className="error-card-home">
              <p className="error-card-title">
                <LoadingAnimation/>
             </p>
            </div>
          </div>
          )}
          {courses.map((course, index) => (
            <div className="card shadow me-5 mb-5" key={index}>
              <div className="sec2-card">
                <img
                  className="sec2-card-img"
                  src={card1Image}
                  alt={course.title}
                />
                <p className="sec2-card-title ">{course.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
