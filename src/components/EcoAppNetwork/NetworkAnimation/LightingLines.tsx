import React from 'react';
import './LightingLines.scss';
import LightingLinesContainer from './LinesContainer/LightingLinesContainer';

const LightingLines: React.FC = () => {
  // SVG paths simulating circuit lines
  const paths = [
    "M10 10 L100 10 L100 100 L150 100",    // Example of circuit-like line
    "M200 50 L250 50 L250 150 L300 150",    // Another path
    "M50 300 L150 300 L150 400 L200 400",   // More complex path
  ];

  return (
    <div className="lines-container">
      {/* Rendering lines with different paths and durations */}
      {paths.map((path, index) => (
        <LightingLinesContainer key={index} path={path} duration={index + 2} />
      ))}
    </div>
  );
};

export default LightingLines;
