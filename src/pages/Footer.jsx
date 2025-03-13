import React from 'react';
import './Styling/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3 text-center mt-auto">
      <div className="container">
        <h5>Contact Us</h5>
        <div className="d-flex justify-content-center align-items-center">
          <a href="mailto:info@gourmetbliss.com" className=" me-3 small">Email: info@gourmetbliss.com</a>
          <div className=" small">Phone: +123 456 7890</div>
        </div>
        <p className="mb-0 mt-2">&copy; 2025 Gourmet Bliss. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
