// src/components/Testimonials.js
import React from "react";
import "./Testimonials.css"; // Importing the CSS file

const Testimonials = () => {
  const testimonials = [
    {
      name: "Matt Parker",
      image: "https://via.placeholder.com/100",
      rating: 5,
      text: "Perfect for busy schedules! I have a hectic lifestyle, and this app has made booking salon appointments so much easier. The real-time availability feature is awesome, and the reminders mean I never miss an appointment. Plus, the option to choose my favorite stylist is a great touch!",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "John Miller",
      image: "https://via.placeholder.com/100",
      rating: 4,
      text: "User-friendly and efficient! As a regular salon customer, this app has been a lifesaver. I can book, reschedule, and even cancel my appointments with just a few taps. The interface is clean and simple, and I love how I can see all the services offered with detailed descriptions. No more long waits or confusion—it’s all so easy to manage!",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
        name: "John Miller",
        image: "https://via.placeholder.com/100",
        rating: 4,
        text: "A game-changer for salons! Our salon has been using this system for a few months now, and it has transformed the way we manage bookings. We no longer have to worry about double-booking or missed appointments. The system is easy to use for both staff and clients, and it even helps us track client preferences. It’s been a huge boost to our efficiency and customer satisfaction!",
        socialLinks: {
          twitter: "#",
          linkedin: "#",
        },
      },
  ];

  return (
    <section className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img
            className="testimonial-image"
            src={testimonial.image}
            alt={testimonial.name}
          />
          <div className="testimonial-content">
            <h3>{testimonial.name}</h3>
            <div className="stars">
              {Array(testimonial.rating)
                .fill()
                .map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
            </div>
            <p>{testimonial.text}</p>
            <div className="social-links">
              <a href={testimonial.socialLinks.twitter}>🐦</a>
              <a href={testimonial.socialLinks.linkedin}>🔗</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
