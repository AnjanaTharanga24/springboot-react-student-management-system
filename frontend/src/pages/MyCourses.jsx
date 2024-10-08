import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/mycourses.css";
import card1Image from "../images/courseImg2.jpeg";
import axios from "axios";
import { UserContext } from "../components/UserContext";
export default function MyCourses() {
  const [courses, setCourse] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetchCoursesByStudentId();
  }, []);

  const fetchCoursesByStudentId = async () => {
    console.log("student", user);
    try {
      const response = await axios.get(
        `http://localhost:8082/students/${user?.id}/courses`
      );
      console.log("student-courses", response.data);
      setCourse(response.data);
    } catch (error) {
      console.log("error fetching student courses : ", error);
    }
  };
  return (
    <div className="my-courses">
      <Navbar />

      <div className="my-courses-body mt-5">
  <div className="d-flex justify-content-center flex-wrap">

    {courses.length === 0 && (
      <div className=" me-5 mb-5">
        <div className="error-card">
          <p className="error-card-title">You are not enrolled in any of our courses...</p>
        </div>
      </div>
    )}

    {courses.map((course, index) => (
     
      <div className="card  me-5 mb-5" key={index}>
        <div className="sec2-card">
          <img className="sec2-card-img" src={card1Image} alt={course.title} />
          <p className="sec2-card-title">{course.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      <Footer />
    </div>
  );
}
