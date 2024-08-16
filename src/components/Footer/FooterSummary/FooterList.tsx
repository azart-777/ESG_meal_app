import React from "react";
import "./FooterList.scss";
import { green_brush_background } from '../../../assets/images/';
import { useTranslation } from "react-i18next";

interface FooterListProps {
  sections: {
    title: string;
    links: string[];
  }[];
}

const FooterList: React.FC<FooterListProps> = ({ sections }) => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <div className="footer-text-container">
      <div className="footerList-background">
        <img src={green_brush_background} alt="" />
      </div>
      <div className="footerList-content">
      <div className="footerList-first">
        {sections.slice(0, 3).map((section, index) => (
          <ul key={index}>
            <li className="title-footer">{t(section.title)}</li>
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>{t(link)}</li>
            ))}
          </ul>
        ))}
      </div>
      <div className="footerList-second">
        {sections.slice(3).map((section, index) => (
          <ul key={index}>
            <li className="title-footer">{t(section.title)}</li>
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>{t(link)}</li>
            ))}
          </ul>
        ))}
      </div>
      </div>
    </div>
  );
};

export default FooterList;
