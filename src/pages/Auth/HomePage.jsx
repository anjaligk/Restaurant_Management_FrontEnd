import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/HomePage.css';
import HomeNavBar from './HomeNav';

function HomePage() {
  localStorage.clear();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://images.pexels.com/photos/10432702/pexels-photo-10432702.jpeg',
    'https://images.pexels.com/photos/15671407/pexels-photo-15671407.jpeg',
    'https://images.pexels.com/photos/11094169/pexels-photo-11094169.jpeg',
    'https://images.pexels.com/photos/19671301/pexels-photo-19671301.jpeg',
    'https://images.pexels.com/photos/14775661/pexels-photo-14775661.jpeg',
    'https://images.pexels.com/photos/26575515/pexels-photo-26575515.jpeg',
    'https://images.pexels.com/photos/128242/pexels-photo-128242.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleBookTable = () => {
    navigate('/register');
  };

  return (
    <div>
      <HomeNavBar />
      <div 
        className="container-fluid bg-image" 
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="main-content">
          <div className="text-content">
            <h1><span className="line1"></span>FROM 1980<span className="line1"></span></h1>
            <h2>SAVOR</h2>
            <h3><span className="line2"></span>GOURMET DINING<span className="line2"></span></h3>
            <button onClick={handleBookTable} className="btn btn-dark">BOOK A TABLE</button>
          </div>
          <div className="icon-content">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-heart-fill mx-3"></i>
            <i className="bi bi-cup-straw"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
