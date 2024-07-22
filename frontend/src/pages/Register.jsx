import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/register.css";

export default function Register() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="card reg-card mt-5 shadow fs-5">

        <div className="form-header">
            <h2>Register student</h2>
        </div>
        <form>
          <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1" className="mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1" className="mb-2">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter age"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1" className="mb-2">
              Gender
            </label>

            <div className="d-flex">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
            </div>
            
          </div>

          <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1" className="mb-2">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter address"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1" className="mb-2">
              Contact Number
            </label>
            <input
              type="mobile"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter contact number"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="exampleInputEmail1" className="mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="exampleInputPassword1" className="mb-2">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
