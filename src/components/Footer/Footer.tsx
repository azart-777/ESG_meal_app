import React from "react";
import "./style/Footer.scss"

import { 
  logo_Sonik_technology,
  logo_Sun_footer,
  green_brush_background
} from '../../assets/images/';

const Footer: React.FC = () => {
  
  return (
    <footer>


    <div className="footer-container">

      <div className="social-media">
        <img src={logo_Sun_footer} alt="SonikTechnologyLogo" />
        </div>

        <div className="footer-background-container">
          <img src={green_brush_background} alt="" />
        </div>
          <div className="footer-text-container">
            <div className="footerList-first">
            <ul>
          <li className="title-footer">Meny</li>
          <li>Home</li>
          <li>For Client</li>
          <li>For Business</li>
          <li>Our Partners</li>
          <li>About Us</li>
        </ul>
        <ul>
          <li className="title-footer">Support</li>
          <li>Contact Us</li>
          <li>FAQ clients</li>
          <li>FAQ business</li>
          <li>FAQ partners</li>
        </ul>
        <ul>
          <li className="title-footer">Agreement</li>
            <li>Privacy Policy</li>
              <li className="PP-detail">Business</li>
              <li className="PP-detail">Clients</li>
              <li className="PP-detail">Partners</li>
          <li>Teams & Conditions</li>
        </ul>
            </div>
        <div className="footerList-second">
        <ul>
          <li className="title-footer">Map</li>
          <li>Ukraine</li>
        </ul>
        <ul>
          <li className="title-footer">Price & Subscriptions</li>
          <li>Subscriptions plans</li>
        </ul>
        <ul>
          <li className="title-footer">Media</li>
            <li>Materials for media</li>
        </ul>


        </div>
        
      </div>
      </div>
      
      <div className="footer-create-by">
        <div className="create-by-container">2024,ALL RIGHT RESERVED</div>
        <div className="create-by-container">MADE IN UKRAINE</div>
        <div><img src={logo_Sonik_technology} alt="SonikTechnologyLogo" />
        </div>
      </div>
      

    </footer>
  );
};

export default Footer;
