import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/landing.css";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="landing-body mb-1">
        <div className="card shadow">
          <h1>This is student management landing page</h1>
        </div>
      </div>

      <div className="landing-body mb-1">
        <div className="card shadow">
          <h1>This is student management landing page</h1>
        </div>
      </div>

      <div className="landing-body mb-1">
        <div className="card shadow">
          <h1>This is student management landing page</h1>
        </div>
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}
