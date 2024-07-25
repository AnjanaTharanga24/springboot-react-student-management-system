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
        <div className="hero-card">
          <div className="text-div">
            <p className=" p-5 text-white hero-text-title">
              Welcome to Our Student Management System
            </p>

            <div className="text2-div">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                mollitia a commodi perferendis, dicta repudiandae veniam odit
                suscipit labore expedita sit ut modi placeat harum. Fugit quas
                reprehenderit labore dolore.
              </p>
            </div>

            <div className="p-3 ">
              <Link to="/view-courses">
              <button className="btn btn-primary fs-3">View Our Courses</button>
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
