import React from 'react'
import './treeInfoCard.scss';

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
  return (
    <div className='container'>
      <div className="card__border"></div>
      <div className={`icon_placeholder ${iconClass}`}>
        <img src={icon} alt="Icon" />
        {title && (
          <h3>
            {title.main} <span>{title.sub}</span>
          </h3>
        )}
      </div>
      <div className='content'>
        {sections.map((section, index) => (
          <div key={index}>
            <h4>
              {section.heading} <span>{section.subheading}</span>
            </h4>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeInfoCard;