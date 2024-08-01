import React from "react";
import Card from "./IconCard/IconCard";
import './IconCard/iconCardStyle.scss'
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import { 
  logo_Cheap_it_with_title, 
  logo_Meal_count_with_title, 
  logo_Meal_market_logo_with_title, 
  logo_Gift_box_logo_with_title 
} from '../../assets/images/';


export const IconCardComponent: React.FC = () => {
  const { t } = useTranslation(["pages/home-page"]);
  
  const cards = [
    { text: t('iconCardComponent.cardText1'), image: logo_Cheap_it_with_title, imageFirst: true },
    { text: t('iconCardComponent.cardText2'), image: logo_Meal_count_with_title },
    { text: t('iconCardComponent.cardText3'), image: logo_Meal_market_logo_with_title, imageFirst: true },
    { text: t('iconCardComponent.cardText4'), image: logo_Gift_box_logo_with_title },  ];

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
