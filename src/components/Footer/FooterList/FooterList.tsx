import React from "react";
import "./FooterList.scss";
import { green_brush_background } from '../../../assets/images';
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
    <div className="footer-list">
      <div className="footer-list__background">
        <img src={green_brush_background} alt="" />
      </div>
      <div className="footer-list__content">
        <div className="footer-list__column footer-list__column--first">
          {sections.slice(0, 3).map((section, index) => (
            <ul key={index}>
              <li className="footer-list__title">{t(section.title)}</li>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="footer-list__link">{t(link)}</li>
              ))}
            </ul>
          ))}
        </div>
        <div className="footer-list__column footer-list__column--second">
          {sections.slice(3).map((section, index) => (
            <ul key={index}>
              <li className="footer-list__title">{t(section.title)}</li>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="footer-list__link">{t(link)}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterList;