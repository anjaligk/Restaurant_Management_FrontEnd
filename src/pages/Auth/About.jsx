import React from 'react';
import '../Styling/About.css';
import HomeNavBar from './HomeNav';

function AboutPage() {
  return (
    <div>
      <HomeNavBar />
      <div className="container mt-5">
        <h1 className="text-center">About Us</h1>
        <div className="row my-5">
          <div className="col-md-6">
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" 
              alt="About Us" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2>Welcome to Gourmet Bliss</h2>
              <p>
                Since our founding in 1980, Gourmet Bliss has been dedicated to providing an exquisite dining experience. Nestled in the heart of culinary excellence, we take pride in offering a unique blend of traditional and contemporary cuisine.
              </p>
              <p>
                Our chefs craft each dish with the finest ingredients, ensuring every bite is a symphony of flavors. Whether you're here for a special occasion or just to indulge in a delightful meal, Gourmet Bliss promises an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-6 order-md-2">
            <img 
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" 
              alt="Our Story" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 order-md-1 d-flex align-items-center">
            <div>
              <h2>Our Story</h2>
              <p>
                Gourmet Bliss was born out of a passion for food and a love for hospitality. Our founder, John Doe, envisioned a place where guests could enjoy gourmet dining in a relaxed and elegant atmosphere.
              </p>
              <p>
                Over the years, we have grown and evolved, but our commitment to excellence remains the same. We believe that dining is not just about food; it's about creating memories and sharing moments with loved ones.
              </p>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-6">
            <img 
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" 
              alt="Our Values" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2>Our Values</h2>
              <p>
                At Gourmet Bliss, we are driven by a set of core values that guide everything we do. We value quality, integrity, and exceptional service. Our team is committed to ensuring that every guest leaves with a smile.
              </p>
              <p>
                We believe in sourcing the finest ingredients and supporting local producers. Sustainability and community are at the heart of our operations, and we strive to make a positive impact on both.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
