// src/pages/RegistrationPage.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Styling/RegistrationPage.css'; // Import the CSS file for additional styling

function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user' // Default role
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Navigate to login page after registration
    navigate('/login');
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="registration-container">
        <h1 className="text-center">Registration</h1>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <select
              className="form-control"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
        <div className="text-center mt-3">
          <p>Have an account already? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;