// src/pages/HomePage.js

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Styling/HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleBookTable = () => {
    navigate('/register');
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <ul>
          <li><Link to="/about">ABOUT US</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <div className="text-content">
          <h1>FROM 1950</h1>
          <h2>RESTAURANT</h2>
          <h3>BAR & LOUNGE</h3>
          <button onClick={handleBookTable} className="btn btn-primary">BOOK A TABLE</button>
        </div>
        <div className="image-content">
          <img src="path/to/your/image.jpg" alt="Cookies or Biscuits" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
