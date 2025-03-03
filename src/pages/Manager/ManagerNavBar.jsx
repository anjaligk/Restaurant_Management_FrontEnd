// src/pages/Manager/ManagerNavBar.js

import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import '../Styling/ManagerNav.css'; 

function ManagerNavBar() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogout = () => {
    // Clear any authentication data (e.g., tokens or user info)
    // For demonstration, it's left empty.
    // localStorage.removeItem("authToken"); // Example of clearing token
    navigate("/"); // Redirect to HomePage
  };
  return (
    <div>
       <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            {/* <li className="nav-item"><Link className="nav-link" to="/manager/add-tables">Add Tables</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/manager/manage-tables">Manage Tables</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/manager/see-reservation">See Reservations</Link></li> */}
            <li className="nav-item"><Link className="nav-link" to="add-tables">Add Tables</Link></li>
            <li className="nav-item"><Link className="nav-link" to="manage-tables">Manage Tables</Link></li>
            <li className="nav-item"><Link className="nav-link" to="see-reservation">See Reservations</Link></li>
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

export default ManagerNavBar;
