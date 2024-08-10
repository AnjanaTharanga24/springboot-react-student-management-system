import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/mycourses.css'
import card1Image from "../images/homeImg.png";
export default function MyCourses() {
  return (
    <div>
        <Navbar/>

        <div className='my-courses-body mt-5'>
        <div className="d-flex justify-content-center flex-wrap">
          
            <div className="card shadow me-5 mb-5">
              <div className="sec2-card">
                <img
                  className="sec2-card-img"
                  src={card1Image}
                />
                <p className="sec2-card-title "></p>
              </div>
            </div>

            <div className="card shadow me-5 mb-5">
              <div className="sec2-card">
                <img
                  className="sec2-card-img"
                  src={card1Image}
                />
                <p className="sec2-card-title "></p>
              </div>
            </div>

            <div className="card shadow me-5 mb-5">
              <div className="sec2-card">
                <img
                  className="sec2-card-img"
                  src={card1Image}
                />
                <p className="sec2-card-title "></p>
              </div>
            </div>

            <div className="card shadow me-5 mb-5">
              <div className="sec2-card">
                <img
                  className="sec2-card-img"
                  src={card1Image}
                />
                <p className="sec2-card-title "></p>
              </div>
            </div>
         
        </div>
        </div>

        <Footer/>
    </div>
  )
}
