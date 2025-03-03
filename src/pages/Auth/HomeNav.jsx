import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/HomePage.css'; 

function HomeNavBar() {
  return ( 
       <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
 
  );
}

export default HomeNavBar;
