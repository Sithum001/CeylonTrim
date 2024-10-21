// src/components/Footer.js
import React from "react";
import "./Footer.css"; // Importing the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          {/* About Us Section */}
          <div className="footer-column">
            <h3>Your Company</h3>
            <p>
              CeylonTrimmers enhancing efficiency for salon owners and convenience for clients. With user-friendly features, it ensures seamless booking, staff management, and personalized marketing, delivering a world-class experience for all users.
            </p>
            <p>&copy; 2024 ceylontrimmers. All rights reserved.</p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 123 Main St,Moratuwa, Sri lanka</li>
              <li><i className="fas fa-phone-alt"></i> +123 456 7890</li>
              <li><i className="fas fa-envelope"></i> info@ceylontrimmers.com</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li>
                <a href="#facebook" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#twitter" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#instagram" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#linkedin" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
