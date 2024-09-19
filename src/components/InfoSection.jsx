import React from 'react';
import '../styles/InfoSection.css';
import image from '../images/choosegel.webp'; // Assuming this is the image
import { Icon } from '@iconify/react';

const InfoSection = () => {
  return (
    <div className='chooseone'>
    <div className='choosegeleto'>
     <h1 className='infohtag'>Why Choose Geleto?</h1>
     </div>
    <div className="info-container">
     
      <div className="info-image">
        <img src={image} alt="Design" />
      </div>
      <div className="info-content">
        <ul>
          <li className='infodata'> <Icon icon='pepicons-pencil:triangle-right' className="headphone-icon" /> <strong><p className='worldcommon'>World's largest print-on-demand network</p></strong></li>
          <p className='infoparadata'>140+ print partners in 32 countries. Gelato is a truly global service.</p>
          <li className='infodata infomargin'><Icon icon='pepicons-pencil:triangle-right' className="headphone-icon" /> <strong><p className='worldcommon'>Sell globally, produce locally</p></strong></li>
          <p className='infoparadata'>Your products are produced close to your customers, wherever they are.</p>
          <li className='infodata infomargin'><Icon icon='pepicons-pencil:triangle-right' className="headphone-icon" /> <strong><p className='worldcommon'>100% free editing tools</p></strong></li>
          <p className='infoparadata'>Create your custom products using our suite of free tools.</p>
          <li className='infodata infomargin'><Icon icon='pepicons-pencil:triangle-right' className="headphone-icon" /> <strong><p className='worldcommon'>60+ logistics partners</p></strong></li>
          <p className='infoparadata'>Our global network of logistics partners ensures your products are delivered fast.</p>
          <li className='infodata infomargin'><Icon icon='pepicons-pencil:triangle-right' className="headphone-icon" /> <strong><p className='worldcommon'>High-quality products</p></strong></li>
          <p className='infoparadata'>We partner with the world's leading brands to ensure the best quality products.</p>
          <li className='infodata infomargin'><Icon icon='pepicons-pencil:triangle-right' className="headphone-icon" /> <strong><p className='worldcommon'>Endless creativity with Shutterstock Images</p></strong></li>
          <p className='infoparadata'> Access millions of images and graphics to create unique products you can sell in your store.</p>
          <li className='infodata infomargin'><Icon icon='pepicons-pencil:triangle-right' className="headphone-icon" /> <strong><p className='worldcommon'> 1-click integration to the leading ecommerce platforms</p></strong></li>
          <p className='infoparadata'> Connect your store to Gelato using our integrations with Shopify, Etsy and more.</p>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default InfoSection;
