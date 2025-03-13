import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../Styling/LoginPage.css';
import HomeNavBar from './HomeNav';

function LoginPage() {
  localStorage.clear(); // Clear local storage
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:8765/auth/authenticate', credentials);
      const token = response.data.token; // Assuming the token is in response.data.token
      const role = response.data.roles; // Retrieve role from authentication response
      const userId = response.data.userId;
      console.log('Login Token:', token);
      console.log('User Role:', role);

      // Store token and role associated with the user
      localStorage.setItem('userToken', token);
      localStorage.setItem('userRole', role);
      localStorage.setItem('userId', userId);

      alert('Login Successful!');

      if (role === 'ADMIN') {
        navigate('/manager'); // Redirect to manager page for admin role
      } else {
        navigate('/user'); // Redirect to user page for other roles
      }
    } catch (error) {
      console.log('LOGIN ERROR', error);
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <HomeNavBar />
      <div className="container mt-5 d-flex justify-content-center">
        <div className="login-container">
          <h1 className="text-center">Login</h1>
          {error && <p className="text-danger text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={credentials.username}
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
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <div className="text-center mt-3">
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
