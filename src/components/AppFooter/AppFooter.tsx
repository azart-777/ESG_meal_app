import React from "react";
import "./AppFooter.scss";
import { icon_Apple,
  icon_Facebook,
  icon_Google,
  icon_Instagram,
  icon_Linkedin,
  icon_map,
} from "../../assets/images";


export const AppFooter: React.FC = () => {
  
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <p>&copy;2024. Cheap-IT Family</p>
          <p>Privacy Policy</p>
          <p>
            <img src={icon_map} alt="icom_map" />Made in Ukraine</p>
        </div>
        <div className="footer__social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={icon_Facebook} alt="Facebook" className="footer__icon" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={icon_Apple} alt="App Store" className="footer__icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={icon_Instagram} alt="Instagram" className="footer__icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={icon_Linkedin} alt="LinkedIn" className="footer__icon" />
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src={icon_Google} alt="Google Play" className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  );

};

export default AppFooter;
