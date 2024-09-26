import React from 'react';
import "./EcoAppNetwork.scss";
import {
  Earth_phone,
  meal_count_phone,
  cheap_it_phone,
  eco_meal_phone,
  network_lines_center
} from '../../assets/images/';
import AppItem from './AppItem/AppItem';
import Firefly from './NetworkAnimation/Firefly';

export const EcoAppNetwork: React.FC = () => {
  return (
    <div className="eco-app-network">
      <div className="eco-app-network__apps-container">
        <AppItem 
          appImageSrc={meal_count_phone}
          appImageAlt="Meal count"
          linesImageSrc={network_lines_center}
          linesImageAlt="network_lines_left"
          appClass="eco-app-network__app--meal-count"
          linesClass="eco-app-network__network_lines_left"
        />
        <AppItem 
          appImageSrc={cheap_it_phone}
          appImageAlt="Cheap it"
          linesImageSrc={network_lines_center}
          linesImageAlt="network_lines_center"
          appClass="eco-app-network__app--cheap-it"
          linesClass="eco-app-network__network_lines_center"
        />
        <AppItem 
          appImageSrc={eco_meal_phone}
          appImageAlt="Eco meal"
          linesImageSrc={network_lines_center}
          linesImageAlt="network_lines_right"
          appClass="eco-app-network__app--eco-meal"
          linesClass="eco-app-network__network_lines_right"
        />
      </div>
      <div className="eco-app-network__globe">
        <img 
          className="eco-app-network__globe-image" 
          src={Earth_phone} 
          alt="Earth" 
        />        
      </div>
      <Firefly/>
    </div>
  );
};
