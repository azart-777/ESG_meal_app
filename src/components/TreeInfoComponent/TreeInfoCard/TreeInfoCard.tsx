import React from 'react';
import './TreeInfoCard.scss';
import { useTranslation } from 'react-i18next';

type Title = {
  main: string;
  sub?: string; // Підзаголовок є необов'язковим
};

type Section = {
  heading: string;
  subheading: string;
  items: string[];
};

type TreeInfoCardProps = {
  icon: string;
  title?: Title;
  sections: Section[];
  iconClass?: string;
};

const TreeInfoCard: React.FC<TreeInfoCardProps> = ({ icon, title, sections, iconClass }) => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <div className={'container'}>
      <div className={'container__border'}></div>
      <div className={`container__icon-placeholder ${iconClass}`}>
        <img src={icon} alt="Icon" />
        {title && (
          <h3>
            {title.main} <span>{title.sub}</span>
          </h3>
        )}
      </div>
      <div className={'container__content'}>
        {sections.map((section, index) => (
          <div key={index}>
            <h4>
              {t(section.heading)} <span>{t(section.subheading)}</span>
            </h4>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{t(item)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeInfoCard;

