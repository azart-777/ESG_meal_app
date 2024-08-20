import React from "react";
import "./Footer.scss";
import FooterSocialMedia from "./FooterSocialMedia/FooterSocialMedia";
import FooterList from "./FooterList/FooterList";
import FooterSignature from "./FooterSignature/FooterSignature";
import { footerSections } from "./FooterData";

export const Footer: React.FC = () => {
  
  return (
    <footer>
        <div className="footer-container">
          <FooterSocialMedia />
          <FooterList sections={footerSections} />
        </div>
      <FooterSignature />
    </footer>
  );
};

export default Footer;
