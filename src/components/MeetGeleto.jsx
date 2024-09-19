import React from 'react';
import '../styles/MeetGeleto.css';
import gifImage from '../images/printingunited.webp'; // Assuming this is the GIF file

const MeetGeleto = () => {
  return (
    <div className="meetgel-container">
      <div className="meetgel-content">
        <h3>Meet GelatoConnect at Printing United</h3>
        {/* <h1>Accelerate business growth with innovative design tools and apps</h1> */}
        <p>Meet us at Printing United from September 10-12 in Las Vegas. Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for businesses like yours.</p>
        <button className="cta-button">Book a Meeting</button>
      </div>
      <div className="meetgel-image">
        <img src={gifImage} alt="Promotional GIF" />
      </div>
    </div>
  );
};

export default MeetGeleto;
