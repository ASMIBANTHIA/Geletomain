import React from 'react';
import '../styles/Accelerate.css';
import gifImage from '../images/acceleratetee.gif'; // Assuming this is the GIF file

const Accelerate = () => {
  return (
    <div className="acc-container">
      <div className="acc-imageone">
        <img src={gifImage} alt="Promotional GIF" />
      </div>
      <div className="acc-content">
        <h3>For print on demand sellers</h3>
        <h1>Accelerate business growth with innovative design tools and apps</h1>
        <p>See how our cutting-edge solutions can help you reach new customers and maximize your profits.</p>
        <button className="cta-button">Get started</button>
      </div>
      <div className="acc-image">
        <img src={gifImage} alt="Promotional GIF" />
      </div>
    </div>
  );
};

export default Accelerate;
