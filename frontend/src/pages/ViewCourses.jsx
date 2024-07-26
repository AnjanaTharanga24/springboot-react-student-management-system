import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/course.css";
import card1Image from "../images/homeImg.png";
import axios from "axios";

export default function ViewCourses() {
  const [courses, setCourses] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      // setIsLoading(true);
      const response = await axios.get('http://localhost:8082/courses');
      setCourses(response.data);
      // setIsLoading(false);
    } catch (error) {
      console.error("Error fetching courses:", error);
      // setError("Failed to fetch courses. Please try again later.");
      // setIsLoading(false);
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
              <div key={course.id} className={`col-md-4 mb-5 ${index % 3 === 0 ? 'offset-md-0' : ''}`}>
                <div className="card course-card">
                  <div>
                    <img src={card1Image} className="card-img-top" alt={course.title} />
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
                    <button className="btn btn-success p-1 btn-enroll">enroll</button>
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