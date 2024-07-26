import React from 'react';
import './style/iconCardStyle.scss';

interface CardProps {
  text: string;
  image?: string;
  imageFirst?: boolean;
}

const Card: React.FC<CardProps> = ({ text, image = '', imageFirst = false }) => {
  const cardStyle = {
    '--image-first': imageFirst ? 'row-reverse' : 'row',
  } as React.CSSProperties;

  return (
    <div className='card' style={cardStyle}>
      {image && (
        <div className='cardImageContainer'>
          <div className='backgroundCardImage'></div>
            <div className='cardImage'>
              <img src={image} alt="" />
            </div>
        </div>
      )}
      <div className='cardText'>

        <div className='cardTextBorder'></div>

        {text}
      </div>
    </div>
  );
};

export default Card;
