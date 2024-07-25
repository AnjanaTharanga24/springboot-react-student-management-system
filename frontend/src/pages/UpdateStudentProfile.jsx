import React, { useContext, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { UserContext } from '../components/UserContext'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function UpdateStudentProfile() {
    const { user, setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        setFormData(user);
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8082/students/${user.id}`, formData);
            setUser(response.data);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Profile updated successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/student-profile');
        } catch (error) {
            console.error("Error updating profile: ", error.response || error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed to update profile",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div className="register-page">
            <div>
                <Navbar />
            </div>

            <div className="card reg-card mt-5 shadow fs-5 register-form">
                <div className="form-header">
                    <h2>Update Profile</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <label htmlFor="name" className="mb-2">Full Name</label>
                        <input
                            type="text"
                            className="form-control register-form-control"
                            id="name"
                            name="name"
                            value={formData.name || ''}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Repeat similar input fields for username, age, gender, dob, address, mobile, email */}
                    {/* For gender, you might want to use radio buttons */}

                    <div className="form-group mb-4">
                        <label htmlFor="password" className="mb-2">New Password (leave blank to keep current)</label>
                        <input
                            type="password"
                            className="form-control register-form-control"
                            id="password"
                            name="password"
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Update Profile
                    </button>
                </form>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}