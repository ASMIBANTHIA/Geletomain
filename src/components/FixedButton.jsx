// FixedButton.js
import React from 'react';
import { Icon } from '@iconify/react';
 // Import CSS file for styling

const FixedButton = () => {
    const handleClick = () => {
        alert('Button Clicked!');
    };

    return (
        <button className="fixed-button" onClick={handleClick}>
           
        <Icon icon='ri:headphone-fill' className="headphone-icon" />  Contact Us
        </button>
    );
};

export default FixedButton;
