// src/pages/User/UserNavBar.js

import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
//import '../Styling/UserNav.css'; 

function UserNavBar() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogout = () => {
    localStorage.clear(); // Clear local storage
    navigate("/"); // Redirect to HomePage
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="book-table">Book Table</Link></li>
            <li className="nav-item"><Link className="nav-link" to="manage-reservations">Manage Reservations</Link></li>
          </ul>
          <button className="btn btn-outline-light ms-auto" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default UserNavBar;
