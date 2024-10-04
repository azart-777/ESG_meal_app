import React from 'react';
import { appItems } from './AppItem/dataAppItems'; // Імпорт даних
import AppItem from './AppItem/AppItem';
import "./EcoAppNetwork.scss";

import {
   Earth_phone,
} from '../../assets/images/';

export const EcoAppNetwork: React.FC = () => {
  return (
    <div className="eco-app-network">
      <div className="eco-app-network__apps-container">
      {appItems.map((item) => (
        <AppItem 
          appImageSrc={item.appImageSrc} 
          appImageAlt={item.appImageAlt} 
          linesImageSrc={item.linesImageSrc} 
          linesImageAlt={item.linesImageAlt} 
          appClass={item.appClass} 
          linesClass={item.linesClass} 
        />
      ))}
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