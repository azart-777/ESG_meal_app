import React from 'react';
import "./AnimationCircuit.scss";

export const AnimationCircuit: React.FC = () => {
  return (

    <div className='allLines'>
      <div className='firstLine'>
        <div className="firstLinehorLoaderOne"></div>
        <div className="firstLinevertLoaderOne"></div>
        <div className="firstLinehorLoaderTwo"></div>
        <div className="firstLineverLoaderTwo"></div>
        <div className="firstLinehorLoaderThree"></div>
      </div>
    </div>


  );
};
