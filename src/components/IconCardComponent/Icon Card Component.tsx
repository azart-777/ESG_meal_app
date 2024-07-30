import React from "react";
import Card from "./Card";
import './style/iconCardStyle.scss'
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import image1 from '../../assets/CHEAP IT Logo.png';
import image2 from '../../assets/MEAL COUNT Logo.png';
import image3 from '../../assets/ECO MEAL MARKET Logo.png';
import image4 from '../../assets/Reward logo.png';

export const IconCardComponent: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);
  
  const cards = [
    { text: t('IconCardComponent.cardText1'), image: image1, imageFirst: true },
    { text: t('IconCardComponent.cardText2'), image: image2 },
    { text: t('IconCardComponent.cardText3'), image: image3, imageFirst: true },
    { text: t('IconCardComponent.cardText4'), image: image4 },  ];

  return (
    <Container maxWidth="xl">
      <div className='icon-card__list'>
        {cards.map((card, index) => (
          <Card 
            key={index} 
            text={card.text} 
            image={card.image} 
            imageFirst={card.imageFirst} 
          />
        ))}
      </div>
    </Container>
  );
};
