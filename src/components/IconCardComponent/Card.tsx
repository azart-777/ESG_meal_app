import React from 'react';
import './style/iconCardStyle.scss';

interface CardProps {
  text: string;
  image?: string;
  imageFirst?: boolean;
}

const Card: React.FC<CardProps> = ({ text, image = '', imageFirst = false }) => {
  const cardClass = imageFirst ? 'card card_image-first' : 'card';

  return (
    <div className={cardClass}>
      {image && (
        <div className='card__image-container'>
          <div className='card__background-image'></div>
          <div className='card__image'>
            <img src={image} alt="" />
          </div>
        </div>
      )}
      <div className='card__text'>
        <div className='card__text-border'></div>
        {text}
      </div>
    </div>
  );
};

export default Card;
