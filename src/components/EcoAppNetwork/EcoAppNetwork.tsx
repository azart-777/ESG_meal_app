import React from 'react';
import "./EcoAppNetwork.scss";
import {
  Earth_phone,
  meal_count_phone,
  cheap_it_phone,
  eco_meal_phone
} from '../../assets/images/';

export const EcoAppNetwork: React.FC = () => {
  return (
    <div className="eco-app-network">
      <div className="eco-app-network__apps-container">
        <div className="eco-app-network__app eco-app-network__app--meal-count">
          <img 
            className="eco-app-network__app-image" 
            src={meal_count_phone}
            alt="Meal count" 
          />
        </div>
        <div className="eco-app-network__app eco-app-network__app--cheap-it">
          <img 
            className="eco-app-network__app-image" 
            src={cheap_it_phone} 
            alt="Cheap it" 
          />
        </div>
        <div className="eco-app-network__app eco-app-network__app--eco-meal">
          <img 
            className="eco-app-network__app-image" 
            src={eco_meal_phone} 
            alt="Eco meal" 
          />
        </div>
      </div>
      <div className="eco-app-network__globe">
        <img 
          className="eco-app-network__globe-image" 
          src={Earth_phone} 
          alt="Earth" 
        />
      </div>
    </div>
  );
};
