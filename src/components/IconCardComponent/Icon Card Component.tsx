import React from "react";
import Card from "./Card";
import './style/iconCardStyle.scss'

import image1 from '../../assets/CHEAP IT Logo.png';
import image2 from '../../assets/MEAL COUNT Logo.png';
import image3 from '../../assets/ECO MEAL MARKET Logo.png';
import image4 from '../../assets/Reward logo.png';

export const IconCardComponent: React.FC = () => {
  const cards = [
    { text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, voluptatem. Sed quaerat quas eveniet cum voluptatibus temporibus eius in sit ea animi tenetur enim illum beatae, autem repellat explicabo voluptate!', image: image1,imageFirst: true },

    { text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, voluptatem. Sed quaerat quas eveniet cum voluptatibus temporibus eius in sit ea animi tenetur enim illum beatae, autem repellat explicabo voluptate!', image: image2 },

    { text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, voluptatem. Sed quaerat quas eveniet cum voluptatibus temporibus eius in sit ea animi tenetur enim illum beatae, autem repellat explicabo voluptate!', image: image3, imageFirst: true },
    
    { text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, voluptatem. Sed quaerat quas eveniet cum voluptatibus temporibus eius in sit ea animi tenetur enim illum beatae, autem repellat explicabo voluptate!', image: image4 },
  ];

  return (
    <div className='cardList'>
      {cards.map((card, index) => (
        <Card 
          key={index} 
          text={card.text} 
          image={card.image} 
          imageFirst={card.imageFirst} 
        />
      ))}






    </div>
  );
};
