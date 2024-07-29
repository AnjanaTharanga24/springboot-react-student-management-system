import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/course.css";
import card1Image from "../images/homeImg.png";
import axios from "axios";
import { UserContext } from "../components/UserContext";
import Swal from "sweetalert2";

export default function ViewCourses() {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(UserContext);
  const studentId = user?.id;

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8082/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const enrollCourse = async (courseTitle) => {
    try {
      const response = await axios.post(
        `http://localhost:8082/students/${studentId}/courses`,
        [{ courseTitle }]
      );
      console.log("Enrollment successful:", response.data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: `You are now enrolled in ${courseTitle}`,
        showConfirmButton: false,
        timer: 2500
      });

    } catch (error) {
      console.error("Error enrolling in course:", error);
      alert("Failed to enroll in the course. Please try again later.");
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container course-container">
        <div className="row justify-content-center">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`col-md-4 mb-5 ${
                index % 3 === 0 ? "offset-md-0" : ""
              }`}
            >
              <div className="card course-card">
                <div>
                  <img
                    src={card1Image}
                    className="card-img-top"
                    alt={course.title}
                  />
                </div>
                <div className="card-title">
                  <p>{course.title.toUpperCase()}</p>
                </div>
                <div className="d-flex course-card-body">
                  <div className="course-card-text text-start fs-5">
                    <p>Instructor</p>
                    <p>Type</p>
                    <p>Duration</p>
                    <p>Date</p>
                    <p>Students enrolled</p>
                  </div>
                  <div className="course-value-text text-start fs-5">
                    <p>{course.instructor}</p>
                    <p>{course.type}</p>
                    <p>{course.duration}</p>
                    <p>{course.date}</p>
                    <p>{course.enrolledStudents || 0}</p>
                  </div>
                </div>
                <div className="d-flex card-bottom">
                
                    <button
                      className="btn btn-dark p-1 btn-enroll"
                      onClick={() => enrollCourse(course.title)}
                    >
                      Enroll
                    </button>
                
                  <p className="price mt-3">$100</p>
                </div>
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
