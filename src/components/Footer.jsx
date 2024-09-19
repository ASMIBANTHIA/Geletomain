import React from "react";
import "../styles/Footer.css";
import downloadimg from "../images/downlodappstore.svg";
import googleplay from "../images/googleplay.svg";
import gellogo from "../images/whitegel.svg";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footgel">
        <div>
          <img src={gellogo} alt="Gelato" className="gellogo" />
        </div>
        <div className="gelfoottwo">
          <p>Find Geleto On:</p>
          <div className="socialfoot">
            <Icon icon="lets-icons:insta" className=" soc" />
            <Icon icon="ic:baseline-facebook" className=" soc" />
            <Icon icon="ic:baseline-tiktok" className=" soc" />
            <Icon icon="mdi:linkedin" className=" soc" />
            <Icon icon="mdi:youtube" className=" soc" />
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="footer-section">
          <p>
            Gelato has created the world's largest network for local production
            and distribution of customized products. Together we bring
            creativity to life - and into business.
          </p>
          <button className="footer-button">Get started</button>
          <div className="footer-column bbc">
            <h3 className="bbch3">
              {" "}
              <Icon icon="weui:arrow-filled" className=" socone" /> Print on
              demand
            </h3>
            <h3 className="bbch3">
              {" "}
              <Icon icon="weui:arrow-filled" className=" socone" />
              Integrations
            </h3>
            <h3 className="bbch3">
              {" "}
              <Icon icon="weui:arrow-filled" className=" socone" />
              Start selling
            </h3>
            <h3 className="bbch3">
              {" "}
              <Icon icon="weui:arrow-filled" className=" socone" />
              Company
            </h3>
          </div>
          <div className="app-links">
            <img src={downloadimg} alt="App Store" />
            <img src={googleplay} alt="Google Play" />
          </div>
        </div>
        <div></div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Print on demand</h3>
            <ul>
              <li>What is print on demand?</li>
              <li>Product catalog</li>
              <li>Shipping and delivery</li>
              <li>Dropshipping products</li>
              <li>Pro sellers</li>
              <li>White label products</li>
              <li>Returns policy</li>
              <li>Global, yet local</li>
              <li>Sustainability</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Integrations</h3>
            <ul>
              <li>Shopify</li>
              <li>Etsy</li>
              <li>WooCommerce</li>
              <li>Wix</li>
              <li>Squarespace</li>
              <li>BigCommerce</li>
              <li>API</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Start selling</h3>
            <ul>
              <li>Embroidery</li>
              <li>Print on demand t-shirts</li>
              <li>Print on demand hoodies</li>
              <li>Print on demand posters</li>
              <li>Print on demand canvas</li>
              <li>Print on demand mugs</li>
              <li>Custom products</li>
              <li>Custom clothing</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>GelatoConnect</li>
              <li>About Gelato</li>
              <li>Leadership team</li>
              <li>Board & investors</li>
              <li>Newsroom</li>
              <li>Blog</li>
              <li>Customer Stories</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>Affiliates program</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="gelfoottwoabc">
        <p className="fidgel">Find Geleto On:</p>
        <div className="socialfoot">
          <Icon icon="lets-icons:insta" className=" soc" />
          <Icon icon="ic:baseline-facebook" className=" soc" />
          <Icon icon="ic:baseline-tiktok" className=" soc" />
          <Icon icon="mdi:linkedin" className=" soc" />
          <Icon icon="mdi:youtube" className=" soc" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <p>
            Contact us | Legal | Privacy policy | Cookie policy | API terms |
            Sitemap
          </p>
          
        </div>
        <p className="eng">English (India)</p>
      </div>
    </footer>
  );
};

export default Footer;
