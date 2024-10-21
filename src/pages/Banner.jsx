// src/components/Banner.js
import React from "react";
import "./Banner.css"; // Importing the CSS file for styling

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Your Banner Title Here</h1>
        <p>
          This is a banner section to highlight a key message. Engage your users
          with compelling text and a clear call-to-action.
        </p>
        <a href="#cta" className="banner-btn">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Banner;
