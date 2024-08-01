import React from "react";
import Card from "./IconCard/IconCard";
import './IconCard/iconCardStyle.scss'
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import image1 from '../../assets/images/CheapItLogoName.png';
import image2 from '../../assets/images/MealCountLogoName.png';
import image3 from '../../assets/images/ecoMealMarketLogo.png';
import image4 from '../../assets/images/giftBox.png';

export const IconCardComponent: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);
  
  const cards = [
    { text: t('iconCardComponent.cardText1'), image: image1, imageFirst: true },
    { text: t('iconCardComponent.cardText2'), image: image2 },
    { text: t('iconCardComponent.cardText3'), image: image3, imageFirst: true },
    { text: t('iconCardComponent.cardText4'), image: image4 },  ];

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
