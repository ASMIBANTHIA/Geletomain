// HeroSection.js
import React from "react";
import "../styles/HeroSection.css";
import teeimg from "../images/herofirst.webp";
import shopifymon from "../images/shopify_monotone_black.svg";
import Accelerate from "./Accelerate";
import ElevateGeleto from "./ElevateGeleto";
import MeetGeleto from "./MeetGeleto";
import InfoSection from "./InfoSection";
import star from "../images/star.svg";
import Bar from "./Bar";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
      <div className="herofirst">
          <img src={teeimg} alt="Tshirt" className="product-img heroimgfirst" />
        </div>
        <div className="hero-text">
          <div>
            <h1 >
              Print on demand for your ecommerce business
            </h1>
          </div>
          <div>
            <p className="herosecondtxt">
              Sign up for free and only pay for what you sell
            </p>
            <p className="subtext">
              Turn your passion into profit with the world's largest print on
              demand network.
            </p>
          </div>
          <div className="hero-buttons">
            <button className="cta-button">Get started for free</button>
            <button className="secondary-button">See our products</button>
          </div>
          <div className="shopify-rating">
            <img src={shopifymon} alt="Shopify logo" className="shopify-logo" />
            <div className="stardiv">
              <img src={star} alt="star" className="starrate" />
              <img src={star} alt="star" className="starrate" />
              <img src={star} alt="star" className="starrate" />
              <img src={star} alt="star" className="starrate" />
              <img src={star} alt="star" className="starrate" />
              <p className="actualrate">4.8 / 5</p>
            </div>
            <p className="reviewp">based on 910 reviews</p>
          </div>
        </div>
        <div className="hero-images">
          <img src={teeimg} alt="Tshirt" className="product-img heroimgfirst" />
        </div>
      </div>
      <div>
        <Bar/>
        <InfoSection />
        <Accelerate />
        <ElevateGeleto />
        <MeetGeleto />
      </div>
    </>
  );
};

export default Hero;
