import React from "react";
import "./FooterSignature.scss"
import { logo_Sonik_technology } from '../../../assets/images/';

const FooterSignature: React.FC = () => {
  return (
    <div className="footer-create-by">
      <div className="create-by-text">&#169;2024, ALL RIGHT RESERVED</div>
      <div className="create-by-text">MADE IN UKRAINE</div>
      <div className="logo-Sonic">
        <img src={logo_Sonik_technology} alt="Sonik Technology Logo" />
      </div>
    </div>
  );
};

export default FooterSignature;
