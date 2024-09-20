import React from 'react';
import '../styles/ElevateGeleto.css';
import gifImage from '../images/geletoelevate.gif'; // Assuming this is the GIF file

const ElevateGeleto = () => {
  return (
    <div className="elev-container">
      <div className="elev-image">
        <img src={gifImage} alt="Promotional GIF" />
      </div>
      <div className="elev-content">
        <h3 className='fontmain'>GelatoConnect</h3>
        <h1 className='fontmain'>Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</h1>
        {/* <p>See how our cutting-edge solutions can help you reach new customers and maximize your profits.</p> */}
        <button className="cta-button fontmain">Learn More</button>
      </div>
    </div>
  );
};

export default ElevateGeleto;
