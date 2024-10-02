import React from 'react';
import FireflyMotion from './FireflyMotion';
import { fireflyCoordinates } from './fireflyCoordinates';

const Firefly: React.FC = () => {
  return (
    <div className="fireflies-container">
<FireflyMotion key="firefly1" positions={fireflyCoordinates.positions1} duration={3} />
<FireflyMotion key="firefly2" positions={fireflyCoordinates.positions2} duration={3} />
{/* <FireflyMotion key="firefly3" positions={fireflyCoordinates.positions3} duration={2} /> */}
      {/* <FireflyMotion positions={fireflyCoordinates.positions4} duration={2}/>
      <FireflyMotion positions={fireflyCoordinates.positions5} duration={2}/> */}
    </div>
  );
};

export default Firefly;