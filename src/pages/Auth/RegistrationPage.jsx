import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../Styling/RegistrationPage.css';
import HomeNavBar from './HomeNav';

function RegistrationPage() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    roles: 'USER' // Default role, uppercase for consistency
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:8765/auth/new', user);
      console.log('Registration Response:', res);
//      localStorage.setItem('userRole', user.roles.toUpperCase()); // Store role in uppercase
      alert('User Registration Successful!');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.log('REGISTRATION ERROR', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <HomeNavBar />
      <div className="container mt-5 d-flex justify-content-center">
        <div className="registration-container">
          <h1 className="text-center">Registration</h1>
          {error && <p className="text-danger text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={user.name}
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
                value={user.email}
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
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              <select
                className="form-control"
                id="roles"
                name="roles"
                value={user.roles}
                onChange={handleChange}
                required
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
          <div className="text-center mt-3">
            <p>Have an account already? <Link to="/login">Login here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
