import React from 'react';
import './AppItem.scss';

interface AppItemProps {
  appImageSrc: string;
  appImageAlt: string;
  linesImageSrc: string;
  linesImageAlt: string;
  appClass: string;
  linesClass: string;
}

const AppItem: React.FC<AppItemProps> = ({ 
  appImageSrc, 
  appImageAlt, 
  linesImageSrc, 
  linesImageAlt, 
  appClass, 
  linesClass 
}) => {
  return (
    <div className={`eco-app-network__app ${appClass}`}>
      <img 
        className="eco-app-network__app-image" 
        src={appImageSrc} 
        alt={appImageAlt} 
      />
      <img 
        className={linesClass} 
        src={linesImageSrc} 
        alt={linesImageAlt} 
      />
    </div>
  );
};

export default AppItem;
