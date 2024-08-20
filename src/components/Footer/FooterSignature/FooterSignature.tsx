import React from "react";
import "./FooterSignature.scss";
import { logo_Sonik_technology } from '../../../assets/images/';

const FooterSignature: React.FC = () => {
  return (
    <div className="footer-signature">
      <div className="footer-signature__text">&#169;2024, ALL RIGHT RESERVED</div>
      <div className="footer-signature__text">MADE IN UKRAINE</div>
      <div className="footer-signature__logo">
        <img src={logo_Sonik_technology} alt="Sonik Technology Logo" />
      </div>
    </div>
  );
};

export default FooterSignature;
