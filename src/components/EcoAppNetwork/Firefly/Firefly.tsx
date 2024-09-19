import React from 'react';
import FireflyMotion from './FireflyMotion/FireflyMotion';
import { fireflyCoordinates } from './FireflyMotion/fireflyCoordinates';

const Firefly: React.FC = () => {
  return (
    <div className="fireflies-container">
      <FireflyMotion positions={fireflyCoordinates.positions1} duration={3}/>
      <FireflyMotion positions={fireflyCoordinates.positions2} duration={3}/>
      <FireflyMotion positions={fireflyCoordinates.positions3} duration={2}/>
    </div>
  );
};

export default Firefly;
