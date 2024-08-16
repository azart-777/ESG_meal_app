import React from "react";
import "./FooterSummary/Footer.scss";
import FooterSignature from "./FooterSummary/FooterSignature";
import FooterSocialMedia from "./FooterSummary/FooterSocialMedia";
import FooterList from "./FooterSummary/FooterList";
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
