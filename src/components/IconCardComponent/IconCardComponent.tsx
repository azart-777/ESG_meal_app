import React from "react";
import Card from "./IconCard/IconCard";
import { Container } from "@mui/material";
import { card1, card2, card3 } from "./IconCardData";

export const IconCardComponent: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <div className='icon-card__list'>
        <Card {...card1}/>
        <Card {...card2}/>
        <Card {...card3}/>
      </div>
    </Container>
  );
};

