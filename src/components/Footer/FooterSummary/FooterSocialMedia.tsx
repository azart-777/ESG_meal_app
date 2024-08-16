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
    <div className="social-media">
      <div className="social-media-text">Join us</div>
      <div className="icon-Apple"><img src={icon_Apple} alt="Apple" /></div>
      <div className="icon-Facebook"><img src={icon_Facebook} alt="Facebook" /></div>
      <div className="icon-Google"><img src={icon_Google} alt="Google" /></div>
      <div className="icon-Instagram"><img src={icon_Instagram} alt="Instagram" /></div>
      <div className="icon-Web"><img src={icon_Web} alt="Web" /></div>
    </div>
  );
};

export default FooterSocialMedia;
