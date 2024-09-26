import React from 'react';
import FireflyMotion from '../NetworkAnimation/FireflyMotion/FireflyMotion';
import { fireflyCoordinates } from '../NetworkAnimation/FireflyMotion/fireflyCoordinates';

const Firefly: React.FC = () => {
  return (
    <div className="fireflies-container">
      <FireflyMotion positions={fireflyCoordinates.positions1} duration={3}/>
      <FireflyMotion positions={fireflyCoordinates.positions2} duration={3}/>
      {/* <FireflyMotion positions={fireflyCoordinates.positions3} duration={2}/>
      <FireflyMotion positions={fireflyCoordinates.positions4} duration={2}/>
      <FireflyMotion positions={fireflyCoordinates.positions5} duration={2}/> */}
    </div>
  );
};

export default Firefly;
