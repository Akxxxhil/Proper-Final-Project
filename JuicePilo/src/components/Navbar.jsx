import React from 'react';
import './Navbar.css';
import appleImage from './apple.png';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="header">
        <img src={appleImage} alt="apple_image" />
      </div>
      <div className="middle">
        <div className="Home">Home</div>
        <div className="Features">Features</div>
        <div className="Menu">Menu</div>
        <div className="Pricing">Pricing</div>
        <div className="Contact">Contact</div>
      </div>
      <div className="footer">
        <label className='signupbutton' htmlFor="Signup">Sign up</label>
      </div>
    </div>
  );
}

export default Navbar;