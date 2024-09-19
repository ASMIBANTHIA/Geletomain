import React from 'react';
import '../styles/Footer.css';
import downloadimg from '../images/downlodappstore.svg'
import googleplay from '../images/googleplay.svg'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-section">
          <h2>Gelato</h2>
          <p>
            Gelato has created the world's largest network for local production and distribution of customized products.
            Together we bring creativity to life - and into business.
          </p>
          <button className="footer-button">Get started</button>
          <div className="app-links">
            <img src={downloadimg} alt="App Store" />
            <img src={googleplay} alt="Google Play" />
          </div>
        </div>

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

      <div className="footer-bottom">
        {/* <div className="footer-social"> */}
          {/* <p>Find Gelato on:</p> */}
          {/* <div className="social-icons">
            <img src="instagram.png" alt="Instagram" />
            <img src="facebook.png" alt="Facebook" />
            <img src="tiktok.png" alt="TikTok" />
            <img src="linkedin.png" alt="LinkedIn" />
            <img src="youtube.png" alt="YouTube" />
          </div> */}
        {/* </div> */}
        <div className="footer-bottom-links">
          <p>Contact us | Legal | Privacy policy | Cookie policy | API terms | Sitemap</p>
          <p>English (India)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
