import { Link } from 'react-router-dom';
// src/components/HeroSection.js
import React from "react";
import "./home.css"; // Importing the CSS file

const Home= () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Enjoy our barber services</h1>
        <p>
        Establish your new amazing look with Barbershop services! From haircuts to hot shaves, you can experience the best level of barbering in the area.
        </p>
        <button className="book-btn">Book appointment →</button>
      </div>
      <div className="hero-image">
        {/* Add images */}
        <img
          src="https://via.placeholder.com/150"
          alt="barber 1"
          className="barber-img"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="barber 2"
          className="barber-img"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="baber 3"
          className="barber-img"
        />
      </div>
    </section>

  );
};




export default Home;
