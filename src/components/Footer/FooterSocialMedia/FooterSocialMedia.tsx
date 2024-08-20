import React from "react";
import './FooterSocialMedia.scss'
import { 
    icon_Apple,
    icon_Facebook,
    icon_Google,
    icon_Instagram,
    icon_Web
} from '../../../assets/images';

const FooterSocialMedia: React.FC = () => {
  return (
    <div className="footer-social-media">
      <div className="footer-social-media__text">Join us</div>
      <div className="footer-social-media__icon footer-social-media__icon--apple">
        <img src={icon_Apple} alt="Apple"/>
      </div>
      <div className="footer-social-media__icon footer-social-media__icon--facebook">
        <img src={icon_Facebook} alt="Facebook"/>
      </div>
      <div className="footer-social-media__icon footer-social-media__icon--google">
        <img src={icon_Google} alt="Google"/>
      </div>
      <div className="footer-social-media__icon footer-social-media__icon--instagram">
        <img src={icon_Instagram} alt="Instagram"/>
      </div>
      <div className="footer-social-media__icon footer-social-media__icon--web">
        <img src={icon_Web} alt="Web"/>
      </div>
    </div>
  );
};

export default FooterSocialMedia;
