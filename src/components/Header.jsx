import React, { useEffect, useState } from 'react';
import '../styles/Header.css'; // Import the CSS file
import { Icon } from '@iconify/react';
import gellogo from '../images/gelato_logo_black.svg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Add a new state for the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="top-header">
        <p><u>FREE SHIPPING for orders over $300. Order today</u></p>
      </div>

      <div className={`main-header ${isScrolled ? 'sticky' : ''}`}>
        <div className='main-headerone'>
        <div className='firstheader'>
          <div className="header-left">
          <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? (
            <Icon icon="mdi:close" className="close-icon" />
          ) : (
            <Icon icon="mdi:menu" className="hamburger-icon" />
          )}
        </button>
            <img src={gellogo} alt="Gelato" className="logo" />
          </div>
          <div className="header-mid">
        <button className='contactheader notdisplay'>
        <Icon icon='ri:headphone-fill' className="headphone-icon" /> 
          <p className='boldheader'>Contact Us</p>
        </button>
        <button className='contactheader lidrop notdisplay2'  onMouseEnter={() => toggleDropdown('INR')} onMouseLeave={() => toggleDropdown(null)}>
        <Icon icon='material-symbols:globe' className="globe-icon" />
        <p className='boldheader'>IN/INR</p>
        <Icon icon="mdi:chevron-down" className="dropdown-icon" />
              {activeDropdown === 'INR' && (
                <div className="inrdropdown">
                  <a href="#product1">INR 1</a>
                  <a href="#product2">INR 2</a>
                  <a href="#product3">INR 3</a>
                </div>)}
          </button>
        <button className='contactheader notdisplay2'>
        <Icon icon="mdi:cart-outline" className="globe-icon"  />
        <p className='boldheader'>Cart</p>
        </button>
        <button className='contactheader notdisplay'>
        <Icon icon="iconamoon:profile-fill" className="globe-icon"  />
        <p className='boldheader'>Sign in</p></button>
        <button className="cta-button ">Sign up for free</button>
        {/* <button className=""></button> */}
      </div>
         
          
        </div>
        </div>
        <div className="header-right">
            {isMenuOpen && (
              <div className="mobile-menu">
                <button className="close-button" onClick={toggleMenu}>
                  <Icon icon="mdi:close" className="close-icon" />
                </button>
                <div className="secondheader">
                  <nav>
                    <ul>
                      <li  className='lidrop' onMouseEnter={() => toggleDropdown('products')} onMouseLeave={() => toggleDropdown(null)}>
                        <p className='boldheader'>Products</p>
                        <Icon icon="mdi:chevron-down" className="dropdown-icon" />
                        {activeDropdown === 'products' && (
                          <div className="dropdown">
                            <a href="#product1">Product 1</a>
                            <a href="#product2">Product 2</a>
                            <a href="#product3">Product 3</a>
                          </div>
                        )}
                      </li>

                      <li className='lidrop' onMouseEnter={() => toggleDropdown('start-selling')} onMouseLeave={() => toggleDropdown(null)}>
                        <p className='boldheader'>Start Selling</p>
                        <Icon icon="mdi:chevron-down" className="dropdown-icon" />
                        {activeDropdown === 'start-selling' && (
                          <div className="dropdown">
                            <a href="#sell1">Sell 1</a>
                            <a href="#sell2">Sell 2</a>
                            <a href="#sell3">Sell 3</a>
                          </div>
                        )}
                      </li>

                      <li className='lidrop' onMouseEnter={() => toggleDropdown('tools')} onMouseLeave={() => toggleDropdown(null)}>
                        <p className='boldheader'>Tools and Apps</p>
                        <Icon icon="mdi:chevron-down" className="dropdown-icon" />
                        {activeDropdown === 'tools' && (
                          <div className="dropdown">
                            <a href="#tool1">Tool 1</a>
                            <a href="#tool2">Tool 2</a>
                            <a href="#tool3">Tool 3</a>
                          </div>
                        )}
                      </li>

                      <li className='lidrop'  onMouseEnter={() => toggleDropdown('pricing')} onMouseLeave={() => toggleDropdown(null)}>
                        <p className='boldheader'>Pricing</p>
                        <Icon icon="mdi:chevron-down" className="dropdown-icon" />
                        {activeDropdown === 'pricing' && (
                          <div className="dropdown">
                            <a href="#pricing1">Pricing 1</a>
                            <a href="#pricing2">Pricing 2</a>
                            <a href="#pricing3">Pricing 3</a>
                          </div>
                        )}
                      </li>

                      <li className='lidrop' onMouseEnter={() => toggleDropdown('resources')} onMouseLeave={() => toggleDropdown(null)}>
                        <p className='boldheader'>Resources</p>
                        <Icon icon="mdi:chevron-down" className="dropdown-icon" />
                        {activeDropdown === 'resources' && (
                          <div className="dropdown">
                            <a href="#resource1">Resource 1</a>
                            <a href="#resource2">Resource 2</a>
                            <a href="#resource3">Resource 3</a>
                          </div>
                        )}
                      </li>

                      <li className='lidrop'><p className='boldheader'>Pro Sellers</p></li>

                      <li className='lidrop' onMouseEnter={() => toggleDropdown('gelato-connect')} onMouseLeave={() => toggleDropdown(null)}>
                        <p className='boldheader'>GelatoConnect</p>
                        <Icon icon="mdi:chevron-down" className="dropdown-icon" />
                        {activeDropdown === 'gelato-connect' && (
                          <div className="dropdown">
                            <a href="#connect1">Connect 1</a>
                            <a href="#connect2">Connect 2</a>
                            <a href="#connect3">Connect 3</a>
                          </div>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          
          </div>
        <div className="peakmenu">
                <div className="peaksecondheader">
                  <nav>
                    <ul>
                      <li  className='peaklidrop' onMouseEnter={() => toggleDropdown('peakproducts')} onMouseLeave={() => toggleDropdown(null)}>
                        <p className='boldheader  peak'>Products</p>
                        <Icon icon="mdi:chevron-down" className="peakdropdown-icon" />
                        {activeDropdown === 'peakproducts' && (
                          <div className="peakdropdown">
                            <a href="#product1">Product 1</a>
                            <a href="#product2">Product 2</a>
                            <a href="#product3">Product 3</a>
                          </div>
                        )}
                      </li>

                      <li className='peaklidrop' onMouseEnter={() => toggleDropdown('peakstart-selling')} onMouseLeave={() => toggleDropdown(null)}>
                        <p className='boldheader  peak'>Start Selling</p>
                        <Icon icon="mdi:chevron-down" className="peakdropdown-icon" />
                        {activeDropdown === 'peakstart-selling' && (
                          <div className="peakdropdown">
                            <a href="#sell1">Sell 1</a>
                            <a href="#sell2">Sell 2</a>
                            <a href="#sell3">Sell 3</a>
                          </div>
                        )}
                      </li>

                      <li className='peaklidrop' onMouseEnter={() => toggleDropdown('peaktools')} onMouseLeave={() => toggleDropdown(null)}>
                        <p className='boldheader  peak'>Tools and Apps</p>
                        <Icon icon="mdi:chevron-down" className="peakdropdown-icon" />
                        {activeDropdown === 'peaktools' && (
                          <div className="peakdropdown">
                            <a href="#tool1">Tool 1</a>
                            <a href="#tool2">Tool 2</a>
                            <a href="#tool3">Tool 3</a>
                          </div>
                        )}
                      </li>

                      <li className='peaklidrop'  onMouseEnter={() => toggleDropdown('peakpricing')} onMouseLeave={() => toggleDropdown(null)}>
                        <p className='boldheader  peak'>Pricing</p>
                        <Icon icon="mdi:chevron-down" className="peakdropdown-icon" />
                        {activeDropdown === 'peakpricing' && (
                          <div className="peakdropdown">
                            <a href="#pricing1">Pricing 1</a>
                            <a href="#pricing2">Pricing 2</a>
                            <a href="#pricing3">Pricing 3</a>
                          </div>
                        )}
                      </li>

                      <li className='peaklidrop' onMouseEnter={() => toggleDropdown('peakresources')} onMouseLeave={() => toggleDropdown(null)}>
                        <p className='boldheader  peak'>Resources</p>
                        <Icon icon="mdi:chevron-down" className="peakdropdown-icon" />
                        {activeDropdown === 'peakresources' && (
                          <div className="peakdropdown">
                            <a href="#resource1">Resource 1</a>
                            <a href="#resource2">Resource 2</a>
                            <a href="#resource3">Resource 3</a>
                          </div>
                        )}
                      </li>

                      <li className='peaklidrop'><p className='boldheader  peak'>Pro Sellers</p></li>

                      <li className='peaklidrop' onMouseEnter={() => toggleDropdown('peakgelato-connect')} onMouseLeave={() => toggleDropdown(null)}>
                        <p className='boldheader  peak'>GelatoConnect</p>
                        <Icon icon="mdi:chevron-down" className="peakdropdown-icon" />
                        {activeDropdown === 'peakgelato-connect' && (
                          <div className="peakdropdown">
                            <a href="#connect1">Connect 1</a>
                            <a href="#connect2">Connect 2</a>
                            <a href="#connect3">Connect 3</a>
                          </div>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
      </div>
    </header>
  );
};

export default Header;