// HeroSection.js
import React from "react";
import "../styles/HeroSection.css";
import teeimg from "../images/herofirst.webp";
import teeimg2 from "../images/gelhidone.webp";
import shopifymon from "../images/shopify_monotone_black.svg";
import star from "../images/star.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
      <div className="herofirst">
          <img src={teeimg2} alt="Tshirt" className="product-img heroimgfirst" />
        </div>
        <div className="hero-text">
          <div>
            <h1 >
              Print on demand for your ecommerce business
            </h1>
          </div>
          <div>
            <p className="herosecondtxt fontmain">
              Sign up for free and only pay for what you sell
            </p>
            <p className="subtext fontmain">
              Turn your passion into profit with the world's largest print on
              demand network.
            </p>
          </div>
          <div className="hero-buttons">
            <button className="cta-button fontmain">Get started for free</button>
            <button className="secondary-button fontmain">See our products</button>
          </div>
          <div className="shopify-rating">
            <img src={shopifymon} alt="Shopify logo" className="shopify-logo" />
            <div className="stardiv">
              <img src={star} alt="star" className="starrate" />
              <img src={star} alt="star" className="starrate" />
              <img src={star} alt="star" className="starrate" />
              <img src={star} alt="star" className="starrate" />
              <img src={star} alt="star" className="starrate" />
              <p className="actualrate fontmain">4.8 / 5</p>
            </div>
            <p className="reviewp fontmain">based on 910 reviews</p>
          </div>
        </div>
        <div className="hero-images">
          <img src={teeimg} alt="Tshirt" className="product-img heroimgfirst" />
        </div>
      </div>
      
    </>
  );
};

export default Hero;
