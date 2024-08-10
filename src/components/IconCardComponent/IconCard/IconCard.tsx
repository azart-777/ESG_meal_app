import React from 'react';
import './IconCardStyle.scss';
import { useTranslation } from 'react-i18next';
interface CardProps {
  icon: string;
  textArray: string[];
  styleVariant: number
}

const Card: React.FC<CardProps> = ({ icon, textArray, styleVariant }) => {
  const { t } = useTranslation(["pages/home-page"]);

  return (
    <div className={`scroll-section variant-${styleVariant}`}>
      <div className={"fixed-icon"}>
        <img src={icon} alt="Icon" />
      </div>
      <div className={"scroll-cards"}>
        {textArray.map((text, index) => (
          <div key={index} className={'card__text'}>
            <p>{t(text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;







