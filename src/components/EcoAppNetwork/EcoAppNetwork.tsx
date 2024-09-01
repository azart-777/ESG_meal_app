import React from 'react';
import "./EcoAppNetwork.scss";
import {
  Earth_phone,
  meal_count_phone,
  cheap_it_phone,
  eco_meal_phone
} from '../../assets/images/'


export const EcoAppNetwork: React.FC = () => {
  return (
    <div className="eco-app-network">
      <div className="apps">
        <div className="apps">
          <img src={meal_count_phone} alt='Meal count' />
        </div>
        <div className="apps">
          <img src={cheap_it_phone} alt='Cheap it'/>
        </div>
        <div className="apps">
          <img src={eco_meal_phone} alt='Eco meal'/>
        </div>        
      </div>
      <div className="globe">
        <img src={Earth_phone} alt="Earth" />
      </div>
    </div>
  );
}
