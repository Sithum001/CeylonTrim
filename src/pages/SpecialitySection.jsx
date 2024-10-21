// src/components/SpecialitySection.js
import React from "react";
import "./SpecialitySection.css"; // Importing the CSS file

const SpecialitySection = () => {
  const specialities = [
    { name: "HAIR", icon: "https://via.placeholder.com/100" },
    { name: "SKIN ", icon: "https://via.placeholder.com/100" },
    { name: "NAILS", icon: "https://via.placeholder.com/100" },
    { name: "BRIDAL", icon: "https://via.placeholder.com/100" },
    { name: "BODY", icon: "https://via.placeholder.com/100" },
    
  ];

  return (
    <section className="speciality-container">
      <h2>WHO WE ARE</h2>
      <p>
       
A Salon Appointment Management System revolutionizes the way salons operate by streamlining the entire appointment booking process. With this system, salons can easily manage client bookings, cancellations, and rescheduling, ensuring efficient use of time and resources. Clients benefit from an intuitive platform that allows them to book services at their convenience, view available stylists, and receive real-time updates on their appointments. For salon owners, the system provides tools for managing staff schedules, tracking client preferences, and offering promotions, all while reducing the likelihood of double bookings or missed appointments. This modern approach enhances customer satisfaction, optimizes operations, and ultimately boosts the salon's productivity and revenue
      </p>
      <div className="speciality-icons">
        {specialities.map((speciality, index) => (
          <div key={index} className="speciality-item">
            <img src={speciality.icon} alt={speciality.name} />
            <p>{speciality.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialitySection;
